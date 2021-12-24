const taskModel = require('../models/task');


const getAllTasks = function(req, res) {
    res.send('get all items');
};

const createTask = async (req, res) => {

    const task = await taskModel.create(req.body);
    res.status(201).json(task);
};
const getTask = (req, res) => {
    res.json({id: req.params.id});
};
const updateTask = (req, res) => {
    res.send('update a task');
};
const deleteTask = (req, res) => {
    res.send('delete a task');
};


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};
