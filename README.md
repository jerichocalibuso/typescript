## This is a code-along project from [Stephen Grider's TypeScript Udemy Course](https://www.udemy.com/course/typescript-the-complete-developers-guide/)

### features/

- This contains code snippets for the fundamental concepts of Typescript namely:
  - Type Annotation
  - Type Inference
  - Typed Variables
  - Typed Functions
  - Type Arrays
  - Tuples
  - Interfaces
  - Classes

### maps/

- This is the first project of this course.
- Maps is a simple web app that randomly generates User and Company.
- User and Company are entities that has a location.
- That location will be displayed and pointed in a Google Map.

- NPM Dependencies:
  - [faker](https://www.npmjs.com/package/faker)
    - generates fake data
  - [@types/faker](https://www.npmjs.com/package/@types/faker)
    - provides TypeScript type definitions for faker data
  - [@types/googlemaps](https://www.npmjs.com/package/@types/googlemaps)
    - provides TypeScript type definitions for Google Maps API

### sort/

- a bubble sorting command-line app that sorts array of numbers, string, and linked list
- introduces tsconfig.json

- NPM Dependencies:
  - [nodemon](https://www.npmjs.com/package/nodemon)
    - re-runs node for every change in the project
  - [concurrently](https://www.npmjs.com/package/concurrently)
    - helps with multiple running scripts
