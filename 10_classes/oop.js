// const user = {
//     userName : "Dhrumil",
//     loginCounter : 8 ,
//     isloggedIn : true,
    
//     getallUser : function () {
//         console.log("User Details Fetch");
//         console.log(`Username : ${this.userName}`);
//     }
// }

// console.log(user.userName);
// console.log(user.getallUser());

function User(userName , loginCount , isloggedIn) {
    this.userName = userName ;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn;

    return this;
}

const userOne = User("Dhrumil" , 12 , true)
const userTwo = User("Patel" , 12 , true)
console.log(userOne);