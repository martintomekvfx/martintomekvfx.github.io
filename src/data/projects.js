// Portfolio Projects - Main Index
// ================================
// Each project has its own file for easy editing.
// See src/data/projects/{category}/*.js
//
// Categories:
// - guerilla: Guerilla art interventions
// - shortfilms: Short films and video works
// - analog: Physical/analog projects
// - gamejam: Game jam projects
// - collective: Collaborative projects

// Import from category indexes
import { guerillaProjects } from './projects/guerilla/index.js';
import { shortfilmsProjects } from './projects/shortfilms/index.js';
import { analogProjects } from './projects/analog/index.js';
import { gamejamProjects } from './projects/gamejam/index.js';
import { collectiveProjects } from './projects/collective/index.js';

// Re-export for use in components
export { guerillaProjects, shortfilmsProjects, analogProjects, gamejamProjects, collectiveProjects };

// Combined list of all projects
export const allProjects = [
  ...guerillaProjects,
  ...shortfilmsProjects,
  ...analogProjects,
  ...gamejamProjects,
  ...collectiveProjects,
];

// Utility functions
export const getProjectById = (id) => {
  return allProjects.find(project => project.id === id);
};

export const getProjectsByCategory = (category) => {
  return allProjects.filter(project => project.category === category);
};

export const getProjectsByStatus = (status) => {
  return allProjects.filter(project => project.status === status);
};

// Category metadata
export const categoryLabels = {
  guerilla: 'Guerilla',
  shortfilms: 'Short Films',
  analog: 'Analog',
  gamejam: 'Game Jam',
  collective: 'Collective',
};

export const categoryDescriptions = {
  guerilla: 'Intervence ve veřejném prostoru, tactical urbanism, street art',
  shortfilms: 'Krátké filmy a videoeseje',
  analog: 'Fyzická tvorba, VJing, analogová fotografie, objekty',
  gamejam: 'Herní projekty z game jamů a experimentální hry',
  collective: 'Kolaborativní projekty a společná tvorba',
};
