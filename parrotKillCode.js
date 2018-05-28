// Initialize the library
var Drone = require('parrot-minidrone');
var drone = new Drone({
    autoconnect: true,
});

drone.land();
drone.stop();