"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
// import { NumbersCollection } from "./NumbersCollection";
var CharactersCollection_1 = require("./CharactersCollection");
var NumbersCollection_1 = require("./NumbersCollection");
var LinkedList_1 = require("./LinkedList");
var sortedString = new Sorter_1.Sorter(new CharactersCollection_1.CharactersCollection("Zaa"));
var sortedNumbers = new Sorter_1.Sorter(new NumbersCollection_1.NumberCollection([2, 1, 4, 3]));
sortedString.sort();
sortedNumbers.sort();
console.log(sortedString, sortedNumbers);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(52);
linkedList.add(-3);
var sorter = new Sorter_1.Sorter(linkedList);
console.log(linkedList);
sorter.sort();
linkedList.print();