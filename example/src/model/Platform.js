import Platform from '../view/Platform';

export default class PlatformModel {
    constructor(width, height, color, x, y, element) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        this.element = element;
        element.addEventListener("keyup", this.moveLeft)
        element.addEventListener("keyup", this.moveRight)
        this.render = new Platform(width, height, color, x, y, element);
    }
    moveLeft(event) {
        if(event.keyCode === 37) {
            this.move(-10)
        }
    };
    moveRight(event) {
        if(event.keyCode === 39) {
            this.move(10)
        }
    }
    move(x) {
        this.x += x;
        this.render.drawMovement(x); 
    }
    draw(params) {
        const values = {
            color: this.color,
            x: this.x,
            y: this.y,
            width: this.width,
            heigh: this.heigh,
            elem: this.element
        }
        this.render.draw(params, values);
    }
    clash() {

    }
}