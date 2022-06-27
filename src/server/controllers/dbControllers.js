// require in database schema
const dbModel = require('../../client/TodoTask.js');
// require mongoose
const mongoose = require('mongoose');



const manageToDo = {

  // parent toDo controller
  // it would be nice to have one crud method for lists, list items, and sub lists and sub list items.
  // for now, making seperate methods. 
  createTodoTask(req, res, next) {
    
    // Q: how to destructure nested items in db?
    // A: destructure just mimics object structure. 
    const { task: [ { taskItem: {type: todoName, highlight, identifier} } ] } = req.body;

    // nested destructure test: WORKING
    // console.log(type)
    // console.log(highlight)
    // console.log(identifier)

    // is this needed? No
    const newTask = {
      todoName,
      highlight,
      identifier,
    };

    // create new task in database.
    // access properties on taskItem in database. 
    dbModel.create({ todoName, highlight, identifier })
    .then((data) => {
      res.locals.todoTask = data;
      return next();
    })
    .catch((err => {
      return next({
        log: 'ERROR: createTodo', 
        message: 'Unable to create new todo list.'
      })
    }));
  },

  createSubTask(req, res, next) {
    // waiting to see if can be combined with task before coding. 
    // destructure sub task
    const { task: [ { subTask: [ { subTaskItem: { pointer, type, tasks: subTasks } } ] }]} = req.body;
  },

  // retrieve entire todo list for user
  getTodoAll(req, res, next) {
    // destructure all items in tasks array that were received on req.params.
    // do we need to spread these? 
    const { task: todolist } = req.body;
    // retrieve all task items, so use find
    // do we want to retrieve individually so that whole list doesn't rerender every time?
    dbModel.find({ todolist })
    // do we need to parse this data?
    .then((data) => {
      // store data on response.locals object.
      res.locals.todolist = data;
      return next();
    })
    .catch(err => {
      return next({
        log: 'ERROR: getTodo',
        message: 'Unable to find todo list'
      })
    })
  },

  editTodoTask(req, res, next) {
    // destructure task
    //taskName is alias for taskItem
    // <<<!!!>>> make sure taskName is alias variable name that points to edited value, not existing property on taskItem. 
    const { task: [ { taskItem: taskName } ] } = req.body;

    // update task in database
    dbModel.updateOne({ taskItem: taskName })
    .then((data) => {
      // send task to be updated on response locals object. 
      res.locals.taskName = data;
      return next();
    })
    .catch(err => {
      return next({
        log: 'ERROR: editTask',
        message: 'Failed to edit task.'
      })
    })
  },

  delTodoTask(req, res, next) {

    const { task: [ { taskItem: taskName } ] } = req.body;

    dbModel.deleteOne({ taskName })
      .then((data) => {
        // send taskName on response locals object.
        res.locals.taskName = data;
        return next();
      })
      .catch(err => {
        next({
          log: 'ERROR: delTodoTask',
          message: 'Failed to delete task.'
        })
      })
  }
}

module.exports = manageToDo;

