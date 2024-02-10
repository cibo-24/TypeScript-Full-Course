interface BusinessPartner {
    name: string;
    credit: number
}

interface Identity {
    name: string;
    id: number;
}

interface Contact {
    email: string;
    phone: string;
}

// type Employee, Identity ve Contact değerlerini tutan bir type olmuş oldu.
type Employee = Identity & Contact;

// person classı type'ını Employee'de alıyor. Bu type'ın propertylerinin hepsini person içerisinde kullanmamız gerekiyor.

let person: Employee = {
    id: 54,
    name: "Kenan",
    email: "cibo.kenan@gmail.com",
    phone: "05441234567",
}

console.log(person);

// Customer type'ı BusinessPartner ve Contact'dan interface propertylerini alır.

type Customer =  BusinessPartner & Contact;

let customer: Customer = {
    name: "Kemal",
    credit: 200,
    email: "kemalpasa@gmail.com",
    phone: "0902122201224",
}

console.log(customer);


