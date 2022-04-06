'use strict'
console.log('loaded index.js');
import Character from "./Character.js"

class App {

    constructor() {
        this.div = document.querySelector("#Char1");
        this.character = new Character(500, 500, this.div);
        this.isRunning = true;
        this.counter = 0;
        this.interval;
        this.interval = setInterval(this.UpdateInterval, 16);
        this.characters = [];
        this.characters.push(this.character);
        this.div.setAttribute('style', `left:${this.character.position.x}px; top:${this.character.position.y}px`);

        document.addEventListener("keydown", event => {
            switch (event.key) {
                case "Enter":
                    console.log("Pressed enter");
                    this.isRunning = !this.isRunning;
                    if (this.isRunning) {
                        this.interval = setInterval(this.UpdateInterval, 16);
                        break;
                    }
                    clearInterval(this.interval);
                    break;

                case "m":
                    this.characters.forEach(character => {
                        character.followingMouse = true;
                        console.log("Following mouse");
                    })
                    break;
                case "f":
                    this.characters.forEach(character => {
                        character.followingMouse = false;
                        console.log("Free");
                    })
                    break;
                case "n":
                    for (let i = 0; i < 500; i++) {
                        this.CreateNewParticle(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
                    }
                    break;
                case "ArrowUp":
                    // this.character.turnUp();
                    this.characters.forEach(character => {
                        character.turnUp();
                    })
                    break;
                case "ArrowDown":
                    // this.character.turnDown();
                    this.characters.forEach(character => {
                        character.turnDown();
                    })
                    break;
                case "ArrowLeft":
                    // this.character.turnLeft();
                    this.characters.forEach(character => {
                        character.turnLeft();
                    })
                    break;
                case "ArrowRight":
                    // this.character.turnRight();
                    this.characters.forEach(character => {
                        character.turnRight();
                    })
                    break;
                default:
                    break;
            }
        });

        //TODO: spawn new particles on click
        document.addEventListener("click", e => {
            this.CreateNewParticle(e.clientX, e.clientY);

        })
    }
    Update = () => {
    };
    UpdateInterval = () => {
        this.characters.forEach(character => {
            character.update();
        });
        // this.character.update();
    };

    CreateNewParticle(x, y) {
        let div = document.createElement('div');
        div.classList.add("character");
        let char = new Character(x, y, div);
        document.querySelector('body').append(div);
        this.characters.push(char);
    }
}
console.log(Document);
const app = new App();
app.Update();
