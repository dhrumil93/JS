const user ={
    username: "Dhrumil",
    age: 19,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to webPage`);
        console.log(this); 
    }
}
user.welcomeMessage();

user.username= "Txnvi"
user.welcomeMessage();

console.log(this);

// function boom() {

//     console.log(this);
// }

// boom();

//     const code = function(){
//     let username = "Dhrumil"
//     console.log(this.username);
// }
// code();

const code = () => {
    let username = "Dhrumil"
    console.log(this);
}
code();

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(4,3));

// const addition= (number1, number2) => number1 + number2
const addition= (number1, number2) => (number1 + number2)

console.log(addition(4,9));