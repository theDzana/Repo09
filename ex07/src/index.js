//Only change code below this line
function randomRangeNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
}
randomRangeNumber(22, 7);
console.log(randomRangeNumber(22, 7));
// Only change code above this line
module.exports = randomRangeNumber;