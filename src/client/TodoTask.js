const mongoose = require('mongoose');

const todoTaskSchema = new mongoose.Schema({
    username: String,
    password: String,
    task: [
        {
                taskItem: String,
                highlight: {type: Boolean, default: false},
                identifier: Number,
        
        }],
    subTask: [
        {
            pointer: Number,
            tasks: Array,
        },


        // const task = [{taskItem: "Sell my laptop", highlight: false, identifier: 1},
        // {taskItem: "Pack for vacation to SF", highlight: false, identifier: 2},
        // {taskItem: "Study for graduation assessment", highlight: false, identifier: 3},
        // ];
        // const subtask = [{pointer: 1, tasks:['Look up current value of computer', 'Create ad and post to craigslist']}, 
        // {pointer: 2, tasks: ["Do laundry and choose clothes", "Go shopping for travel items", "Buy plane ticket"]}];


    ]
})

const todo = mongoose.model('todo', todoTaskSchema);

module.exports = todo;

