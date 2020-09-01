const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// array
const pepsiArray = ["brown", true, 40];
// tuple
const pepsiTuple: [string, boolean, number] = ["brown", true, 40];

// when using type alias
type Drink = [string, boolean, number];
const pepsiAlias: Drink = ["brown", true, 40];
