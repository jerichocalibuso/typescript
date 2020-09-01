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

// When to use annotations
// 1. When the function returns an "any" type
const json = '{"x": 10, "y": 20}';
// const coordinates = JSON.parse(json)
const coordinates: { x: number; y: number } = JSON.parse(json);

// 2. When we declare a variable but initialize later
let words = ["red", "green", "blue"];
// let foundWord;
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3. When TypeScript doesn't infer the type correctly
let digits = [-10, -1, 12];
// let numberAboveZero = false;
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
