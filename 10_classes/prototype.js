// 



// console.log(myName.trueLength);

let myPlayers = ["bumrah" , "bhuvi"]

let playersSpcl = {
    bumrah: "Yorker",
    bhuvi : "Swing",

    getbhuviSpcl : function(){
        console.log(`Bhuvi Speciality is ${this.bhuvi}`);
    }
}

Array.prototype.dhrumilPatel = function(){
    console.log("Dhrumil Is All-rounder");
}
Object.prototype.dhrumil = function(){
    console.log("Dhrumil Is All-rounder");
}

// myPlayers.dhrumilPatel()
// myPlayers.dhrumil()
// playersSpcl.dhrumilPatel()
// playersSpcl.dhrumil()


let myName = "dhrumil      ";
let myName1 = "dhrumil1      ";
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is : ${this.trim().length}`);
}
myName.trueLength();
myName1.trueLength();