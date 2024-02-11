const formOne = document.getElementById("form");
const resultsDiv = document.getElementById("result");
formOne.addEventListener("submit", function (event) {
  event.preventDefault();
  const fnum = document.getElementById("fNum").value;
  console.log(fnum);
  const snum = document.getElementById("sNum").value;
  console.log(snum);

  const opt = document.getElementById("operation").value;
  console.log(opt);

  let result;
  if (opt === "+") {
    result = parseInt(fnum) + parseInt(snum);
    console.log(result);
  } else if (opt === "-") {
    result = parseInt(fnum) - parseInt(snum);
    console.log(result);
  } else if (opt === "*") {
    result = parseInt(fnum) * parseInt(snum);
    console.log(result);
  } else if (opt === "/") {
    result = parseInt(fnum) / parseInt(snum);
    console.log(result);
  }

  resultsDiv.textContent = "Result:" + result;
});
