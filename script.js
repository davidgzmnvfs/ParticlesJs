'use strict'
console.log('loaded index.js');
import Character from "./Character.js"

class App {

    constructor() {
        this.character = new Character(500, 500);
        this.charCount = 1;
        this.div = document.querySelector("#character");
        this.isRunning = false;
        this.counter = 0;
        this.interval;
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

                case "ArrowUp":
                    this.character.turnUp();
                    break;
                case "ArrowDown":
                    this.character.turnDown();
                    break;
                case "ArrowLeft":
                    this.character.turnLeft();
                    break;
                case "ArrowRight":
                    this.character.turnRight();
                    break;
                default:
                    break;
            }
        });

        //TODO: spawn new particles on click
        // document.addEventListener("click", e => {
        //     this.charCount ++;
        //     let char = new Character(e.clientX,e.clientY);
        //     console.log(char);
        // })
    }
    Update = () => {
    };
    UpdateInterval = () => {
        this.character.update();
        this.div.setAttribute('style', `left:${this.character.position.x}px; top:${this.character.position.y}px`);
    };
}
console.log(Document);
const app = new App();
app.Update();
