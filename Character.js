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
        this.speed = 5;
        this.acceleration = .001;

        this.x = x;
        this.y = y;
        this.counter = 0;
    }

    turnLeft = () => {this.direction.x = -1}
    turnRight = () => {this.direction.x = 1}
    turnUp = () => {this.direction.y = -1}
    turnDown = () => {this.direction.y = 1}
    update = () => {
        this.position.x += this.direction.x * this.speed;
        this.position.y += this.direction.y * this.speed;
        if (this.position.x > window.innerWidth) {
            this.position.x = 0;
        } else if(this.position.x < 0 - 100){
            this.position.x = window.innerWidth;
        }
        if (this.position.y > window.innerHeight) {
            this.position.y = 0;
        }else if(this.position.y < 0 - 100){
            this.position.y = window.innerHeight;
        }
    };
}
