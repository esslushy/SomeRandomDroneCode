var arDrone = require('ar-drone');
var drone = arDrone.createClient();

drone.after(1000, function(){
      drone.stop();
    })
    .after(1000, function(){
      drone.land();
    });