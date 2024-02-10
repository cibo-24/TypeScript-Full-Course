// Abstract Class
// abstract class'ta yeni bir object oluşturamıyoruz. Ancak extends edebiliriz.
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
// Class içerisinde abstract method tanımlar isek bunu kesinlikle child class'da tanımlamamız gerekiyor.
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    return Department;
}());
// super ile içerisinde ki string'i parents Deparment içerisinde ki name'e göndermiş olduk.
var AccountDepartment = /** @class */ (function (_super) {
    __extends(AccountDepartment, _super);
    function AccountDepartment() {
        return _super.call(this, "Acoounting and Auditing") || this;
    }
    // parents'daki abstract method
    AccountDepartment.prototype.printMeeting = function () {
        console.log("Deparment meets each");
    };
    AccountDepartment.prototype.generateReports = function () {
        console.log("Generating accounting reports...");
    };
    return AccountDepartment;
}(Department));
// abstract olan classımız Deparment class, bu class ile yeni bir new Deparment oluşturamayız.
var departman = new AccountDepartment();
departman.printMeeting();
departman.generateReports();
