// function

function add(num1: number, num2: number) : void {
    console.log('hi');
}


function hi(name?:string) : string {
    return `Hello, ${name || "world"}`;
}

const result = hi();
const result2 = hi('nim');


