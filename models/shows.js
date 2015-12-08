var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
//    Character = require('./character.js');

var CharacterSchema = new Schema({
  name: String,
  actor_name: String,
});

var ShowSchema = new Schema({
  name: String,
  characters: [CharacterSchema],
  network: String
});



var Character = mongoose.model('Character', CharacterSchema);
var Show = mongoose.model('Show', ShowSchema);

module.exports = Character;
module.exports = Show;
Status API Training Shop Blog About Pricing
© 2015 GitHub, Inc. Terms Privacy Security Contact Help