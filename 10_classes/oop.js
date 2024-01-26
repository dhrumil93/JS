const user = {
    userName : "Dhrumil",
    loginCounter : 8 ,
    isloggedIn : true,
    
    getallUser : function () {
        console.log("User Details Fetch");
        console.log(`Username : ${this.userName}`);
    }
}

console.log(user.userName);
console.log(user.getallUser());