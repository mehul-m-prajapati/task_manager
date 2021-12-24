const getAllTasks = function(req, res) {
    res.send('get all items');
};

const createTask = (req, res) => {
    res.json(req.body);
};
const getTask = (req, res) => {
    res.send('get a task');
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
