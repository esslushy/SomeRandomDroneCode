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
    if(windDirection < .25){
      drone.front(windSpeed);
      console.log("Drone headed North at " + windSpeed);
    }else if(windDirection < .5){
      drone.right(windSpeed);
      console.log("Drone headed East at " + windSpeed);
    }else if(windDirection < .75){
      drone.back(windSpeed);
      console.log("Drone headed south at " + windSpeed);
    }else{
      drone.left(windSpeed);
      console.log("Drone headed West at " + windSpeed);
    }
  })
  .after(2500, function(){
    this.stop();
  })
  .after(2000, function() {
    this.land();
  });
