// Task: 20 Minutes
// 1. Make a new file. - array_of_movies.js
// 2. Copy in the start code below
var movies = [
  {
    title: 'It\'s a Wonderful Life',
    year: 1946,
    director: 'Frank Capra',
    cast: [
      'James Stewart',
      'Donna Reed'
    ],
    ratings: {
      critic: 94,
      audience: 95
    }
  },
  {
    title: 'Black Panther',
    year: 2018,
    director: 'Ryan Coogler',
    cast: [
      'Chadwick Boseman',
      'Michael B. Jordan'
    ],
    ratings: {
      critic: 97,
      audience: 77
    }
  },
  {
    title: 'Star Wars: The Last Jedi',
    year: 2017,
    director: 'Rian Johnson',
    cast: [
      'Mark Hamill',
      'Carrie Fisher'
    ],
    ratings: {
      critic: 91,
      audience: 48
    }
  },
  {
    title: 'Citizen Kane',
    year: 1941,
    director: 'Orson Welles',
    cast: [
      'Joseph Cotten',
      'Dorothy Comingore'
    ],
    ratings: {
      critic: 100,
      audience: 90
    }
  },
];
// 3. Loop through the array of movies and make each movie's title all capital letters (Hint: Documentation for String's toUpperCase method)

// for (var movie of movies) {
//   var newTitle = movie.title.toUpperCase()
//   movie.title = newTitle
// }
// console.log(movies)


// 4. Loop through the array and find the movie with the title Citizen Kane. console.log its year of release
// for (var movie of movies) {
//   if (movie.title === "Citizen Kane") {
//     console.log(movie.year)
//   }
// }

// 5. Loop through them again, using a different type of loop, and console.log the movie's audience rating
//
//
// for (var i = 0; i < movies.length; i++) {
//   console.log(movies[i].ratings.audience)
// }

//
// Extensions
//
// Loop through the array, and for each movie object:
// a. Iterate through it's ratings object and console.log each individual rating
for (var movie of movies) {
  var ratings = movie.ratings;

  for (var ratingType in ratings) {
    var score = ratings[ratingType]
    console.log(ratingType, "rating is", score);
  }
}

// b. Calculate the average of the ratings, and console.log the average

for (var movie of movies) {
  var averageRating = (movie.ratings.critic + movie.ratings.audience) / 2
  console.log(averageRating);
}
