"use strict";

window.onload = init;

function init() {
  const buttonBookARoom = document.getElementById("btnBook");
  buttonBookARoom.onclick = getRoomRate;
}




function getRoomRate(checkInDate, queenBedRoom, kingBedRoom, twoBedRoom) {
  //Get the starting values
   queenBedRoom = document.getElementById("queenBedRoom").checked;
   kingBedRoom = document.getElementById("kingBedRoom").checked;
   twoBedRoom = document.getElementById("twoBedRoom").checked;
   checkInDate = new Date (document.getElementById ("checkInDate"));
   
    let roomRate=0;
   let month=checkInDate.getMonth().value;

//getting the month 
 


  
   if (5<=month <=7  && queenBedRoom ||  kingBedRoom) {
     roomRate = 250
  } else if ((queenBedRoom || kingBedRoom)) {
     roomRate = 150
   }

   if (twoBedRoom) {
     roomRate = 350
   } else if (twoBedRoom) {
     roomRate = 210
   }

    //Output Fields
    let outputOriginalRoomCost=document.getElementById("originalRoomCost");
  //Display Output
  outputOriginalRoomCost.value=roomRate;
 
 
   
}

// i need all the ids of the radio buttons and check input date
//the check in date input

//Room type rates Queen/King $250 $150 2Bedroom $350 $210

//Calculate the unknown values

/*i need to wire up the getRoomrate function to return a value based on what room they check and what month they book
 .getMonth maybe used

//roomrate * number of nights= original room cost*/

//Display the output
