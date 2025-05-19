# Demo 02 - WebAPI

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
  /routes
    index.ts
    product.route.ts
    member.route.ts
  /services
    product.service.ts
    member.service.ts
  app.ts
  config.json
.gitignore
package.json
package-lock.json
readme.md
```