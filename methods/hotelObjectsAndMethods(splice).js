var hotel = {
    name: "CareerDevs Hotel",
    rating: 5.0,
    roomRate: 325.00,
    roomNumbersAvailable: ["101","102","103","104","105", "106", "107", "108"],
    roomNumbersBooked: [],
    roomType: "Queen", 
    
    numberOfRoomsAvailable: function() { 
        return this.roomNumbersAvailable.length; 
     },   
   
    numberOfRoomsBooked: function () {
        return this.roomNumbersBooked.length;
    },
        
    numberOfRooms: function() {
        return this.roomNumbersAvailable.length + this.roomNumbersBooked.length;
    },
    
    bookRoom: function(){

        if ( this.numberOfRoomsAvailable() > 0 ) {
            
          var randomRoom = this.roomNumbersAvailable[Math.floor(Math.random()*this.roomNumbersAvailable.length)];

      // delete this statement and remake it from scratch       

       // this.roomNumbersBooked.unshift(randomRoom);
        this.roomNumbersBooked.unshift(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom),1)[0]);
        }
    },
        
        unBookRoom: function() {
            if (this.numberOfRoomsBooked() > 0 ) {
                var randomRoom = this.roomNumbersBooked[Math.floor(Math.random()*this.roomNumbersBooked.length)];
            this.roomNumbersAvailable.unshift(this.roomNumbersBooked.splice(this.roomNumbersAvailable.indexOf(randomRoom),1)[0]);
        }
    }
};


