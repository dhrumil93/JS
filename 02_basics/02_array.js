const heros = ["thor", "Wanda", "Hulk"];
const cricketers = ["Bumrah", "Rohit", "Surya"];

// heros.push(cricketers);
// console.log(heros);

const all = heros.concat(cricketers);
console.log(all);

const n1 = [...cricketers, ...heros];
console.log(n1);

const arr = [1,2,3,4,[5,6,[7,8,[9]]]]
const real_arr = arr.flat(Infinity);
console.log(real_arr);

console.log(Array.isArray("Dhrumil"));
console.log(Array.from("Dhrumil"));
console.log(Array.from({name : "Dhrumil"}));