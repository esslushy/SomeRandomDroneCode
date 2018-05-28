var arDrone = require('ar-drone');
var drone = arDrone.createClient();

var speed1 = .75;
var speed2 = .25;

drone.takeoff();

drone.after(1000, function() {
  //after 1 second, go up at speed1
    drone.up(1); 
    console.log("up");
  })
  .after(1000, function() {
  //after 1 second, go up at speed1
    drone.left(1); 
    console.log("left");
  })
  .after(1000, function(){
    drone.forward(speed1)
    console.log("forward");
  })
  .after(5000, function() {
  //after 5 seconds, land
    drone.land();
    console.log("land");
  });
  