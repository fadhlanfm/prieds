Prerequisites:
- node.js v12.18.3,
- npm 6.14.6,
- mongoDB shell v4.4.1,

Installation:
- Clone this repo
- npm install
- npm start

## Endpoint Documentation
- [POST /queues/:counter](#post-queuescounter)
- [POST /visitors](#post-visitors)
- [GET /visitors](#get-visitors)

You can import Prieds.postman_collection.json to your Postman

> ## POST /queues/:counter

Generate queue number

You can set counter from A to Z

Counter will be automatically set to A if blank

### Response
```json
{
    "queueNumber": "A008",
    "timestamp": "05/08/2021, 4:44:12PM",
    "_id": "60965d6c3c910c4714b4d733",
    "counter": "A",
    "number": "008"
}
```

> ## POST /visitors

Add new visitor
### Request Body
```json
{
    "name": "Fadhlan",
    "city": "Tangerang",
    "address": "Alam Sutera",
    "npwp": "124928398247",
    "contact": "085928247"
}
```

### Response
```json
{
    "message": "New visitor has been added",
    "newVisitorData": {
        "name": "Fadhlan",
        "city": "Tangerang",
        "address": "Alam Sutera",
        "npwp": "124928398247",
        "contact": "085928247",
        "_id": "609665beee2f763d30f0f072"
    }
}
```

> ## GET /visitors

Add new visitor
### Request Param
```
limit: num (limit data per page)
page: num (page that you want to access)
```

### Response
```json
{
    "total": 3,
    "limit": 1,
    "page": 2,
    "data": [
        {
            "_id": "609665aa21a1e70d34135136",
            "name": "Fadhlan",
            "city": "Tangerang",
            "address": "Alam Sutera",
            "npwp": "124928398247",
            "contact": "085928247"
        }
    ]
}
```