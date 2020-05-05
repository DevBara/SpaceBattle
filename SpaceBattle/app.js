alert("The Aliens are here! Please save us!");

let gameStart= prompt("Are you brave enough to defeat the aliens?", "type yes to begin then click start game");


class humanShip{
    constructor(hull, firepower, accuracy){
        this.hull = 10;
        this.firepower = 3;
        this.accuracy = .6;
    }
}

class alienShip{
    constructor(hull,firepower,accuracy){
        this.hull =15;
        this.firepower =2;
        this.accuracy =.5;
    }
}

// //Need a function that connects to button to initiate attack and subtracts hull
// //may need to use math random


 /// attack function 'works' but it is not returning any information on the console.   
 // Connect class properties?
 function attack(){ 
     document.getElementById('start').innerHTML= 'attack';
    if (Math.random() <= this.accuracy) {
    alienShip.hull -= humanShip.firepower;
    } else {
    console.log("You hit the aliens!")
}
 }
 
//Restarts the game
function restart(){
    window.location.reload(); 
}