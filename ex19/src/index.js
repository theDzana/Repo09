// Only change code below this line
function myDoWhile() {
    var myNumbers = "";
    var i = 0;
    do {
        if( i === 9) {
            myNumbers = myNumbers + i;
        } else {
            myNumbers = myNumbers + i + ", ";
            }
        i++;
    } while (i < 10);
    return myNumbers;
    
}
myDoWhile();
console.log(myDoWhile());
// Only change code above this line
module.exports = myDoWhile;