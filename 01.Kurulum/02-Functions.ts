// Functions

// Parametrelerden sonra, fonksiyonumuz hangi türde bir veri döndürecekse onu verebiliyoruz.
// Bunu vermesekte olur.

function add(a: number,b: number):number{
    return a + b;
}

let toplam = add(4,5);
console.log(toplam);

// Void: Geriye değer döndürmeyen değerler. Yani return ifade girmiyoruz.

function bastir(): void {
    console.log("Developer");
}

bastir();

// Exercise Functions
function birlestir(name: string, lastname: string): string {
    return name + " " + lastname
}

let degisken = birlestir("React", "Full Stack Developer");
console.log(degisken);


// Default Parametre: başlangıçta parametreye atadığımız değer

function nameInfo (ad: string, soyad: string = "Kemal"): string {
    return ad + " " + soyad;
}

console.log(nameInfo("Mustafa"))

// Optional Parameters: opsiyonel bir parametre atayarak, değeri girsekte olur girmesekte

function carpim(a: number, b:number, c?:number) {

    if(typeof c !== 'undefined'){
        return a*b*c
    }
    return a*b
}


let result = carpim(5,6);
let result2 = carpim(2,3,10);

// Arrow Func

let carpim2 = (a:number, b:number):number => {
    return a*b;
}

let arrow = carpim2(50,2);

let arrowFunc = () => {
    return console.log("TypeScript");
}
arrowFunc();
