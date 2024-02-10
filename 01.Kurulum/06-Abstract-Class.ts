// Abstract Class
// abstract class'ta yeni bir object oluşturamıyoruz. Ancak extends edebiliriz.

// Class içerisinde abstract method tanımlar isek bunu kesinlikle child class'da tanımlamamız gerekiyor.
abstract class Department {
    constructor(public name: string) {
    }

    abstract printMeeting (): void;
}

// super ile içerisinde ki string'i parents Deparment içerisinde ki name'e göndermiş olduk.
class AccountDepartment extends Department {
    constructor() {
        super("Acoounting and Auditing");
    }

    // parents'daki abstract method
    printMeeting(): void {
        console.log("Deparment meets each");
        
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

// abstract olan classımız Deparment class, bu class ile yeni bir new Deparment oluşturamayız.

let departman = new AccountDepartment ();
departman.printMeeting();
departman.generateReports();
