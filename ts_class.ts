// class + 접근제한자 : (# _ private) 

class classCar {
    constructor( readonly color : string){ //
        this.color = color;
    }

    start(){
        console.log('go');        
    }
};


const Z4 = new classCar("black");