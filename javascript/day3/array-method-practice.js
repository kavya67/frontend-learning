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

