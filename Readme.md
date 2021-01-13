<h1 align="center">Welcome to NodepopJS 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

> API to upload buy and sell articles.

### 🏠 [Homepage](http://localhost:3000)

### ✨ [Demo](http://localhot:3000)

## Install

```sh
npm install
```

## Load inital database

To load the initial database, run the following command in your Terminal
```sh
npm run initDB
```

## Usage

```sh
npm run start
```

## Development start

```sh
npm run dev
```

## API Methods
### List of all adverts

GET / api/adverts

<< Example expected of JSON >>
[
  {
  "tags": [
  "mobile",
  "work"
],
"_id": "5ffd9a82d2a7011c761b3d35",
"name": "IphoneX",
"onsale": true,
"price": 850,
"photo": "iphoneX.jpg",
"__v": 0
},
{
  "tags": [
  "lifestyle"
],
"_id": "5ffd9a82d2a7011c761b3d36",
"name": "Snow Table",
"onsale": false,
"price": 200,
"photo": "table.jpg",
"__v": 0
},
]

## How to start a local mongoDB instance for development

```sh
./bin/mongod --dbpath ./data/db --directoryperdb
```

## Author

👤 **Jonathan Rodríguez**

- Website: https://github.com/Jrod-DEV
- Github: [@Jrod-DEV](https://github.com/Jrod-DEV)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
