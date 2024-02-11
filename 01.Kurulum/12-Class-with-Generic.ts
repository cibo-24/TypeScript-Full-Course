
// Class Generic - pop and push


class Stack<T>{
    private elements: T[] = [];

    constructor(private size: number){
    }
    isEmpty(): boolean {
        return this.elements.length === 0;
    }
    isFull(): boolean {
        return this.elements.length === this.size;
    }
    push(elements: T): void{
        if(this.elements.length === this.size){
            throw new Error("The stack is overflow!");
        }
        this.elements.push(elements);
    }
    pop() {
        if(this.elements.length == 0) {
            throw new Error ("The stack is empty!");
        }
        return this.elements.pop();
    }
}

function randBetween(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1 ) + low);
}
let numbers = new Stack<number>(5);

while (!numbers.isFull()){
    let n = randBetween(1,10);
    console.log(`Push ${n} into the stack`);
    numbers.push(n);
    
}