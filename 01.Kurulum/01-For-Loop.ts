// For Loop

for (let i = 0; i <= 3; i++) {
    console.log("İ değerim", i)
}

// Dizinin içerisinde for loop - of
let arr = [10,20,30,40];

for(let item of arr) {
    console.log(item);
}

let str = "Kenan Cibo";

for (let item of str) {
    console.log(item)
}

// Dizi içerisindeki verilerin index değerini almak - in
for (let item in arr) {
    console.log(item)
}



// While Loop, koşul true olduğu sürece döner

let counter = 0;

while(counter < 10){
    console.log(counter);
    counter++;
    
    if(counter == 6) {
        break;
    }
}


// do while, koşul ne olursa olsun do kısmı her türlü çalışacaktır.
do{
    console.log("Do - While")
}while(counter < 5){
    console.log(counter)
}

