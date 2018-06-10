'use strict';

const neeoapi = require('neeo-sdk');
const controller = require('./controller');

console.log('NEEO SDK Example "Enigma2" adapter');
console.log('---------------------------------------------');

// first we set the device info, used to identify it on the Brain
const enigma2 = neeoapi.buildDevice('ENIGMA2 Receiver')
  .setManufacturer('ALL')
  .addAdditionalSearchToken('AB-COM')
  .addAdditionalSearchToken('IPBOX')
  .addAdditionalSearchToken('PRISMCUBE')
  .addAdditionalSearchToken('ANADOL')
  .addAdditionalSearchToken('AX TECHNOLOGY')
  .addAdditionalSearchToken('AX')
  .addAdditionalSearchToken('DREAMBOX')
  .addAdditionalSearchToken('DREAMMULTIMEDIA')
  .addAdditionalSearchToken('EDISON')
  .addAdditionalSearchToken('FORMULER')
  .addAdditionalSearchToken('GIGABLUE')
  .addAdditionalSearchToken('MEDI@LINK')
  .addAdditionalSearchToken('OCTAGON')
  .addAdditionalSearchToken('OPTICUM')
  .addAdditionalSearchToken('PROTEK')
  .addAdditionalSearchToken('RED EAGLE')
  .addAdditionalSearchToken('REDLINE')
  .addAdditionalSearchToken('SPYCAT')
  .addAdditionalSearchToken('VU+')
  .addAdditionalSearchToken('ENIGMA')
  .addAdditionalSearchToken('ENIGMA2')
  .addAdditionalSearchToken('LINUX')
  .setType('DVB')

// Adding Buttons
// NEEO Hardkeys
  .addButtonGroup('VOLUME')         // VOLUME UP, VOLUME DOWN & MUTE
  .addButtonGroup('Controlpad')     // CURSOR ENTER, CURSOR UP, CURSOR DOWN, CURSOR LEFT & CURSOR RIGHT
  .addButtonGroup('Menu and Back')  // MENU & BACK
  .addButtonGroup('Channel Zapper') // CHANNEL UP & CHANNEL DOWN
  .addButtonGroup('POWER')          // POWER ON & POWER OFF

//NEEO Softkey (predefined Screen integration)
  .addButtonGroup('Numpad')                   // DIGIT 0, DIGIT 1, ... & DIGIT 9
  .addButtonGroup('Color Buttons')            // FUNCTION RED, FUNCTION GREEN, FUNCTION YELLOW & FUNCTION BLUE
  .addButtonGroup('Transport')                // PLAY, PAUSE & STOP
  .addButtonGroup('Transport Search')         // REVERSE & FORWARD
  .addButtonGroup('Transport Scan')           // PREVIOUS & NEXT
  .addButtonGroup('Transport Skip')           // SKIP SECONDS BACKWARD & SKIP SECONDS FORWARD
  .addButtonGroup('Record')                   // MY RECORDINGS, RECORD & LIVE
  .addButton({ name: 'INFO', label: 'INFO'})  // Free Button Definition Used as Info on Remote predefined screen

  //NEEO Softkey (as Shortcut implementation)
  .addButton({ name: 'POWER TOGGLE', label: 'Power Toggle'})
  .addButton({ name: '@', label: '@'})
  .addButton({ name: 'Audio', label: 'Audio'})
  .addButton({ name: 'sBack', label: 'Back'})
  .addButton({ name: 'Bouquet UP', label: 'Bouquet UP'})
  .addButton({ name: 'Bouquet DOWN', label: 'Bouquet DOWN'})
  .addButton({ name: 'DVD', label: 'DVD'})
  .addButton({ name: 'Eject', label: 'Eject'})
  .addButton({ name: 'End', label: 'End'})
  .addButton({ name: 'F1', label: 'F1'})
  .addButton({ name: 'F2', label: 'F2'})
  .addButton({ name: 'F3', label: 'F3'})
  .addButton({ name: 'F4', label: 'F4'})
  .addButton({ name: 'FFW', label: 'FFW'})
  .addButton({ name: 'FRW', label: 'FRW'})
  .addButton({ name: 'FAV', label: 'FAV'})
  .addButton({ name: 'File', label: 'File'})
  .addButton({ name: 'Find', label: 'Find'})
  .addButton({ name: 'Folder', label: 'Folder'})
  .addButton({ name: 'FWD', label: 'FWD'})
  .addButton({ name: 'Help', label: 'Help'})
  .addButton({ name: 'Home', label: 'Home'})
  .addButton({ name: 'Jump', label: 'Jump'})
  .addButton({ name: 'Mark', label: 'Mark'})
  .addButton({ name: 'n', label: 'n'})
  .addButton({ name: 'sNext', label: 'Next'})
  .addButton({ name: 'Open SAT', label: 'Open SAT'})
  .addButton({ name: 'Option', label: 'Option'})
  .addButton({ name: 'Page DOWN', label: 'Page DOWN'})
  .addButton({ name: 'Page UP', label: 'Page UP'})
  .addButton({ name: 'sPause', label: 'Pause'})
  .addButton({ name: 'PiP', label: 'PiP'})
  .addButton({ name: 'sPlay', label: 'Play'})
  .addButton({ name: 'sPlayPause', label: 'PlayPause'})
  .addButton({ name: 'Playlist', label: 'Playlist'})
  .addButton({ name: 'Plugin', label: 'Plugin'})
  .addButton({ name: 'Portal', label: 'Portal'})
  .addButton({ name: 'sPrevious', label: 'Previous'})
  .addButton({ name: 'Radio', label: 'Radio'})
  .addButton({ name: 'sRecord', label: 'Record'})
  .addButton({ name: 'sRewind', label: 'Rewind'})
  .addButton({ name: 'Search', label: 'Search'})
  .addButton({ name: 'Media', label: 'Media'})
  .addButton({ name: 'Sleep', label: 'Sleep'})
  .addButton({ name: 'sStop', label: 'Stop'})
  .addButton({ name: 'Subtitle', label: 'Subtitle'})
  .addButton({ name: 'TXT', label: 'TXT'})
  .addButton({ name: 'Timer', label: 'Timer'})
  .addButton({ name: 'Timeshift', label: 'Timeshift'})
  .addButton({ name: 'TV', label: 'TV'})
  .addButton({ name: 'USB', label: 'USB'})
  .addButton({ name: 'vFormat', label: 'vFormat'})
  .addButton({ name: 'VCR', label: 'VCR'})
  .addButton({ name: 'vKey', label: 'vKey'})
  .addButton({ name: 'WEB', label: 'WEB'})
  .addButton({ name: 'ZoomInOut', label: 'ZoomInOut'})
  
// Button Handler / Sends the Pressed Button to controller.js
  .addButtonHander(controller.onButtonPressed);

  //Overhand Driver to NEEO CLI
  module.exports = {
    devices: [enigma2]
  }