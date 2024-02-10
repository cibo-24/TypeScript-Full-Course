// Static Methods
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.hesapla = function (yariCap) {
        return this.pi * yariCap * yariCap;
    };
    Circle.pi = 3.14;
    return Circle;
}());
// Normalde bir class'ın propertylerine erişmek için new Circle oluşturduktan sonra erişebiliyorduk. Ancak static ile bunu aşağıda ki gibi yapabiliriz.
console.log(Circle.pi);
console.log(Circle.hesapla(5));
