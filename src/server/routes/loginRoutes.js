const express = require('express');
const loginController = require('../controllers/loginController');

const loginRouter = express.Router();

// userRouter.get('/', loginController.createUser, (req, res, next) => {
//   return res.status(200).json(res.locals.user);
// })

loginRouter.post('/main', loginController.createUser, (req, res, next) => {
    return res.status(200).json(res.locals.user);
})

