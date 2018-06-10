'use strict';
const config = require('./config');
var request = require('request');
var HOST = enigma2.IP;
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
      
    case "INFO":
      var Inquiry = 'remotecontrol?command=358';
      Inquire(Inquiry);
      break;
    
    case "MY RECORDINGS":
      var Inquiry = 'remotecontrol?command=393';
      Inquire(Inquiry);
      break;
    
    case "RECORD":
      var Inquiry = 'remotecontrol?command=393';
      Inquire(Inquiry);
      break;

    case "LIVE":
      var Inquiry = 'remotecontrol?command=377';
      Inquire(Inquiry);
      break;

    case "@":
      var Inquiry = 'remotecontrol?command=373';
      Inquire(Inquiry);
      break;  
    
    case "Audio":
      var Inquiry = 'remotecontrol?command=392';
      Inquire(Inquiry);
      break;

    case "sBack":
      var Inquiry = 'remotecontrol?command=158';
      Inquire(Inquiry);
      break;  
    
    case "Bouquet DOWN":
      var Inquiry = 'remotecontrol?command=403';
      Inquire(Inquiry);
      break;

    case "Bouquet UP":
      var Inquiry = 'remotecontrol?command=402';
      Inquire(Inquiry);
      break;

    case "DVD":
      var Inquiry = 'remotecontrol?command=389';
      Inquire(Inquiry);
      break;

    case "Eject":
      var Inquiry = 'remotecontrol?command=161';
      Inquire(Inquiry);
      break;
    
    case "End":
      var Inquiry = 'remotecontrol?command=107';
      Inquire(Inquiry);
      break;

    case "F1":
      var Inquiry = 'remotecontrol?command=59';
      Inquire(Inquiry);
      break;
    
    case "F2":
      var Inquiry = 'remotecontrol?command=60';
      Inquire(Inquiry);
      break;

    case "F3":
      var Inquiry = 'remotecontrol?command=61';
      Inquire(Inquiry);
      break;

    case "F4":
      var Inquiry = 'remotecontrol?command=62';
      Inquire(Inquiry);
      break;
    
    case "FFW":
      var Inquiry = 'remotecontrol?command=163';
      Inquire(Inquiry);
      break;
    
    case "FRW":
      var Inquiry = 'remotecontrol?command=165';
      Inquire(Inquiry);
      break;
  
    case "FAV":
      var Inquiry = 'remotecontrol?command=364';
      Inquire(Inquiry);
      break;

    case "File":
      var Inquiry = 'remotecontrol?command=144';
      Inquire(Inquiry);
      break;

    case "Find":
      var Inquiry = 'remotecontrol?command=136';
      Inquire(Inquiry);
      break;

    case "Folder":
      var Inquiry = 'remotecontrol?command=361';
      Inquire(Inquiry);
      break;

    case "FWD":
      var Inquiry = 'remotecontrol?command=208';
      Inquire(Inquiry);
      break;

    case "Help":
      var Inquiry = 'remotecontrol?command=138';
      Inquire(Inquiry);
      break;

    case "Home":
      var Inquiry = 'remotecontrol?command=102';
      Inquire(Inquiry);
      break;

    case "Jump":
      var Inquiry = 'remotecontrol?command=519';
      Inquire(Inquiry);
      break;

      case "Mark":
      var Inquiry = 'remotecontrol?command=834';
      Inquire(Inquiry);
      break;

    case "n":
      var Inquiry = 'remotecontrol?command=354';
      Inquire(Inquiry);
      break;

    case "sNext":
      var Inquiry = 'remotecontrol?command=407';
      Inquire(Inquiry);
      break;

    case "Open SAT":
      var Inquiry = 'remotecontrol?command=381';
      Inquire(Inquiry);
      break;

    case "Option":
      var Inquiry = 'remotecontrol?command=357';
      Inquire(Inquiry);
      break;

    case "Page DOWN":
      var Inquiry = 'remotecontrol?command=109';
      Inquire(Inquiry);
      break;

    case "Page UP":
      var Inquiry = 'remotecontrol?command=104';
      Inquire(Inquiry);
      break;

    case "sPause":
      var Inquiry = 'remotecontrol?command=119';
      Inquire(Inquiry);
      break;

    case "PiP":
      var Inquiry = 'remotecontrol?command=375';
      Inquire(Inquiry);
      break;

    case "sPlay":
      var Inquiry = 'remotecontrol?command=207';
      Inquire(Inquiry);
      break;

    case "sPlayPause":
      var Inquiry = 'remotecontrol?command=164';
      Inquire(Inquiry);
      break;

    case "Playlist":
      var Inquiry = 'remotecontrol?command=395';
      Inquire(Inquiry);
      break;

    case "Plugin":
      var Inquiry = 'remotecontrol?command=438';
      Inquire(Inquiry);
      break;

    case "Portal":
      var Inquiry = 'remotecontrol?command=156';
      Inquire(Inquiry);
      break;

    case "sPrevious":
      var Inquiry = 'remotecontrol?command=412';
      Inquire(Inquiry);
      break;

    case "Radio":
      var Inquiry = 'remotecontrol?command=385';
      Inquire(Inquiry);
      break;

    case "sRecord":
      var Inquiry = 'remotecontrol?command=167';
      Inquire(Inquiry);
      break;

    case "sRewind":
      var Inquiry = 'remotecontrol?command=168';
      Inquire(Inquiry);
      break;

    case "Search":
      var Inquiry = 'remotecontrol?command=535';
      Inquire(Inquiry);
      break;

    case "Media":
      var Inquiry = 'remotecontrol?command=226';
      Inquire(Inquiry);
      break;

    case "Sleep":
      var Inquiry = 'remotecontrol?command=142';
      Inquire(Inquiry);
      break;

    case "sStop":
      var Inquiry = 'remotecontrol?command=128';
      Inquire(Inquiry);
      break;

    case "Subtitle":
      var Inquiry = 'remotecontrol?command=370';
      Inquire(Inquiry);
      break;

    case "TXT":
      var Inquiry = 'remotecontrol?command=388';
      Inquire(Inquiry);
      break;

    case "Timer":
      var Inquiry = 'remotecontrol?command=362';
      Inquire(Inquiry);
      break;

    case "Timeshift":
      var Inquiry = 'remotecontrol?command=359';
      Inquire(Inquiry);
      break;

    case "TV":
      var Inquiry = 'remotecontrol?command=377';
      Inquire(Inquiry);
      break;

    case "USB":
      var Inquiry = 'remotecontrol?command=206';
      Inquire(Inquiry);
      break;

    case "vFormat":
      var Inquiry = 'remotecontrol?command=47';
      Inquire(Inquiry);
      break;

    case "VCR":
      var Inquiry = 'remotecontrol?command=379';
      Inquire(Inquiry);
      break;

    case "vKey":
      var Inquiry = 'remotecontrol?command=393';
      Inquire(Inquiry);
      break;

    case "WEB":
      var Inquiry = 'remotecontrol?command=217';
      Inquire(Inquiry);
      break;

    case "ZoomInOut":
      var Inquiry = 'remotecontrol?command=372';
      Inquire(Inquiry);
      break;
   }

};
