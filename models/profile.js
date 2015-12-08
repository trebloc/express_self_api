var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
//    Character = require('./character.js');

var FamilySchema = require('./family.js').FamilySchema;
var MovieSchema = require('./movie.js').MovieSchema

var ProfileSchema = new Schema({
  name: String,
  city: String,
  github_link: String,
  github_profile_image: String,
  family_members: [FamilySchema],
  movies: [MovieSchema]
});

var Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;

