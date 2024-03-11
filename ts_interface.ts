// js
// let user:object;

// user = {
//     name : 'kim',
//     age: 30
// }

// console.log(user.name);


// ts

type Score = 'A' | 'B' | 'C';

interface User { // interface 객체 정의
    name : string;
    age : number;
    gender? : string; // ?(optional) : 있어도 되고 없어도 되는 키워드
    readonly birthYear : number; // readonly : 최초에 생성할때만 할당 가능. 나중에는 변경 불가능
    [key:number] : Score; // key (number) : value (string)를 여러개 받을수있다
                          // 지금처럼 값을 할당해준다면 값에 대한 텍스트만 받기 가능.
};

const user3 : User = {
    name : 'kim',
    age : 25,
    birthYear : 2000,
    1 : 'A',
    2 : 'C'
};




// interface : 함수정의 

interface Add {
    (num1 : number, num2:number) : number; 
};

const testAdd : Add = function(x,y){
    return x+y;
}

testAdd(10,20);


interface IsAdult {
    (age:number) : boolean;
};

const ab:IsAdult = (age)=>{
    return age > 20;
}

ab(25) // true


// imprlements
interface Car {
    color : string;
    whells : number;
    start() : void;
}

interface Benz extends Car {
    door : number;
    stop():void;
}


class BMW implements Car {
    color;
    whells = 5;

    constructor(c:string){
        this.color = c;
    }

    start(): void {
        console.log('ggggggooooo');
    }
}

const Benz : Benz = {
    door : 2,
    stop(){
        console.log('stooooooop');
    },
    color : 'black',
    whells : 1,
    start() : void {
        console.log('go');
    }
}

const bmw = new BMW('black');
console.log(bmw);








