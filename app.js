const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;
const tasks = require('./routes/tasks');

app.use(express.static(__dirname + '/public/'));

// middlewares
app.use(express.json()); // to have data in req.body

// routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/views", '/index.html'));
});

app.use('/api/v1/tasks', tasks);

// Start the web server
app.listen(port, () => {
    console.log(`Listening on port:${port}`)
});
