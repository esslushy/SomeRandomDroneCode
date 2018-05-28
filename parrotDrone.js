/* Parrot minidrone!! */

// Initialize the library
var Drone = require('parrot-minidrone');
var drone = new Drone({
    autoconnect: true,
});

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

// Flip front
function flipFront(drone) {
  drone.animate('flipFront');
  return new Promise((resolve) => setTimeout(resolve, 2500));
}

// Flip back
function flipBack(drone) {
  drone.animate('flipBack');
  return new Promise((resolve) => setTimeout(resolve, 2500));
}

// Flip right
function flipRight(drone) {
  drone.animate('flipRight');
  return new Promise((resolve) => setTimeout(resolve, 2500));
}

// Flip left
function flipLeft(drone) {
  drone.animate('flipLeft');
  return new Promise((resolve) => setTimeout(resolve, 2500));
}

// Clear all flight params back to zero
function pause(drone) {
  drone.setFlightParams({
    roll: 0,
    pitch: 0,
    yaw: 0,
    altitude: 0
  });
  return new Promise(resolve => setTimeout(resolve, 3500));
}

// Add 2-5 more of your own functions such as moveForwardandBackward 
// and moveLeftAndRight()
function moveForwardAndBackward() {
  return new Promise (async (resolve) => {
    await moveForward(drone, 20, 3000);
    await pause(drone);
    await moveBackward(drone, 20, 3000);
    await pause(drone);
    resolve();
  });
}

function moveLeftAndRight() {
  return new Promise (async (resolve) => {
    await moveLeft(drone, 20, 3000);
    await pause(drone);
    await moveRight(drone, 20, 3000);
    await pause(drone);
    resolve();
  });
}
function moveBackLeft() {
  return new Promise (async (resolve) => {
    await moveLeft(drone, 20, 3000);
    await pause(drone);
    await moveBackward(drone, 20, 3000);
    await pause(drone);
    resolve();
  });
}
function moveFrontLeft() {
  return new Promise (async (resolve) => {
    await moveLeft(drone, 20, 3000);
    await pause(drone);
    await moveForward(drone, 20, 3000);
    await pause(drone);
    resolve();
  });
}
function moveBackRight() {
  return new Promise (async (resolve) => {
    await moveRight(drone, 20, 3000);
    await pause(drone);
    await moveBackward(drone, 20, 3000);
    await pause(drone);
    resolve();
  });
}
function moveFrontRight() {
  return new Promise (async (resolve) => {
    await moveRight(drone, 20, 3000);
    await pause(drone);
    await moveForward(drone, 20, 3000);
    await pause(drone);
    resolve();
  });
}
function dance(){
	return new Promise (async (resolve) => {
	  await spinRight(drone, 5, 10000);
	  await moveFrontRight();
	  await spinLeft(drone, 5, 10000);
	  await moveBackLeft();
	  await flipFront(drone);
	  resolve();
	});
}
//YOUR FLIGHT PLAN
if (drone) {
  drone.on('connected', () => drone.takeOff());
  setTimeout(async () => {
     
      await moveForwardAndBackward();
      await moveLeftAndRight();
      // Call your functions here!
      await dance();
      await moveFrontRight();
      await moveBackLeft();
      await dance();
      await moveLeftAndRight();
      await flipBack(drone);
      
    drone.land();
    process.exit();
  }, 6500);
}