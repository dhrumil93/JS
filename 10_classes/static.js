class user{
    constructor(userName){
        this.userName = userName;
    }

    logMe(){
        console.log(`UserName : ${this.userName}`);
    }

    createId(){
        return`123`
    }
}

const dhrumil = new user("dhrumil")
console.log(dhrumil.createId())