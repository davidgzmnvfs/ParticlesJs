'use strict';
export default class Particle {
    constructor(x, y, div) {
        this.position = {
            x: x,
            y: y
        }
        this.velocity = {
            x: 1 - Math.random()*2,
            y: -1 * Math.random()*10 - 5
        }
        this.wind = {
            x:0.005,
            y:0
        }

        this.gravity = 0.35;
        this.size = 50 - 25 + (Math.random()*50)
        this.div = div;
        this.maxSpeed = 25;
    }

    Update() {
        //if(this.followingMouse){this.setDirectionDetailed(this.mousePos);}
        this.UpdateVelocity();
        this.ClampMaxSpeed();
        this.HandleWrapping();
        this.UpdatePosition();
        this.Draw();

    }
    Draw(){
        this.div.setAttribute('style', 
        `left:${this.position.x}px; 
        top:${this.position.y}px; 
        transform: translate(${this.size * -1 * .5}px,${this.size * -1 * .5}px);
        width: ${this.size}px; 
        height: ${this.size}px;`
        );
    }
    UpdatePosition() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
    UpdateVelocity() {
        this.velocity.x += this.wind.x;
        this.velocity.y += this.gravity + this.wind.y;
    }
    ClampMaxSpeed() {
        if (this.velocity.x > this.maxSpeed) { this.velocity.x = this.maxSpeed; }
        if (this.velocity.x < this.maxSpeed * -1) { this.velocity.x = this.maxSpeed * -1; }
        if (this.velocity.y > this.maxSpeed) { this.velocity.y = this.maxSpeed; }
        if (this.velocity.y < this.maxSpeed * -1) { this.velocity.y = this.maxSpeed * -1; }
    }
    HandleWrapping() {
        if (this.position.x > window.innerWidth-(this.size/2)) {
            this.position.x = window.innerWidth-(this.size/2);
            this.velocity.x = 0;
        } else if (this.position.x < 0 - 50) {
            this.position.x = this.size * -1;
            this.velocity.x = 0;
        }
        
        if (this.position.y > window.innerHeight-(this.size/2)) {
            this.velocity.y = 0;
            this.position.y = window.innerHeight-this.size/2  ;
        } else if (this.position.y < 0 - 50) {
            this.velocity.y = 0;
            this.position.y = 0;
        }
    }
}
