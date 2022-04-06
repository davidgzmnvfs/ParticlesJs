'use strict';
export default class Character {
    constructor(x, y, div) {
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
        this.gravity = {
            x:0,
            y:-.07
        }
        this.size = 100 - 25 + (Math.random()*50)
        this.div = div;
        this.maxSpeed = 3 + Math.random()*7;
        this.acceleration = Math.random()/2;
        this.counter = 0;
        this.mousePos = {
            mouseX: 0,
            mouseY: 0
        }

        this.followingMouse = false;
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
        if(this.followingMouse){this.setDirectionDetailed(this.mousePos);}
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
    setDirection({ x: mouseX, y: mouseY }) {
        this.deltaX = mouseX - this.position.x;
        this.deltaY = mouseY - this.position.y;
        this.direction.x = this.deltaX / Math.abs(this.deltaX);
        this.direction.y = this.deltaY / Math.abs(this.deltaY);
    }
    setDirectionDetailed({ x: mouseX, y: mouseY }){
        let deltaX = mouseX - this.position.x;
        let deltaY = mouseY - this.position.y;
        let magnitude = Math.sqrt(deltaX*deltaX + deltaY*deltaY)
        let deltaXNormalized = deltaX / magnitude;
        let deltaYNormalized = deltaY / magnitude;
        this.direction={
            x: deltaXNormalized,
            y: deltaYNormalized  
        }
    }
    UpdatePosition() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        // this.position.x = this.position.x.toFixed(4);
        // this.position.y = this.position.y.toFixed(4);
    }
    UpdateVelocity() {
        this.velocity.x += this.direction.x * this.acceleration;
        // this.velocity.y += this.direction.y * this.acceleration;
        this.velocity.y += this.direction.y * this.acceleration + this.gravity.y;
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
        } else if (this.position.x < 0 - 50) {
            this.position.x = window.innerWidth;
        }

        if (this.position.y > window.innerHeight) {
            this.position.y = 0;
        } else if (this.position.y < 0 - 50) {
            this.position.y = window.innerHeight;
        }
    }
}
