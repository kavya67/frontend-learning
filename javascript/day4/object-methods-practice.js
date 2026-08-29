const employees = [
  { name: "Kavya", salary: 50000 },
  { name: "Arun", salary: 70000 },
  { name: "Meena", salary: 60000 }
];

//get the employee whose salary is 70000
//find always return the first matched element //undefined if nothing matches
const employeeSalary_seventyThousand = employees.find(employee => employee.salary === 70000);
console.log(employeeSalary_seventyThousand);

//check if any employee earns more tha 65000
//returns true if atleast one condition matches the condition or false if none passes

const employeeSalary_sixtyFiveThousand = employees.some(employee => employee.salary >65000);
console.log(employeeSalary_sixtyFiveThousand);

// check if all employees earn more than 40000
//returns true if all elements pass the condition else false

const salaryMoreThanFourtyThousand = employees.every(employee => employee.salary > 40000);
console.log(salaryMoreThanFourtyThousand);