// numbers

console.log(1 + 1);
console.log(1 - 1);
console.log(2 * 2);
console.log(4 / 2);


// strings

console.log('a' + 'b');


// to number

console.log(5 * undefined);  // NaN
console.log(5 * {});         // NaN
console.log(5 * []);         // 0
console.log(5 * null);       // 0
console.log(5 * true);       // 1
console.log(5 * false);      // 0
console.log(5 * '1');        // parseFloat


// to string

console.log('a' + undefined);  // 'aundefined'
console.log('a' + null);       // 'anull'
console.log('a' + true);       // 'atrue'
console.log('a' + false);      // 'afalse'
console.log('a' + 123);        // 'a123'
console.log('a' + {});         // 'a[object Object]'
console.log('a' + []);         // 'a'
console.log('a' + [1, 2, 3]);  // 'a1,2,3'


