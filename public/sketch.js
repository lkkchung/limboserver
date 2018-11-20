
/*
  p5.js form example
  Creates a simple form and sends it to a server as a GET request

  created May 2016
  by Tom Igoe
*/

// var responseDiv, sendButton;    // make a button and a text div
// var nameField, ageField;        // text input fields

let barHeight;  //height of bar;
let barStatus;  //is the bar on or off;
let barRun; //how many partiers have passed under the bar?
let responseDive;
let sendButton;

function setup() {
  barHeight = createSlider(0, 255, 100);    // create the input fields
  barHeight.position(10, 10);
  barHeight.style('height', '80px')
  
  barStatus = createRadio();
  barStatus.option('on');
  barStatus.option('off');
  barStatus.style('width', '50px');

  barRun = createInput('20');

  responseDiv = createDiv('Waiting for response');
  responseDiv.position(10, 180);

  sendButton = createButton('send');
  sendButton.touchEnded(sendRequest);
}

function sendRequest() {
  // make a HTTP request with the client data:
  httpGet('/height/'+ barHeight.value() + '/status/' + barStatus.value() + '/score/' + barRun.value(), getResponse);
}

function getResponse(data) {
  responseDiv.html(data);              // show the server's response in the div
  var result = JSON.parse(data);       // parse the response into a JSON object
  console.log(result);        // get the elements of the object 
}
