deform.js
// symbolic deformation language

export class BiscuitDeform {

  constructor(){
    this.history = [];
  }

  generate(report){

    let sentence = "○ ";

    if(report.driftX > 10){
      sentence += "+-----* ";
    }

    if(report.driftX < -10){
      sentence += "*_____+ ";
    }

    if(report.driftY > 10){
      sentence += "*IIIII+ ";// 
    }

    if(report.driftY < -10){
      sentence += "+|||||* ";
    }

    if(report.wave > 0.5){
      sentence += "warp~~~* ";
    }

    if(report.motionX > 2){
      sentence += "motion→---* ";
    }

    if(report.motionX < -2){
      sentence += "motion←___* ";
    }

    if(report.lock > 70){
      sentence += "predict✓ ";
    }

    this.history.push(sentence);

    return sentence;
  }
}