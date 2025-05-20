# Format de réponse par l'api

## Simple
On envoi les données "dto"
- Object
```
{
	"id": 1,
	"name": "Exemple",
	"desc": "Ceci est un exemple",
	"price": 42,
	"inStock": true,
	"createAt": "2025-05-19T14:30:00.000Z"
}
```
- Collection
```
[
	{
		"id": 1,
		"name": "Exemple",
		"price": 42
	},
	{
		"id": 2,
		"name": "Ajout !",
		"price": 422
	}
]
```

## "Avancé"
Ajout un format de réponse adapté en fonction du type de la requete
- Object
```
{
  status: 'OK',
  result: { data }
}
```
- Collection
{
  status: 'OK',
  results: [ {data1}, {data2} ],
  count: 50
}