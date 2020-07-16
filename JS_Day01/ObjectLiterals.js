

var Employee1 = {
    EmployeeName : "Sait",
    EmployeeID : 12,
    Salary : 100000
}

console.log(Employee1);

console.log(Employee1.EmployeeName);  // Sait
console.log(Employee1["EmployeeName"]);  // Sait

for (each in Employee1 ){
    console.log(each+ " | " + Employee1[each ]);
}

var Employees = {
    Mehmet : {
        Name : "Mehmet",
        Salary : 120000
    },
    Shirin : {
        Name : "Shirin",
        Salary : 140000
    },
    Anton : {
        Name : "Anton",
        Salary : 150000
    }
}

console.log(Employees.Anton);
console.log(Employees["Anton"]);

console.log(Employees.Shirin.Salary);
console.log(Employees["Anton"]["Salary"]);