// değişken adından sonra Type adını girmemiz gerekiyor.
// JS'de kullandığım let ve const keyword'ünü kullanıyoruz. Daha sonra değişken adından sonra Type adı gelir.

let age:number = 27;
let firstName:string = "Kenan";
let lastName:string = "Cibooğlu";

let isUpdated:boolean = true;

function display (id:number, name:string) {
    console.log("Id =" + id + "Name = " + name);
}

// Yazdırırken ve döndürürken Type değerini yazmamız gerekmiyor.
let nameFirst:string = "Kenan";
console.log(nameFirst);

console.log(`firstname = ${firstName} lastname= ${lastName}`);

// Arrays

// değişken adından sonra Type adını ve array işaretini veriyoruz.

let firstNames: string[] = ["Kenan", "Ozan", "Can", "Hüseyin"];

let lastNames: Array<string> = ["Elmacı", "Kelmacı"];

// Type belirtmeden de tanımlanabilir.

let arr = [1,3, "apple", "orange", "banana"];

// Atama işlemi

let ids:number[] = [1,2,3,4,5,6,7];
ids = [8,9,10,11];

// Birden fazla Type olan arrays

let values: (string | number)[] = ["banana", 2, "apple", 24];

// Array elemanlarına erişmek

console.log(values[3]);

// Array içinde hepsini bastırma

for(let i =0; i<values.length; i++) {
    console.log(values[i]);
}

