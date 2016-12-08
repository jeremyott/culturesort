// create variable to store name
// create variable to store location
// create variable to store workforce years
// Use document.html to set the specific

// $( document ).ready(function() {
//   var name = "";
//   var answer = prompt("Hey Stranger, What's your name?", "Jeremy Ott");
//   return answer
// });

//$('#onboard').append('<h1>Hey There Stranger! Whats your name?</h1></br><form><input type="text" name="" value=""><input type="submit"name="" value="submit"</form>');

//Build Person Object

//Get Name
// function personName(){
// var nameOne = document.getElementById('firstName').value;
// console.log ("success!");
// console.log (nameOne + " is great");
//  }
//
//
// //Get City and State
// function personLocation(){
//  var cityName = document.getElementById('city').value
//  var stateName = document.getElementById('state').value
//  }
//
// function personWork(){
//   var workYears = document.getElementById('years').value
// }

// if(firstname.length>0){
//   document.getElementById('onboard').class("hide");
// }

//Questions
// You are almost never late for your appointments
// You like to be engaged in an active and fast-paced job
// You enjoy having a wide circle of acquaintances
// You feel involved when watching TV soaps
// You are usually the first to react to a sudden event, such as the telephone ringing or unexpected question
// You are more interested in a general idea than in the details of its realization
// You tend to be unbiased even if this might endanger your good relations with people
// Strict observance of the established rules is likely to prevent a good outcome
// It's difficult to get you excited
//  It is in your nature to assume responsibility
//

//Function animateLogo triggered on document load.

//Event listener to check for event completion of animateLogo. Replace with form.
function showForm(){
  document.getElementById("logo").className = "hide";
  document.getElementById("formWrapper").className = "form-wrapper active";
  document.getElementById("nav").className = "container-fluid active";
}
//form submit
function success(e){
document.getElementById("message-form").className = "hide";
document.getElementById("cards").className = "wrap active";
document.getElementById("actions").className = "actions active";
document.getElementById("status").className = "active";
$('#formQuestion').submit(false);
console.log("success!!")

}

//Function person creates object "person" with following attributes: name, years in workforce, age, and industry.
function person(fullname, workforce) {
  this.fullname = fullname;
  this.workforce = workforce;
}

var person1 = new person(10,10)
//Function newPerson, adds all attribute values to new object using template
//Convert to JSON
//Function logPerson makes AJax call to firebase, passing json over and creating new Db table / table row
//Function cardSort replaces form on submit with card questions.

//Function dislikeScore adds one point to dislike score
//Function likeScore adds one point to like score
//Function totalsScore calculates score
function scoreTotal(){
var scoreTotal = 10 + likeScore - dislikeScore;
console.log(scoreTotal);
}
//Function personType loops through score options and returns personality type
//Function showPersonality displays personality type on screen and twitter button
//Function tweetScore initializes call to twitter.
//Stored personType is passed on to twitter for sharing
