var express = require('express')
var router = express.Router();
var studentsDB = require('./studentsDB')

router.use((req,res,next)=>{
    res.set('Access-Control-Allow-Origin', '*');
    console.log(req.url)
    next()
})

router.route('/')
    .get((req, res)=>{
            res.send('Welcome to my first project')
        })

router.route('/students')
    .get((req, res)=>{
            
            res.send(studentsDB)
        })

module.exports = router