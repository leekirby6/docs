var arr = ['a', 'b', 'c'];


// var obj = arr.reduce(function(acc, cur, i, arr) {
//     acc[i] = cur;
//     return acc;
//   }, {});

// var obj = { ...arr};
obj = {};

console.log('object',Object.assign({}, arr));


console.log('object', obj);

