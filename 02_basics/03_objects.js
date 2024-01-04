const mySym = Symbol("key1")

const JSuser = {
    name: "Dhrumil" ,
    [mySym]: "Mykey1" ,
    age: 19,
    location: "Gandhinagaar" ,
    email: "dhrumilpatel0093@gmail.com",
    isLoggedIn: false,

}

// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser[mySym]);

// JSuser.email = "dhrumil0093@gmail.com"
// Object.freeze(JSuser);
// console.log(JSuser);

JSuser.greeting = function(){
    console.log("Hello JSuser!!");
}
console.log(JSuser.greeting());

JSuser.greeting2 = function(){
    console.log(`Hello JSuser,${this.name}`);
}
console.log(JSuser.greeting2());