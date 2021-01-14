<h1 align="center">Welcome to NodepopJS 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> API REST to upload purchase and sale items to a database and consume it from any platform in JSON format.

### 🏠 [Homepage](http://localhost:3000)

### ✨ [Demo](http://localhot:3000)

## Install

```sh
npm install
```

## How to start a local mongoDB instance for development

```sh
./bin/mongod --dbpath ./data/db --directoryperdb
```

## Load inital database

To load the initial database, run the following command in your Terminal
```sh
npm run initDB
```
**Warning!** Tris script will delete database contents before the load.
**Use it in production only in the first deployment.**

## Usage

```sh
npm run start
```

## Development Start

```sh
npm run dev
```

## API Methods
### List of all adverts

GET --> /api/adverts

**An example of an expected response in JSON format.**

```
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
```

## Get an advert
GET --> /api/adverts/_id
- Example: http://localhost:3000/api/adverts/5ffeb60f3ab3af260d351b45
```
{
  "result": {
    "tags": [
      "mobile",
      "work"
      ],
    "_id": "5ffeb60f3ab3af260d351b45",
    "name": "IphoneX",
    "onsale": true,
    "price": 850,
    photo": "iphoneX.jpg",
   "__v": 0
   }
}
```

### Create an advert

POST --> /api/adverts
- Example: http://localhost:3000/api/adverts/
* body: { name: 'Jeep', price: 4500, onsale: true, ... }
```
{
    "result": {
        "tags": [],
        "_id": "5ffec6f6bb78932c9e6243af",
        "name": "Jeep",
        "onsale": true,
        "price": 4500,
        "photo": "jeep.jpg",
        "__v": 0
    }
}
```

### Update an advert
PUT -> /api/adverts/<_id>
- Example: http://localhost:3000/api/adverts/5ffec6f6bb78932c9e6243af
* body: { price: 5000 }

````
{
    "result": {
        "tags": [],
        "_id": "5ffec6f6bb78932c9e6243af",
        "name": "Jeep",
        "onsale": true,
        "price": 5000,
        "photo": "jeep.jpg",
        "__v": 0
    }
}
````

### Delete an advert
DELETE -> /api/adverts/<_id>
- Example: http://localhost:3000/api/adverts/5ffec6f6bb78932c9e6243af

````
Returns: 'HTTP Code 2000'
Message on console: 'Advert deleted succesfully!'
````

### Paginated Results
```
- After a request for all ads, we will get a paginated result of 10 in 10 ads.

-  We can modify the page limit by changing the limit value in the request, in this example the limit is 4.

http://localhost:3000/api/adverts?limit=4&skip=0

```

### Apply search filters
We can apply four different search filters:
- name: http://localhost:3000/api/adverts?name=Super+Bike
```
[
  {
    "tags": [
      "motor",
      "lifestyle"
    ],
    "_id": "6000a39df385c8396f484de5",
    "name": "Super Bike",
    "onsale": true,
    "price": 5000,
    "photo": "moto.jpg",
   "__v": 0
  }
]
```
- tag: http://localhost:3000/api/adverts?tag=motor
```
[
  {
    "tags": [
      "motor",
      "lifestyle"
    ],
    "_id": "6000a39df385c8396f484de5",
    "name": "Super Bike",
    "onsale": true,
    "price": 5000,
    "photo": "moto.jpg",
    "__v": 0
  },
  {
    "tags": [
      "motor",
      "lifestyle"
    ],
    "_id": "6000a39df385c8396f484de6",
    "name": "Mustang GT",
    "onsale": true,
    "price": 32000,
    "photo": "mustang.jpg",
    "__v": 0
  }
]
```
- onsale: http://localhost:3000/api/adverts?onsale=false
```
[
  {
    "tags": [
      "lifestyle"
    ],
    "_id": "6000a39df385c8396f484de4",
    "name": "Snow Table",
    "onsale": false,
    "price": 200,
    "photo": "table.jpg",
    "__v": 0
  }
]
```
- price range


## Author

👤 **Jonathan Rodríguez**

- Website: https://github.com/Jrod-DEV
- Github: [@Jrod-DEV](https://github.com/Jrod-DEV)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
