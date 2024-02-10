// TypeScript Class
// JS'den farklı olarak Class içerisindeki verilere type ataması yapabiliriz.

class Person {
    id: number;
    firstName: string;
    lastName: string;
    
    // constructor, Person classının içerisinde ki bilgileri yeni bir değişkende yapılandırırken, bu bilgileri (propertyleri) dışarıda kullanmamızı sağlar.

    constructor(id01: number, firstName02: string, lastName03:string) {
        this.id = id01;
        this.firstName = firstName02;
        this.lastName = lastName03;
    }

    getFullName() {
        return `Adınız: ${this.firstName} Soyadınız: ${this.lastName}`
    }

}

let kisiBilgi = new Person(43, "Kenan", "Cibooglu");
console.log(kisiBilgi);
console.log(kisiBilgi.getFullName());


// Access Modifiers - Public - Private - Protected

// public ile her yerden erişebiliriz.
// private yazdığımızda sadece class içerisinde kullanabiliriz.
// !!! protected, class'ın içerisinde erişebiliyoruz. Dışarı kullanamayız. Ancak inheritance ile alt classlar oluşturduğumuzda buna erişebiliriz.

// readyonly, her yerden erişebiliriz. Ancak bu operatörü alan bir değişkenin değeri dışarıdan değiştirilemez.
class Calisan {
    public id: number;
    private firstName: string;
    protected lastname: string;
    readonly department: string;

    constructor(idInfo: number, firstNameInfo: string, lastNameInfo: string, departmentInfo: string) {
        this.id = idInfo;
        this.firstName = firstNameInfo;
        this.lastname = lastNameInfo;
        this.department = departmentInfo;
    }

    getCalisanInfo () {
        return `Calisan Adı: ${this.firstName} Calisan Soyadi: ${this.lastname} Calistigi Pozisyon: ${this.department}`
    }
}

let calisan01 = new Calisan(13, "Lale", "Karaman" ,"Developer");
console.log(calisan01);
console.log(calisan01.getCalisanInfo());




