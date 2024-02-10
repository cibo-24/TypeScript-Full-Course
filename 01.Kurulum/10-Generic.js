// Generic
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Type'ına ne verirsek verelim, otomatik olarak dönüş tipini verdiğim değere göre geri dönmesini istiyorsak Generic kullanırız.
function getRandomNumber(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var numbers = [1, 54, 65, 7, 8];
console.log(getRandomNumber(numbers));
function getRandomString(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var names = ["Kenan", "Ozan", "Fırtına"];
console.log(getRandomString(names));
// herhangi bir type'da değer gönderir. any
// Önerilmeyen bir kullanımdır.
function getRandomElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
console.log(getRandomElement(numbers));
console.log(getRandomElement(names));
// <T> <A> veya herhangi bir şey ile Generic type veriyoruz. Ve bu şekilde hangi type'da değer dönüyorsa o şekilde döndürür.
function getRandomElementGeneric(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var bool = [true, false, true];
// type'ınıda verebiliriz. Ancak typescript bunu otomatik olarak algılayabilir. <number> <string>
console.log(getRandomElementGeneric(numbers));
console.log(getRandomElementGeneric(names));
console.log(getRandomElementGeneric(bool));
// Generic Constraints - Generic type'ı bir koşul eklemek
// Genericlerin type'ını ayarladık. <U extends object>
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
// merge, 2 tane argüman istediği için U,V, 2 tane property vermemiz gerekiyor. obj1 ve obj2
var person = merge({ name: "Kenan" }, { age: 28 });
console.log(person);
