//Use Capture Groups to Search and Replace
let huhText = "This sandwich is good.";
let fixRegex = /change/; // Change this line
let replaceText = ""; // Change this line
let result = huhText.replace(fixRegex, replaceText);

//variable to replace "good" with "okey-dokey".
//Reuse Patterns Using Capture Groups
let repeatNum = "42 42 42";
let reRegex = /good/; // Change this line
let result = reRegex.test(repeatNum);

//this code will match numbers that are repeated only three times in a string, each separated by a space.
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);


//Positive and Negative Lookahead
let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);

//2 positive lookaheads that match passwords that are greater than 5 characters long and have two consecutive digits.
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);

