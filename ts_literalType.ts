// literal type


const user1 = 'Bob'; // 불변
let user2 = 'tom'; // string

type Job = "police" | "developer" | "teacher"; // 유니온 : 교차타입

interface User2 {
    name : string;
    age : number;
    job : Job;

};

const user : User2 = {
    name : "TOOM",
    age : 30,
    job : "developer"
};

interface Car2 {
    name : string;
    start(): void;
};

interface Toy {
    name : string;
    color: string;
}

const toyCar : Toy & Car2 = {
    name : '타요',
    color : 'black',
    start() {
        console.log('go');
    },
}

