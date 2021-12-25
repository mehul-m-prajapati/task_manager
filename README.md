### Task manager app
- In order to run the project, setup .env and set MONGO_URI variable equal to DB connection string.
- In order to avoid port collisions, default port value is 4000

### CRUD APIs :)
```
GET /api/v1/tasks - get all tasks
λ curl -X GET http://localhost:4000/api/v1/tasks
[{"_id":"61c613db8ea7ff56f5b69c92","name":"here is my power","completed":true},{"_id":"61c6257f4a0218993173464e","name":"test","completed":false,"__v":0}]

POST /api/v1/tasks - create a new task
λ curl -H "Content-Type: application/json" -d "{\"name\":\"my new task\"}" http://localhost:4000/api/v1/tasks
{"name":"my new task","completed":false,"_id":"61c670e2d66d99f2b285a870","__v":0}

GET /api/v1/tasks/:id - get a single task
λ curl -X GET http://localhost:4000/api/v1/tasks/61c670e2d66d99f2b285a870
{"_id":"61c670e2d66d99f2b285a870","name":"my new task","completed":false,"__v":0}

PATCH /api/v1/tasks/:id - update a task
λ curl --request PATCH http://localhost:4000/api/v1/tasks/61c670e2d66d99f2b285a870 -H "Content-Type: application/json" -d "{\"name\":\"testing\"}"
{"_id":"61c670e2d66d99f2b285a870","name":"testing","completed":false,"__v":0}

DELETE /api/v1/tasks/:id - delete a task
λ curl --request DELETE http://localhost:4000/api/v1/tasks/61c670e2d66d99f2b285a870
{"_id":"61c670e2d66d99f2b285a870","name":"testing","completed":false,"__v":0}
```

### Run local server
```
MONGO_URI=<mongo server URL> node app.js
```
