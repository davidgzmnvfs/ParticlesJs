'use strict';
export default class Character {
    constructor(x, y) {
        this.position = {
            x:x,
            y:y
        }
        this.direction = {
            x:1,
            y:1
        }
        this.velocity = {
            x:1,
            y:1
        }
        this.maxSpeed = 5;
        this.acceleration = .1;

        this.x = x;
        this.y = y;
        this.counter = 0;
    }

    turnLeft = () => {this.direction.x = -1}
    turnRight = () => {this.direction.x = 1}
    turnUp = () => {this.direction.y = -1}
    turnDown = () => {this.direction.y = 1}
    
    update = () => {
        this.UpdateVelocity();
        this.ClampMaxSpeed();
        this.HandleWrapping();
        this.UpdatePosition();
    };

    UpdatePosition() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    UpdateVelocity() {
        this.velocity.x += this.direction.x * this.acceleration;
        this.velocity.y += this.direction.y * this.acceleration;
    }

    ClampMaxSpeed() {
        if (this.velocity.x > this.maxSpeed)
            this.velocity.x = this.maxSpeed;
        if (this.velocity.x < this.maxSpeed * -1)
            this.velocity.x = this.maxSpeed * -1;
        if (this.velocity.y > this.maxSpeed)
            this.velocity.y = this.maxSpeed;
        if (this.velocity.y < this.maxSpeed * -1)
            this.velocity.y = this.maxSpeed * -1;
    }

    HandleWrapping() {
        if (this.position.x > window.innerWidth) {
            this.position.x = 0;
        } else if (this.position.x < 0 - 100) {
            this.position.x = window.innerWidth;
        }
        if (this.position.y > window.innerHeight) {
            this.position.y = 0;
        } else if (this.position.y < 0 - 100) {
            this.position.y = window.innerHeight;
        }
    }
}
