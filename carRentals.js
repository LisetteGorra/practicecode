var business = "Car rental";
var numberOfRentals = 2;
var monthlyInsurance = 350;
var dailyRentalFee = 35;
var daysInaMonth = 30;
var dailyRentalFeeOverOneMonth = dailyRentalFee * daysInaMonth;
var totalMonthlyFeeForBothCars = dailyRentalFeeOverOneMonth * numberOfRentals;
var profitAfterInsurance = totalMonthlyFeeForBothCars -monthlyInsurance; 
var profitGoal = 10000;
var goal = profitGoal / profitAfterInsurance;

console.log("It will take a couple months to make", profitGoal.toLocaleString('en-US', {style: 'currency', currency: 'USD'}), "in the", business, "business.");
console.log("Each month the", numberOfRentals, "rentals generate", dailyRentalFeeOverOneMonth.toLocaleString('en-US', {style: 'currency', currency: 'USD'}), "each.");
console.log("After the cost of insurance, the total profit from both cars is", profitAfterInsurance.toLocaleString('en-US', {style: 'currency', currency: 'USD'}),".");
console.log("It will take a total of", goal.toFixed(1), "to reach our goal of", profitGoal.toLocaleString('en-US', {style: 'currency', currency: 'USD'}), "from renting our", numberOfRentals, "vehicles. Thanks Turo!")