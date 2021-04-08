require('dotenv').config({path: '../.env'});
require('./database/index');

const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const Movie = require('./database/model');

// MIDDLEWARE //

app.use(cors());
app.use(express.json());

// ROUTES //

// get all movies from db
app.get('/movies', async (req, res) => {
    try {
        const allMovies = await Movie.find({});
        res.json(allMovies);
    } catch(err) {
        console.error(err.message);
    }
});

// add a movie to db
app.post('/movies', async (req, res) => {
    try {
        const addMovie = await Movie.create({
            title: req.title,
            year: req.year,
            score: req.score,
            about: req.about,
            seen: req.seen,
            country: req.country,
            comment: req.comment,
        });
    } catch(err) {
        console.error(err.message);
    }
});

// update a movie's info in db
app.put('/movies/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { comment } = req.body;
        const updateMovie = await Movie.updateOne(
            { id: id }, 
            { comment: comment }
            );
    } catch(err) {
        console.error(err.message);
    }
});

// delete a movie from db
app.delete('/movies', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteMovie = await Movie.deleteOne({ id: id });
        res.json('Movie was removed');
    } catch(err) {
        console.error(err.message);
    }
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
});
