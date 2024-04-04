// var generateName = require("sillyname");

import generateName from "sillyname";
import superheroes from "superheroes";

//generate  a random name using the sillyname library
var sillyName = generateName();
console.log(`My name is ${sillyName}.`); // Output: " My name is Crazy Squirrel."

//generate  a random superhero name using the superheroes library

// superheroes.all;
const heroNames = superheroes.random();
console.log(`I am ${heroNames}`);
