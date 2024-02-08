// For Loop
for (var i = 0; i <= 3; i++) {
    console.log("İ değerim", i);
}
// Dizinin içerisinde for loop - of
var arr = [10, 20, 30, 40];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var item = arr_1[_i];
    console.log(item);
}
var str = "Kenan Cibo";
for (var _a = 0, str_1 = str; _a < str_1.length; _a++) {
    var item = str_1[_a];
    console.log(item);
}
// Dizi içerisindeki verilerin index değerini almak - in
for (var item in arr) {
    console.log(item);
}
// While Loop, koşul true olduğu sürece döner
var counter = 0;
while (counter < 10) {
    console.log(counter);
    counter++;
    if (counter == 6) {
        break;
    }
}
// do while, koşul ne olursa olsun do kısmı her türlü çalışacaktır.
do {
    console.log("Do - While");
} while (counter < 5);
{
    console.log(counter);
}
