var game = {
    teamName: "Patriots",
    ticketPrice: 325.00,
    seatsAvail: ["23", "24", "25", "26", "27", "28", "29"],
    seatsBooked:[],
    sectionAvail: ["a", "b", "c", "d"],
    fullSection: [],
  
  numberOfSeats: function() {
      return this.seatsAvail.length + this.seatsBooked.length;
  },      
  numberOfSeatsBooked: function() {
    return this.seatsBooked.length;  
  },
  numberOfSeatsAvail: function() {
      return this.seatsAvail.length;
  },
  bookSeat: function() {
      if(this.numberOfSeatsAvail() > 0);
     // var selectedSeat = ;
      return this.seatsBooked.length = this.seatsBooked.unshift(this.seatsAvail.splice(this.seatsAvail.indexOf(selectedSeat), 1)[0]);
      
      }
};


