// Interface
// interface ile type kontrolü yapıyoruz. Type'ını kontrol ettiğimiz değişkenler aşağıda ki gibidir. Normalde bu değişkenleri func vs yazdığımzda kendi içerisinde tanımlıyorduk. Ancak interface ile önceden tanımlayabiliyoruz.
function getFullName(person) {
    if (person.middleName) {
        return "".concat(person.firstName, " ").concat(person.lastName, " ").concat(person.middleName);
    }
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: "Kenan",
    lastName: "Cibooğlu",
};
console.log(getFullName(person));
var format;
format = function (str, isUpper) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
console.log(format("Ozan Cibo", false));
// employee artık IEmplopee interface'ne sahip özelleri vardır.
var employee = {
    age: 1,
    gender: "Male",
    name: "Kenan",
};
console.log(employee);
// bir class'a interface implements edersek eğer, interface içerisindeki propertylerinin hepsini class içerisinde tanımlamamız gerekmektedir.
var Employed = /** @class */ (function () {
    // constructor ile class içerisinde ki propertyleri dışarıda kullanabilir.
    function Employed(empNumber, name, age) {
        this.age = age;
        this.empNumber = empNumber;
        this.name = name;
    }
    return Employed;
}());
var emp = new Employed(24, "Kenan", 45);
console.log(emp);
