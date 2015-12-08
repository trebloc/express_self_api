var db = require("./models");

var family = [ 
	{ name: 'Taffany Hwang', relationship: 'Fiańcee' }, 
	{ name: 'Ankey Tse', relationship: 'Mother' }, 
	{ name: 'Nicole Tse', relationship: 'Sister' } 
];

var favoriteMovies = [
    { 
      title: "Citizen Kane",
      genre: "Drama",
      director: "Orson Welles",
      year: "1941"
    },
    { 
      title: "Up",
      genre: "Animation",
      director: "Peter Docter",
      year: "2009"      
    },
    { 
      title: "Back to the Future",
      genre: "Adventure",
      director: "Robert Zemeckis",
      year: "1985"      
    },
    { 
      title: "Indiana Jones: Raiders of the Lost Ark",
      genre: "Action",
      director: "Steven Spielberg",
      year: "1981"      
    },
    { 
      title: "Amélie",
      genre: "Drama",
      director: "Jean-Pierre Jeunet",
      year: "2001"      
    }
];

db.Profile.remove({}, function (err, profile) {
  if (err) { return console.log("Error", err)};
  console.log("Successfully Removed Profile Data");

  db.Profile.create(
	  {
	    name: "Colbert Tse",
	    city: "San Francisco",
	    github_link: "https://github.com/trebloc",
        github_profile_image: "https://avatars1.githubusercontent.com/u/6238249?v=3&u=d66fb4b7d60254f849f08c8dee354f0a5b74cc91&s=140"
	  }, function(err, profile) {
	         if (err) {return console.log("Error")};
	         console.log(profile);      
  });


});

favoriteMovies.forEach(function(movie, index) {
	db.Movie.create(movie, function(err, movie) {
		if (err) { return console.log("Error", err)};	
		console.log("Sucessfully Added", movie);
	});	

family.forEach(function(family, index) {
	db.Family.create(family, function(err, family) {
		if (err) { return console.log("Error", err)};	
		console.log("Sucessfully Added", family);
	});

});
    // if (index === (favoriteMovies.length - 1)) {
    // 	// process.exit();
    // }
});

db.Profile.find({}, function(err, success) {
  if (err) {console.log("Error")};
  success.forEach(function (entry) {
    console.log('------------------------------------\n' , entry);
  });
});