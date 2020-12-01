/**
 * Create the Circle class.
 *
 * @typedef {object} Circle
 * @property {number} r the radius of the circle
 * @function area return the area of the circle
 * @function perimeter return the perimeter of the circle
 */

 class Circle {
    constructor(r) {
        if(!(typeof r === "number" && r > 0)) {
            throw new Error('Invalid radius was given!');
        }
        this.r = r;
    }
    
    area() {
        return this.r ** 2 * Math.PI;
    }

    perimeter() {
        return 2 * this.r * Math.PI;
    }
 }

 module.exports = Circle;