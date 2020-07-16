var map = new Map();

/*

set(key, value) -> adds key & value to the map
get(key) ->  returns the value for this key
delete(key) -> remover key/value for this key
has(key) -> verifies 
*/

map.set("Madina", 120000);
map.set("Tuhunjon",100000);

console.log(map);

// for of loop

for(var [key, value] of map){
    console.log(key +" salary is "+ value + " dollars/year");
}

map.delete("Madina");

console.log(map.has("Tuhunjon")); // verifies if "Tuhunjon" exists in the map
console.log(map.get("Madina"));

/*

Keys():
values():

*/

var students = new Map();
students.set("Nurzat",1);
students.set("Olesya",2);
students.set("Erhan",3);

for (var key of students.keys()){
    console.log(key);
}

for (var val of students.values()){
    console.log(val);
}
