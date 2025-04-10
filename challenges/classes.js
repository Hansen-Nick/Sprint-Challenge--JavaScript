// 1. Copy and paste your prototype in here and refactor into class syntax.


class CuboidMaker {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height
    }
  
    volume() {
        return this.length * this.height * this.width
    }

    surfaceArea() {
        return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    }
}

class CubeMaker extends CuboidMaker {
    constructor(length, width, height) {
        super(length, width, height);
    }

    surfaceArea() {
       return 6 * (Math.pow(this.length, 3))
    }
}

const cube = new CubeMaker(5,5,5)
const cuboid = new CuboidMaker(4, 5, 5)

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.volume());
console.log(cube.surfaceArea());





// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.