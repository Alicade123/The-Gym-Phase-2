var T = 60;
while (T >= 0) {
  if (T === 50) {
    console.log("Orbiter transfers from ground to internal power");
  } else if (T === 31) {
    console.log("Ground launch sequencer is go for auto sequence start");
  } else if (T === 16) {
    console.log("Activate launch pad sound suppression system");
  } else if (T === 10) {
    console.log("Activate main engine hydrogen burnoff system");
  } else if (T === 6) {
    console.log("Main engine start");
  } else if (T === 0) {
    console.log("Solid rocket booster ignition and liftoff!");
  } else {
    console.log(`T-${T} seconds`);
  }
  T--;
}
