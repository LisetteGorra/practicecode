var hotel = {
    name: "CareerDevs Javascript Hotel",
    rating: 5.0,
    roomRate: 325.00,
    roomNumbersAvailable: ["101", "102", "103", "104", "105", "106"],
    roomNumbersBooked: [],
    roomType: "Queen",

    numberOfRoomsAvailable: function() { // length of the number of rooms available
        return this.roomNumbersAvailable.length; //- this.roomNumbersBooked.length; 
    },

    numberOfRoomsBooked: function() {
        return this.roomNumbersBooked.length;

    },

    numberOfRooms: function() {
        return this.roomNumbersAvailable.length + this.roomNumbersBooked.length;
    },

    bookRoom: function() {
        if (this.numberOfRoomsAvailable() > 0) {
            var selectedRoomDD = document.getElementById("selectedRoom").value;
            //alert("Room "+selectedRoomDD+" has been booked.")
            
              this.roomNumbersBooked = this.roomNumbersBooked.concat(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(selectedRoomDD), 1));
               
              var selectRoomList = "<form> <select id='selectedRoom'>";
              for (var i = 0; i < this.roomNumbersAvailable.length; i++) {
                  
    selectRoomList += "<option value=" + this.roomNumbersAvailable[i] + ">" + this.roomNumbersAvailable[i] + "</option>";
}
selectRoomList += "</select>";
selectRoomList += "</form>";

document.getElementById("selectARoom").innerHTML = selectRoomList;
            
var bookedRoomList = "<form> <select id='bookedRoom'>";
for (var i = 0; i < this.roomNumbersBooked.length; i++) {
    bookedRoomList += "<option value ="+this.roomNumbersBooked[i]+">" + this.roomNumbersBooked[i]+"</option>";
        }
bookedRoomList+= "</select> </form>";
document.getElementById("rmBooked").innerHTML = bookedRoomList;
      }
   }
};

var selectRoomList = "<form> <select id='selectedRoom'>";
              for (var i = 0; i < hotel.roomNumbersAvailable.length; i++) {
                  
    selectRoomList += "<option value=" + hotel.roomNumbersAvailable[i] + ">" + hotel.roomNumbersAvailable[i] + "</option>";
}
selectRoomList += "</select>";
selectRoomList += "</form>";
document.getElementById("selectARoom").innerHTML = selectRoomList;

var bookedRoomList = "<form> <select id='bookedRoom'>";
for (var i = 0; i < hotel.roomNumbersBooked.length; i++) {
    bookedRoomList += "<option value ="+hotel.roomNumbersBooked[i]+">" + hotel.roomNumbersBooked[i]+"</option>";
        }
bookedRoomList+= "</select> </form>";
document.getElementById("rmBooked").innerHTML = bookedRoomList;