const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String,
    year: String, 
    score: String,
    about: String,
    seen: String,
    country: String,
    comment: String,
});

const Movie = mongoose.model('movie', movieSchema);

module.exports = Movie;
