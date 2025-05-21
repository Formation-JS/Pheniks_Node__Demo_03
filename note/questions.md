# Questions ?

## Objectif des matieres vues
Bases (prérequis) : 
 - Html/CSS
 - JS & TS 

Finalités : 
 - Frontend: React
 - Backend: Express (NodeJS)

Choix entre JS & TS
 - En fct du projet
 - Prévoir une réunion

## Veille technologique (possible)
- Git: Outils de gestion de projet (versionning + travail d'equipe)
- Docker: Mise en place de conteneur de l'application
  - Virtualisation de l'environnement du projet (Sans OS)
  - Pré-configuration 
  - https://docs.docker.com/reference/samples/express/
- Mise en place de multi-environnement
  - Workflow (Exemple: GitHub Action, Azure Pipelines)
  - Test / Staging / Prod

## Architecture de projet
Simple :
- Application Frontend (React)
- Serveur Backend (API RestFull - Express)
  - Authentification en JWT
- Database (PostgreSQL)

Avec Proxy : 
- Application Frontend (React)
- Server Web (Proxy - Express)
  - Cacher des clefs API
  - Gestion de session
- Serveur Backend (API RestFull - Express)
  - Authentification en JWT
- Database (PostgreSQL)

Simple avec un serveur dédié à l'auth:
- Application Frontend (React)
- Serveur d'authentification (Google, Azure Entra, ...)
- Serveur Backend (API RestFull - Express)
- Database (PostgreSQL)