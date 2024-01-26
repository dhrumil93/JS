function mul5 (num){
    return num*5;
}

console.log(mul5(5))
// console.log(mul5.power)
// console.log(mul5.prototype)

function user(userName , score) {
    this.userName = userName;
    this.score = score;
}
user.prototype.increment = function(){
    this.score++
}
user.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
}

const one = new user("dhrumil" , 23)
const two = new user("Patel" , 24)


one.printMe()
console.log(one.increment());