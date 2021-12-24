const taskModel = require('../models/task');


const getAllTasks = async (req, res) => {
    try {
        const task = await taskModel.find({});
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json(error);
    }
};

const createTask = async (req, res) => {
    try {
        const task = await taskModel.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json(error);
    }
};

const getTask = async (req, res) => {
    try {
        const { id:taskId } = req.params;
        const task = await taskModel.findOne({_id: taskId});

        if (!task) {
            return res.status(404).json({msg: `No task with id: ${taskId}`});
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteTask = async (req, res) => {

    try {
        const {id: taskId} = req.params;
        const task = await taskModel.findByIdAndDelete({_id: taskId});
        if (!task) {
            return res.status(404).json({msg: `No task with id: ${taskId}`});
        }
        //res.status(200).send();
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json(error);
    }
};

const updateTask = async (req, res) => {

    try {
        const {id: taskId} = req.params;
        const task = await taskModel.findByIdAndUpdate({_id: taskId}, req.body, {
            new: true,
            runValidators: true
        });

        if (!task) {
            return res.status(404).json({msg: `No task with id: ${taskId}`});
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json(error);
    }
};

const editTask = async (req, res) => {

    try {
        const {id: taskId} = req.params;
        const task = await taskModel.findByIdAndUpdate({_id: taskId}, req.body, {
            new: true,
            runValidators: true,
            overwrite: true
        });

        if (!task) {
            return res.status(404).json({msg: `No task with id: ${taskId}`});
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json(error);
    }
};


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    editTask,
};
