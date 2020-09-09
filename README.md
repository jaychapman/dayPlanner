# Day Planner
-----

## About this Project

Link to the deployed project: https://jaychapman.github.io/dayPlanner/

This is a simple day planner to keep track of appointments during the day. The application displays today's date at the top of the page and includes timeblocks for each hour of the work day. The user can enter information in the fields and store that information so it is available throughout the day. The information entered is still available no matter how many times the page is refreshed because it is stored in the browsers local storage. The timeblocks are also color coded to identify if an event is in the past or future and the timeblock for the current time is highlighted in a seperate color.

![Project Screenshot](/assets/img/screenshot2.jpg)

-----
## How I created this project

This project uses [moment.js](www.https://momentjs.com/) to get the current time and dates used as references for this project. For this project moment.js is accessed via CDN link at the bottom of the body section of the html page. Moment.js is written using javaScript and therefore requires a script tag and appropriate link to the content: `<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>`.  The documentation page at their website shows you how to utilize and format the data. For example, to display the date at the top of the page I used the following code: 
```
// Moment.js - this sets the variable today as current day
const today = moment();

// Display Today's Date in header
var todaysDateDisplay = today.format("dddd, MMMM Do");
document.getElementById('currentDay').innerHTML = todaysDateDisplay;
```
I used a similar method for setting the current time: `var currentTime = moment().hour();`. I then created variables for each time period required for the planner starting at 9 a.m and ending at 5 p.m. These variables were assigned as integers with the number corresponding to their time. For example: `var timeDisplay9 = 9;` I then used else if statements to compare the currentTime variable to the timeDisplay variables to determine if the value was equal to, greater than, or less than the value of the current time. This determines the background color of the input area of the planner to reference if an event is in the past, present, or future.

When the user enters information in a timeblock and clicks the save button, the information is stored to local storage in the web browser and will remain there even when the page is refreshed.

![Example of Local Storage](/assets/img/localStorageExample.jpg)

In order to display an event in the timeblock I used the following logic. At first the timeblock will display a placeholder with the text, "Add Event". The javaScript code then looks for an key inside of local storage. If a key exists, the value of that key is displayed inside of the textarea value, if there is no key then an empty string is returned and the timeblock continues to display the placeholder text. This is accomplished using an if else statemtent looking for a null value:
```
// 9 AM
if (localStorage.getItem("nineEvent")===null){
  $("#nineTextDisplay").val("");
}else{
  $("#nineTextDisplay").val(localStorage.getItem("nineEvent"));
}
```
In order to add an event, I created an click function which creates a variable to capture the value entered in the textarea. The function then creates a key in local storage using `localStorage.setItem()` and sets the value equal to whatever is written in the textarea. 
```
// Click function to save events for 9 AM
$("#fas9").click(function(){ 
  var nineEvent = $("#nineTextDisplay").val(); 
  localStorage.setItem("nineEvent", nineEvent);
  location.reload();
});
```
Then the page is reloaded and the event is shown in the textarea because the `// 9 AM` code above now finds a key in local storage and returns the value.

------
## What I learned

This assignment was an excellent learning experience. I learned a lot about local storage and how to check for an item, set an item, and retrieve an item. I feel really proud of this project because I believe that I used some great problem solving skills to accomplish these goals. I spent a lot of time planning and a lot of trial and error to accomplish the stated goals. I also learned about moment.js and how to use current time and dates in my future projects.

While I am very happy with this project overall, I would still like to improve on a few aspects in the future. When I look at my js code, I realize that I used a lot of if statements and repetition to accomplish the results. I'm sure there must be a simplier way to write this code and I must continue to try to improve my coding skills. 

Also this application is only useful on a desktop at the moment and I want to revisit this project in the future and make the layout responsive.

Here's the link to the deployed project: https://jaychapman.github.io/dayPlanner/

Thanks for reading this

Jay
