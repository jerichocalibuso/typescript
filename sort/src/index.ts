import { Sorter } from "./Sorter";
// import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { NumberCollection } from "./NumbersCollection";
import { LinkedList } from "./LinkedList";

const sortedString = new CharactersCollection("Zaa");
const sortedNumbers = new NumberCollection([2, 1, 4, 3]);
sortedString.sort();
sortedNumbers.sort();
console.log(sortedString, sortedNumbers);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(52);
linkedList.add(-3);

console.log(linkedList);
linkedList.sort();
linkedList.print();
