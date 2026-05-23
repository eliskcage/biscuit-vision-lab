// camera.js
// live observer camera

export class BiscuitCamera {

  constructor(videoElement){
    this.video = videoElement;
    this.stream = null;
  }

  async start(){

    try{

      this.stream = await navigator.mediaDevices.getUserMedia({
        video:{facingMode:'environment'},
        audio:false
      });

      this.video.srcObject = this.stream;

      console.log("Camera started");

    }catch(err){
      console.error(err);
    }
  }

  stop(){

    if(this.stream){
      this.stream.getTracks().forEach(track=>track.stop());
    }
  }
}