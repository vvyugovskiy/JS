var set = new Set();

/*
add(values) -> adds the value to the set
delete(value) -> deletes the value
clear() -> removes everithing
has(value) -> returnes the boolean
values() ->

*/

set.add(10);
set.add(10);
set.add(10);
set.add("Michael")
set.add(true);

// console.log(set);

// set.delete(10);

// console.log(set);

// set.clear();
// console.log(set);

/*

for of loop:

for (var varname of set.values() ){

}
*/

for (var each of set.values()){
    console.log(each);
}

var students = ["Max","Anton", "Pazan","Rauf", "Parvin"];

for (var each of students.values()){
    console.log(each);
}
