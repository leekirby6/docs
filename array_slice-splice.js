var myArr = [];

myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//slice

/**
 * Returns a section of an array.
 * @param start The beginning of the specified portion of the array.
 * @param end The end of the specified portion of the array.
 *
 * slice(start ? : number, end ? : number): T[];
 */

console.log(myArr.slice(1, 3));

/**
 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
 * @param start The zero-based location in the array from which to start removing elements.
 * @param deleteCount The number of elements to remove.
 * @param items Elements to insert into the array in place of the deleted elements.
 *
 * splice(start: number, deleteCount: number, ...items: T[]): T[];
 */

var myArr1 = [];
myArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('splice', myArr1.splice(0, 3, 'ele1', 'ele2','ele3'));
console.log('splice', myArr1);