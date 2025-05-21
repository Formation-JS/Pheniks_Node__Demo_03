/** @type {import('jest').Config} */

const config = {
  // Précise à Jest d'utiliser ts-jest pour les fichiers .ts et .tsx
  preset: 'ts-jest', 
  
  // Environnement de test
  testEnvironment: 'node', 
  
  // Patterns pour trouver les fichiers de test
  testMatch: [
    "**/__tests__/**/*.ts",
    "**/?(*.)+(spec|test).ts"
  ],

  // Module file extensions pour les fichiers à traiter par Jest
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};

export default config;