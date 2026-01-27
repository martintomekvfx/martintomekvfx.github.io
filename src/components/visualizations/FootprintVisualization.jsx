import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as d3 from 'd3';

const CATEGORY_COLORS = {
  advertising: '#FF5252',
  analytics: '#7C4DFF',
  social: '#2196F3',
  content: '#4CAF50',
  fingerprinting: '#FF9800',
  cryptomining: '#F44336',
  unknown: '#9E9E9E',
};

const DEMO_TRACKERS = [
  { company: 'Google', category: 'advertising', domains: ['doubleclick.net', 'google-analytics.com', 'googlesyndication.com'] },
  { company: 'Facebook', category: 'social', domains: ['facebook.com', 'fbcdn.net', 'connect.facebook.net'] },
  { company: 'Amazon', category: 'advertising', domains: ['amazon-adsystem.com', 'amazonaws.com'] },
  { company: 'Microsoft', category: 'analytics', domains: ['clarity.ms', 'bing.com'] },
  { company: 'Twitter', category: 'social', domains: ['twitter.com', 'twimg.com'] },
  { company: 'Adobe', category: 'analytics', domains: ['demdex.net', 'omtrdc.net'] },
  { company: 'Criteo', category: 'advertising', domains: ['criteo.com', 'criteo.net'] },
  { company: 'AppNexus', category: 'advertising', domains: ['adnxs.com'] },
  { company: 'Taboola', category: 'advertising', domains: ['taboola.com'] },
  { company: 'Outbrain', category: 'advertising', domains: ['outbrain.com'] },
  { company: 'Hotjar', category: 'analytics', domains: ['hotjar.com'] },
  { company: 'Segment', category: 'analytics', domains: ['segment.io', 'segment.com'] },
  { company: 'Pinterest', category: 'social', domains: ['pinterest.com', 'pinimg.com'] },
  { company: 'LinkedIn', category: 'social', domains: ['linkedin.com', 'licdn.com'] },
  { company: 'TikTok', category: 'social', domains: ['tiktok.com', 'tiktokcdn.com'] },
];

const DEMO_SITES = [
  'news-site.com', 'shopping-store.com', 'social-app.com', 'blog-platform.com',
  'video-streaming.com', 'travel-booking.com', 'recipe-site.com', 'sports-news.com',
];

const BASS_COMPANIES = ['google', 'facebook', 'meta', 'amazon', 'microsoft', 'apple', 'doubleclick'];

function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function createAudioEngine() {
  let audioContext = null;
  let masterGain = null;

  function ensureContext() {
    if (!audioContext) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      audioContext = new Ctx();
      masterGain = audioContext.createGain();
      masterGain.gain.value = 0.25;
      masterGain.connect(audioContext.destination);
    }
    return audioContext;
  }

  async function resume() {
    const ctx = ensureContext();
    if (ctx.state !== 'running') {
      await ctx.resume();
    }
  }

  function isBassCompany(label) {
    const s = (label || '').toLowerCase();
    return BASS_COMPANIES.some(c => s.includes(c));
  }

  function playNode(node) {
    const ctx = ensureContext();
    if (!masterGain) return;

    const now = ctx.currentTime;
    const label = node?.company || node?.domain || node?.id || 'unknown';
    const h = hashString(String(label));
    const r = (h % 1000) / 1000;

    const out = ctx.createGain();
    out.connect(masterGain);

    const attack = 0.008 + r * 0.04;
    const decay = 0.08 + r * 0.25;

    out.gain.setValueAtTime(0.0001, now);
    out.gain.exponentialRampToValueAtTime(1.0, now + attack);
    out.gain.exponentialRampToValueAtTime(0.0001, now + attack + decay);

    const bass = isBassCompany(label);

    if (bass) {
      const baseFreq = 45 + (h % 25);
      const main = ctx.createOscillator();
      const sub = ctx.createOscillator();

      main.type = 'sine';
      sub.type = 'sine';

      main.frequency.setValueAtTime(baseFreq, now);
      sub.frequency.setValueAtTime(baseFreq * 0.5, now);

      const mg = ctx.createGain();
      mg.gain.value = 0.55;
      const sg = ctx.createGain();
      sg.gain.value = 0.45;

      main.connect(mg);
      sub.connect(sg);
      mg.connect(out);
      sg.connect(out);

      main.start(now);
      sub.start(now);
      main.stop(now + attack + decay);
      sub.stop(now + attack + decay);
    } else {
      const freq = 800 + (h % 2400);
      const o1 = ctx.createOscillator();
      const o2 = ctx.createOscillator();

      o1.type = 'sawtooth';
      o2.type = 'square';

      o1.frequency.setValueAtTime(freq, now);
      o2.frequency.setValueAtTime(freq * 1.414, now);

      const g1 = ctx.createGain();
      const g2 = ctx.createGain();
      g1.gain.value = 0.45;
      g2.gain.value = 0.25;

      o1.connect(g1);
      o2.connect(g2);
      g1.connect(out);
      g2.connect(out);

      o1.start(now);
      o2.start(now);
      o1.stop(now + attack + decay);
      o2.stop(now + attack + decay);
    }
  }

  return { resume, playNode };
}

