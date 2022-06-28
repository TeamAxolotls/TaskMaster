const express = require('express');
const dbRouter = express.Router();
const mongoose = require('mongoose');

// don't think we need this
// const { db } = require('../../client/TodoTask.js');



// import controllers for getting data from mongo db. 
const dbControllers = require('../controllers/dbControllers.js');

// toDo list routes
// is main the correct uri?
dbRouter.post('/', dbControllers.createTodoTask, (req, res, next) => {
  // on request, send the parsed data to the database. 
  return res.status(200).json(res.locals.todoTask);
})
//redirect to new page 

// what is the right uri to retrieve tasks for a specific user?
// would it still be user or would it be todolist?
// might be /main/user/:todolist

dbRouter.get('/', dbControllers.getTodoAll, (req, res, next) => {
  return res.status(200).json(res.locals.todolist);
})

// dbRouter.put('/:taskName', dbControllers.editTodoTask, (req, res, next) => {
//   return res.status(200).json(res.locals.taskName);
//   })


//   const outgoing = {
//     // username: userID,
//     newTask: userInput

// }
// fetch ('http://localhost:3000/main', {
//     method: 'PUT',
//     headers: {'Content-Type': 'application/json'},
//     body: outgoing
// })
//   .then (res =>{
//     console.log(res)
//   })



// dbRouter.delete('/:taskName', dbControllers.editTodoTask, (req, res, next) => {
//   return res.status(200).json(res.locals.taskName);
// })

module.exports = dbRouter;
