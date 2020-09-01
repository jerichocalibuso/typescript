const carMakers = ["toyota", "ford", "chevy"];
const dates = [new Date(), new Date()];

// 1. When extracting a value from the array, it will help with type interference
const car = carMakers[0]; //infers car as a string
const myCar = carMakers.pop(); //infers myCar as a string

// 2. It prevents incompatible types when adding elements
carMakers.push(100); //shows an error since we are passing a number

// 3. Typed arrays can contain multiple types

const importantDates: (Date | string)[] = [new Date()];

importantDates.push("10/10/20");
