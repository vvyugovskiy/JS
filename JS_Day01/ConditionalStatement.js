/*

if statement :: 100% same as Java

ternary :: 100% same as Java

switch statement :: 85% same with Java

*/


if(9 > 10){
    console.log("Hello");
}else if (11< 12){
    console.log("NiHao");
}else {
    console.log("Hola");
}

var str = (9 > 10) ? "Hello" : (11 > 12 ) ? "NiHao" : "Hola";

console.log(str);

// boolean, decimal, long, float Java does not accept in switch statement


var bool = true;

switch (bool){  // accepts any data types
    case true:
        console.log("true");
        break;
    case false:
        console.log("false");
        break;
    default:
        console.log("Maybe");    

}