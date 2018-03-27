class Ninja{
  constructor(name){
    this.name=name;
    this.health=100;
    this.speed=3;
    this.strength=3;
  }
  sayName(){
    console.log(this.name);
  }
  showStats(){
    console.log(`health:${this.health},speed:${this.speed},strength:${this.strength}`);
  }
  drinkSake(){
    this.health+=10;
  }
}

class Sensei extends Ninja{
  constructor(name){
    super(name);
    this.health=200;
    this.speed=10;
    this.strength=10;
    this.wisdom=10;
  }
  speakWisdom(){
    console.log('wisdom:'+this.wisdom);
    super.drinkSake();
  }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
