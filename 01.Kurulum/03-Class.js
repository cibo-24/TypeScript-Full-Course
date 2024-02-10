// TypeScript Class
// JS'den farklı olarak Class içerisindeki verilere type ataması yapabiliriz.
var Person = /** @class */ (function () {
    // constructor, Person classının içerisinde ki bilgileri yeni bir değişkende yapılandırırken, bu bilgileri (propertyleri) dışarıda kullanmamızı sağlar.
    function Person(id01, firstName02, lastName03) {
        this.id = id01;
        this.firstName = firstName02;
        this.lastName = lastName03;
    }
    Person.prototype.getFullName = function () {
        return "Ad\u0131n\u0131z: ".concat(this.firstName, " Soyad\u0131n\u0131z: ").concat(this.lastName);
    };
    return Person;
}());
var kisiBilgi = new Person(43, "Kenan", "Cibooglu");
console.log(kisiBilgi);
console.log(kisiBilgi.getFullName());
// Access Modifiers - Public - Private - Protected
// public ile her yerden erişebiliriz.
// private yazdığımızda sadece class içerisinde kullanabiliriz.
// !!! protected, class'ın içerisinde erişebiliyoruz. Dışarı kullanamayız. Ancak inheritance ile alt classlar oluşturduğumuzda buna erişebiliriz.
// readyonly, her yerden erişebiliriz. Ancak bu operatörü alan bir değişkenin değeri dışarıdan değiştirilemez.
var Calisan = /** @class */ (function () {
    function Calisan(idInfo, firstNameInfo, lastNameInfo, departmentInfo) {
        this.id = idInfo;
        this.firstName = firstNameInfo;
        this.lastname = lastNameInfo;
        this.department = departmentInfo;
    }
    Calisan.prototype.getCalisanInfo = function () {
        return "Calisan Ad\u0131: ".concat(this.firstName, " Calisan Soyadi: ").concat(this.lastname, " Calistigi Pozisyon: ").concat(this.department);
    };
    return Calisan;
}());
var calisan01 = new Calisan(13, "Lale", "Karaman", "Developer");
console.log(calisan01);
console.log(calisan01.getCalisanInfo());