export default function FootprintVisualization({ width = 800, height = 600, autoPlay = true, soundEnabled = true }) {
  const svgRef = useRef(null);
  const simulationRef = useRef(null);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [stats, setStats] = useState({ sites: 0, trackers: 0, requests: 0 });
  const nodesRef = useRef([]);
  const edgesRef = useRef([]);
  const nodeMapRef = useRef(new Map());
  const intervalRef = useRef(null);

  const initGraph = useCallback(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const zoomGroup = svg.append('g').attr('class', 'zoom-group');
    const edgeGroup = zoomGroup.append('g').attr('class', 'edges');
    const nodeGroup = zoomGroup.append('g').attr('class', 'nodes');

    const zoom = d3.zoom()
      .scaleExtent([0.3, 3])
      .on('zoom', (event) => {
        zoomGroup.attr('transform', event.transform);
      });

    svg.call(zoom);

    const simulation = d3.forceSimulation()
      .force('link', d3.forceLink().id(d => d.id).distance(80).strength(0.4))
      .force('charge', d3.forceManyBody().strength(-200))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(d => getRadius(d) + 10))
      .on('tick', () => {
        edgeGroup.selectAll('line')
          .attr('x1', d => d.source.x)
          .attr('y1', d => d.source.y)
          .attr('x2', d => d.target.x)
          .attr('y2', d => d.target.y);

        nodeGroup.selectAll('g')
          .attr('transform', d => `translate(${d.x},${d.y})`);
      });

    simulationRef.current = { simulation, nodeGroup, edgeGroup, svg };

    // Add user node
    const userNode = {
      id: 'user',
      type: 'user',
      x: width / 2,
      y: height / 2,
      fx: width / 2,
      fy: height / 2,
    };
    nodesRef.current = [userNode];
    nodeMapRef.current.set('user', userNode);
    edgesRef.current = [];

    updateGraph();
  }, [width, height]);

  function getRadius(node) {
    if (node.type === 'user') return 12;
    if (node.type === 'site') return 6;
    return Math.min(8 + (node.connectionCount || 1) * 2, 35);
  }

  function getColor(node) {
    if (node.type === 'user') return '#666666';
    if (node.type === 'site') return '#000000';
    if (node.category) return CATEGORY_COLORS[node.category] || '#9E9E9E';
    return '#9E9E9E';
  }

  function updateGraph() {
    if (!simulationRef.current) return;

    const { simulation, nodeGroup, edgeGroup } = simulationRef.current;

    // Update edges
    const edgeSel = edgeGroup.selectAll('line').data(edgesRef.current, d => d.id);
    edgeSel.exit().remove();
    edgeSel.enter()
      .append('line')
      .attr('stroke', '#ccc')
      .attr('stroke-width', d => Math.min(1 + Math.log(d.weight + 1), 3));

    // Update nodes
    const nodeSel = nodeGroup.selectAll('g').data(nodesRef.current, d => d.id);
    nodeSel.exit().remove();

    const nodeEnter = nodeSel.enter()
      .append('g')
      .attr('class', 'node');

    nodeEnter.append('circle')
      .attr('r', d => getRadius(d))
      .attr('fill', d => getColor(d))
      .attr('stroke', '#333')
      .attr('stroke-width', 1);

    nodeEnter.filter(d => d.type === 'tracker')
      .append('text')
      .attr('dy', d => getRadius(d) + 14)
      .attr('text-anchor', 'middle')
      .attr('font-size', '10px')
      .attr('fill', '#333')
      .text(d => d.company?.slice(0, 12) || '');

    // Update existing
    nodeSel.select('circle')
      .attr('r', d => getRadius(d));

    simulation.nodes(nodesRef.current);
    simulation.force('link').links(edgesRef.current);
    simulation.alpha(0.3).restart();
  }

  function addEvent() {
    const siteIndex = Math.floor(Math.random() * DEMO_SITES.length);
    const site = DEMO_SITES[siteIndex];

    // Add site if new
    if (!nodeMapRef.current.has(site)) {
      const siteNode = {
        id: site,
        type: 'site',
        domain: site,
        x: width / 2 + (Math.random() - 0.5) * 100,
        y: height / 2 + (Math.random() - 0.5) * 100,
        connectionCount: 1,
      };
      nodesRef.current.push(siteNode);
      nodeMapRef.current.set(site, siteNode);

      setStats(s => ({ ...s, sites: s.sites + 1 }));

      if (soundEnabled && audioRef.current) {
        audioRef.current.playNode(siteNode);
      }
    }

    // Add tracker
    const tracker = DEMO_TRACKERS[Math.floor(Math.random() * DEMO_TRACKERS.length)];
    const trackerId = tracker.company;

    if (!nodeMapRef.current.has(trackerId)) {
      const trackerNode = {
        id: trackerId,
        type: 'tracker',
        company: tracker.company,
        category: tracker.category,
        x: width / 2 + (Math.random() - 0.5) * 150,
        y: height / 2 + (Math.random() - 0.5) * 150,
        connectionCount: 1,
      };
      nodesRef.current.push(trackerNode);
      nodeMapRef.current.set(trackerId, trackerNode);

      setStats(s => ({ ...s, trackers: s.trackers + 1 }));

      if (soundEnabled && audioRef.current) {
        audioRef.current.playNode(trackerNode);
      }
    } else {
      const existing = nodeMapRef.current.get(trackerId);
      existing.connectionCount = (existing.connectionCount || 1) + 1;
    }

    // Add edge from site to tracker
    const edgeId = `${site}->${trackerId}`;
    const existingEdge = edgesRef.current.find(e => e.id === edgeId);
    if (existingEdge) {
      existingEdge.weight++;
    } else {
      edgesRef.current.push({
        id: edgeId,
        source: site,
        target: trackerId,
        weight: 1,
      });
    }

    setStats(s => ({ ...s, requests: s.requests + 1 }));
    updateGraph();
  }

  const startSimulation = useCallback(() => {
    if (intervalRef.current) return;

    if (soundEnabled) {
      audioRef.current = createAudioEngine();
      audioRef.current.resume();
    }

    setIsPlaying(true);
    intervalRef.current = setInterval(() => {
      addEvent();
    }, 300 + Math.random() * 400);
  }, [soundEnabled]);

  const stopSimulation = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsPlaying(false);
  }, []);

  const resetSimulation = useCallback(() => {
    stopSimulation();
    nodesRef.current = [];
    edgesRef.current = [];
    nodeMapRef.current.clear();
    setStats({ sites: 0, trackers: 0, requests: 0 });
    initGraph();
  }, [initGraph, stopSimulation]);

  useEffect(() => {
    initGraph();
    if (autoPlay) {
      const timeout = setTimeout(startSimulation, 1000);
      return () => clearTimeout(timeout);
    }
  }, [initGraph, autoPlay, startSimulation]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div style={{ position: 'relative', width, height, background: '#fff', borderRadius: 8, overflow: 'hidden' }}>
      <svg
        ref={svgRef}
        width={width}
        height={height}
        style={{ display: 'block' }}
      />
      
      {/* Stats overlay */}
      <div style={{
        position: 'absolute',
        top: 12,
        left: 12,
        background: 'rgba(255,255,255,0.9)',
        padding: '8px 12px',
        borderRadius: 4,
        fontFamily: 'monospace',
        fontSize: 12,
        border: '1px solid #ccc',
      }}>
        <div><strong>Sites:</strong> {stats.sites}</div>
        <div><strong>Trackers:</strong> {stats.trackers}</div>
        <div><strong>Requests:</strong> {stats.requests}</div>
      </div>

      {/* Controls */}
      <div style={{
        position: 'absolute',
        bottom: 12,
        left: 12,
        display: 'flex',
        gap: 8,
      }}>
        <button
          onClick={isPlaying ? stopSimulation : startSimulation}
          style={{
            padding: '6px 12px',
            background: isPlaying ? '#f44336' : '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          {isPlaying ? 'Stop' : 'Start'}
        </button>
        <button
          onClick={resetSimulation}
          style={{
            padding: '6px 12px',
            background: '#666',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
