"use strict";

// TODO: Write if/else if to print:
// Password < 6 chars → "Too short"
// 6–10 chars → "Moderate"
// 11+ chars → "Strong"

const password = "s11mkhbu1223";
if(password.length >= 11){
    console.log("Strong");
}else if(password.length >=6){
    console.log("Moderate")
}else {
    console.log("Too short")
}