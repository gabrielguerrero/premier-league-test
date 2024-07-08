## Fixture API

### Overview
Faux API call to return Fixture information.

Endpoint: https://pl-uks-devops-interview-test-api.azurewebsites.net/

If you have struggle connecting to the above for whatever reason, feel free to run the API locally via [the API package](../../api/README.md).

------------------------------------------------------------------------------------------

<details>
 <summary><code>GET</code> <code><b>/</b></code> <code>(Get all fixtures)</code></summary>

##### Responses

> | http code | content-type                      | response             |
> |-----------|-----------------------------------|----------------------|
> | `200`     | `application/json`                | A array of Fixtures. |


##### Example cURL

> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data @post.json https://pl-uks-devops-interview-test-api.azurewebsites.net/
> ```

</details>


<details>
 <summary><code>GET</code> <code><b>/{fixtureId}</b></code> <code>(Get fixture by ID)</code></summary>

##### Parameters

> | name        |  type     | data type      | description             |
> |-------------|-----------|----------------|-------------------------|
> | `fixtureId` |  required | int ($int64)   | The specific fixture ID |

##### Responses

> | http code | content-type                      | response           |
> |-----------|-----------------------------------|--------------------|
> | `200`     | `application/json`                | An single fixture. |
> | `404`     | `application/json`                | {"statusCode":404,"message":"Not Found"}              |

##### Example cURL

> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data @post.json https://pl-uks-devops-interview-test-api.azurewebsites.net/1
> ```

</details>
