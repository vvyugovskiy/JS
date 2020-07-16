/*
for loop:
while loop:
do-while loop:

break: exits the loop or switch statement
continue: skip the iteration

for in loop:
for of loop:

*/

for (let i = 0; i < 10; i++) {
    console.log(i);
    continue;
}

console.log("____________________________________________");
// for in loop  

var arr = [1,2,3,4,5,10.5];

var names = ["Rauf","Max","Irina", "Misha", "Alex"];

for (each in arr){
    console.log(each); // prints indexes 
}
console.log("____________________________________________");

for(eacn in names){
    console.log(names[eacn]);
}