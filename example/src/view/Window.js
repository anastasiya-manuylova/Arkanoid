import Two from "../two";

export default class WindowView {
    constructor(params) {
        this.params = {} || params
    }
    draw() {
        var elem = document.getElementById('draw'),
            two = new Two(this.params).appendTo(elem)
        two.update();
    }
}