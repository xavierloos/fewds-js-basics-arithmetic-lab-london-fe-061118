/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
let newID = oldID;
var ageIsValid=true;

if (ageIsValid===true){
  ageIsValid=Number.isInteger()
}
var randomNumber = Math.random();
var randomInteger = Math.random();
const flooredRandomInteger = Math.floor(randomNumber);
expect(randomInteger).to.eql(flooredRandomInteger);