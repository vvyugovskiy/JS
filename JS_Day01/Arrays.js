var nums = [1,2,3,3.5, "Muhtar", true, '$'];
// index    0 1 2  3      4       5     6 
console.log(nums);

console.log(nums[5]);

/*
sort() -> sorts in ascending order
push() -> add to the array
pop() -> LIFO
shift() -> FIFO
unshift() -> inserts the value to index 0
length

*/

var n = [9,8,7,6,5,4];
n.sort();  // ascii tables (127 characters)

console.log(n);

n.push(100);

console.log(n);

console.log(n.pop());
console.log(n);

console.log(n.shift());
console.log(n);

console.log(n.unshift(17)); // in 0 index
console.log(n);
