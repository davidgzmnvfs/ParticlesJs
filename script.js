'use strict'
console.log('loaded index.js');
import Particle from "./Particle.js"
import Emitter from "./Emitter.js";

class App {

    constructor() {
        this.div = document.querySelector("#Char1");
        this.particle = new Particle(500, 500, this.div);
        this.isRunning = true;
        this.particles = [];
        this.particles.push(this.particle);
        this.interval = setInterval(this.UpdateInterval, 16);

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
                    this.particles.forEach(character => {
                        character.followingMouse = true;
                        console.log("Following mouse");
                    })
                    break;
                case "f":
                    this.particles.forEach(character => {
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
                    this.particles.forEach(character => {
                        character.turnUp();
                    })
                    break;
                case "ArrowDown":
                    // this.character.turnDown();
                    this.particles.forEach(character => {
                        character.turnDown();
                    })
                    break;
                case "ArrowLeft":
                    // this.character.turnLeft();
                    this.particles.forEach(character => {
                        character.turnLeft();
                    })
                    break;
                case "ArrowRight":
                    // this.character.turnRight();
                    this.particles.forEach(character => {
                        character.turnRight();
                    })
                    break;
                default:
                    break;
            }
        });

        //TODO: spawn new particles on click
        document.addEventListener("click", e => {
            const emitter = new Emitter(e.clientX,e.clientY);
            emitter.EmitParticles();
        })
    }
    Update = () => {
    };
    UpdateInterval = () => {
        this.particles.forEach(particle => {
            particle.Update();
        });
        // this.character.update();
    };

}
console.log(Document);
const app = new App();
app.Update();
