// sensors.js
// orientation + motion streaming

export class BiscuitSensors {

  constructor(){

    this.data = {
      alpha:0,
      beta:0,
      gamma:0,
      accelX:0,
      accelY:0,
      accelZ:0
    };
  }

  async start(){

    try{

      if(typeof DeviceOrientationEvent !== 'undefined' &&
         typeof DeviceOrientationEvent.requestPermission === 'function'){

        const permission = await DeviceOrientationEvent.requestPermission();

        if(permission !== 'granted'){
          console.warn("Sensor permission denied");
          return;
        }
      }

      window.addEventListener('deviceorientation', (e)=>{

        this.data.alpha = e.alpha || 0;
        this.data.beta = e.beta || 0;
        this.data.gamma = e.gamma || 0;

      });

      window.addEventListener('devicemotion', (e)=>{

        if(e.accelerationIncludingGravity){

          this.data.accelX = e.accelerationIncludingGravity.x || 0;
          this.data.accelY = e.accelerationIncludingGravity.y || 0;
          this.data.accelZ = e.accelerationIncludingGravity.z || 0;
        }
      });

      console.log("Sensors active");

    }catch(err){
      console.error(err);
    }
  }

  getData(){
    return this.data;
  }
}