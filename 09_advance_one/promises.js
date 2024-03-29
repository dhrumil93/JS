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

const promiseU = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false ;
        if (!error) {
            resolve({userName : "Dhrumil" , password : "123"})
        }else{
            reject('Error Found')
        }
    }, 1000);
 })
promiseU.then( (user) => {
    console.log(user);
    return user.userName;
 }).then((userName) => {
    console.log(userName);
 }).catch(function(error){
    console.log(error);
 }).finally(()  => {
  console.log("The Promise is either resolved or rejected");
 })

 const promiseM = new Promise(function (resolve, reject) {
  setTimeout(() => {
      let error = true ;
      if (!error) {
          resolve({userName : "DHHRUMIL" , password : "123"})
      }else{
          reject('Error to be Found')
      }
  }, 1000);
})

async function promiseMy() {
  try {
    const response = await promiseM
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

promiseMy()

// async function getallUsers(){ 
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//   } catch (error) {
//     console.log("E: ",error);
//   }
// }
// getallUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
  return response.json()
})
.then((data) => {
  console.log(data);
})
.catch((error) => console.log(error))
