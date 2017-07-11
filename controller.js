'use strict';
// initialise of Enigma2 Receiver
var HOST = '192.168.1.3';
// initialise of required additional services
var request = require('request');


/*
 * Device Controller
 * Events on that device from the Brain will be forwarded here for handling.
 * NOTE: there are no multiple devices support for this example, so only the button name is passed
 */
module.exports.onButtonPressed = function onButtonPressed(name) {
  console.log(`[CONTROLLER] ${name} button pressed`);

//Power ON or OFF check

//Toggle Power

//Key Tranmit Function
function sendKey(keyinput){
  var headers ={HOST};
   var options ={
     url: 'http://' + HOST +'/web/' + keyinput,
     headers: headers
   };
   function callback(error, response, body){
     if (!error && response.statusCode == 200) {
       console.log(body);
     }
   }
  request(options, callback);
}
//Key Press Handler
switch (name) {
  case "DIGIT 0":
   var keyinput = 'remotecontrol?command=11';
   sendKey(keyinput);
  }
switch (name) {
  case "DIGIT 1":
   var keyinput = 'remotecontrol?command=2';
   sendKey(keyinput);
  }
switch (name) {
  case "DIGIT 2":
   var keyinput = 'remotecontrol?command=3';
   sendKey(keyinput);
  }
switch (name) {
  case "DIGIT 3":
   var keyinput = 'remotecontrol?command=4';
   sendKey(keyinput);
  }
switch (name) {
  case "DIGIT 4":
   var keyinput = 'remotecontrol?command=5';
   sendKey(keyinput);
  }
switch (name) {
  case "DIGIT 5":
   var keyinput = 'remotecontrol?command=6';
   sendKey(keyinput);
  }
switch (name) {
  case "DIGIT 6":
   var keyinput = 'remotecontrol?command=7';
   sendKey(keyinput);
  }
switch (name) {
  case "DIGIT 7":
   var keyinput = 'remotecontrol?command=8';
   sendKey(keyinput);
  }
switch (name) {
  case "DIGIT 8":
   var keyinput = 'remotecontrol?command=9';
   sendKey(keyinput);
  }
switch (name) {
  case "DIGIT 9":
   var keyinput = 'remotecontrol?command=10';
   sendKey(keyinput);
  }
switch (name) {
  case "DIGIT 0":
   var keyinput = 'remotecontrol?command=11';
   sendKey(keyinput);
  }
switch (name) {
  case "CURSOR ENTER":
   var keyinput = 'remotecontrol?command=352';
   sendKey(keyinput);
  }
switch (name) {
  case "CURSOR UP":
   var keyinput = 'remotecontrol?command=103';
   sendKey(keyinput);
  }
switch (name) {
  case "CUSOR DOWN":
   var keyinput = 'remotecontrol?command=108';
   sendKey(keyinput);
  }
switch (name) {
  case "CURSOR LEFT":
   var keyinput = 'remotecontrol?command=105';
   sendKey(keyinput);
  }
switch (name) {
  case "CURSOR RIGHT":
   var keyinput = 'remotecontrol?command=106';
   sendKey(keyinput);
  }
switch (name) {
  case "FUNCTION RED":
   var keyinput = 'remotecontrol?command=398';
   sendKey(keyinput);
  }
switch (name) {
  case "FUNCTION GREEN":
   var keyinput = 'remotecontrol?command=399';
   sendKey(keyinput);
  }
switch (name) {
  case "FUNCTION YELLOW":
   var keyinput = 'remotecontrol?command=400';
   sendKey(keyinput);
  }
switch (name) {
  case "FUNCTION BLUE":
   var keyinput = 'remotecontrol?command=401';
   sendKey(keyinput);
  }
switch (name) {
  case "CHANNEL UP":
   var keyinput = 'remotecontrol?command=106';
   sendKey(keyinput);
  }
switch (name) {
  case "CHANNEL DOWN":
   var keyinput = 'remotecontrol?command=105';
   sendKey(keyinput);
  }
switch (name) {
  case "PLAY":
   var keyinput = 'remotecontrol?command=399';
   sendKey(keyinput);
  }
switch (name) {
  case "PAUSE":
   var keyinput = 'remotecontrol?command=400';
   sendKey(keyinput);
  }
switch (name) {
  case "STOP":
   var keyinput = 'remotecontrol?command=377';
   sendKey(keyinput);
  }
switch (name) {
  case "REVERSE":
   var keyinput = 'remotecontrol?command=398';
   sendKey(keyinput);
  }
switch (name) {
  case "FORWARD":
   var keyinput = 'remotecontrol?command=401';
   sendKey(keyinput);
  }
switch (name) {
  case "SKIP SECONDS BACKWARD":
   var keyinput = 'remotecontrol?command=398';
   sendKey(keyinput);
  }
switch (name) {
  case "SKIP SECONDS FORWARD":
   var keyinput = 'remotecontrol?command=401';
   sendKey(keyinput);
  }
switch (name) {
  case "BACK":
   var keyinput = 'remotecontrol?command=174';
   sendKey(keyinput);
  }
switch (name) {
  case "MENU":
   var keyinput = 'remotecontrol?command=139';
   sendKey(keyinput);
  }

};
