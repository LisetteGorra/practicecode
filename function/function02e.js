

function multiplyNums(num1, num2) { // set the parameters for multiplying 2 functions
   var total = num1 * num2; 
  // console.log(total); / this console won't run because it's inside the function and not on global
    return total;
    
}

console.log(multiplyNums(5, 4));
multiplyNums(3, 9); // this is how you call your function
multiplyNums(100, 7);