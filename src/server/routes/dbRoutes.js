const express = require('express');
const dbRouter = express.Router();
const mongoose = require('mongoose');

// don't think we need this
// const { db } = require('../../client/TodoTask.js');


// does this go here or in main?
// mongoose.connect('');

// import controllers for getting data from mongo db. 
const dbControllers = require('../controllers/dbControllers.js');

// toDo list routes
// is main the correct uri?
dbRouter.post('/main', dbControllers.createTodoTask, (req, res, next) => {
  // on request, send the parsed data to the database. 
  return res.status(200).json(res.locals.todoTask);
})

// what is the right uri to retrieve tasks for a specific user?
// would it still be user or would it be todolist?
// might be /main/user/:todolist
dbRouter.get('/main', dbControllers.getTodoAll, (req, res, next) => {
  return res.status(200).json(res.locals.todolist);
})

dbRouter.put('/main/:taskName', dbControllers.editTodoTask, (req, res, next) => {
  return res.status(200).json(res.locals.taskName);
})

dbRouter.delete('/main/:taskName', dbControllers.editTodoTask, (req, res, next) => {
  return res.status(200).json(res.locals.taskName);
})

module.exports = dbRouter;
