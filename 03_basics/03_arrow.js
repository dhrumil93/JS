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

function boom() {
    console.log(this);
}

boom();