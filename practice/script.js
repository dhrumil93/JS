const formOne = document.getElementById('form');
formOne.addEventListener('submit',function (event){
    event.preventDefault();

    const userName = (document.getElementById('name').value);
    const passWord = (document.getElementById('password').value);

    console.log(userName)
    console.log(passWord);
})