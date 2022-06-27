const mongoose = require('mongoose');

const todoTaskSchema = new mongoose.Schema({
    username: String,
    password: String,
    task: [
        {
            taskItem: /*name of task*/ { 
                type: String, 
                highlight: Boolean, 
                identifier: Number },
            subTask: [
                {
                    subTaskItem: /*name of subtask */ { 
                        pointer: Number,
                        type: String, 
                        tasks: Array },
                }],
        }],
})

const todo = mongoose.model('todo', todoTaskSchema);

module.exports = mongoose.model('TodoTask, todoTaskSchema');

