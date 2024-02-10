// Functions
// Parametrelerden sonra, fonksiyonumuz hangi türde bir veri döndürecekse onu verebiliyoruz.
// Bunu vermesekte olur.
function add(a, b) {
    return a + b;
}
var toplam = add(4, 5);
console.log(toplam);
// Void: Geriye değer döndürmeyen değerler. Yani return ifade girmiyoruz.
function bastir() {
    console.log("Developer");
}
bastir();
// Exercise Functions
function birlestir(name, lastname) {
    return name + " " + lastname;
}
var degisken = birlestir("React", "Full Stack Developer");
console.log(degisken);
// Default Parametre: başlangıçta parametreye atadığımız değer
function nameInfo(ad, soyad) {
    if (soyad === void 0) { soyad = "Kemal"; }
    return ad + " " + soyad;
}
console.log(nameInfo("Mustafa"));
// Optional Parameters: opsiyonel bir parametre atayarak, değeri girsekte olur girmesekte
function carpim(a, b, c) {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
var result = carpim(5, 6);
var result2 = carpim(2, 3, 10);
// Arrow Func
var carpim2 = function (a, b) {
    return a * b;
};
var arrow = carpim2(50, 2);
var arrowFunc = function () {
    return console.log("TypeScript");
};
arrowFunc();
function addOver(a, b) {
    return a + b;
}
// number number ya da string string'e değişken yapısı veriyoruz.
// neyi tanımlarsak onu alırız.
var overLoad = addOver(4, 5);
console.log(overLoad);
// Rest Parameters
// Dizinin içerisini forEach ile dönüyoruz.
// ...numbers değişkeni, number[] adlı diziye eşit olacaktır. Yani numbers bir number dizisi alır.
// Rest parameters sonda olmak zorundadır.
// Rest Parameters, numbers
function toplamArr(a) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) {
        total += num;
    });
    return total;
}
;
console.log(toplamArr("Kenan", 10, 11, 12, 13));
// Rest Parameters, String
function birlestirString(message) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(message + " " + names.join(","));
}
console.log(birlestirString("Merhaba", "Kenan", "Fırat", "ozan", "tuba"));
