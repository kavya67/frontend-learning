/*
A function can be called by any number of arguements no matter how it is defined.
the parameters can be included in the function definition using ... dots,
this simply means "gather the remaining parameter into an array"
the rest parameter must be at the end
*/


//Create a function that accepts any number of arguments and returns the total.

const sum = (...numbers) => {
 return  numbers.reduce((total,number) => total += number,0);
}
console.log(sum(1,23,3));
console.log(sum(100,0,67,38,56.5));

//find maximum number

const findMax = (...numbers) =>{ //rest parameter
     return Math.max(...numbers); //spread operator
}

console.log(findMax(50,40,32,19));

//Create a function that returns how many arguments were passed.

const countArgs = (...numbers) => {
    return numbers.length;
}

console.log(countArgs("a", "b", "c", "d"));

//average calculator

const average = (...numbers) => {
    if(numbers.length === 0) return 0;
    return numbers.reduce((sum, number) => sum += number, 0 )/numbers.length;
}

console.log(`average: ${average(10, 20, 30, 40)}`);

//seperate first elelment
const fruits = ["Apple", "Mango", "Orange", "Banana"];

const [firstFruit, ...remainingFruits] = fruits;

console.log(remainingFruits);
