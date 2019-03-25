var car = {
    make: "Chevy",
    model: "Camaro",
    bodyType: "Coupe",
    startSpeed: 0,
    topSpeed: 200,
    horsePower: 455,
    lbFtTorque: 455,
    mphAccelerationPerSecond: 20,
    secondsGasPedalPressed: 3,
    windowUp: true,
    engineOn: false,
    hornBeep: false, 

    
    beepHorn: function(){
        this.hornBeep + true;
    },
    
    currentSpeed: function() {
        return this.mphAccelerationPerSecond * this.secondsGasPedalPressed;
    }
};
    
    
    
  