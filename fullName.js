var person = {
    firstName: "Lisette",
    lastName: "Gorra",
    employeeId: 12345,
    hourlyRate: 55.00,
    hoursWorked: 80, 

    weeklyPay: function(){
        return this.hourlyRate * this.hoursWorked;
    },
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};
