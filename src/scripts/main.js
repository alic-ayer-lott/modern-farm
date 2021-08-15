// console.log("Welcome to the main module")

// import {createPlan} from "./plan.js"

// const yearlyPlan = createPlan();
// console.log(yearlyPlan)

// import { createAsparagus } from "./seeds/asparagus.js"

// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed) // this allowed me to see the createAsparagus function console logged

import { addPlant } from "./field.js";
import { createPotato } from "./seeds/potato.js";
import { usePlants } from "./field.js";
import { createCorn } from "./seeds/corn.js";

const Paul = createPotato();
addPlant(Paul);
const test = usePlants();
console.log(test)

const Henry = createCorn();
addPlant(Henry);
const testTwo = usePlants();
console.log(testTwo)