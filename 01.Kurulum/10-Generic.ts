// Generic

// Type'ına ne verirsek verelim, otomatik olarak dönüş tipini verdiğim değere göre geri dönmesini istiyorsak Generic kullanırız.

function getRandomNumber(items: number[]): number {
    let randomIndex = Math.floor(Math.random() * items.length);

    return items[randomIndex];
}

let numbers = [1, 54, 65, 7, 8];
console.log(getRandomNumber(numbers));



function getRandomString(items: string[]): string {
    let randomIndex = Math.floor(Math.random() * items.length);

    return items[randomIndex];
}

let names = ["Kenan", "Ozan", "Fırtına"];
console.log(getRandomString(names));


// herhangi bir type'da değer gönderir. any
// Önerilmeyen bir kullanımdır.

function getRandomElement(items: any[]): any {
    let randomIndex = Math.floor(Math.random() * items.length);

    return items[randomIndex];
}

console.log(getRandomElement(numbers));
console.log(getRandomElement(names));


// <T> <A> veya herhangi bir şey ile Generic type veriyoruz. Ve bu şekilde hangi type'da değer dönüyorsa o şekilde döndürür.

function getRandomElementGeneric<Generic>(items: Generic[]): Generic {
    let randomIndex = Math.floor(Math.random() * items.length);

    return items[randomIndex];
}

let bool = [true, false, true];

// type'ınıda verebiliriz. Ancak typescript bunu otomatik olarak algılayabilir. <number> <string>
console.log(getRandomElementGeneric<number>(numbers));
console.log(getRandomElementGeneric<string>(names));
console.log(getRandomElementGeneric(bool));


// Generic Constraints - Generic type'ı bir koşul eklemek
// Genericlerin type'ını ayarladık. <U extends object>

function merge<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2,
    }
}

// merge, 2 tane argüman istediği için U,V, 2 tane property vermemiz gerekiyor. obj1 ve obj2
let person = merge(
    { name: "Kenan" },
    { age: 28 }
)

console.log(person);


