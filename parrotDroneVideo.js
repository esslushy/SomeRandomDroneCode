/* Parrot minidrone!! */

// Initialize the library
var Drone = require('parrot-minidrone');
var drone = new Drone({
    autoconnect: true,
});

function changeAltitude(drone, altitude, duration) {
  drone.setFlightParams({ altitude: altitude });
  return new Promise(resolve => setTimeout(resolve, duration));
}

// Move forward (pitch)
function moveForward(drone, pitch, duration) {
  drone.setFlightParams({ pitch: pitch });
  return new Promise(resolve => setTimeout(resolve, duration));
}

// Move backward (pitch)
function moveBackward(drone, pitch, duration) {
  drone.setFlightParams({ pitch: -pitch });
  return new Promise(resolve => setTimeout(resolve, duration));
}

// Move Left (roll)
function moveLeft(drone, roll, duration) {
  drone.setFlightParams({ roll: -roll });
  return new Promise(resolve => setTimeout(resolve, duration));
}

// Move Right (roll)
function moveRight(drone, roll, duration) {
  drone.setFlightParams({ roll: roll });
  return new Promise(resolve => setTimeout(resolve, duration));
}

// Spin left
function spinLeft(drone, yaw, duration) {
  drone.setFlightParams({ yaw: -yaw });
  return new Promise((resolve) => setTimeout(resolve, duration));
}

// Spin right
function spinRight(drone, yaw, duration) {
  drone.setFlightParams({ yaw: yaw });
  return new Promise((resolve) => setTimeout(resolve, duration));
}

// Clear all flight params back to zero
function pause(drone) {
  drone.setFlightParams({ roll: 0, pitch: 0, yaw: 0, altitude: 0 });
  return new Promise(resolve => setTimeout(resolve, 3500));
}

var scene = [
{
  direction: "forward",
  amount: 25,
  duration: 2000
},
{
  direction: "up",
  amount: 30,
  duration: 2000
},
{
  direction: "down",
  amount: 10,
  duration: 2000
},
{
  direction: "clockwise",
  amount: 20,
  duration: 4000
},
{
  direction: "back",
  amount: 35,
  duration: 2000
},
{
  direction: "counterclockwise",
  amount: 35,
  duration: 4000
}
]


if (drone) {

  drone.on('connected', () => drone.takeOff());
  setTimeout(async () => {
     
    //write your code here
    for(var i = 0; i < scene.length; i++){
      switch(scene[i].direction){
        case "up":
          await changeAltitude(drone, scene[i].amount, scene[i].duration);
          break;
        case "down":
          await changeAltitude(drone, -scene[i].amount, scene[i].duration);
          break;
        case "forward":
          await moveForward(drone, scene[i].amount, scene[i].duration);
          break;
        case "back":
          await moveBackward(drone, scene[i].amount, scene[i].duration);
          break;
        case "clockwise":
          await spinRight(drone, scene[i].amount, scene[i].duration);
          break;
        case "counterclockwise":
          await spinLeft(drone, scene[i].amount, scene[i].duration);
          break;
        default:
          console.log("You messed up");
      }
    }
    

    drone.land();
    process.exit();
  }, 6500);
}