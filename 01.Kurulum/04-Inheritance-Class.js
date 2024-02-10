// Inheritance Class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "Ad\u0131 : ".concat(this.firstName, " Soyad\u0131: ").concat(this.lastName);
    };
    return Person;
}());
// Parents- Child
// Parent : Person - Child : Employee
// Super Keyword
// Child Class'ında Parent classını çağırmak için !!! super keyword'ünü çağırmamız gerekiyor.
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, firstName, lastName) {
        // super ile Person classında ki constructor yapısını tetikledik.
        return _super.call(this, id, firstName, lastName) || this;
    }
    return Employee;
}(Person));
// Employee class'ının içerisinde Person içerisideki functionslarıda döndürebiliriz.
var newEmployee = new Employee(12, "Mustafa", "Cacuk");
console.log(newEmployee.getFullName());
