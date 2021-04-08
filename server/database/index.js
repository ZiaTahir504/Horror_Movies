const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@horror.ja8xw.mongodb.net/movies?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true , useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.warn('database connected');
});

module.exports = db;
