
const express = require('express');
const router = express.Router();
const {createRegister} = require('../controllers/registro')

router
  .post('/', createRegister)


module.exports=router