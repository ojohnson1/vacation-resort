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
  const checkInDate = new Date (document.getElementById ("checkInDate").value);
  const inputNumberofNights= document.getElementById('numberOfNights').value;
  const inputNoDiscount=document.getElementById("noDiscount").checked;
  const inputNumberOfAdults=document.getElementById("numberOfAdults").value;
  const inputNumberOfChildren=document.getElementById("numberOfChildren").value;
  const messageDiv = document.getElementById("messageDiv");

 //Output fields
  let outputDiscountedRoomCost=document.getElementById('discountedRoomCost');
  let outputOriginalRoomCost=document.getElementById("originalRoomCost");
  let outputDiscountapplied=document.getElementById('discountApplied');
  let outputTax=document.getElementById('taxApplied');
  let outputTotalCost=document.getElementById('totalRoomCost');
//Starting Values
   let numberofNights= Number (inputNumberofNights)
   let taxRate=.12
//Unknown values

let roomRate= getRoomRate(checkInDate,kingBedRoom,twoBedRoom,queenBedRoom);
 let originalRoomCost=roomRate*numberofNights
 let { discountedRoomCost, discount } = getDiscount(originalRoomCost, inputAAADiscount, inputMilitaryDiscount,inputNoDiscount);
 let taxApplied= getTax(taxRate,originalRoomCost,discountedRoomCost);
 let totalCostofRoom= originalRoomCost+taxApplied-discount;

 //let numberOfAdults= Number(inputNumberOfAdults);
// let numberOfChildren= Number(inputNumberOfChildren.value);
// let occupancy=numberOfAdults + numberOfChildren
//  getOccupancy();
 
 //Display Output
 outputOriginalRoomCost.value= originalRoomCost.toFixed (2);
 outputDiscountedRoomCost.value=discountedRoomCost.toFixed (2);
 outputDiscountapplied.value=discount.toFixed (2);
 outputTax.value=taxApplied.toFixed (2);
 outputTotalCost.value=totalCostofRoom.toFixed (2);
 
}

//function getOccupancy(occupancy){
// if( occupancy > 6 && queenBedRoom){
 // messageDiv.innerHTML="This room can only hold 5 people "


//else if(occupancy > 7 && twoBedRoom){
//  messageDiv.innerHTML="The room can only hold 6 people"


//else if (occupancy > 3 && kingBedRoom){
// messageDiv.innerHTML="The room can only hold 2 people"






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



function getRoomRate(checkInDate,kingBedRoom,twoBedRoom,queenBedRoom) {
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

return roomRate;
  



}

