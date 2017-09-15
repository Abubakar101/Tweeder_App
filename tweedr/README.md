# Welcome to the Tweedr API!

To get the Tweedr API set up, you know the drill.

- Install dependencies
- Create database (`tweedr_dev`)
- Run seed & migration
- Start the server!

## Endpoints

### GET `/api/tweeds`

Returns all tweeds in database.

```json
{
"message": "ok",
  "data": {
    "tweeds": [
      {
        "id": "1",
        "tweed_text": "Hello World!",
        "tweed_time": "1494788500041"
      },
      {
        "id": "2",
        "tweed_text": "I love using Tweedr... so much better than twitter.",
        "tweed_time": "1494788543350"
      },
      {
        "id": "3",
        "tweed_text": "React is the best!",
        "tweed_time": "1494788564011"
      },
      {
        "id": "4",
        "tweed_text": "testing tweed upload",
        "tweed_time": "1494792188509"
      }
    ]
  }
}
```

### GET `/api/tweeds/:id`

Returns information about one specific tweed.

```json
{
  "message": "ok",
  "data": {
    "tweed": {
      "id": "1",
      "tweed_text": "Hello World!",
      "tweed_time": "1494788500041"
    }
  }
}
```

### POST `/api/tweeds`

Adds a tweed to the database. Request body must include a `tweed` property. Refer back to the [LECTURE](https://git.generalassemb.ly/wdi-nyc-dresselhaus/react-form-input-lecture/blob/master/quotes-form-end/src/App.js) on how to create apost request using axios.

The response looks like this:

```json
{
  "message": "ok",
  "data": {
    "tweed": {
      "id": "5",
      "tweed_text": "makin that tweed",
      "tweed_time": "1494793073028"
    }
  }
}
```
