var arDrone = require('ar-drone');
var drone = arDrone.createClient();

var windDirection = Math.random();
var windSpeed = Math.random();
var fireHeight = Math.random();

//declare variable upSeconds
var upSeconds = fireHeight * 10000;

drone.takeoff();

drone.after(1000, function() {
    drone.up(1); 
  })
  .after(upSeconds, function() {
      drone.front(1);
    })
  .after(upSeconds, function() {
      drone.right(1);
    })
  .after(upSeconds, function() {
      drone.back(1);
    })
  .after(upSeconds, function() {
      drone.left(1);

  })
  .after(2500, function(){
    this.stop();
  })
  .after(2000, function() {
    this.land();
  });
