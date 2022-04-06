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

                case "R":
                    this.characters.forEach(character => {
                        character.followingMouse = !character.followingMouse;
                        console.log(character.followingMouse);
                    })
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
            let div = document.createElement('div');
            div.classList.add("character");
            let char = new Character(e.clientX, e.clientY, div);
            document.querySelector('body').append(div);

            this.characters.push(char);
            console.log(char);
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
}
console.log(Document);
const app = new App();
app.Update();
