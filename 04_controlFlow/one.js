// if
// const userLoggedIn = true;
// const temparature = 41;

// if (temparature > 50) {
//   console.log("Condition is true");
// } else {
//   console.log("condition is false");
// }

const score = 99 ;

if (score > 100) {
    const power = "Kick";
    console.log(`User Power is : ${power}`);
} else{
    const power = "Fly";
    console.log(`User Power is : ${power}`);
}

const userLoggedIn = true ;
const creditCard = true ;
if(userLoggedIn && creditCard){
    console.log("You can transfer Money");
}
else{
    console.log("You can't transfer Money");
}

if (userLoggedIn || creditCard) {
    console.log("You can transfer Money");
} else{
    console.log("You Must Have Logged in or Credit Card");
}