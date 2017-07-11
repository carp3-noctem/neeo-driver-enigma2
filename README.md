# NEEO-Dreambox
This Project allows the Control of any Enigma2 DVB Reciver with NEEO over TCP/IP

## Information about NEEO
- Please see https://neeo.com/ for more Information about NEEO The Thinking Remote
- For more about NEEOs SDK visit https://github.com/NEEOInc/neeo-sdk

## Requirements
- Change '$$LOCAL-IP' in controller.js to the locally assignes IP-Adress of your Enigma2 device e.g. 192.168.1.123
- Enabled WebIf on the Enigma2 device

- If Volume Control (Increase, Decrease and Mute) should be used on Enigma2 Reciver then delete /* and */ in controller.js line 40 and 55

## Changelog
## Version 0.0.1
-Initial release

##ToDo
- At the initial Release (0.0.1) only a Power Toggle is available. Dedicated Power On and Off with the Power Check needs to be implemented.