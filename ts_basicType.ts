// 변수 타입 지정 
let car:string = 'bmw'; // let car = 'bmw' : 타입추론
let age = 30;
let a:Array<number> = [1,2,3];
let week1: string[] = [];


// 튜플
let b:[string,number];
b = ['ok',1];


// void , never
function sayHello():void {  // void : 반환값이 없을 경우 지정 가능
    console.log('hi');
};

function loop():never { // never : 끝나지 않는 경우 지정 가능
    while(true){ }
};

// enum
enum OS {
    WINDOW,
    LINUX
};

// null, undefined
let a1 : null = null;
let b1 : undefined= undefined;