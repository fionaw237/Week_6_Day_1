var sports = ["Football", "Tennis", "Rugby"];

sports.push("Curling");
sports.push("Snooker");
sports.push("Darts");

// var lastSport = sports[sports.length - 1];

// lastSport = sports.pop()

// console.log(lastSport);

// sports.pop();

// var removedSport = sports.slice(1) // get rid of everything before index 1 and return new array
// var removedSport = sports.splice(1, 1)
// console.log(removedSport);
//
// console.log(sports.filter(word => word.length > 6))

// for (var currentSport of sports) {
//   var bigSport = currentSport.toUpperCase();
//   console.log(bigSport);
// }

for (var i = 2; i < sports.length; i++) {
  var currentSport = sports[i];
  var bigSport = currentSport.toUpperCase();
  console.log(bigSport);
}

for (var i = 0; i < 10; i++) {
  console.log(i);
}
