const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalID ;
const startChangeColor = function () {
    if (!intervalID) {
        intervalID = setInterval(changeColor,1000);
    }
    function changeColor() {
        document.body.style.backgroundColor = randomColor();
    }
};
const stopChangeColor = function () {
    clearInterval (intervalID);
    intervalID = null ;
};

document.querySelector('#start').addEventListener('click', startChangeColor);
document.querySelector('#stop').addEventListener('click', stopChangeColor);
