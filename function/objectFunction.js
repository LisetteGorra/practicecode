this.car = 'Sedan';

const cleanCar = function(vacuum) {
    
    const innerFunction = (_vacuum) => {
    console.log('cleaning ${this.car} using ${_vacuum}');
};
    innerFunction(vacuum);
};
this.rug = {
    car: 'car rug'


console.log(this.car);
