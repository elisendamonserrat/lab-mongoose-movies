const express = require('express');

const Celebrity = require("../models/celebrity");

const router  = express.Router();

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
   .then(celebrities => res.render("celebrities/index", { celebrities }))
   .catch(error => next(error))
});

router.get("/celebrities/:id", (req, res, next) => {
  const { id } = req.params;

  Celebrity.findById(id)
    .then(celebrity => {
      console.log(celebrity)
      res.render("celebrities/show", { celebrity })
    })
    .catch(error => next(error))
})



module.exports = router;