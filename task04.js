"use strict";

// TODO: Write if/else if to check and print:
// Divisible by both 3 and 5 → "FizzBuzz"
// Divisible by only 3 → "Fizz"
// Divisible by only 5 → "Buzz"
// Otherwise → "Not divisible by 3 or 5"

// TODO BONUS: Rewrite with if

const num = 3;
if(num%3===0 && num%5===0){
    console.log("Fizzbuzz")
}else if(num%3===0){
    console.log("Fizz")
}else if(num%5===0){
    console.log("Buzz")
}else {console.log("Not divisible by 3 or 5")};

// With if
let result = "";
if (num % 3 === 0) {
  result += "Fizz";   //ถ้าหาร 3 ลงตัวให้เพิ่ม "Fizz" 5 ลงตัวขึ้น 'Buzz'
}
if (num % 5 === 0) {  //ถ้าตรงตามสองเงื่อนไขจะขึ้น 'Fizzbuzz'
  result += "Buzz";
}
if (result === "") {
  result = "Not divisible by 3 or 5";
}
console.log(result);