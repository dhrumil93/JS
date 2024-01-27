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

    addCourse(){
        console.log(`New Course Added By ${this.userName}`);
    }
}

const cricket = new teacher("Dhrumil","email@email.com","123")
cricket.addCourse();
cricket.logMe()

const cricketer = new user("Dhrumil")
cricketer.logMe();

console.log(cricket instanceof teacher);