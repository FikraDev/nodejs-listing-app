const express = require("express");
const Proplist = require("../model/listing");
var ObjectId = require("mongoose").ObjectId;

const router = express.Router();

//Get Routes

router.get("/", (req, res) => {
  res.render("index", { title: "Yaad Listing | Home" });
});

router.get("/all-listings", (req, res) => {
  Proplist.find()
    .then((result) => {
      res.render("all-listings", {
        title: "Yaad Listing | All-Listings",
        home: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/details", (req, res) => {
  res.render("details", { title: "Yaad Listing | Details" });
});

router.get("/add-listing", (req, res) => {
  res.render("add-listing", { title: "Yaad Listing | Add a Listing" });
});

router.get("/details/:id", (req, res) => {
  const id = req.params.id;

  Proplist.findById(id)
    .then((result) => {
      res.render("details", { result, title: "Yaad | Details Page" });
    })
    .catch((err) => {
      console.log(err);
    });
});

//Post Routes

router.post("/add-listing", async (req, res) => {
  const listing = new Proplist(req.body);

  listing
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete('/delete-listing/:id', (req, res)=>{
  Proplist.deleteOne({_id: req.params.id})
  .then(()=>{res.status(200).json({message: 'Deleted!!'})})
  .then(res.redirect('/'))
  .catch((error)=>{
    res.status(400).json({error: error})
  })
})

//export routes
module.exports = router;
