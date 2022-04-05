//Only change code below this line
function randomRangeNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
}
randomRangeNumber(20, 5);
console.log(randomRangeNumber(10, 5));
// Only change code above this line
module.exports = randomRangeNumber;