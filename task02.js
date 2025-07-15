"use strict";

// TODO: Use if/else to check if it's a number
// (hint: typeof or isNaN)

const userInput = "42";
// Try changing to "hello", 10, null, NaN
if (typeof userInput === 'number'&& !isNaN(userInput)){
    console.log(`${userInput} Is number`)
}else {
    console.log(`${userInput} Is not number`)
};