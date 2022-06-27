// require in the schema for the database. 
const dbModel = require('../../client/TodoTask.js');


// login controller

const loginController = {
    //create new user in the database
    //their info will be sent in the req body 
    //this should send the created user 
    createUser(req, res, next) {
      const {username, password} = req.body;
      dbModel.create({ username, password })
      .then((data) => {
          res.locals.user = data;
          return next();
        })
        .catch(err => {
          return next({
            log: 'ERROR',
            message: 'Unable to create new user. Make sure you entered a valid username and password.'
          })
        })
    }
}

module.exports = loginController;