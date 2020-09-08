// No code above this line - it is before document.ready
// Document Ready
$(document).ready(function(){


// Start Code Here

// Moment.js - this sets the variable today as current day
const today = moment();


// Display Today's Date in header
var todaysDateDisplay = today.format("dddd, MMMM Do");
document.getElementById('currentDay').innerHTML = todaysDateDisplay;


// Current time
var currentTime = moment().hour();

// Hour variables
var timeDisplay9 = 9;
var timeDisplay10 = 10;
var timeDisplay11 = 11;
var timeDisplay12 = 12;
var timeDisplay1 = 13;
var timeDisplay2 = 14;
var timeDisplay3 = 15;
var timeDisplay4 = 16;
var timeDisplay5 = 17;

console.log(currentTime);
// Check local storage for saved events and display to textarea
// ------------------------------------------------------------


// 9 AM
if (localStorage.getItem("nineEvent")===null){
  $("#nineTextDisplay").val("");
}else{
  $("#nineTextDisplay").val(localStorage.getItem("nineEvent"));
}

// 10 AM
if (localStorage.getItem("tenEvent")===null){
}else{
  $("#tenTextDisplay").val(localStorage.getItem("tenEvent"));
}

// 11 AM
if (localStorage.getItem("elevenEvent")===null){
  $("#elevenTextDisplay").val("");
}else{
  $("#elevenTextDisplay").val(localStorage.getItem("elevenEvent"));
}

// 12 PM
if (localStorage.getItem("twelveEvent")===null){
  $("#twelveTextDisplay").val("");
}else{
  $("#twelveTextDisplay").val(localStorage.getItem("twelveEvent"));
}

// 1 PM
if (localStorage.getItem("oneEvent")===null){
  $("#oneTextDisplay").val("");
}else{
  $("#oneTextDisplay").val(localStorage.getItem("oneEvent"));
}

// 2 PM
if (localStorage.getItem("twoEvent")===null){
  $("#twoTextDisplay").val("");
}else{
  $("#twoTextDisplay").val(localStorage.getItem("twoEvent"));
}

// 3 PM
if (localStorage.getItem("threeEvent")===null){
  $("#threeTextDisplay").val("");
}else{
  $("#threeTextDisplay").val(localStorage.getItem("threeEvent"));
}

// 4 PM
if (localStorage.getItem("fourEvent")===null){
  $("#fourTextDisplay").val("");
}else{
  $("#fourTextDisplay").val(localStorage.getItem("fourEvent"));
}

// 5 PM
if (localStorage.getItem("fiveEvent")===null){
  $("#fiveTextDisplay").val("");
}else{
  $("#fiveTextDisplay").val(localStorage.getItem("fiveEvent"));
}


//--------------------- Timeblocks --------------------------

// 9 AM timeblock

// Change background colors based on current time
if(timeDisplay9 === currentTime){
  $("#nineTextDisplay").css("background-color", "#ff6961");
}else if (timeDisplay9 < currentTime){
  $("#nineTextDisplay").css("background-color", "#d3d3d3");
}else{
  $("#nineTextDisplay").css("background-color", "#77dd77");
}

// Click function to save events for 9 AM
$("#fas9").click(function(){ 
  var nineEvent = $("#nineTextDisplay").val(); 
  localStorage.setItem("nineEvent", nineEvent);
  location.reload();
  //console.log(nineEvent);
}); 


// 10 AM timeblock

// Change background colors based on current time
if(timeDisplay10 === currentTime){
  $("#tenTextDisplay").css("background-color", "#ff6961");
}else if (timeDisplay10 < currentTime){
  $("#tenTextDisplay").css("background-color", "#d3d3d3");
}else{
  $("#tenTextDisplay").css("background-color", "#77dd77");
}

// Click function to save events for 10 AM
$("#fas10").click(function(){ 
  var tenEvent = $("#tenTextDisplay").val(); 
  localStorage.setItem("tenEvent", tenEvent);
  location.reload();
}); 


// 11 AM timeblock

// Change background colors based on current time
if(timeDisplay11 === currentTime){
  $("#elevenTextDisplay").css("background-color", "#ff6961");
}else if (timeDisplay11 < currentTime){
  $("#elevenTextDisplay").css("background-color", "#d3d3d3");
}else{
  $("#elevenTextDisplay").css("background-color", "#77dd77");
}

// Click function to save events for 11 AM
$("#fas11").click(function(){ 
  var elevenEvent = $("#elevenTextDisplay").val(); 
  localStorage.setItem("elevenEvent", elevenEvent);
  location.reload();
});


// 12 PM timeblock

// Change background colors based on current time
if(timeDisplay12 === currentTime){
  $("#twelveTextDisplay").css("background-color", "#ff6961");
}else if (timeDisplay12 < currentTime){
  $("#twelveTextDisplay").css("background-color", "#d3d3d3");
}else{
  $("#twelveTextDisplay").css("background-color", "#77dd77");
}

// Click function to save events for 12 PM
$("#fas12").click(function(){ 
  var twelveEvent = $("#twelveTextDisplay").val(); 
  localStorage.setItem("twelveEvent", twelveEvent);
  location.reload();
});


// 1 PM timeblock

// Change background colors based on current time
if(timeDisplay1 === currentTime){
  $("#oneTextDisplay").css("background-color", "#ff6961");
}else if (timeDisplay1 < currentTime){
  $("#oneTextDisplay").css("background-color", "#d3d3d3");
}else{
  $("#oneTextDisplay").css("background-color", "#77dd77");
}

// Click function to save events for 1 PM
$("#fas1").click(function(){ 
  var oneEvent = $("#oneTextDisplay").val(); 
  localStorage.setItem("oneEvent", oneEvent);
  location.reload();
});


// 2 PM timeblock

// Change background colors based on current time
if(timeDisplay2 === currentTime){
  $("#twoTextDisplay").css("background-color", "#ff6961");
}else if (timeDisplay2 < currentTime){
  $("#twoTextDisplay").css("background-color", "#d3d3d3");
}else{
  $("#twoTextDisplay").css("background-color", "#77dd77");
}

// Click function to save events for 2 PM
$("#fas2").click(function(){ 
  var twoEvent = $("#twoTextDisplay").val(); 
  localStorage.setItem("twoEvent", twoEvent);
  location.reload();
});


// 3 PM timeblock

// Change background colors based on current time
if(timeDisplay3 === currentTime){
  $("#threeTextDisplay").css("background-color", "#ff6961");
}else if (timeDisplay3 < currentTime){
  $("#threeTextDisplay").css("background-color", "#d3d3d3");
}else{
  $("#threeTextDisplay").css("background-color", "#77dd77");
}

// Click function to save events for 3 PM
$("#fas3").click(function(){ 
  var threeEvent = $("#threeTextDisplay").val(); 
  localStorage.setItem("threeEvent", threeEvent);
  location.reload();
});


// 4 PM timeblock

// Change background colors based on current time
if(timeDisplay4 === currentTime){
  $("#fourTextDisplay").css("background-color", "#ff6961");
}else if (timeDisplay4 < currentTime){
  $("#fourTextDisplay").css("background-color", "#d3d3d3");
}else{
  $("#fourTextDisplay").css("background-color", "#77dd77");
}

// Click function to save events for 4 PM
$("#fas4").click(function(){ 
  var fourEvent = $("#fourTextDisplay").val(); 
  localStorage.setItem("fourEvent", fourEvent);
  location.reload();
});


// 5 PM timeblock

// Change background colors based on current time
if(timeDisplay5 === currentTime){
  $("#fiveTextDisplay").css("background-color", "#ff6961");
}else if (timeDisplay5 < currentTime){
  $("#fiveTextDisplay").css("background-color", "#d3d3d3");
}else{
  $("#fiveTextDisplay").css("background-color", "#77dd77");
}

// Click function to save events for 5 PM
$("#fas5").click(function(){ 
  var fiveEvent = $("#fiveTextDisplay").val(); 
  localStorage.setItem("fiveEvent", fiveEvent);
  location.reload();
});




// End Code Here

});

// No code below this line - this is outside of the document.ready
