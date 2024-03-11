// 제네릭 : 사용하는쪽에서 타입을 정함

function getSize<T>(arr: T[]) : number {
    return arr.length;
};

const arr1 = [1,2,3];
getSize<number>(arr1);

const arr2 = ['a','b'];
getSize<string>(arr2); // <> 명시해주지 않아도 알고있음 

const arr3 = [false, true, true];
getSize(arr3);

