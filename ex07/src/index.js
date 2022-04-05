//Only change code below this line
function randomRangeNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
}
randomRangeNumber(7, 22);
console.log(randomRangeNumber(7, 22));
// Only change code above this line
module.exports = randomRangeNumber;