const mongoose = require("mongoose");

const Movie = require("../models/movie");

const movies = [
  {
    title: '100% Wolf',
    genre: 'Adventure',
    plot: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    title: 'Tom & Jerry',
    genre: 'Animation',
    plot: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    title: 'The Blackout',
    genre: 'Sci-Fiction',
    plot: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  }
]

mongoose
 .connect(`mongodb://localhost:27017/lab-movies-celebrities`, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log('Connected to DB 🚀'))
 .then(() => Movie.create(movies))
 .then(moviesFromDB => console.log(`Created ${moviesFromDB.length} movies`))
 .catch(error => console.log('Error while seeding de DB', error))
 .finally(() => mongoose.connection.close());

/*
const Celebrity = require("../models/celebrity");

const celebrities = [
  {
    name: 'Kim Kardashian',
    catchPhrase: 'Shine like a diamont'
  },
  {
    name: "Sheldon Cooper",
    occupation: "Scientist",
    catchPhrase: "Bazinga!"
  },
  {
    name: "Walter Cronkite",
    occupation: "Actor",
    catchPhrase: "And that's the way it is."
  }
]

mongoose
 .connect(`mongodb://localhost:27017/lab-movies-celebrities`, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log('Connected to DB 🚀'))
 .then(() => Celebrity.create(celebrities))
 .then(celebritiesFromDB => console.log(`Created ${celebritiesFromDB.length} celebrities`))
 .catch(error => console.log('Error while seeding de DB', error))
 .finally(() => mongoose.connection.close());
 */
