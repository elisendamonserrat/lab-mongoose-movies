const express = require('express');

const Celebrity = require('../models/celebrity');

const router = express.Router();

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => res.render('celebrities/index', { celebrities }))
    .catch(error => next(error));
});

//Create a New Celebrity
router.get('/celebrities/new', (req, res) => {
  res.render("celebrities/new");
});

router.post('/celebrities', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({name, occupation, catchPhrase})
   .then((newCelebrity) => console.log(`A new celebrity has been created, his/her name is ${newCelebrity.name}`))
   .then(() => res.redirect("/celebrities"))
   .catch(error => next(error));
})

//Celebrities Details Page
router.get('/celebrities/:id', (req, res, next) => {
  const { id } = req.params;

  Celebrity.findById(id)
    .then(celebrity => {
      console.log(celebrity);
      res.render('celebrities/show', { celebrity });
    })
    .catch(error => next(error));
});

module.exports = router;
