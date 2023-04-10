// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
let highScore: number | boolean;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)

let stuff: number[] | string[] = []

// stuff = [1,2,3]
// stuff = ['aaaa', 'sssss' , 'dddd']

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a literal type called SkillLevel
// There are 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert"
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert"



// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Create a type called SkiSchoolStudent
// name must be a string
// age must be a number
// sport must be "ski" or "snowboard"
// level must be a value from the SkillLevel type (from above)

type SkiSchoolStudent = {
    name: string,
    age: number,
    sport: "ski" | "snowboard",
    level: SkillLevel
}
// **********************************************
// ******************* PART 5 *******************
// **********************************************
// Define a type to represent an RGB color
// r should be a number
// g should be a number
// b should be a number

type RGP = {
    r: number,
    g: number,
    b: number
}

// Define a type to represent an HSL color
// h should be a number
// s should be a number
// l should be a number

type HSL = {
    h: number,
    s: number,
    l: number,
}

// Create an array called colors that can hold a mixture of RGB and HSL color types


let colors: (RGP | HSL)[] = []
colors = [{ r: 12, g: 22, b: 33 }, { h: 20, s: 33, l: 10 }]
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format

function greet(item: string | string[]) {
    if (typeof item == 'string') {
        console.log(`Hello ${item}`);
    } else {
        for (let singleItem of item) {
            console.log(`Hello ${singleItem}`);
        }
    }
}

console.log('====================================');
console.log(greet('hend'));
console.log('====================================');

console.log('====================================');
console.log(greet(['ahmed' , 'mohammed' , 'tamer']));
console.log('====================================');
