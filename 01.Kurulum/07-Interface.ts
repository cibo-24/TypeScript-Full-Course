// Interface
// interface ile type kontrolü yapıyoruz. Type'ını kontrol ettiğimiz değişkenler aşağıda ki gibidir. Normalde bu değişkenleri func vs yazdığımzda kendi içerisinde tanımlıyorduk. Ancak interface ile önceden tanımlayabiliyoruz.


interface Person {
    // readonly, değerini dışarıda değiştiremiyoruz.
    readonly firstName: string;
    lastName: string;
    // Optional Property - İstersek kullanırız ?
    middleName?: string;
}



function getFullName(person) {
    if (person.middleName) {

        return `${person.firstName} ${person.lastName} ${person.middleName}`
    }
    return `${person.firstName} ${person.lastName}`

}

let person: Person = {
    firstName: "Kenan",
    lastName: "Cibooğlu",
};

console.log(getFullName(person));


// Interface - function type
interface StringFormat {
    (str: string, isUpper: boolean) : string;
}

let format: StringFormat;

format = function (str: string, isUpper: boolean) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
}

console.log(format("Ozan Cibo", false));


// Interface extends etmek ve Classa Implemente etmek

// bir inteface tekrar tekrar kullanmaz zorunda olmadan başka interfacelere extends edebiliriz.


// Interface to extends
interface IPerson {
    name: string;
    gender: string;
}

interface IEmployee extends IPerson {
    age: number; // IEmployee özel, aynı zamanda IPerson propertylerine de erişimi var.

}

// employee artık IEmplopee interface'ne sahip özelleri vardır.
let employee : IEmployee = {
    age: 1,
    gender: "Male",
    name: "Kenan",
}

console.log(employee);


// Class to implements Interface
// Önerilmeyen kullanım
interface Info {
    name: string;
    age: number;
}

// bir class'a interface implements edersek eğer, interface içerisindeki propertylerinin hepsini class içerisinde tanımlamamız gerekmektedir.

class Employed implements Info {
    empNumber: number;
    name: string;
    age: number;

    // constructor ile class içerisinde ki propertyleri dışarıda kullanabilir.
    constructor(empNumber: number, name: string, age: number) {
        this.age = age;
        this.empNumber = empNumber;
        this.name = name;
    }
}

let emp = new Employed (24, "Kenan", 45);
console.log(emp);
