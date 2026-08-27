const user = {
  name: "Kavya",
  age: 30,
  city: "Chennai"
};
//extract name and city and print them

let {name,city} = user;
console.log(name, city);

//rename variables
let {name: userName, age: userAge} = user;
console.log(userName, userAge);

//extract name and courty if country doesnt exist use India
let {name: n, country = "India"} = user;
console.log(n,country); 