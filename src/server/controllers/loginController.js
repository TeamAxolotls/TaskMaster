// require in the schema for the todo list. 
const todoModel = require('../../client/TodoTask.js');



// login controller

const LoginController = {
    //create new user in the database
    //their info will be sent in the req ody 
    //this should send the created user 
    createUser(req, res, next) {
      const {username, password} = req.body;
      user.create({ username, password })
      .then((data) => {
          res.locals.user = data;
          return next();
        })
    }
}