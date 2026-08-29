const employee = {
  id: 1,
  details: {
    name: "Arun",
    department: "Backend"
  }
};

//extract name and department directly into variables

let {details : {name, department}} = employee;
console.log(name, department);