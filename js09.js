function Ninja(name){
  this.name=name;
  this.health=100;
  let strength=3;
  let speed=3;

  this.sayName=function(){
    console.log(this.name)
  }
  this.showStatus=function(){
    console.log('health:'+this.health)
    console.log('strength:'+strength)
    console.log('speed:'+speed)
  }
  this.drinkSake=function(){
    this.health+=10;
  }


}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStatus();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
