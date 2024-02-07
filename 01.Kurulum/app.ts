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

// Tuple

let Id:number = 1;
let instructorName: string = "Kenan";

let instructor : [number,string] = [24,"Kenan"];

let user: [number, string, boolean, number, string ];
user = [1, "Steve", true, 20, "Admin"];
console.log(user);


let employee: [number,string][];
employee = [[1,"Steve"], [2, "Bill"], [3,"Beff"]];
console.log(employee);

// Object Data Types

// type Person ile propertylere bir type ataması yaptıktan sonra aşağıda instrustor'ın Type'ını yukarıdan veriyoruz.

type Person = {
    firstName: string,
    lastName: string,
    age: number,
    job: string,
}

let instrustor: Person;

instrustor = {
    firstName: "Kenan",
    lastName: "Cibooğlu",
    age: 27,
    job: "Full Stack Developer",

}
console.log(instrustor);

// Object içerisine erişmek

console.log(instrustor.age);

// Diğer yöntem

let person: {
    firstName: string,
    lastName: string,
    age: number,
    job: string,
}

person = {
    firstName: "Kenan",
    lastName: "Cibooğlu",
    age: 27,
    job: "Full Stack Developer",
}

console.log(person);


// Enum Yapısı

// Enum yapısı default olarak 0. indexten başlar. 1'er arttırarak devam eder. Biz bunu değiştirebiliriz.

enum Media {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
};
console.log(Media.Magazine);

// String enum

enum PrintMedia {
    Newspaper = "Cumhuriyet",
    Newsletter = "Sözcü",
    Magazine = "Posta",
    Book = "Suç ve Ceza"
}

console.log(PrintMedia.Book);
console.log(PrintMedia["Newspaper"]);


// Union Type
// Data, number veya string olabilir dediğimiz zaman Union type kullanılabilir.

let code: string | number;
code = 1232;
console.log(code);


// Any Type !!!
// Önerilmeyen kullanımdır. Ancak sıklıkla kullanılır. Programımızın front end tarafında kullanılması bize kolaylık sağlar.
// any ile her türlü veri türü basabiliriz.

let someThing: any;
someThing = 23453;

let some: any;
some = "hello";
some = true;

some = {
    firstName: "Kenan",
    lastName: "Cibo",
}

console.log(some);

let arrs: any;
arrs = ["Kenan", 24, 34, "Cibo"];
console.log(arrs);


// Void Type : Bir func geriye değer döndürmüyorsa void kullanılabilir.
// void kullanırsak return kullanamayız.

function sayHello (): void{
    console.log("Hi void!")
}

sayHello();



// Never Type : Geriye hiçbir value dönmez ise never kullanabiliriz.

// Hata mesajı döndürür.
// never ile void arasında ki farklar, 
// void: return değerini döndürmez. 
// never: null veya undefined değer bile döndürmez. Sadece hata döndürmek içindir.

function throwError (errorMsg: string): never{
    throw new Error(errorMsg);
}

// throwError("Hata");


// void undefined döndürdü ancak never undefined döndürmedi.
let somethiing: void = undefined;
// let nothing: never = undefined;


// Inference : TypeScript, biz bir type atamasak bile bunu algılayabilir. 

let sayac = 0;
console.log(typeof(sayac));

function increment (counter: number){
    return counter++;
}

let a = "some text";
console.log(typeof(a)); // string

function sum (a: number, b: number){
    return a + b;
}

let result: number = sum(4,15);
console.log(result);

// Type Assertion: TypeScript, biz type ataması yapmasak bile bunu algılayabiliyordu. Ancak biz bunu istemiyorsak yani type'ını biz vermek istiyorsak asseriton kullanıyoruz.

let code2: any = 123;
let empCode = <number>code2;
console.log(typeof(empCode));



//  Interface, alt öğelerine kalıtım verir.

interface Employee {
    name: string,
    code: number,
}

let empObj = <Employee> {};
console.log(typeof(empObj));
empObj.name = "Kenan";
empObj.code = 2;
console.log(empObj);








