const taskModel = require('../models/task');
const asyncWrapper = require('../middlewares/async');
const { createCustomError } = require('../errors/custom-error');

const getAllTasks = asyncWrapper (async (req, res) => {
    const task = await taskModel.find({});
    res.status(200).json(task);
});

const createTask = asyncWrapper (async (req, res) => {
    const task = await taskModel.create(req.body);
    res.status(201).json(task);
});

const getTask = asyncWrapper (async (req, res, next) => {
    const { id:taskId } = req.params;
    const task = await taskModel.findOne({_id: taskId});

    if (!task) {
        //const error = new Error('Not Found');
        //error.status = 404;
        //return next(error); // goes to errorHanlderMiddleware
        return next(createCustomError(`No task with id: ${taskId}`, 404));
        //return res.status(404).json({msg: `No task with id: ${taskId}`});
    }
    res.status(200).json(task);
});

const deleteTask = asyncWrapper (async (req, res) => {
    const {id: taskId} = req.params;
    const task = await taskModel.findByIdAndDelete({_id: taskId});
    if (!task) {
        return next(createCustomError(`No task with id: ${taskId}`, 404));
    }
    //res.status(200).send();
    res.status(200).json(task);
});

const updateTask = asyncWrapper (async (req, res) => {
    const {id: taskId} = req.params;
    const task = await taskModel.findByIdAndUpdate({_id: taskId}, req.body, {
        new: true,
        runValidators: true
    });

    if (!task) {
        return next(createCustomError(`No task with id: ${taskId}`, 404));
    }
    res.status(200).json(task);
});

const editTask = asyncWrapper (async (req, res) => {
    const {id: taskId} = req.params;
    const task = await taskModel.findByIdAndUpdate({_id: taskId}, req.body, {
        new: true,
        runValidators: true,
        overwrite: true
    });

    if (!task) {
        return next(createCustomError(`No task with id: ${taskId}`, 404));
    }
    res.status(200).json(task);
});


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    editTask,
};
