// 1. What is the Difference Between =, ==, and === in JavaScript 

// = is used to assign a value to a variable. == is loose equality between variables.
// === is strict equality between variables. It checks value and type.

// 2. What are template literals in js?

// Template literals are strings that use backticks. They allow for multi-line strings
// and expressions within strings.

// 3. What are the differences between variables created using let, var or const?

// Const declares a variable that can't be changed. Let declares a variable that has
// block scope. Var declares a variable that has function scope.

// 4. What are data types in javascript?

// Data types are the different forms of data, such as integers and strings.

// 5. What is difference between null vs undefined?

// Undefined means a variable has been declared but not given a value. Null is a
// value that is given to the variable to mean nothing.

// 6. What are various operators supported by javascript?

// + - * / %

// 7. What is 'typeof' operator?

// It returns the data type of the variable you give it.

//8. what are some of the important features of JavaScript ES6

// Template literals, Let and Const, Arrow functions.

//9. how does the ternary operator in javascript work?

// Checks condition; if true, does one thing, if false, does another.

//10. what are valid variable names in js

// Must start with either letter, underscore or dollar sign.
// Can't use reserved words in JavaScript.

//11. what is variable scope?

// Variable scope is where variables can be used. There is function scope,
// block scope, and global scope.

//11. what is variable assignment?

// Giving a value to a declared variable. Done using the = sign.

// NUMBERS

// 1. How do you generate random integers in js?

// Math.floor(Math.random() * maxNumber;

// 2. What is isNaN?

// Checks if the given value is not a number.

// 3. How to do you see if a number is even?

// isEven();

// 4. how do you convert the string '1' to the number 1

// parseInt();

// STRINGS



//1. Explain these methods

// startsWith()

// Determines whether a string starts with given characters.

// endsWith()

// Determines whether a string ends with given characters.

// includes()

// Determines whether a string contains another given string.

// slice()

// Takes part of a string and returns it as a new string.

// toUpperCase()

// Converts string to all upper case letters.

// toLowerCase()

// Converts string to all lower case letters.

// charAt()

// Returns character at given index of a string.

// split()

// Divides string into substrings and returns them in an array.

// replace()

// Searches string for given substring, replaces substring with
// new substring, returns new string.

//CONDTIONALS




//1. how does the if statement work in js

// Checks whether a given condition is true. If so, does
// a specified action. If false, skips that action.

//2. how does the if/else statement work in js

// Checks whether condition is true. If so, does action. If false,
// goes to else statement and does that action instead.

//3. how does the if/elseif/else statement work in js

// Checks whether condition is true. If so, does action. If false,
// goes to elseif statement and checks that condition. If that is
// true, does that action. If false goes to else statement and does 
// that action instead.

//4. what is a switch statement

// A switch statement checks the state of a variable, and does different
// actions depending on that state. If the variable doesn't match any
// of the cases in the statement. It does the default case.

//5. how is a switch statement different from if/elseif statement

// Switch statement only checks for equality. If else checks for equality
// and whether true or false.

//6. what are the Comparison Operators that js uses?

// ==, ===, !=, !==, . , >=, <=

//7. what are the Logical Operators that js uses?

// &&, ||, !

//8. what are truthy and falsey values (more high level idea)

// Values that are true of false in a boolean context. All values
// are considered truthy unless they are specifically falsy.

//9. what are the specific falsey values in js

// false, 0, -0, 0n, "" ,'' ,``, null, undefined, NaN

//10. what are the specific truthy values in js(answer: anything that is not falsey)

// Everything that is not falsy.

//11. how does a nested if statement in js work

// First if statement checks is condition is true. If so, it
// checks if the condition in the if statement contained within is true.
// If so, it does the action inside that if statement.


//LOOPS


//1. what is for loop in javascript

// A for loop goes through a block of code a set number of times.

//1a. what is the syntax for a for loop in javascript

// for (let i = 0; i , 10; i++) {}

//2. what is while loop in javascript

// A while loop checks if a condition is true. If so, it runs code
// inside the loop. It then checks again, and keeps running the code until
// the condition is no longer true.

