var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
//    Character = require('./character.js');

var MovieSchema = new Schema({
  title: String,
  genre: String,
  director: String,
  year: String  
});

var Movie = mongoose.model('Movie', MovieSchema);

module.exports = {
  Movie: Movie,
  MovieSchema: MovieSchema
}

