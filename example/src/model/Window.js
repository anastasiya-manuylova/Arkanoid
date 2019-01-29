import Window from '../view/Window';

export default class WindowModel {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.render = new Window({width, height});
    }
    getParams() {
        return { width: this.width, height: this.height }
    }
    draw() {
        this.render.draw()
    }
}