const mongoose = require("mongoose");

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
