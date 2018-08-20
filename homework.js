// Episode 1: Miss Scarlet

// Episode 2: Initially thought Mrs Peacock, but will get a reference error because you can't change murderer from Professor Plum, since it's declared as a const initially.

// Episode 3: First Verdict: Mrs Peacock , second verdict: Professor Plum

// Episode 4: First will print The suspects are Miss Scarlet, Professor Plum, Colonel Mustard; next will print Mrs Peacock.

// Episode 5: Revolver

// Episode 6: Mrs White

// Episode 7 Initially thought Miss Scarlet, but answer is Mr Green. This is because in plotTwist() murderer has been defined with let, so the variable can't be accessed outwith changeMurderer()

// Episode 8: Candle stick

// Episode 9: Professor Plum - is not changed after if statement because it's defined using let, which is only accessible within the block.

// Extension - create a scenario

var murderer = "Mrs. White";
var weapon = "Rope";


const changeScenario = function() {

  let murderer = "Mr. Green"
  weapon = "Lead pipe"

  const plotTwist = function() {
    murderer = "Colonel Mustard"
    let weapon = "Candle stick"
  }
  plotTwist()
}


const declareWeapon = function() {
  return `The weapon is the ${weapon}.`
}

const declareMurderer = function() {
  return `The murderer is ${murderer}`
}

changeScenario()
console.log(declareMurderer());
console.log(declareWeapon());
