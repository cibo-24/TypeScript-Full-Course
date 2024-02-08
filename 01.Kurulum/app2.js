// If Else Ternary
var x = 35;
var y = 25;
if (x > y) {
    console.log("x y'den b\u00FCy\u00FCkt\u00FCr. ".concat(x, " > ").concat(y));
}
else if (x < y) {
    console.log("Y X'den büyüktür");
}
else {
    console.log("x y'ye eşittir");
}
// Ternary Operatör
x > y ? console.log("X Y'den büyüktür") : console.log("X Y'den küçüktür veya eşittir");
// Switch Case Yapısı
var day = 11;
switch (day) {
    case 0:
        console.log("Pazar");
        break;
    case 1:
        console.log("Pazartesi");
        break;
    case 2:
        console.log("Salı");
        break;
    case 3:
        console.log("Çarşamba");
        break;
    case 4:
        console.log("Perşembe");
        break;
    case 5:
        console.log("Cuma");
        break;
    case 6:
        console.log("Cumartes");
        break;
    default:
        console.log("Böyle bir gün yok!");
}
