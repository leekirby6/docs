const animals = [{
        "name": "cat",
        "size": "small",
        "weight": 5
    },
    {
        "name": "dog",
        "size": "small",
        "weight": 10
    },
    {
        "name": "lion",
        "size": "medium",
        "weight": 150
    },
    {
        "name": "elephant",
        "size": "big",
        "weight": 5000
    }
];

//push phải tạo mảng mới
let newArr = [];
for (var item of animals) {
    newArr.push(item.name);
    console.log('newArr.push(var of) ', newArr);
}
console.log('-----------------------------');

//map, filter, reduce
/*
    Nếu tôi có 1 mảng và tôi muốn xử lý từng biến trong mảng theo cùng 1 cách, trả về các giá trị sau xử lý 
    (số lượng đúng bằng số lượng phần tử ban đầu của mảng) thì tôi sẽ sử dụng map.

    Nếu tôi đã có 1 mảng nhưng tôi chỉ muốn lấy các phần tử theo 1 tiêu chuẩn nhất định, tôi sử dụng filter.

    Nếu tôi đã có 1 mảng nhưng tôi muốn sử dụng các giá trị trong mảng để tạo ra vài thứ khác hoàn toàn mới, tôi sử dụng reduce.
 */


//map, filter
//(item in array_new, index, array_old)

/**
 * map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
 * filter(callbackfn: (value: T, index: number, array: T[]) => any, thisArg?: any): T[];
 * reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
 */

let sample = animals.map((item, index, animals) => {
    console.log('sample() | index', index);
})
console.log('-----------------------------');


//map filter k cần khởi tạo mảng mới
let newArr2 = animals.map((item) => {
    return item.size;
})
console.log('newArr2.map', newArr2);
console.log('-----------------------------');

let newArr3 = animals.filter((item) => {
    return item.size === 'small';
})
console.log('filter by size === small', newArr3);
console.log('-----------------------------');


//reduce
let total_weight = animals.reduce((weight, item) => {
    return weight += item.weight;
}, 0)
console.log('reduce | total_weight', total_weight);

console.log('-----------------------------');

// Vòng lặp for..in cho 1 Mảng => i : index 
var arr = ['JS', 'loop', 'for..in'];
for (var i in arr) {
    // Thân vòng lặp
    console.log('arr[i] | for in ', arr[i]);
}

for (var item of arr) {
    console.log('for of', item);
}

console.log('-----------------------------');
// Vòng lặp for..in cho 1 Object => i : property name

var obj = {
    'name': 'test object',
    'type': 'test',
    'id': 12888
};
for (var i in obj) {
    // Thân vòng lặp
    console.log('obj[i] | for in', obj[i]);
}

console.log('-----------END SAMPLE CODE---------------');

console.log('-----------TEST SAMPLE CODE---------------');