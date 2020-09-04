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
  - [parcel-bundler](https://www.npmjs.com/package/parcel-bundler)
    - [parcel](https://parceljs.org/) is a fast bundler for the HTML, CSS, JS files
  - [faker](https://www.npmjs.com/package/faker)
    - generates fake data
  - [@types/faker](https://www.npmjs.com/package/@types/faker)
    - provides TypeScript type definitions for faker data
  - [@types/googlemaps](https://www.npmjs.com/package/@types/googlemaps)
    - provides TypeScript type definitions for Google Maps API
