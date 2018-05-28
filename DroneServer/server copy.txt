var Drone = require('parrot-minidrone');
var drone = new Drone({ autoconnect: true });
var express = require('express');
var app = express();
var path = require('path')

// declare variable flightParams
var flightParams = {
    yaw: 0,
    pitch: 0,
    roll: 0,
    altitude: 0
}

// declare variable amountConstant
var amountConstant = 50;


app.use(express.static(path.join(__dirname, 'Client')))

app.post('/takeOff', function(req, res) {
    drone.takeOff();
    res.send('Drone Taking Off');
});

app.post('/goForward', function(req, res) {
    flightParams.pitch = amountConstant;
    droneAction();
    res.send('Drone moving forward');
});

//add listeners and actions for your back, up and down commands
// the first argument to post must match what you are sending through your ajax command in app.js.
app.post('/goBackward', function(req, res) {
    flightParams.pitch = -amountConstant;
    droneAction();
    res.send('Drone moving backward');
});

app.post('/goLeft', function(req, res) {
    flightParams.roll = -amountConstant;
    droneAction();
    res.send('Drone moving left');
});

app.post('/goRight', function(req, res) {
    flightParams.roll = amountConstant;
    droneAction();
    res.send('Drone moving right');
});

app.post('/up', function(req, res) {
    flightParams.altitude = amountConstant;
    droneAction();
    res.send('Drone moving up');
});

app.post('/down', function(req, res) {
    flightParams.altitude = -amountConstant;
    droneAction();
    res.send('Drone moving down');
});

app.post('/land', function(req, res) {
    drone.land();
    process.exit();
    res.send('Drone Landing');
});

app.listen(8080, function() {
    console.log('listening on port 8080....')
});

//this will run your action for one second, then clear
//the drone back to hovering

function droneAction() {
    drone.setFlightParams(flightParams);
    setTimeout(() => {
        drone.setFlightParams({
            yaw: 0,
            pitch: 0,
            roll: 0,
            altitude: 0,
        });
    }, 1000);
}