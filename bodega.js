var name = "Bodega's"
var company = ["Apple", "Samsung", "Google", "Blackberry"];
var phone = ["iPhone", "Galaxy", "Pixel", "OS"];
var unitSold = [500, 300, 150, 10]; 
var price = [999.99, 799.99, 799.99, 399.99];

var i;
var sum = 0;


for(i = 0; i < company.length; i++) {
    var sales = unitSold[i] * price[i];
    console.log(company[i], phone[i], sales.toLocaleString('en-US', {style: 'currency', currency: 'USD'}))
}

for(i=0; i< price.length; i++) {sum += (price[i] * unitSold[i]);}
console.log(name, " total sales  for the month is", sum.toLocaleString('en-US', {style: 'currency', currency: 'USD'})+".");










