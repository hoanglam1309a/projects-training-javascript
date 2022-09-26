const todoList = document.querySelector(".todo-list");
const todoInput = document.querySelector(".todo-input");
const todoAdd = document.querySelector(".todo-add");

todoAdd.addEventListener("click", function () {
  let value = todoInput.value.trim();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-item");
  const todoTextarea = document.createElement("textarea");
  todoTextarea.setAttribute("readonly", "readonly");
  todoTextarea.classList.add("todo-content");
  todoTextarea.textContent = value;
  todoDiv.append(todoTextarea);
  const todoActions = document.createElement("div");
  todoActions.classList.add("todo-actions");
  todoActions.innerHTML = `
  <button class="todo-update">Update</button>
  <button class="todo-action todo-edit" onclick="handleUpdate(this)">
    <ion-icon name="create-outline"></ion-icon>
      </button>
    <button class="todo-action todo-delete" onclick="handleDelete(this)">
      <ion-icon name="trash-outline"></ion-icon>
    </button>
  `;
  todoDiv.append(todoActions);
  todoList.append(todoDiv);
  todoInput.value = "";
});

function handleUpdate(e) {
  const todoItem = e.parentElement.parentElement;
  const todoContent = todoItem.querySelector(".todo-content");
  const todoEdit = todoItem.querySelector(".todo-update");
  todoContent.removeAttribute("readonly");
  todoContent.focus();
  todoEdit.style.display = "block";
  // Click button update
  todoEdit.addEventListener("click", function () {
    todoContent.setAttribute("readonly", "readonly");
    todoEdit.style.display = "none";
  });
}

function handleDelete(e) {
  const todoItem = e.parentElement.parentElement;
  const todoDelete = todoItem.querySelector(".todo-delete");
  todoItem.remove();
}
