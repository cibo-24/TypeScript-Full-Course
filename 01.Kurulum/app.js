// değişken adından sonra Type adını girmemiz gerekiyor.
// JS'de kullandığım let ve const keyword'ünü kullanıyoruz. Daha sonra değişken adından sonra Type adı gelir.
var age = 27;
var firstName = "Kenan";
var lastName = "Cibooğlu";
var isUpdated = true;
function display(id, name) {
    console.log("Id =" + id + "Name = " + name);
}
// Yazdırırken ve döndürürken Type değerini yazmamız gerekmiyor.
var nameFirst = "Kenan";
console.log(nameFirst);
console.log("firstname = ".concat(firstName, " lastname= ").concat(lastName));
// Arrays
// değişken adından sonra Type adını ve array işaretini veriyoruz.
var firstNames = ["Kenan", "Ozan", "Can", "Hüseyin"];
var lastNames = ["Elmacı", "Kelmacı"];
// Type belirtmeden de tanımlanabilir.
var arr = [1, 3, "apple", "orange", "banana"];
// Atama işlemi
var ids = [1, 2, 3, 4, 5, 6, 7];
ids = [8, 9, 10, 11];
// Birden fazla Type olan arrays
var values = ["banana", 2, "apple", 24];
// Array elemanlarına erişmek
console.log(values[3]);
// Array içinde hepsini bastırma
for (var i = 0; i < values.length; i++) {
    console.log(values[i]);
}
// Tuple
var Id = 1;
var instructorName = "Kenan";
var instructor = [24, "Kenan"];
var user;
user = [1, "Steve", true, 20, "Admin"];
console.log(user);
var employee;
employee = [[1, "Steve"], [2, "Bill"], [3, "Beff"]];
console.log(employee);
var instrustor;
instrustor = {
    firstName: "Kenan",
    lastName: "Cibooğlu",
    age: 27,
    job: "Full Stack Developer",
};
console.log(instrustor);
// Object içerisine erişmek
console.log(instrustor.age);
// Diğer yöntem
var person;
person = {
    firstName: "Kenan",
    lastName: "Cibooğlu",
    age: 27,
    job: "Full Stack Developer",
};
console.log(person);
// Enum Yapısı
// Enum yapısı default olarak 0. indexten başlar. 1'er arttırarak devam eder. Biz bunu değiştirebiliriz.
var Media;
(function (Media) {
    Media[Media["Newspaper"] = 1] = "Newspaper";
    Media[Media["Newsletter"] = 2] = "Newsletter";
    Media[Media["Magazine"] = 3] = "Magazine";
    Media[Media["Book"] = 4] = "Book";
})(Media || (Media = {}));
;
console.log(Media.Magazine);
// String enum
var PrintMedia;
(function (PrintMedia) {
    PrintMedia["Newspaper"] = "Cumhuriyet";
    PrintMedia["Newsletter"] = "S\u00F6zc\u00FC";
    PrintMedia["Magazine"] = "Posta";
    PrintMedia["Book"] = "Su\u00E7 ve Ceza";
})(PrintMedia || (PrintMedia = {}));
console.log(PrintMedia.Book);
console.log(PrintMedia["Newspaper"]);
// Union Type
// Data, number veya string olabilir dediğimiz zaman Union type kullanılabilir.
var code;
code = 1232;
console.log(code);
// Any Type !!!
// Önerilmeyen kullanımdır. Ancak sıklıkla kullanılır. Programımızın front end tarafında kullanılması bize kolaylık sağlar.
// any ile her türlü veri türü basabiliriz.
var someThing;
someThing = 23453;
var some;
some = "hello";
some = true;
some = {
    firstName: "Kenan",
    lastName: "Cibo",
};
console.log(some);
var arrs;
arrs = ["Kenan", 24, 34, "Cibo"];
console.log(arrs);
// Void Type : Bir func geriye değer döndürmüyorsa void kullanılabilir.
// void kullanırsak return kullanamayız.
function sayHello() {
    console.log("Hi void!");
}
sayHello();
// Never Type : Geriye hiçbir value dönmez ise never kullanabiliriz.
// Hata mesajı döndürür.
// never ile void arasında ki farklar, 
// void: return değerini döndürmez. 
// never: null veya undefined değer bile döndürmez. Sadece hata döndürmek içindir.
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
// throwError("Hata");
// void undefined döndürdü ancak never undefined döndürmedi.
var somethiing = undefined;
// let nothing: never = undefined;
// Inference : TypeScript, biz bir type atamasak bile bunu algılayabilir. 
var sayac = 0;
console.log(typeof (sayac));
function increment(counter) {
    return counter++;
}
var a = "some text";
console.log(typeof (a)); // string
function sum(a, b) {
    return a + b;
}
var result = sum(4, 15);
console.log(result);
// Type Assertion: TypeScript, biz type ataması yapmasak bile bunu algılayabiliyordu. Ancak biz bunu istemiyorsak yani type'ını biz vermek istiyorsak asseriton kullanıyoruz.
var code2 = 123;
var empCode = code2;
console.log(typeof (empCode));
var empObj = {};
console.log(typeof (empObj));
empObj.name = "Kenan";
empObj.code = 2;
console.log(empObj);
