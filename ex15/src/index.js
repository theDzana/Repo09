// Only change code below this line
function switchCase(letter) {
    var animals;
    switch(letter) {
        case "a":
            return "antelope";
            break;
        case "b":
            return "bird";
            break;
        case "c":
            return "cat";
            break;
        default:
            return "stuff";
            break;
    }
}
switchCase("a");
switchCase("b");
switchCase("c");
switchCase("d");
switchCase(4);
console.log(switchCase("a"));
console.log(switchCase("b"));
console.log(switchCase("c"));
console.log(switchCase("d"));
console.log(switchCase(4));
// Only change code above this line
module.exports = switchCase;