/**
 * Created by training on 6/4/2018.
 */

class Shape {
    constructor (id, x, y) {
        this.id = id;
        this.move(x,y);
    }

    move(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Rectangle extends Shape {
    constructor (id, x, y, width, height) {
        super(id, x, y);
        this.width = width;
        this.height = height;
    }
}

let x = 1;
let y = 5;
var rect  = new Rectangle(3, x, y, 13, 78);
console.log(rect.move(x,y));