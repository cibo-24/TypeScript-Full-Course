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
