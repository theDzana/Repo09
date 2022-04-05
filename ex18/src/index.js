// Only change code below this line
function myForLoop1() {
   var evenNumbers="";
   for (var i = 0; i <= 8; i = i + 2) {
       if (i === 8) {
        evenNumbers = evenNumbers + i; 
       } else {
        evenNumbers = evenNumbers + i + ", ";
    }
   }
   return evenNumbers;
}

function myForLoop2() {
    var evenInverseNumbers ="";
    for (var y = 8; y >= 0; y = y - 2) {
        if (y === 0) {
            evenInverseNumbers = evenInverseNumbers + y;
        } else {
        evenInverseNumbers = evenInverseNumbers + y + ", ";
     }
    }
    return evenInverseNumbers;
}
myForLoop1();
myForLoop2();
console.log(myForLoop1());
console.log(myForLoop2());
// Only change code above this line
module.exports = {
    myForLoop1,
    myForLoop2
};
