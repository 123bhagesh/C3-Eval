// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
var money=document.getElementById("wallet")
// var data=Number(localStorage.getItem("amount"))
var amt =Number(localStorage.getItem("amount"))
money.innerText=amt;

var array = JSON.parse(localStorage.getItem("movie"))

console.log(array)
var appMovie=document.getElementById("movie")
array.map(function(elem){

  
  let p= document.createElement("p")
  p.innerText = elem.Title

  let poster=document.createElement("img")
  poster.src=elem.Poster


  appMovie.append(p, poster)
})

var price=Number(100)
// // console.log(price)

var conbut= document.getElementById("confirm")
conbut.addEventListener("click",function(){
 
  
  var numSeat = document.getElementById("number_of_seats").value
// console.log(numSeat)

var spri = price*numSeat
console.log(spri)

var remain =amt-spri
  console.log(remain)


  if(amt<remain){
    alert("Insufficient Balance!")
  }
  // else{
  //   alert(Booking successful!)
  // }

})
