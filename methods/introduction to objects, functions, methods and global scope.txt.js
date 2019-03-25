console.log("Welcome to the program."); /* code that is written within the main/global 
scope of a program is executed automatically. */

var hotel = { 
    name: "CareerDevs Hotel",


sousChef: function (param1, param2) {  //this is  method.
    // a method is a function within an object
    //lines of javascript code
    //more lines of code
    console.log("Welcome to the Method."); /* this console.log is inside of function that is in an object ... 
    local scope to the method  and also local to the object */
}
 };   

console.log("Welcome to the MIDDLE of the program.");

function sousChef(param1, param2) { // this is a function
    //lines of javascript code
    //more lines of code
console.log("Welcome to the Function."); /* this console.log is inside of a function ... 
local scope tot he function*/
}
console.log("Welcome to the END of the program.");


