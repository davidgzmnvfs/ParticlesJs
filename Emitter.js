'use strict'
import Particle from "./Particle.js"

export default class Emitter {
    constructor(x, y) {
        this.position = {
            x: x,
            y: y
        }
        this.particles = [];
        this.emissionInterval;
        this.count = 0;
        this.maxParticles = 120;
    }

    CreateNewParticle(x, y) {
        let div = document.createElement('div');
        div.classList.add("particle");
        let particle = new Particle(x, y, div);
        document.querySelector('body').append(div);
        this.particles.push(particle);
    }
    UpdateParticles = () => {
        this.particles.forEach(particle => {
            if(particle.lifespan <= 0 ){
                particle.Reset();
            }
            particle.Update();
        });
    }
    StartEmitting = () => {
        this.emissionInterval = setInterval(this.EmitParticles, 16);
        this.emissionInterval2 = setInterval(this.UpdateParticles, 16);
    }
    EmitParticles = () => {
            this.CreateNewParticle(this.position.x, this.position.y);
            this.count += 1;
            console.log(this.count);
            if(this.count > this.maxParticles){
                console.log("Cleared interval")
                clearInterval(this.emissionInterval);
            }
    }
    Run = () => {
        this.EmitParticles();
        this.UpdateParticles();
    }
}
