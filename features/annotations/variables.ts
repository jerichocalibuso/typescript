let apples = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in Objects
let now: Date = new Date();

// Arrays
let colors: string[] = ["red", "blue", "green"];
let numbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let coordinate: { x: number; y: number } = {
  x: 10,
  y: 10,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
