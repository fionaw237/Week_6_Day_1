// var name = "Ally"
//
// var secretsFunction = function(){
//   var pinCode = [0, 0, 0, 0]
//   console.log("name inside secretsFunction", name);
//   // console.log("pinCode inside secretsFunction", pinCode);
// }
//
// secretsFunction();
// console.log('name outside secretsFunction', name);

//---------------------------------------------------------------

// var filterNamesByFirstLetter = function(names, letter){
//   var filteredNames = [];
//   for (let name of names){
//     if (name[0] === letter){
//       filteredNames.push(name);
//     }
//   }
//   //console.log("name after loop: ", name);
//   return filteredNames;
// }
//
// var students = ["Robert", "Ricky", "YingYing", "Tanny"];
//
// var filteredStudents = filterNamesByFirstLetter(students, "R")
// console.log(filteredStudents);

//---------------------------------------------------------------

// // USING VAR
// let isItFive = function(number){
//   if (number === 5) {
//     var result = true;
//   }
//   else {
//     var result = false;
//   }
//   return result
// }
//
// console.log(isItFive(5));
//
// // USING LET
// let isItFive = function(number){
//   let result;
//   if (number === 5) {
//     result = true;
//   }
//   else {
//     result = false;
//   }
//   return result
// }
//
// console.log(isItFive(1));
//---------------------------------------------------------------

// CONST

// const calculateEnergy = function(mass){
//   const speedOfLight = 299792458;
//   return mass * speedOfLight ** 2;
// }
//
// const energyofMe = calculateEnergy(75);
// console.log("Energy of mass 75:", energyofMe);

// const song = {
//   title: "Raspberry Beret",
//   artist: "Prince"
// }
//
// console.log("Song before mutation:", song);
//
// song.title = "Master of Puppets";
//
// console.log("Song after mutation:", song);
//---------------------------------------------------------------


const helloWorld = function(){
  result = "Hello, World!"
}
helloWorld()
console.log(result);
