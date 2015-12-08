var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
//    Character = require('./character.js');

var FamilySchema = new Schema({
  name: String,
  relationship: String 
});

var Family = mongoose.model('Family', FamilySchema);

module.exports = {
  Family: Family,
  FamilySchema: FamilySchema
}

