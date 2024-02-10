// Type Guard: type number veya string olsun diyebiliriz. Eğer bir type olarak tanımlamak istersek bu type guard olur.

// string veya number vs typelarını tutan bir type oluşturduk. Ve bunu değişkenlerde kullanabiliriz.
type tip = string | number;

function add(a: tip, b: tip) {

    if(typeof a === "number" && typeof b === "number"){

        return a + b;

    }
    else if (typeof a === "string" && typeof b === "string" ) {
        // concat ile birinci stringin sonuna 2. stringi yapıştırır.
        return a.concat(b);

    }
    else {
        console.error("Type Check Again");
        
    }
}

console.log(add(56,45));
console.log(add("Kenan", "Cibooglu"));


