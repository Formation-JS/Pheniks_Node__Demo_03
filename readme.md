# Demo 03 - WebAPI avec PostgreSQL

## Utilisation de TS
https://nodejs.org/en/learn/typescript/introduction  \
Solution choisi : Utilisation d'un runner TS

### Installation du Runner TS
Dans le terminal
```
npm i tsx -D
```

### Ajouter le fichier "tsconfig.json"
- Soit en se basant sur l'exemple du site [tsx](https://tsx.is/typescript#tsconfig-json)
- Soit via la commande "tsc --init" de typescript
```
npm i typescript -D
npx tsc --init
```

### Lancer le serveur
Dans le terminal
```
npx tsx src/app.ts
```

Dans le package.json
```
"scripts": {
  "start": "tsx src/app.ts",
  "dev": "tsx watch src/app.ts"
},
```
Et utiliser la commande : « npm start » ou « npm run dev »


## Initialisation du projet
Installer les dépendences
```
npm i express
npm i -D @types/express @types/node
```


## Structure du projet
```
/node_module
/src
  /@types
    product.d.ts
    member.d.ts
  /controllers
    product.controller.ts
    member.controller.ts
  /dto
    product.dto.ts
    member.dto.ts
  /middlewares
  /routes
    index.ts
    product.route.ts
    member.route.ts
  /services
    product.service.ts
    member.service.ts
  /validators
    product.validator.ts
    member.validator.ts
  app.ts
  config.json
.gitignore
package.json
package-lock.json
readme.md
```

### Description 
- route : Lien entre la requete et la méthode à déclancher
- controller : Résponsable de traitement de la requete et la réponse
- service : Traitement metier et acces aux données
- dto : Objet de "sortie". Permet d'apadter l'objet de la réponse et de cacher des champs
- validator: Valider les donnée d'entrée

### Cheminement d'une requete
1) App recoit la requete
2) Utilisation des routes pour obtenir la méthode des controllers
3) Execution du code du controller
   - Traitement (via les services)
   - Envoi de la réponse


## Mise en place de la DB

### Solution possible (Adapté à PostgreSQL)
- Package natif \
  [Repo](https://github.com/brianc/node-postgres)  \
  [Documentation](https://node-postgres.com/)  \
- ORM
  - Sequelize _(Projet JS)_
  - TypeORM _(Projet TS)_
  - Prisma _(Projet TS)_

### Installation de « TypeORM »

- Installation des packages
```
npm i typeorm reflect-metadata pg
npm i -D @types/node
```

- Configuration dans le "tsconfig.json"
```
"emitDecoratorMetadata": true,
"experimentalDecorators": true,
```

- Dans le fichier "app.ts" ajouter :
```
import "reflect-metadata";
```

### Mise en place d'un modele en TypeORM
Class avec le décorateur @Entity, celle ci peut contenir : 
 - Un identifier avec @PrimaryGeneratedColumn ou @PrimaryColumn
 - Une colonne avec @Column
 - ...