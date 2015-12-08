var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my-profile-db');

module.exports.Profile = require('./profile.js');
module.exports.Movie = require('./movie.js').Movie;
module.exports.Family = require('./family.js').Family;

// module.exports.Shows = require('./shows.js');
// Status API Training Shop Blog About Pricing


