const express = require('express');

const Movie = require('../models/movie');

const router = express.Router();

//Listing all the Movies
router.get('/movies', (req, res, next) => {
  Movie.find()
   .then(movies => res.render("movies/index", { movies }))
   .catch(error => next(error))
})

module.exports = router;