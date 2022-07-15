const express = require('express');
const Proplist = require('../model/listing')

const router  = express.Router();



//ALl ROUTES

//Get Routes

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

router.get('/add-listing', (req, res)=>{
    res.render('add-listing', {title:'Yaad Listing | Add a Listing'})
})

//Post Routes

router.post('/add-listing', async (req, res)=>{
    const listing = new Proplist(req.body);

    listing.save()
    .then((result)=>{
        res.redirect('/')
    })
    .catch((err) =>{
        console.log(err)
    })  
});


//export routes
module.exports = router;