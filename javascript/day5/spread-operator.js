/*
spread operator converts arr iterables into list of arguments
it does the opposite if what rest parameter does
...
The spread syntax is used to pass an array to functions that normally require a list of many arguments.
 */
//copy an array 

const numbers = [1, 2, 3];

const newArray = [...numbers];
console.log(newArray);

//merge arrays
const frontend = ["HTML", "CSS"];
const javascript = ["JS", "React"];

const meragedArray = [...frontend, ...javascript];
console.log(meragedArray);

//add a new element
const fruits = ["Apple", "Mango"];
const newFruits = [...fruits,"orange"];
console.log(newFruits);

//copy an object
const user = {
  name: "Kavya",
  age: 30
};
const newUser = {...user};
console.log(newUser);

//update a property
const updatedUser = {...user, age:31};
console.log(updatedUser);

//Add a property
const addUser = {...user,city: "chennai"};
console.log(addUser);

//merge objects
const personalInfo = {
  name: "Kavya"
};

const addressInfo = {
  city: "Chennai",
  country: "India"
};
const userInfo = {...personalInfo,...addressInfo};
console.log(userInfo);


//add a new element without mutating the original one
const employees = [
  { name: "Kavya", salary: 50000 },
  { name: "Arun", salary: 70000 }
];

const updatedEmployees = [...employees,{ name: "Meena", salary: 60000 }];
console.log(updatedEmployees);

//create new object where only salray changes
const employee = {
  id: 1,
  name: "Kavya",
  salary: 50000
};

const newEmployee = {...employee, salary: 60000};
console.log(newEmployee);