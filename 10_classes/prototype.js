// let myName = "dhrumil      ";



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

myPlayers.dhrumilPatel()
myPlayers.dhrumil()
playersSpcl.dhrumilPatel()
playersSpcl.dhrumil()