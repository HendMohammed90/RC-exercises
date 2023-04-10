// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
var highScore;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
var stuff = [];
// Create an array called colors that can hold a mixture of RGB and HSL color types
var colors = [];
colors = [{ r: 12, g: 22, b: 33 }, { h: 20, s: 33, l: 10 }];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
function greet(item) {
    if (typeof item == 'string') {
        console.log("Hello ".concat(item));
    }
    else {
        for (var _i = 0, item_1 = item; _i < item_1.length; _i++) {
            var singleItem = item_1[_i];
            console.log("Hello ".concat(singleItem));
        }
    }
}
console.log('====================================');
console.log(greet('hend'));
console.log('====================================');
console.log('====================================');
console.log(greet(['ahmed', 'mohammed', 'tamer']));
console.log('====================================');
var responce = [200, 'good'];
responce.push('hay');
