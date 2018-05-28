//setup
var { DroneConnection, CommandParser } = require('pdrone-low-level');

var parser = new CommandParser();
var drone = new DroneConnection();

//commands
var takeoff = parser.getCommand('minidrone', 'Piloting', 'TakeOff');
var landing = parser.getCommand('minidrone', 'Piloting', 'Landing');
var openClaw = parser.getCommand('minidrone', 'UsbAccessory', 'ClawControl', { action: "OPEN" });
var closeClaw = parser.getCommand('minidrone', 'UsbAccessory', 'ClawControl', { action: "CLOSE" });
var forward = parser.getCommand('minidrone', 'Piloting', 'PCMD', { pitch: 50 });
var back = parser.getCommand('minidrone', 'Piloting', 'PCMD', { pitch: -50 });
var spinRight = parser.getCommand('minidrone', 'Piloting', 'PCMD', { yaw: 50 });
var left = parser.getCommand('minidrone', 'Piloting', 'PCMD', { roll: -50 });
var right = parser.getCommand('minidrone', 'Piloting', 'PCMD', { roll: 50 });
var spinLeft = parser.getCommand('minidrone', 'Piloting', 'PCMD', { yaw: -50 });
var backFlip = parser.getCommand('minidrone', 'Animations', 'Flip', { direction: 'back' });
var frontFlip = parser.getCommand('minidrone', 'Animations', 'Flip', { direction: 'front' });

var runCommand = x => drone.runCommand(x);

// TASK: Fly up and down the block, delivering packages to the 6 homes

drone.on('connected', () => {

  runCommand(takeoff);

  //make the first grab
  setTimeout(runCommand, 3000, openClaw);
  setTimeout(runCommand, 4000, closeClaw);
  
  //create your delivery route
  for (var i = 0; i <= 2; i++) {
  	setTimeout(runCommand, 4000, forward);
  	DropOffAndPickUp();
  }
  setTimeout(runCommand, 7000, left);
   for (var i = 0; i <= 2; i++) {
  	DropOffAndPickUp();
  	setTimeout(runCommand, 4000, back);
  }
  setTimeout(runCommand, 7000, right);
  
  
  setTimeout(runCommand, 20000, landing);
  setTimeout(process.exit, 22000);
});

function DropOffAndPickUp() {
	setTimeout(runCommand, 3000, openClaw);
	setTimeout(runCommand, 1000, forward);
	setTimeout(runCommand, 4000, closeClaw);
}
