const myArr = [0,1,2,3,4,5,6]
console.log(myArr[2]);

const arr2 = new Array(1,2,3,4,5);
console.log(arr2[2]);


//  myArr.push(5)
//  myArr.pop()
//  myArr.unshift(1)
 myArr.shift()
 console.log(myArr);

 console.log(myArr.includes(4));
 console.log(myArr.indexOf(2));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);

console.log("D" , myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("T" ,myArr);


const myn2 = myArr.splice(1,3)
console.log("c", myArr);
console.log(myn2);