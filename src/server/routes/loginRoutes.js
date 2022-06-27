const express = require('express');
const loginController = require('../controllers/loginController');

const loginRouter = express.Router();

// userRouter.get('/', loginController.createUser, (req, res, next) => {
//   return res.status(200).json(res.locals.user);
// })
//3000/main/
loginRouter.post('/', loginController.createUser, (req, res, next) => {
    return res.status(200).json(res.locals.user);
})

module.exports = loginRouter;