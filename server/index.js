require('dotenv').config({path: '../.env'});
require('./database/index');

const path = require('path');
const popupS = require('popups');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const Movie = require('./database/model');

// MIDDLEWARE //

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded());

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
    const { body } = req;
    try {
        if (!body.inputTitle || !body.inputYear || !body.inputScore
            || !body.inputAbout || !body.inputSeen || !body.inputCountry
            || !body.inputComment) {
                popupS.alert({ content: 'fill out all forms please'});
            }
        else if (Movie.findOne({title: body.inputTitle}) !== undefined) {
                popupS.alert({ content: 'movie already in database'});
        } else {
            await Movie.create({
                title: body.inputTitle,
                year: body.inputYear,
                score: body.inputScore,
                about: body.inputAbout,
                seen: body.inputSeen,
                country: body.inputCountry,
                comment: body.inputComment,
            });
        }
    } catch(err) {
        console.error(err.message);
    }
});

// update a movie's comment info in db
app.put('/movies/comment/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { comment } = req.body;
        await Movie.updateOne(
            { _id: id }, 
            { comment },
            );
    } catch(err) {
        console.error(err.message);
    }
});

// update a movie's seen info in db
app.put('/movies/seen/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { seen } = req.body;
        await Movie.updateOne(
            { _id: id }, 
            { seen: seen },
            );
    } catch(err) {
        console.error(err.message);
    }
});

// delete a movie from db
app.delete('/movies/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Movie.deleteOne({ _id: id });
    } catch(err) {
        console.error(err.message);
    }
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
});
