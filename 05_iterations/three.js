//  For Of Loop

 const arr = [1,2,3,4,5,6];

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World !"
for (const greet of greetings) {
    console.log(`Each charachter is ${greet}`);
    
}

const map = new Map();
map.set('IN',"India");
map.set('USA',"United States of America");
map.set('UK',"United Kingdom");
// console.log(map);

for (const [key , value] of map) {
    console.log(key, ':-', value);
}


// const games ={
//     'game1' : "NFS",
//     'game2' : "GTAV"
// }
// for (const game of games) {
//     console.log(game);
// }