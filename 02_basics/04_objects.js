const iguser = new Object()

iguser.id ="93"
iguser.name = "Dhrumil"

// console.log(iguser);

const bgmiUser = {
    userID: 93133 ,
    useName:{
        Firstname: "Dhrumil",
        Lastname: "Patel"
    }
}
console.log(bgmiUser.useName.Firstname);

const obj1 = { 1:"A" ,2:"b"}
const obj2 = { 3:"C" ,4:"d"}

// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3);

const course ={
    courseName: "JS Tutorial",
    price: "500",
    courseInstructor: "MSP"
}

const {courseInstructor: Instructor} = course
console.log(Instructor);