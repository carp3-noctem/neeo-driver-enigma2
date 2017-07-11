'use strict';
// initialise of Enigma2 Receiver
var HOST = '$$LOCAL-IP';
// initialise of required additional services
var request = require('request');

/*
 * Device Controller
 * Events on that device from the Brain will be forwarded here for handling.
 * NOTE: there are no multiple devices support for this example, so only the button name is passed
 */
module.exports.onButtonPressed = function onButtonPressed(name) {
  console.log(`[CONTROLLER] ${name} button pressed`);

  //Inquire Enigma2 Box
  function Inquire(Inquiry) {
    var options = {
      url: 'http://' + HOST + '/web/' + Inquiry,
      headers: { HOST }
    };
    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
    }
    request(options, callback);
  }

  //Power ON / OFF check
  function checkPowerState(powerstate) {
    var options = {
      url: 'http://' + HOST + '/web/powerstate',
      headers: { HOST }
    };
    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
        if (powerstate === 'ON' && body.indexOf('true') !== -1) {
          Inquire('powerstate?newstate=0');
        }
        if (powerstate === 'OFF' && body.indexOf('false') !== -1) {
          Inquire('powerstate?newstate=0');
        }
      }
    }
    request(options, callback);
  }

  //Toggle Power
  switch (name) {
    case "POWER OFF":
      checkPowerState('OFF');
      break;

    case "POWER ON":
      checkPowerState('ON');
      break;

    case "POWER TOGGLE":
      var Inquiry = 'powerstate?newstate=0'
      Inquire(Inquiry);
      break;

    case "VOLUME UP":
      var Inquiry = 'vol?set=up';
      Inquire(Inquiry);
      break;

    case "VOLUME DOWN":
      var keyinout = 'vol?set=down';
      Inquire(Inquiry);
      break;

    case "MUTE TOGGLE":
      var Inquiry = 'vol?set=mute';
      Inquire(Inquiry);
      break;

    case "DIGIT 0":
      var Inquiry = 'remotecontrol?command=11';
      Inquire(Inquiry);
      break;

    case "DIGIT 1":
      var Inquiry = 'remotecontrol?command=2';
      Inquire(Inquiry);
      break;

    case "DIGIT 2":
      var Inquiry = 'remotecontrol?command=3';
      Inquire(Inquiry);
      break;

    case "DIGIT 3":
      var Inquiry = 'remotecontrol?command=4';
      Inquire(Inquiry);
      break;

    case "DIGIT 4":
      var Inquiry = 'remotecontrol?command=5';
      Inquire(Inquiry);
      break;

    case "DIGIT 5":
      var Inquiry = 'remotecontrol?command=6';
      Inquire(Inquiry);
      break;

    case "DIGIT 6":
      var Inquiry = 'remotecontrol?command=7';
      Inquire(Inquiry);
      break;

    case "DIGIT 7":
      var Inquiry = 'remotecontrol?command=8';
      Inquire(Inquiry);
      break;

    case "DIGIT 8":
      var Inquiry = 'remotecontrol?command=9';
      Inquire(Inquiry);
      break;

    case "DIGIT 9":
      var Inquiry = 'remotecontrol?command=10';
      Inquire(Inquiry);
      break;

    case "DIGIT 0":
      var Inquiry = 'remotecontrol?command=11';
      Inquire(Inquiry);
      break;

    case "CURSOR ENTER":
      var Inquiry = 'remotecontrol?command=352';
      Inquire(Inquiry);
      break;

    case "CURSOR UP":
      var Inquiry = 'remotecontrol?command=103';
      Inquire(Inquiry);
      break;

    case "CURSOR DOWN":
      var Inquiry = 'remotecontrol?command=108';
      Inquire(Inquiry);
      break;

    case "CURSOR LEFT":
      var Inquiry = 'remotecontrol?command=105';
      Inquire(Inquiry);
      break;

    case "CURSOR RIGHT":
      var Inquiry = 'remotecontrol?command=106';
      Inquire(Inquiry);
      break;

    case "FUNCTION RED":
      var Inquiry = 'remotecontrol?command=398';
      Inquire(Inquiry);
      break;

    case "FUNCTION GREEN":
      var Inquiry = 'remotecontrol?command=399';
      Inquire(Inquiry);
      break;

    case "FUNCTION YELLOW":
      var Inquiry = 'remotecontrol?command=400';
      Inquire(Inquiry);
      break;

    case "FUNCTION BLUE":
      var Inquiry = 'remotecontrol?command=401';
      Inquire(Inquiry);
      break;

    case "CHANNEL UP":
      var Inquiry = 'remotecontrol?command=106';
      Inquire(Inquiry);
      break;

    case "CHANNEL DOWN":
      var Inquiry = 'remotecontrol?command=105';
      Inquire(Inquiry);
      break;

    case "PLAY":
      var Inquiry = 'remotecontrol?command=399';
      Inquire(Inquiry);
      break;

    case "PAUSE":
      var Inquiry = 'remotecontrol?command=400';
      Inquire(Inquiry);
      break;

    case "STOP":
      var Inquiry = 'remotecontrol?command=377';
      Inquire(Inquiry);
      break;

    case "REVERSE":
      var Inquiry = 'remotecontrol?command=398';
      Inquire(Inquiry);
      break;

    case "FORWARD":
      var Inquiry = 'remotecontrol?command=401';
      Inquire(Inquiry);
      break;

    case "SKIP SECONDS BACKWARD":
      var Inquiry = 'remotecontrol?command=398';
      Inquire(Inquiry);
      break;

    case "SKIP SECONDS FORWARD":
      var Inquiry = 'remotecontrol?command=401';
      Inquire(Inquiry);
      break;

    case "BACK":
      var Inquiry = 'remotecontrol?command=174';
      Inquire(Inquiry);
      break;

    case "MENU":
      var Inquiry = 'remotecontrol?command=139';
      Inquire(Inquiry);
      break;
  }

};
