// const activeUsers:[]=[];
// activeUsers.push('hello');

//even I declare it as const I can add items to it because I declare it's type;
const activeUsers:number[]=[];
activeUsers.push(2);


// Array<boolean> =~~ boolean[]
const stringsArray: string[][]=[
    ['a', 'b' , 'c'],
    ['a', 'b' , 'c'],
    ['a', 'b' , 'c']
]

// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
let ages : number[] = [];

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
let gameBoard : string[][] = [] 
// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}
type Product = {
    name : string ,
    price : number
}
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

function getTotal(items:Product[]):number{

    let sum = 0 ;
    for(let singleItem of items ){
        sum += singleItem.price;
    }
    return sum;
}

let items:Product[] =[
    {name : 'first' , price : 10} ,
    {name : 'second' , price : 20} ,
    {name : 'Third' , price : 30} ,
    {name : 'Forth' , price : 40} ,
    {name : 'fives' , price : 50} ,


] 

console.log('====================================');
console.log(getTotal(items));
console.log('====================================');