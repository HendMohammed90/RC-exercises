// const activeUsers:[]=[];
// activeUsers.push('hello');
//even I declare it as const I can add items to it because I declare it's type;
var activeUsers = [];
activeUsers.push(2);
// Array<boolean> =~~ boolean[]
var stringsArray = [
    ['a', 'b', 'c'],
    ['a', 'b', 'c'],
    ['a', 'b', 'c']
];
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(items) {
    var sum = 0;
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var singleItem = items_1[_i];
        sum += singleItem.price;
    }
    return sum;
}
var items = [
    { name: 'first', price: 10 },
    { name: 'second', price: 20 },
    { name: 'Third', price: 30 },
    { name: 'Forth', price: 40 },
    { name: 'fives', price: 50 },
];
console.log('====================================');
console.log(getTotal(items));
console.log('====================================');
