"use strict";

window.onload = init;

function init() {
  const buttonBookARoom = document.getElementById("btnBook");
  buttonBookARoom.onclick = OnBtnBook;
}



function OnBtnBook(event){
  event.preventDefault();

 //Input Fields

  const inputAAADiscount=document.getElementById('aaaDiscount').checked;
  const inputMilitaryDiscount=document.getElementById('militaryDiscount').checked;
  const queenBedRoom = document.getElementById("queenBedRoom").checked;
  const kingBedRoom = document.getElementById("kingBedRoom").checked;
  const twoBedRoom = document.getElementById("twoBedRoom").checked;

  let selectedRoomType;
  
  if(queenBedRoom){
    selectedRoomType = "queen";
  }
  if(kingBedRoom){
    selectedRoomType = "king";
  }
  if(twoBedRoom){
    selectedRoomType = "two";
  }



  const checkInDate = new Date (document.getElementById ("checkInDate").value);
  const inputNumberofNights= document.getElementById('numberOfNights').value;
  const inputNoDiscount=document.getElementById("noDiscount").checked;
  const inputNumberOfAdults=document.getElementById("numberOfAdults").value;
  const inputNumberOfChildren=document.getElementById("numberOfChildren").value;
  

 //Output fields
  let outputDiscountedRoomCost=document.getElementById('discountedRoomCost');
  let outputOriginalRoomCost=document.getElementById("originalRoomCost");
  let outputDiscountapplied=document.getElementById('discountApplied');
  let outputTax=document.getElementById('taxApplied');
  let outputTotalCost=document.getElementById('totalRoomCost');
//Starting Values
   let numberofNights= Number (inputNumberofNights)
   let taxRate=.12
   
  //Occupancy
let numberOfAdults = Number(inputNumberOfAdults);
 let numberOfChildren = Number(inputNumberOfChildren.value);
 let numberOfPeople = numberOfAdults + numberOfChildren
 let tooManypeople = checkOccupancyNotAllowed(numberOfPeople, kingBedRoom, twoBedRoom, queenBedRoom);
 
 const messageDiv = document.getElementById("messageDiv");
 
 if (tooManypeople){
  messageDiv.textContent = "Too many people!";
  return;
 }

 messageDiv.textContent = "";
 
 

 //Unknown values
let roomRate= getRoomRate(checkInDate,kingBedRoom,twoBedRoom,queenBedRoom);
 let originalRoomCost=roomRate*numberofNights
 let { discountedRoomCost, discount } = getDiscount(originalRoomCost, inputAAADiscount, inputMilitaryDiscount,inputNoDiscount);
 let taxApplied= getTax(taxRate,originalRoomCost,discountedRoomCost);
 let totalCostofRoom= originalRoomCost+taxApplied-discount;

 
 
 //Display Output
 outputOriginalRoomCost.value= originalRoomCost.toFixed (2);
 outputDiscountedRoomCost.value=discountedRoomCost.toFixed (2);
 outputDiscountapplied.value=discount.toFixed (2);
 outputTax.value=taxApplied.toFixed (2);
 outputTotalCost.value=totalCostofRoom.toFixed (2);
 
}

//will return true if too many people are in room.
function checkOccupancyNotAllowed(numOfPeople, kingBedRoom, twoBedRoom, queenBedRoom){
    if(kingBedRoom){
      return ( numOfPeople > 2);
    }
    else if(twoBedRoom){
      return (numOfPeople > 6)
    }
    else if (queenBedRoom){
      return (numOfPeople > 5)
    }
}


function maxOccupancy(occupancy){

  // if (occupancy > 5 && queenBedRoom){
  //   messageDiv.innerText = 
  //   "The room you selected will not hold your party".
  // }

  // if (occupancy > 2 && kingBedRoom){
  //   messageDiv.innerText = 
  //   "The room you selected will not hold your party".
  // }

  // if (occupancy > 6 && twoBedRoom){
  //   messageDiv.innerText = 
  //   "The room you selected will not hold your party".
  // }
 
  
}



function getTax(taxRate,originalRoomCost,discountedRoomCost){

  if(document.getElementById('noDiscount').checked)
  {
   let taxApplied=originalRoomCost*taxRate;
   return taxApplied
  }
  else {
    let taxApplied=discountedRoomCost*taxRate
  
    return taxApplied
  }
}


function getDiscount(originalRoomCost,inputAAADiscount,inputMilitaryDiscount, inputNoDiscount){

  let discount=0;
  let discountedRoomCost=originalRoomCost

  if (inputAAADiscount){
  discount =originalRoomCost * .10
   discountedRoomCost=originalRoomCost-discount
   return {discountedRoomCost,discount}
 }

 if (inputMilitaryDiscount){
  discount=originalRoomCost * .20 
  discountedRoomCost=originalRoomCost-discount
  return {discountedRoomCost,discount}
 }

 if (inputNoDiscount){
  discount=0;
  discountedRoomCost=0;
  return {discountedRoomCost,discount}

 }
}



function getRoomRate(checkInDate,kingBedRoom,twoBedRoom,queenBedRoom,) {
  //Get the starting values
  

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
 

}
else {
  
  if(queenBedRoom || kingBedRoom)
  {
     roomRate=150
    
  }
  else if (twoBedRoom){
   roomRate=210
   
  }
 

}
return roomRate;
  



}

