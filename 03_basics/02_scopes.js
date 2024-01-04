var c= 300
let a = 200
if (true) {
    let a=10;
    const b=20;
    // var c=30
    console.log(`Inner: ${a}`);
}

console.log(a);
// console.log(b);
// console.log(c); // Avoid VAR

function one(){
    const username = "dhrumil93"

    function two(){
        const name = "Dhrumil"
        console.log(username);
    }
        // console.log(name);

    two()
}

one()

if (true){

    const username1= "Dhrumil"
    if(username1 === "Dhrumil"){
        const website = "Bgmi"
        console.log(username1 + website);
    }
    // console.log(website);
}
// console.log(username1);