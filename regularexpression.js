// Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching. 


//Find dog cat bird or fish 
let petString = "James has a pet cat.";
let petRegex = /change/; // Change this line
let result = petRegex.test(petString);

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);










// //Find Waldo
// let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// let waldoRegex = /search/; // Change this line
// let result = waldoRegex.test(waldoIsHiding);

// //Correct Code
// let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// let waldoRegex = /Waldo/; 
// let result = waldoRegex.test(waldoIsHiding);






//Find Hello
// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex; // Change this line

// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString);