var arDrone = require('ar-drone');
var drone = arDrone.createClient();
var fs = require('fs');
var photoCounter = 0;
var mountainRange = [["F",false], ["U",false], ["B",false], ["F",false], ["D",false], ["B",false], ["F",false], ["D",false]];

drone.takeoff()
  .after(1000, function() {
    drone.up(.75); 
  });

// Write for loop here
for (var i = 0; i < mountainRange.length; i++) {
    var rangeData = mountainRange[i];
    switch(rangeData[0]){
        case "F":
            drone.after(function{
                drone.stop();
                drone.front(.5);
            });  
            break;
        case "U":
            drone.after(function{
                drone.stop();
                drone.up(.5);
            });  
            break;
        case "B":
            drone.after(function{
                drone.stop();
                drone.back(.5);
            });  
            break;
        case "D":
            drone.after(function{
                drone.stop();
                drone.down(.5);
            });  
            break;
        default:
            console.log("failure");
    }
    if(rangeData[1]){

    }
}

// stop and land after the loop runs
drone.after(2000, function(){
    drone.stop();
    drone.land();
  });

    var numPhotos = 0;
  
    return new Promise((resolve, reject) => {

        drone.getPngStream().on('data', function (data) {
            
            numPhotos++;
            
            if(numPhotos > 5) return resolve();

            var fileName = 'camFootage_' + photoCounter++ + '.png';
    
            fs.writeFile('./dronePhotos/' + fileName, data, function (err) {
                if (err) console.log(err);
                console.log(fileName + ' Saved');
                return resolve();
            });
        });
    });
}
