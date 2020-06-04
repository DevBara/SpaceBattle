alert("Earth has been attacked by a horde of aliens!")

alert("Start Game")

class USS {
    constructor (hull = 20, firepower = 5, accuracy = .7) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    hullRemaining() {
        console.log(`The USS Schwarzeneger has ${this.hull} hull remaining!`)
    }
    fire() {
        if (Math.random() <= this.accuracy) {
                console.log(`You Made it! USS Schwarzeneger did 5 damage to the Alien Ship!`);
            aliens.hull -= ship.firepower;
        } else {
                   console.log("You Missed Fire")
        }
    }
}



const ship = new USS ();
class AlienShip {
constructor (hull = 20, firepower = 2, accuracy = .6) {
        this.hull = (Math.floor(Math.random() * (6 - 3)) + 3); // between 3 - 6
        this.firepower = (Math.floor(Math.random() * (4 - 2)) + 2); // between 2-4
        this.accuracy = ((Math.random() * (8 - 6) + 6) / 10); // between .6 & .8
    }
    hullRemaining() {
        console.log(`This Alien Ship has ${this.hull} hull remaining!`)
    }
    fire() {
        if (Math.random() <= this.accuracy) {
                    console.log(`You Have Been Hit By Alien Ship!`);
            ship.hull -= aliens.firepower;
        } else {
            console.log("Your attack missed!");
            console.log("The Aliens attack missed!");
        }
    }
}
const alien1 = new AlienShip ();
const alien2 = new AlienShip ();
const alien3 = new AlienShip ();




const aliens = new AlienShip ();
function checkWin() {
     if (aliens.hull <= 0) {
        console.log(`You Won!`);
    } else if (ship.hull <= 0) {
        console.log(`The Aliens have defeated the USS Schwarzeneger`);
    } else if (ship.hull > 0 && aliens.hull > 0) {
           ship.fire();
           aliens.hullRemaining();
           aliens.fire();
           ship.hullRemaining();
           checkWin();
        }
        }  
checkWin();