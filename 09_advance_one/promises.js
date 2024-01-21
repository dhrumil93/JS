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

new Promise(function(resolve , reject){
    setTimeout(() => {
        console.log("Task 2 is completed")
        resolve();
    }, 1000);
}).then(function(){
    console.log("Promise 2 Completed");
})