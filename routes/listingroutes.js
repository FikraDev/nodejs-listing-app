const express = require('express');
const Proplist = require('../model/listing')

const router  = express.Router();



//ALl ROUTES

router.get('/',(req, res)=>{
    res.render('index', {title:'Yaad Listing | Home'})
})

router.get('/all-listings', (req, res)=>{
    Proplist.find()
    .then((result)=>{
        res.render('all-listings', {title:'Yaad Listing | All', home: result})
    })
    .catch((err) => { console.log(err)});
})

router.get('/details', (req, res)=>{
    res.render('details', {title:'Yaad Listing | Details'})
})




//export routes
module.exports = router;