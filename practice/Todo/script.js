const formOne = document.getElementById("form");
const todo = document.getElementById("submitTodo");

formOne.addEventListener("submit", function (event) {
  event.preventDefault();
  addTodo();
});
todo.addEventListener("click", function (event) {
  event.preventDefault();
  addTodo();
});

function addTodo() {
  const titleO = document.getElementById("todoTittle").value;
  const work = document.getElementById("todoWork").value;
  const todoi = document.createElement("div");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const todoText = document.createElement("span");
  todoText.textContent = `Tittle : ${titleO} , Work : ${work}`;
  todoi.appendChild(checkbox);
  todoi.appendChild(todoText);

  document.body.appendChild(todoi);
  document.getElementById("submitTittle").value = "";
  document.getElementById("todoWork").value = "";
}
