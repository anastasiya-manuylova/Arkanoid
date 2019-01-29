import Two from "../two";

export default class PlatformView {
    constructor() {}
    draw(params, values) {
        console.log(values)
        var two = new Two(params).appendTo(values.elem)

        var rectangle = two.makeRectangle(values.x, values.y, values.width, values.height);

        rectangle.fill = values.color;
        rectangle.stroke = 'orangered'; // Accepts all valid css color
        rectangle.linewidth = 2;

        two.update();
    }
    drawMovement(x) {

    }
}