class user{
    constructor (userName){
        this.userName = userName;
    }


logMe(){
    console.log(`UserName is ${this.userName}`);
}
}

class teacher extends user{
    constructor (userName , email,password){
        super(userName)
        this.email = email;
        this.password = password;
    }
}