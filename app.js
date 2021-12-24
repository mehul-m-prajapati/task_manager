const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

app.use(express.static(__dirname + '/public/'));

// middlewares
app.use(express.json()); // to have data in req.body

// routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/views", '/index.html'));
});

app.use('/api/v1/tasks', tasks);

// app.get('/api/v1/tasks') - get all tasks
// app.post('/api/v1/tasks') - create a new task
// app.get('/api/v1/tasks/:id') - get a single task
// app.patch('/api/v1/tasks/:id') - update a task
// app.delete('/api/v1/tasks/:id') - delete a task

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);         
        // Start the web server
        app.listen(port, () => {
            console.log(`Listening on port:${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();

