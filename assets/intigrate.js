import { BiscuitScanner } from './scanner.js';
import { BiscuitSensors } from './sensors.js';
import { BiscuitCamera } from './camera.js';
import { BiscuitDeform } from './deform.js';
import { BiscuitTransmit } from './transmit.js';

const scanner = new BiscuitScanner();
const session = await scanner.scanQR();

const sensors = new BiscuitSensors();
await sensors.start();

const camera = new BiscuitCamera(document.querySelector('video'));
await camera.start();

const deform = new BiscuitDeform();

const transmit = new BiscuitTransmit(session);

setInterval(()=>{

  const report = {
    driftX:(Math.random()*100)-50,
    driftY:(Math.random()*100)-50,
    wave:Math.random(),
    motionX:(Math.random()*10)-5,
    lock:Math.random()*100
  };

  const sentence = deform.generate(report);

  transmit.send({
    report,
    sentence,
    sensors:sensors.getData()
  });

}, 1000);