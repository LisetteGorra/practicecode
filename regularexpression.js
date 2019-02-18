// Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching. 

<<<<<<< HEAD
<<<<<<< HEAD
//Find Waldo
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

<<<<<<< HEAD
//Correct Code
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; 
let result = waldoRegex.test(waldoIsHiding);

=======
//Find dog cat bird or fish 
let petString = "James has a pet cat.";
let petRegex = /change/; // Change this line
let result = petRegex.test(petString);

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
>>>>>>> regularexpressions
=======
=======
//Matching single characters not specified using ^ (negated character sets)
let quoteSample = "3 blind mice.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line
//^=carat

let quoteSample = "3 blind mice.";
let myRegex = /^aeiou^0-99/ig; // Change this line
let result = quoteSample.mathc(myRegex); // Change this line




>>>>>>> regularexpressionsx1


>>>>>>> regularexpressions

// matching numbers and letters with one regex
// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /change/; // Change this line
// let result = myRegex; // Change this line


// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]ig/;
// let result = quoteSample.match(myRegex); // Change this line




<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
// matching letter of the alphabet 
// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /change/; // Change this line
// let result = alphabetRegex; // Change this line


>>>>>>> regularexpressionsx1

// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/ig; // Change this line
// let result = quoteSample.match(alphabetRegex); // Change this line


//using character class with vowels
// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /change/; // Change this line
// let result = vowelRegex; // Change this line

// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/ig; // Change this line
// let result = quoteSample.match(vowelRegex); // Change this line



//dot character (.) to find word example misspelling 
// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /change/; // Change this line
// let result = unRegex.test(exampleStr);

// // dot method to find fun, sun, nun, mun 
// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /un./; // Change this line
// let result = unRegex.test(exampleStr);



// use g and i flag
// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /change/; // Change this line
// let result = twinkleStar; // Change this line


// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /twinkle/gi; 
// let result = twinkleStar.match(starRegex); 



// // using .match() method 
// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /change/; // Change this line
// let result = extractStr; // Change this line

// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/; // Change this line
// let result = extractStr.match(codingRegex); // Change this line



//use ignore case i to match and ignore caps lock 
// let myString = "freeCodeCamp";
// let fccRegex = /change/; // Change this line
// let result = fccRegex.test(myString);


// let myString = "freeCodeCamp";
// let fccRegex = /freecodecamp/i; // Change this line
// let result = fccRegex.test(myString);



// //Find dog cat bird or fish 
// let petString = "James has a pet cat.";
// let petRegex = /change/; // Change this line
// let result = petRegex.test(petString);

// let petString = "James has a pet cat.";
// let petRegex = /dog|cat|bird|fish/; // Change this line
// let result = petRegex.test(petString);



// //Find Waldo
// let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// let waldoRegex = /search/; // Change this line
// let result = waldoRegex.test(waldoIsHiding);

// //Correct Code
// let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// let waldoRegex = /Waldo/; 
// let result = waldoRegex.test(waldoIsHiding);



<<<<<<< HEAD



>>>>>>> regularexpressions
=======
>>>>>>> regularexpressions
//Find Hello
// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex; // Change this line

// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString);