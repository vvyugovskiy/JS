/*
Java:
    access-modifier | specifier | return-type | methodName (Parameter) {

    }

JavaScript:
    function | functionName (Parameter){

    }
*/

function addTwoNum(num1, num2) {
    console.log(num1 + num2);
}
addTwoNum(10, 20);

//------------------------------------------------------------------------------
function reverceSTR(str) {  // DISADVANTAGE, we dont know the data type

    if (typeof str == "string") {

        var result = "";

        for (var i = str.length - 1; i >= 0; i--) {
            result = result.concat("" + str.charAt(i));
        }
        console.log(result);
    }else {
        console.log("No string is given");
    }
}

reverceSTR("vladislav");


// typeof :: returns the data type ---------------------------------------------------

var num1 = 100;
console.log(typeof num1);

var bool2 = true;
console.log(typeof bool2);


//-----------------------------------------------------

function MultiplyTwoNum (num1, num2){

    var result = num1 * num2;
    return result;

}

var total = MultiplyTwoNum(10,20);
console.log("Total ::  "+ total);
