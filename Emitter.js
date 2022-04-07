'use strict'
import Particle from "./Particle.js"

export default class Emitter {
    constructor(x, y) {
        this.position = {
            x: x,
            y: y
        }
        this.particles = [];
        console.log("created emitter");
    }

    CreateNewParticle(x, y) {
        let div = document.createElement('div');
        div.classList.add("character");
        let particle = new Particle(x, y, div);
        document.querySelector('body').append(div);
        this.particles.push(particle);
    }
    Update = () => {
        this.particles.forEach(particle => {
            particle.Update();
        });
    }
    EmitParticles() {
        for (let i = 0; i < 10; i++) {
            this.CreateNewParticle(this.position.x, this.position.y);
        }
        this.interval = setInterval(this.Update , 16);
    }
}
