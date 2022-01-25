const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength : 1,
        trim: true
    },
    _listId: {
        type: mongoose.Types.ObjectId, // We'll know which lists belongs to.
        required: true
    }
})

const Task = mongoose.Model('Task', TaskSchema);
module.exports = {
    Task
}