import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Tree intervention spots in Vysočany
const TREE_SPOTS = [
    {
        id: 'spot-1',
        name: 'Podkovářská',
        location: [50.109842, 14.508937],
        marker: '/projects/trees/markers/repa1.png',
        description: 'Near Podkovářská street'
    },
    {
        id: 'spot-2',
        name: 'Tram line',
        location: [50.109558, 14.506912],
        marker: '/projects/trees/markers/repa2.png',
        description: 'Near tram line'
    },
    {
        id: 'spot-3',
        name: 'K Žižkovu',
        location: [50.110242, 14.503395],
        marker: '/projects/trees/markers/repa3.png',
        description: 'Near K Žižkovu'
    },
    {
        id: 'spot-4',
        name: 'Podkovářská South',
        location: [50.109500, 14.508080],
        marker: '/projects/trees/markers/repa4.png',
        description: 'Near Podkovářská, south'
    },
];

// Create beetroot icon for each spot
const createBeetrootIcon = (markerUrl) => {
    return L.icon({
        iconUrl: markerUrl,
        iconSize: [50, 50],
        iconAnchor: [25, 25],
        popupAnchor: [0, -25],
        className: 'beetroot-marker'
    });
};

// Map center (Vysočany area where interventions happened)
const MAP_CENTER = [50.109800, 14.506500];
const DEFAULT_ZOOM = 16;

function TreesMap() {
    return (
        <div className="trees-map-container">
            <MapContainer
                center={MAP_CENTER}
                zoom={DEFAULT_ZOOM}
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={false}
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; OpenStreetMap &copy; CARTO'
                />
                {TREE_SPOTS.map((spot) => (
                    <Marker
                        key={spot.id}
                        position={spot.location}
                        icon={createBeetrootIcon(spot.marker)}
                    >
                        <Tooltip>
                            <strong>{spot.name}</strong><br />
                            {spot.description}
                        </Tooltip>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

export default TreesMap;
