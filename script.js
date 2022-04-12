'use strict'
console.log('loaded index.js');
import Particle from "./Particle.js"
import Emitter from "./Emitter.js";

class App {

    constructor() {
        this.emitters = [];     
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
                default:
                    break;
            }
        });

        document.addEventListener("click", e => {
            // TODO: Stop old emitters
            const emitter = new Emitter(e.clientX,e.clientY);
            this.emitters.push(emitter);
            this.Run();
        })
    }

    Run = () => {
        this.emitters.forEach(emitter => {
            emitter.StartEmitting();
        })
        // this.interval = setInterval(this.emmiter.Run, 1000/60);
    };

}
console.log(Document);
const app = new App();
app.Run();
