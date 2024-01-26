function setUserName (userName){
    this.userName = userName;
    console.log("called");
}
function createUser (userName , email){
    setUserName.call(this,userName)
    this.email = email;
}

const dhrumil = new createUser("dhrumil" , "example@gmail.com")
console.log(dhrumil);