const express = require('express');

const router  = express.Router();



//ALl ROUTES

router.get('/',(req, res)=>{
    res.render('index', {title:'Yaad Listing | Home'})
})

router.get('/all-listings', (req, res)=>{
    res.render('all-listings', {title:'Yaad Listing | All'})
})

router.get('/details', (req, res)=>{
    res.render('details', {title:'Yaad Listing | Details'})
})




//export routes
module.exports = router;