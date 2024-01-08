const myArr = [1,2,3];


// const total = myArr.reduce (function (acc, currVal) {
//     console.log(`acc : ${acc} CurrVal : ${currVal}`);
//     return acc + currVal
// }, 0 )

const total = myArr.reduce ((acc , currVal) => acc + currVal ,0 )


console.log(total);
