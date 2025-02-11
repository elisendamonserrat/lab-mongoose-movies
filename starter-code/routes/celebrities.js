const express = require('express');

const Celebrity = require('../models/celebrity');

const router = express.Router();

//List all Celebrities
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => res.render('celebrities/index', { celebrities }))
    .catch(error => next(error));
});

//Create a New Celebrity
router.get('/celebrities/new', (req, res) => {
  res.render("celebrities/new");
});

router.post('/celebrities', (req, res, next) => {
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

//Deleting a Celebrity
router.post("/celebrities/:id/delete", (req, res, next) => {
  const { id } = req.params;

  Celebrity.findByIdAndDelete(id)
   .then(deletedCelebrity => console.log(`A celebrity has been deleted, his/her name was ${deletedCelebrity.name}`))
   .then(() => res.redirect('/celebrities'))
   .catch(error => next(error));
})

//Editing Celebrities
router.get('/celebrities/:id/edit', (req, res, next) => {
  const { id } = req.params;

  Celebrity.findById(id)
   .then(celebrity => res.render("celebrities/edit", { celebrity }))
   .catch(error => next(error));
})

router.post('/celebrities/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.findByIdAndUpdate(id, { name, occupation, catchPhrase }, { new: true})
   .then(updatedCelebrity => {
    console.log(`The celebrity ${updatedCelebrity.name} has been updated`)
    res.redirect(`/celebrities/${updatedCelebrity._id}`)
   })
   .catch(error => next(error));
})

module.exports = router;
