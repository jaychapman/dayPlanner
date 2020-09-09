# Day Planner
-----

## About this Project

Link to the deployed project: https://jaychapman.github.io/dayPlanner/

This is a simple day planner to keep track of appointments during the day. The application displays today's date at the top of the page and includes timeblocks for each hour of the work day. The user can enter information in the fields and store that information so it is available throughout the day. The information entered is still available no matter how many times the page is refreshed because it is stored in the browsers local storage. The timeblocks are also color coded to identify if an event is in the past or future and the timeblock for the current time is highlighted in a seperate color.

![Project Screenshot](/assets/img/screenshot1.jpg)

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


