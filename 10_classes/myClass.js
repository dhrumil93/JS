// class user {
//     constructor (userName , email ,password){
//         this.userName = userName;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword (){
//         return `${this.password}dhru`
//     }
//     changeUserName(){
//         return `${this.userName.toUpperCase()}`
//     }
// }

// const dhrumil = new user("Dhrumil" , "example@gmail.com" , 123)
// console.log(dhrumil.encryptPassword());
// console.log(dhrumil.changeUserName());

// Behind the scene

function user1(userName , email ,password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
}

user1.prototype.userNamechange = function(){
    return `${this.userName.toUpperCase()}`
}

const patel = new user1("Patel","dhrumil@gmail.com",153)
console.log(patel.userNamechange());