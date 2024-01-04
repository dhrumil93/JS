const heros = ["thor","Wanda","Hulk"]
const cricketers = ["Bumrah","Rohit","Surya"]

// heros.push(cricketers);
// console.log(heros);

const all = heros.concat(cricketers)
console.log(all);

const n1 = [...cricketers, ...heros]
console.log(n1);