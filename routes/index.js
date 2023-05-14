const express = require('express');
const router = express.Router();
const  Question  = require("../models/questions");

router.use('/api', require('./api/index'));
router.get('/',  async function(req, res){
    let Q = await Question.find({ })
    return res.json(Q);
})

module.exports = router;