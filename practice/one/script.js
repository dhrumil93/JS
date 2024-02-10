const formOne = document.getElementById('form');
formOne.addEventListener('submit',function (event){
    event.preventDefault();

    const useri = {
        userNamei : (document.getElementById('name').value),
        passWordi : (document.getElementById('password').value)
        }
    const user ={
        userName : "dhrumil_93",
        passWord: "asd"
    }

    if (useri.userNamei === user.userName && useri.passWordi===user.passWord ) {
        console.log("sucessfull!!");
    }else{
        console.log("Failed!!");
    }
})
