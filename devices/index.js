const enigma2 = require('./enigma2').devices;

// export the devices you want to make available to the Brain (see README for more information)
module.exports = {
  devices: [...enigma2]
};