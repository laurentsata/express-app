const express = require("express");

const app = express();

//const port = 5000;  //definis plus bas

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    colors: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    colors: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];
//*********************************************************************
// mettre status 200 et envoyer en .json
const getMovies = (req, res) => {
  res.status(200).json(movies);
};

// mettre status 200 et envoyer en .json avec methode .find()
const getMovie = (req, res) => {
  const movie = movies.find(movie=> movie.id == req.params.id);
  if (movie) {  //si le movie est trouvee :
    res.status(200).json(movie); // status 200 et .json
  } else {  // sinon status 404 et message d'erreur
    res.status(404).send(`Cannot find movie with ${req.params.id}`); //status 404 et message
  }
};
//*********************************************************************

app.get('/', (req, res) => {
  res.send('Hello World, welcome to my api movies ap !!!');
});

app.get('/api/movies', getMovies /*(req, res) => {
  res.send(movies);
}*/); //*****  getMovies remplace (req, res) => {  }  ******

//***** api/movies/1 ******

app.get('/api/movies/:id', getMovie/*(req, res) => {
  res.send(movies.find(movie=> movie.id == req.params.id));
}*/);  //***** getMovie remplace (movie=> movie.id == req.params.id) ****

//**** PORT ****
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port} !!!`));