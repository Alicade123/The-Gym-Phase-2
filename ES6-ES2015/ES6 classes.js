class Plane {
  constructor(numEngines) {
    this.numEngines = numEngines;
    this.EngineActive = false;
  }
  static badWeather(planes) {
    for (const plane of planes) {
      plane.EngineActive = false;
    }
  }

  startEngine = function () {
    console.log("The Engine is active....");
    this.EngineActive = true;
  };
}
console.log(typeof Plane);

const AlicadeEngines = new Plane(6);
AlicadeEngines.startEngine();
const AbiturijeEngines = new Plane(6);
AbiturijeEngines.startEngine();
