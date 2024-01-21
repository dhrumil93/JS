const promiseD = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Task Completed");
    resolve();
  }, 1000);
});

promiseD.then(function () {
  console.log("Promise Is Completed");
});

const promiseH = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Task 2 is completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise 2 Completed");
});

const promiseR = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({userName : "Dhrumil" , email : "dhrumilpatel@gmail.com"});
    }, 1000);
});

promiseR.then(function(user){
    console.log(user);
})
