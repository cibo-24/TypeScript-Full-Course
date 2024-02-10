// Inheritance Class


class Person {
    public id: number;
    public firstName: string;
    public lastName: string;

    constructor(id: number, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName () {
        return `Adı : ${this.firstName} Soyadı: ${this.lastName}`
    }
}


// Parents- Child
// Parent : Person - Child : Employee

// Super Keyword
// Child Class'ında Parent classını çağırmak için !!! super keyword'ünü çağırmamız gerekiyor.

class Employee extends Person {
    constructor(id: number, firstName: string, lastName:string){
        // super ile Person classında ki constructor yapısını tetikledik.
        super(id, firstName, lastName)
    }

}

// Employee class'ının içerisinde Person içerisideki functionslarıda döndürebiliriz.
let newEmployee = new Employee (12, "Mustafa", "Cacuk");
console.log(newEmployee.getFullName());


