var arDrone = require('ar-drone');
var drone = arDrone.createClient();
var wasFound = false;
var flyTime = 2000;
//write your flight plan here
drone.takeoff();
drone.after(1000, function(){
  drone.up(1);
  console.log("Up");
});
  while(!wasFound){
      
        drone.after(flyTime, function(){
          drone.front(1);
          console.log("forward");
        })
        .after(flyTime, function(){
          drone.left(1);
          console.log("left");
        })
        .after(flyTime, function(){
          drone.back(1);
          console.log("back");
        })
        .after(flyTime, function(){
          drone.right(1);
          console.log("right");
        });
        var found = Math.floor((Math.random() * 10) + 1) == 1;
        if(found){
          wasFound = true;
          console.log("found");
        }else{
          flyTime += 500;
          console.log("not found");
        }
      }  
    drone.after(1000, function(){
      drone.stop();
    })
    .after(1000, function(){
      drone.land();
    });