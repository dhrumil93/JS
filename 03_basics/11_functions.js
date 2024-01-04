function calculatePrice(...num1) {
    return num1
}

console.log(calculatePrice(200,400));

const user= {
    name: "Dhrumil" ,
    id : 93
}

function objectHandling(anyObject) {
    console.log(`name is ${anyObject.name} id is ${anyObject.id}`);
    
}
objectHandling(user)

const newArr = [200 ,300,400,500]
function secondNum(getanyarray) {
    // console.log(getanyarray[1]);
    return getanyarray[1]
}

console.log(secondNum(newArr));