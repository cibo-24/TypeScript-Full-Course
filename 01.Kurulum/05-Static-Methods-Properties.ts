// Static Methods

class Circle {
    static pi: number = 3.14;

    static hesapla (yariCap: number) {
        return this.pi * yariCap * yariCap;
    }
}

// Normalde bir class'ın propertylerine erişmek için new Circle oluşturduktan sonra erişebiliyorduk. Ancak static ile bunu aşağıda ki gibi yapabiliriz.

console.log(Circle.pi);
console.log(Circle.hesapla(5));


