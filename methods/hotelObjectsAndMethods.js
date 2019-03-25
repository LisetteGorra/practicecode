var hotel = {
    name: "CareerDevs Hotel",
    rating: 5.0,
    roomRate: 325.00,
    roomNumbersAvailable: ["101","102","103","104","105", "106", "107", "108"],
    roomNumbersBooked: [],
    roomType: "Queen", 
    
    numberOfRoomsAvailable: function() { // length of the number of rooms available
        return this.roomNumbersAvailable.length; //- this.roomNumbersBooked.length; 
        // this method returns an interger, not all intergers are numbers 
     },    // in returns the number in an array as the interger 
   
    numberOfRoomsBooked: function () {
        return this.roomNumbersBooked.length;
    },
        
    numberOfRooms: function() {
        // avail rooms plus booked rooms
        return this.roomNumbersAvailable.length + this.roomNumbersBooked.length;
    },
    
    bookRoom: function(){
        // only book a room if one or more is available
        if ( this.numberOfRoomsAvailable() > 0 ) {
          var randomRoom = this.roomNumbersAvailable[Math.floor(Math.random()*this.roomNumbersAvailable.length)];
          // removed booked room from roomNumbersAVailable using slice/indexOf
          this.roomNumbersBooked.splice(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom),1)[0]);
        //add the random room to roomNumbersBooked
        //I can use .push or .conact or .splice or .unshift
        
        // this.roomNumbersBooked.push(randomRoom);
        
        
        } 
    }
};



/*Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}*/
//[Math.floor(Math.random() * myArray.length)];


// everything below is a playground sandbox. please delete when finished playing

// var ar = [1, 2, 3, 4, 5, 6];
// ar.pop(); // returns 6
// console.log( ar ); // [1, 2, 3, 4, 5]


// //math.random returns a number from 0-1 exclusive 


// homework, get it working once with .push, .concat, and .unshift
// name file by method that you are using ... save as"" (save as)