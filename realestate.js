var houseType = "Victorian"
var houseColor = "Yellow";
var address = "1234 Valley Street";
var bedrooms = 4;
var bathrooms = 2.5;
var sqft = 4000; 
var garage = true;
var price = 375000;
var commissionPercent = .06;
var commission = price * commissionPercent;


console.log("The lovely",  houseColor,  houseType,  "Located at",  address, "costs", price.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));
console.log("The total commission is", commission.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));



 

