# Day Planner
-----

## About this Project

Link to the deployed project: https://jaychapman.github.io/dayPlanner/

This is a simple day planner to keep track of appointments during the day. The application displays today's date at the top of the page and includes timeblocks for each hour of the work day. The user can enter information in the fields and store that information so it is available throughout the day. The information entered is still available no matter how many times the page is refreshed because it is stored in the browsers local storage. The timeblocks are also color coded to identify if an event is in the past or future and the timeblock for the current time is highlighted in a seperate color.

insert screenshot

## How I created this project

This project uses [moment.js](www.https://momentjs.com/){:target="_blank"} to get the current time and dates used as references for this project. For this project moment.js is accessed via CDN link at the bottom of the body section of the html page. Moment.js is written using javaScript and therefore requires a script tag and appropriate link to the content: `<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>`.  The documentation page at their website shows you how to utilize and format the data. For example, to display the date at the top of the page I used the following code: 
```var todaysDateDisplay = today.format("dddd, MMMM Do");
document.getElementById('currentDay').innerHTML = todaysDateDisplay;```

