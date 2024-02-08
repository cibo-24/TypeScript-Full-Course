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
