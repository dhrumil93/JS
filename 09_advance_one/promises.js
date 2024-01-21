const promiseD = new Promise(function(resolve , reject){
    setTimeout(() => {
        console.log("Task Completed");
        resolve()
    }, 1000);
})

promiseD.then(function(){
    console.log("Promise Is Completed");
}
)