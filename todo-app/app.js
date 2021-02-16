const todoForm = document.querySelector(".add-form");
const todoInput = document.querySelector("#activity");
const todoUl = document.querySelector(".todo-lists");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (todoInput.value.trim().length != 0) createLiForTodo(todoInput.value);
  todoInput.value = "";
});

todoUl.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target.classList.contains("icon-small"))
    e.target.parentNode.parentNode.remove();
});

function createLiForTodo(value) {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-item");

  const todoLi = document.createElement("li");
  todoLi.classList.add("todo-list");
  todoLi.innerText = value;

  const todoButton = document.createElement("button");
  todoButton.classList.add("btn");

  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "icon-small");

  todoButton.appendChild(deleteIcon);
  todoDiv.appendChild(todoLi);
  todoDiv.appendChild(todoButton);
  todoUl.appendChild(todoDiv);
}
