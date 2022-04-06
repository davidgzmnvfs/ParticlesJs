'use strict';
export default class Character {
    constructor(x, y) {
        this.position = {
            x: x,
            y: y
        }
        this.direction = {
            x: 1,
            y: 1
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.maxSpeed = 10;
        this.acceleration = .1;
        this.counter = 0;
        this.mousePos = {
            mouseX: 0,
            mouseY: 0
        }

        this.followingMouse = true;
        document.addEventListener("mousemove", event => {
            // console.log(`X:${event.clientX}, Y:${event.clientY}`);
            this.mousePos.x = event.clientX;
            this.mousePos.y = event.clientY;
        });
    }

    turnLeft = () => { this.direction.x = -1 }
    turnRight = () => { this.direction.x = 1 }
    turnUp = () => { this.direction.y = -1 }
    turnDown = () => { this.direction.y = 1 }

    update() {
        // if (this.followingMouse == true) {
            this.setDirection(this.mousePos);
        // }
        this.UpdateVelocity();
        this.ClampMaxSpeed();
        this.HandleWrapping();
        this.UpdatePosition();
    };

    setDirection({ x: mouseX, y: mouseY }) {
        this.deltaX = mouseX - this.position.x;
        this.deltaY = mouseY - this.position.y;
        this.direction.x = this.deltaX / Math.abs(this.deltaX);
        this.direction.y = this.deltaY / Math.abs(this.deltaY);
        console.log(`${this.deltaX / Math.abs(this.deltaX)}:${this.deltaY / Math.abs(this.deltaY)}`)
    }
    UpdatePosition() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    UpdateVelocity() {
        this.velocity.x += this.direction.x * this.acceleration;
        this.velocity.y += this.direction.y * this.acceleration;
    }

    ClampMaxSpeed() {
        if (this.velocity.x > this.maxSpeed) { this.velocity.x = this.maxSpeed; }
        if (this.velocity.x < this.maxSpeed * -1) { this.velocity.x = this.maxSpeed * -1; }
        if (this.velocity.y > this.maxSpeed) { this.velocity.y = this.maxSpeed; }
        if (this.velocity.y < this.maxSpeed * -1) { this.velocity.y = this.maxSpeed * -1; }
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
