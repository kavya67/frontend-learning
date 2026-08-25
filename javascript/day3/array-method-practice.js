const employees = [
  { id: 1, name: "Kavya", department: "Frontend", salary: 50000, experience: 2 },
  { id: 2, name: "Arun", department: "Backend", salary: 70000, experience: 5 },
  { id: 3, name: "Meena", department: "Frontend", salary: 60000, experience: 3 },
  { id: 4, name: "Raj", department: "QA", salary: 45000, experience: 1 },
  { id: 5, name: "Priya", department: "Backend", salary: 80000, experience: 6 }
];

//Create an array containing only employee names

let employeeNames = employees.map(employee => employee.name);

console.log(employeeNames);

//create a new array that only includes name ans salary

let nameAndSalary = employees.map(employee => ({name: employee.name, salary: employee.salary}));

console.log(nameAndSalary);

//get employee salary greater than 60000

let highSalaryEmployees = employees.filter(employee => employee.salary > 60000);
console.log(highSalaryEmployees);

//get all frontend employees names

let frontendEmployees = employees.filter(employee => employee.department === "Frontend");
let fontendEmployeeNames = frontendEmployees.map(employee => employee.name);
console.log(fontendEmployeeNames);

//get the names of the employees whose experience is greater than 3

let experiencedEmployee = employees.filter(employee => employee.experience >= 3).map(employee => employee["name"]);
console.log(experiencedEmployee);

//calculate the  total salary of all employees
let totalSalary  = employees.reduce((total,employee) => total + employee.salary, 0);
console.log(totalSalary);