//2a. what is the syntax for a while loop in javascript

// while (true) {}

//3. what is while for...in in javascript


//3a. what is the syntax for a while for...in in javascript


//4. what is nested loop, give an example?

// Each time the outer loop runs, it starts the inner loop running, which goes
// until it is done. The outer loop runs again, and then starts the inner loop again.
// This goes until the outer loop is finished.




//FUNCTIONS



//1. how do you define a function in javascript

 //- how do define an arrow function

 //- how do you define an regular function

 //- what is the difference between arrow/regular functions


//2 how do you call a function in javascript (keep this simple)

// function()

//3 what are default parameters in a function?

// They are undefined

//4 what is the difference between params and arguments in js

// Parameters are listed when the function is defined as the values that will be
// passed to the function. Arguments are the values passed to the function when it
// is called.

//5 what does the return keyword do in a function in js

// It returns a value to the call point, which can then be store in a variable.

//6 what will a function return if there is no return keyword

// It returns undefined.

//7 What is an anonymous function?

// Function that does not have a name. Can only be accessed by variable it is stored in.

//8 What is a typical use case for anonymous functions?

// One use case is when you only need to use a function once, or in one specific function.

//9 Can you define a function as a parameter as function?(answer:yes)

// Yes

//10 What does it mean that you Can you define a function as a parameter as function?

// It means that you can pass the return result of a function to another function.

//11 Can you have a function return a function in js?(answer:yes)

// Yes

//12 What does it mean that you Can you have a function return a function in js?



// in realation to 9-12, what is a first class function?

// First class functions are treated as an object


//ARRAYS



// 1. what is an array in javascript and at a high level how does it work?

// An array is a list of other data, such as numbers or strings.

// 2. Explain array methods 

// pop(),

// Removes last element in the array

// length(),

// Returns the length (number of items) in the array

// push(), 

// Adds element to the end of the array

// shift(), 

// Removes first element in the array and moves all elements back one index

// slice(), 

// Takes out part of array starting at given index location and returns that part of the array

// splice(), 

// Adds items in the middle of the array

// sort(),

// Sorts items in array alphabetically

// unshift(),

// Adds item to beginning of array and returns length of the array

// concat(),

// Adds two arrays together and returns the combined array

// map(),

// Calls function on elements in array and returns new array

// filter(),

// Filters array with provided criteria and returns new array

// indexOf(),

// Returns index location of specified element

// find(),

// Returns first element that passes a provided test

// findIndex(),

// Returns index of first element that passes a provided test

// includes()

// Returns true or false depending on whether specified value is in array


//3. What are the benefits of using spread ie'...' syntax is js (hint cloning)

// It is useful for passing all elements from an array to a function

//4. What is array destructuring in js

// Allows you to assign each element in an array to a separate variable

//5. When should you use reduce(), map(), foreach() and filter() in js?

// Reduce is useful for summing up certain values in an array. Map can perform
// a function on each element in the array and return a new array if that is
// needed. foreach does not return a new array, but instead mutates the
// existing array, if that's what's needed. Finally, filter is useful for finding
// only values from an array that meet specified criteria.





//OBJECTS



// 1. What is a object in JS?

// (This can get a little complicate so this is the good overview of the basics. 

//https://www.javascripttutorial.net/javascript-objects/)

// An object is JS is basically a collection of key:value pairs.


// 2. How do access a value in a js object using dot '.' notation?

// object.value;

// 3. How do access a value in a js object using array like '[""]'notation?

// object['value'];

// 4. what is meant by a key value pair in an object?

// A key defines what kind of attribute the value is

// 5. How do you add a key value pair in an object?

// obj['key'] = 'value'

// 5b. How do you delete a key value pair in an object?

// delete object.key;

// 6. How do modify a value in an object?

// obj['key'] = value

// 7. how do you see if a key is in a object?

// 'key' in object;

// 8. how can you clone an object?

// object.assign;

// 9. what is object destructoring?

// Unpacking an object into separate variables.