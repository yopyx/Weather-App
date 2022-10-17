# Weather-Journal App Project

This project aims to create an asynchronous web app using Web API which is *openWeatherMap API* and user data to dynamically update the user interface of the app by structuring a local server to pass the data between server-side and client-side.

## Table of Contents

### General Info

This project allows users to look up the weather of countries through entering their zip code by using *openWeatherMap API* which return the temperature data in the updated status block besides returning today's date and user feelings entry according to the user content.
Here we have three states:
1. API responding is a success and the temperature data is returned
![image showing updated status in 1st case](sources/first.png)
2. API responding that the city is not found
![image showing updated status in 2nd case](sources/second.png)
3. GET request is not made because of incorrect zip code
![image showing updated status in 3rd case](sources/third.png)

### Technologies

#### A list of technologies used within the project:

1. HTML5
2. CSS3
3. ES6 (ES2015)
4. Node.js and Express.js

### Installation

Get a copy of starter file of the project.
```
$ git clone https://github.com/udacity/fend.git
$ cd d:/fend-refresh-2019/fend-refresh-2019/projects/weather-journal-app
```

Use the package manager npm of node.js to install express, body-parser and cors.
```
$ npm install express
$ npm install body-parser
$ npm install cors
```
Checking that the server is running.
```
$ node server.js
```

### Development

The starter project has some HTML and CSS styling to display a static version of the project, it's development is to setup a server and client-side code in order to make requests and intialize routes for data to pass between server-side and client-side allowing the page to be **responsive** to user interactions and improving the app's functionality using *ES6* and chaining promises.

### Collaboration

*This project is an Open Source project encouraging everyone to engage and contribute.*
Check development notes for Any details on setting up a development environment, running tests, releasing versions...

### Author

*Yomna Ali*

### FAQs

**How to use the app?**
*By passing correct zip code and you can enter 'how you feel today' then click on generate button*

**How to get support help regarding some questions about the website?**
*For general usage questions, Use weather journal app's help documetation*.
*In case you want to ask other specific questions, Send us an email on WeaJo@gmail.com*.