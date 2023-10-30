"use strict";

window.onload = init;

function init() {
  const buttonBookARoom = document.getElementById("btnBook");
  buttonBookARoom.onclick = getRoomRate;
}




function getRoomRate() {
  //Get the starting values
  const queenBedRoom = document.getElementById("queenBedRoom").checked;
  const kingBedRoom = document.getElementById("kingBedRoom").checked;
  const twoBedRoom = document.getElementById("twoBedRoom").checked;
  const checkInDate = new Date (document.getElementById ("checkInDate").value);

  let roomRate=0;

  let month=checkInDate.getMonth() ;
 let summerSeason= month >=5 && month <=7
//getting the month 

if( summerSeason){
  //summer rates

 if(queenBedRoom || kingBedRoom)
  {
    roomRate=250;
  }
  else if (twoBedRoom){
 roomRate=350
  }
  else{
    console.log("Error, type of bed not detected");
  }

}
else {
  
  if(queenBedRoom || kingBedRoom)
  {
     roomRate=150
  }
  else if (twoBedRoom){
   roomRate=210
  }
  else{
    console.log("Error, type of bed not detected");
  }

}


  //  if ( summerSeason  && queenBedRoom ||  kingBedRoom) {
  //    roomRate = 250
  // } else if ((queenBedRoom || kingBedRoom)) {
  //    roomRate = 150
  //  }

  //  if ( summerSeason && twoBedRoom) {
  //    roomRate = 350
  //  } else if (twoBedRoom) {
  //    roomRate = 210
  //  }

    //Output Fields
   let outputOriginalRoomCost=document.getElementById("originalRoomCost");
  //Display Output
  outputOriginalRoomCost.value=roomRate;



}

