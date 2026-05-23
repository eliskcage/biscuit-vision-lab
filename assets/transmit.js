// transmit.js
// send genome data back to desktop

export class BiscuitTransmit {

  constructor(session){
    this.session = session;
  }

  async send(payload){

    console.log("TRANSMIT", payload);

    // placeholder
    // later:
    // websocket
    // webrtc
    // supabase realtime

    try{

      await fetch('/genome', {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          session:this.session,
          genome:payload
        })
      });

    }catch(err){
      console.warn("Local transmit only", err);
    }
  }
}