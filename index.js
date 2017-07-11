'use strict';

const neeoapi = require('neeo-sdk');
const controller = require('./controller');

console.log('NEEO SDK Example "Enigma" adapter');
console.log('---------------------------------------------');

// first we set the device info, used to identify it on the Brain
const enigma2 = neeoapi.buildDevice('Enigma2-Receiver')
  .setManufacturer('All')
  .addAdditionalSearchToken('Dreambox')
  .addAdditionalSearchToken('VU+')
  .setType('DVB')

// Adding Buttons
  .addButtonGroup('VOLUME')
  .addButtonGroup('Numpad')
  .addButtonGroup('Controlpad')
  .addButtonGroup('Color Buttons')
  .addButtonGroup('Menu and Back')
  .addButtonGroup('Channel Zapper')
  .addButtonGroup('Transport')
  .addButtonGroup('Transport Search')
  .addButtonGroup('Transport Scan')
  .addButtonGroup('Transport Skip')
  .addButton({ name: 'POWER TOGGLE', lable: 'Power Toggle'})
  .addButton({ name: 'POWER ON', lable: 'Power On'})
  .addButton({ name: 'POWER OFF', lable: 'Power Off'})
  
// Button Handler / Sends the Pressed Button to controller.js
  .addButtonHander(controller.onButtonPressed);


// Starting of the SDK Server (Code provided from NEEO SDK)  

function startSdkExample(brain) {
  console.log('- Start server');
  neeoapi.startServer({
    brain,
    port: 6336,
    name: 'Enigma2',
    devices: [enigma2]
  })
  .then(() => {
    console.log('# READY! use the NEEO app to search for "Enigma2".');
  })
  .catch((error) => {
    //if there was any error, print message out to console
    console.error('ERROR!', error.message);
    process.exit(1);
  });
}

const brainIp = process.env.BRAINIP;
if (brainIp) {
  console.log('- use NEEO Brain IP from env variable', brainIp);
  startSdkExample(brainIp);
} else {
  console.log('- discover one NEEO Brain...');
  neeoapi.discoverOneBrain()
    .then((brain) => {
      console.log('- Brain discovered:', brain.name);
      startSdkExample(brain);
    });
}
