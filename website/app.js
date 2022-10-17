/* Global Variables */

// base url of OpenWeatherMap API
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';

// Personal API Key for OpenWeatherMap API
const apiKey = '&appid=83a0fafb9174fdf9b23d6b95436f58d3&units=imperial';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

//Assigning generate button element to a variable
const button = document.getElementById('generate');

//Adding event listener to listen for click event on call to action button
button.addEventListener('click', performAction);

/**Structuring the Function called by event listener which contains chaining
promises of invoking getData function (responsible for GET request) and
invoking of postData function (responsible for POST request) then 
invoking updateUI function to update the user interface*/
function performAction() {
    let zipCode = document.getElementById('zip').value;
    const feelEntry = document.getElementById('feelings').value;
    //Testing if zipCode is 5 digits using regular expression
    if (/^[0-9]{5}$/.test(zipCode)) {
        getData(baseURL+zipCode+apiKey) //Making GET request
        .then(data => {
            //Making POST request
            postData('http://localhost:8000/postData', {
                //Getting three key-value pairs to pass to app endpoint
                date: newDate,
                temperature: data.main.temp,
                userContent: feelEntry
            });
        })
        .then(() => updateUI()); //Updating UI based on API data
    } else {
        /**Hiding div element containing status, date, temp. and content
        in order to update them then show their div holder again for app
        performance*/
        document.getElementById('entryHolder').style.display = 'none';
        //Make changes while not displayed
        document.getElementById('status')
        .innerHTML = 'Status: Zip code MUST be 5 Digits!';
        document.getElementById('date').innerHTML = '';
        document.getElementById('temp').innerHTML = '';
        document.getElementById('content').innerHTML = '';
        //Ready to be displayed again
        document.getElementById('entryHolder').style.display = 'block';
        console.log('Error: Zip code MUST be 5 Digits!');
    }
}

//Creating async function for making GET request to OpenWeatherMap API
const getData = async (url) => {
    const response = await fetch(url);
    //cod is 200 if data is found in API
    if (response.status==200) {
        try {
            const data = await response.json();//Data in JSON format
            console.log(data);
            return data; 
        } catch(err) {
            console.log('Error', err);// Handling the error
        }
    } else {
        /**Hiding div element containing status, date, temp. and content
        in order to update them then show their div holder again for app
        performance*/
        document.getElementById('entryHolder').style.display = 'none';
        //Make changes while not displayed
        document.getElementById('status').innerHTML = 'Status: City NOT Found!';
        document.getElementById('date').innerHTML = '';
        document.getElementById('temp').innerHTML = '';
        document.getElementById('content').innerHTML = '';
        //Ready to be displayed again
        document.getElementById('entryHolder').style.display = 'block';
        console.log('Error: City NOT Found!');
    }
}

//Creating async function for making POST request to store data to app endpoint
const postData = async (url='', data={}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) //body data matching content-type of header
    });
    try {
        const newData = await response.json(); //Data in JSON format
        return newData;
    } catch(err) {
        console.log('Error', err);// Handling the error
    }
}

//Creating async function to respond to user interaction and update UI 
const updateUI = async () => {
    //Fetching data from app endpoint
    const request = await fetch('http://localhost:8000/getData');
    try{
      const allData = await request.json(); //data in JSON format.
      /**Hiding div element containing status, date, temp. and content
      in order to update them then show their div holder again for app
      performance*/
      document.getElementById('entryHolder').style.display = 'none';
      //Make changes while not displayed
      document.getElementById('date').innerHTML = 'Today: ' + allData.date;
      document.getElementById('temp').innerHTML = 'Temperature: ' 
      + Math.round(allData.temperature) + ' degrees';
      document.getElementById('content').innerHTML = 'Your feelings: ' 
      + allData.userContent;
      document.getElementById('status').innerHTML = '';
      //Ready to be displayed again
      document.getElementById('entryHolder').style.display = 'block';
    } catch(err){
        console.log('Error', err);// Handling the error
    }
  }