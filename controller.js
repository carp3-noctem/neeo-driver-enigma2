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

//Key / Question Enigma 2 Transmit Function
function Inquire(Inquiry){
  var headers ={HOST};
   var options ={
     url: 'http://' + HOST +'/web/' + Inquiry,
     headers: headers
   };
   function callback(error, response, body){
     if (!error && response.statusCode == 200) {
       console.log(body);
     }
   }
  request(options, callback);
}

//Power ON or OFF check
function checkPowerState(powerstate){

}

//Toggle Power
switch (name) {
  case "POWER TOGGLE":
   var Inquiry = 'powerstate?newstate=0'
   Inquire(Inquiry);
}
/*
//Not Used Keys (used with AVR)
switch (name){
  case "VOLUME UP":
   var Inquiry ='vol?set=up';
   Inquire(Inquiry);

  case "VOLUME DOWN":
   var keyinout = 'vol?set=down';
   Inquire(Inquiry);

  case "MUTE TOGGLE":
   var Inquiry = 'vol?set=mute';
   Inquire(Inquiry);
}
*/

//Key Press Handler
switch (name) {
  case "DIGIT 0":
   var Inquiry = 'remotecontrol?command=11';
   Inquire(Inquiry);

  case "DIGIT 1":
   var Inquiry = 'remotecontrol?command=2';
   Inquire(Inquiry);

  case "DIGIT 2":
   var Inquiry = 'remotecontrol?command=3';
   Inquire(Inquiry);
  
  case "DIGIT 3":
   var Inquiry = 'remotecontrol?command=4';
   Inquire(Inquiry);

  case "DIGIT 4":
   var Inquiry = 'remotecontrol?command=5';
   Inquire(Inquiry);

  case "DIGIT 5":
   var Inquiry = 'remotecontrol?command=6';
   Inquire(Inquiry);

  case "DIGIT 6":
   var Inquiry = 'remotecontrol?command=7';
   Inquire(Inquiry);

  case "DIGIT 7":
   var Inquiry = 'remotecontrol?command=8';
   Inquire(Inquiry);

  case "DIGIT 8":
   var Inquiry = 'remotecontrol?command=9';
   Inquire(Inquiry);
  
  case "DIGIT 9":
   var Inquiry = 'remotecontrol?command=10';
   Inquire(Inquiry);

  case "DIGIT 0":
   var Inquiry = 'remotecontrol?command=11';
   Inquire(Inquiry);

  case "CURSOR ENTER":
   var Inquiry = 'remotecontrol?command=352';
   Inquire(Inquiry);

  case "CURSOR UP":
   var Inquiry = 'remotecontrol?command=103';
   Inquire(Inquiry);

  case "CURSOR DOWN":
   var Inquiry = 'remotecontrol?command=108';
   Inquire(Inquiry);

  case "CURSOR LEFT":
   var Inquiry = 'remotecontrol?command=105';
   Inquire(Inquiry);

  case "CURSOR RIGHT":
   var Inquiry = 'remotecontrol?command=106';
   Inquire(Inquiry);

  case "FUNCTION RED":
   var Inquiry = 'remotecontrol?command=398';
   Inquire(Inquiry);

  case "FUNCTION GREEN":
   var Inquiry = 'remotecontrol?command=399';
   Inquire(Inquiry);

  case "FUNCTION YELLOW":
   var Inquiry = 'remotecontrol?command=400';
   Inquire(Inquiry);

  case "FUNCTION BLUE":
   var Inquiry = 'remotecontrol?command=401';
   Inquire(Inquiry);

  case "CHANNEL UP":
   var Inquiry = 'remotecontrol?command=106';
   Inquire(Inquiry);

  case "CHANNEL DOWN":
   var Inquiry = 'remotecontrol?command=105';
   Inquire(Inquiry);

  case "PLAY":
   var Inquiry = 'remotecontrol?command=399';
   Inquire(Inquiry);

  case "PAUSE":
   var Inquiry = 'remotecontrol?command=400';
   Inquire(Inquiry);

  case "STOP":
   var Inquiry = 'remotecontrol?command=377';
   Inquire(Inquiry);

  case "REVERSE":
   var Inquiry = 'remotecontrol?command=398';
   Inquire(Inquiry);

  case "FORWARD":
   var Inquiry = 'remotecontrol?command=401';
   Inquire(Inquiry);

  case "SKIP SECONDS BACKWARD":
   var Inquiry = 'remotecontrol?command=398';
   Inquire(Inquiry);

  case "SKIP SECONDS FORWARD":
   var Inquiry = 'remotecontrol?command=401';
   Inquire(Inquiry);

  case "BACK":
   var Inquiry = 'remotecontrol?command=174';
   Inquire(Inquiry);

  case "MENU":
   var Inquiry = 'remotecontrol?command=139';
   Inquire(Inquiry);
  }

};
