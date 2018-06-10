# NEEO driver for Enigma2 Receivers

This Project allows the Control of any Enigma2 DVB Reciver with NEEO over TCP/IP

## Information about NEEO

- Please see [neeo.com](https://neeo.com/) for more Information about NEEO The Thinking Remote
- For Help or any Feature Request, visit [planet.neeo.com](https://planet.neeo.com/t/m2k53t) to join the Discussion.
- For more about NEEOs SDK visit [planet NEEO SDK](https://github.com/NEEOInc/neeo-sdk)

## Requirements

- install this Packet with NPM (neeo-driver-enigma2)
- open /devices/enigma2/config.js and Change the IP to your Enigma2 IP
- Enabled openWebif on the Enigma2 device
- run this code via "npm start" (need to be started from the main Folder!)

## For Supported Devices check the following:

   Due to the limited access to all of the required Boxes, i was only able to Test the Functions at an Dreambox 800HDse and some limited parts on an VU+ duo2, if you found any Issues, please file an Issue here on Github.
1. Check Google Spreadsheet: [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1_xMGKNtTns5o61hHPmhyMcesBlo1rajajW8Ir8bl9UQ/edit?usp=sharing)  
   Green = Fully Supported  
   Yellow = depends on Used Box  
   Red = manual change in code required  
   empty Green = Not Programmed in this Device
2. Pictures of the Boxes can be found here: [OpenWebif Box Pictures](https://github.com/E2OpenPlugins/e2openplugin-OpenWebif/tree/master/plugin/public/images/boxes)
3. Pictures of the Remotes can be found here: [OpenWebif Remote Pictures](https://github.com/E2OpenPlugins/e2openplugin-OpenWebif/tree/master/plugin/public/images/remotes)

# Changelog

## Version 0.2.1

- removed dependencie Sleep
- Avoid bare URL's in Readme

## Version 0.2.0

- recode to fit new SDK CLI
- deleted Version Info until 0.1.0

## Version 0.1.2

- added dependencie Sleep
- Changed Brain Check address

## Version 0.1.0

- implemented a brain live check every 3 Min the SDK Checks if the Brain is reachable, if not the Code try's to discover the Brain again and if successfull register the driver again
- Provide all Supported / needed OpenWebif Buttons according to [OpenWebif Github] (https://github.com/E2OpenPlugins/e2openplugin-OpenWebif)
  More Informations of the Implemented Buttons can be found on this [Google Spreadsheet] (https://docs.google.com/spreadsheets/d/1_xMGKNtTns5o61hHPmhyMcesBlo1rajajW8Ir8bl9UQ/edit?usp=sharing)

## ToDo

- When the SDK get a list function it can be possbile to Enter the Movie readout or the actual EPG, let see what will come!