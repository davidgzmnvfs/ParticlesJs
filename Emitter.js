'use strict'
import Particle from "./Particle.js"

export default class Emitter {
    constructor(x, y) {
        this.position = {
            x: x,
            y: y
        }
        this.particles = [];
    }

    CreateNewParticle(x, y) {
        let div = document.createElement('div');
        div.classList.add("character");
        let particle = new Particle(x, y, div);
        document.querySelector('body').append(div);
        this.particles.push(particle);
    }

    UpdateParticles = () => {
        this.particles.forEach(particle => {
            if(particle.lifespan <= 0 ){
                console.log(particle.initialPosition);
                particle.Reset();
            }
            particle.Update();
        });
    }

    StartEmitting = () => {
        this.interval = setInterval(this.EmitParticles, 16);
    }
    
    EmitParticles = () => {
        for(let i = 0; i<1;i++){
            this.CreateNewParticle(this.position.x, this.position.y);
        }
    }
    Run = () => {
        this.EmitParticles();
        this.UpdateParticles();
    }
}
