const express = require('express');

const Movie = require('../models/movie');

const router = express.Router();

//Listing all the Movies
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => res.render('movies/index', { movies }))
    .catch(error => next(error));
});

//Ads a new Movie
router.get('/movies/new', (req, res) => {
  res.render('movies/new');
});

router.post('/movies', (req, res, next) => {
  const { title, genre, plot } = req.body;

  Movie.create({ title, genre, plot })
    .then(newMovie => console.log(`A new movie was added, it's title is ${newMovie.title}`))
    .then(() => res.redirect('/movies'))
    .catch(error => next(error));
});

//Shows Movie Details Page
router.get('/movies/:id', (req, res, next) => {
  const { id } = req.params;

  Movie.findById(id)
    .then(movie => res.render('movies/show', { movie }))
    .catch(error => next(error));
});

//Delete a Movie
router.post('/movies/:id/delete', (req, res, next) => {
  const { id } = req.params;

  Movie.findByIdAndDelete(id)
    .then(deletedMovie => console.log(`The ${deletedMovie.title} has been deleted`))
    .then(() => res.redirect('/movies'))
    .cacth(error => next(error));
});

//Edit a Movie
router.get('/movies/:id/edit', (req, res, next) => {
  const { id } = req.params;
  //res.render('movies/edit')

  Movie.findById(id)
   .then(movie => res.render('movies/edit', { movie }))
   .catch(error => next(error));
});

module.exports = router;
