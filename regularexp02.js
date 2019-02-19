


//Match Ending String Patterns with ($) anchor character
let caboose = "The last car on a train is the caboose";
let lastRegex = /change/; // Change this line
let result = lastRegex.test(caboose);

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);







//Match Beginning String Patterns with caret symbol (^)
// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /change/; // Change this line
// let result = calRegex.test(rickyAndCal);

// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/; // Change this line
// let result = calRegex.test(rickyAndCal);



//Find One or More Criminals in a Hunt with (+)
// example crowd gathering
// let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

// let reCriminals = /./; // Change this line

// let matchedCriminals = crowd.match(reCriminals);
// console.log(matchedCriminals);

// // example crowd gathering
// let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

// let reCriminals = /C+/; // Change this line

// let matchedCriminals = crowd.match(reCriminals);
// console.log(matchedCriminals);



//Find Characters with Lazy Matching using (?)
// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*>/; // Change this line
// let result = text.match(myRegex);


// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<h1>?/; // Change this line
// let 




// let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// let chewieRegex = /change/; // Change this line
// let result = chewieQuote.match(chewieRegex);

// let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// let chewieRegex = /Aa*/; // Change this line
// let result = chewieQuote.match(chewieRegex);