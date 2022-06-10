const form = document.querySelector("#task-form");
const input = document.getElementById("task-input");
const addBtn = document.getElementById("button-addon2");
const container = document.getElementById("container");
let todo;

// window.addEventListener("load", () => {
//   const tasks = JSON.parse(localStorage.getItem("tasks"));
//   localStorage.getItem("tasks", todo);
//   if (!tasks) {
//     localStorage.setItem("tasks", JSON.stringify([]));
//   } else {
//     tasks.forEach((todo) => {
//       add(todo);
//     });
//   }
// });

input.addEventListener("keydown", (e) => {
  //   console.log(e.target);
  if (e.keyCode === 13) {
    addBtn.click();
  }
});

const add = addBtn.addEventListener("click", (e) => {
  if (input.value) {
    // div for new todo

    const taskText = input.value;
    const newTodo = document.createElement("div");

    newTodo.classList.add("card-body");
    newTodo.classList.add("shadow");
    newTodo.classList.add("d-flex");
    newTodo.classList.add("justify-content-between");
    newTodo.classList.add("align-content-center");
    newTodo.classList.add("mt-3");
    newTodo.classList.add("border-4");
    newTodo.classList.add("rounded-4");
    newTodo.classList.add("p-1");
    newTodo.classList.add("ps-3");

    container.appendChild(newTodo);

    // New Todo Text

    const todoText = document.createElement("p");

    todoText.classList.add("todo-note");
    todoText.classList.add("fs-4");
    todoText.classList.add("pt-3");
    todoText.classList.add("text-start");
    todoText.innerHTML = input.value;
    newTodo.appendChild(todoText);

    // Right Div that includes buttons

    const divRight = document.createElement("div");
    divRight.classList.add("d-flex");

    newTodo.appendChild(divRight);

    // Done Button

    const btnDone = document.createElement("button");

    btnDone.classList.add("btnDone");
    btnDone.classList.add("btn");
    btnDone.classList.add("text-success");
    btnDone.classList.add("fw-bold");
    btnDone.classList.add("fs-2");
    btnDone.classList.add("pt-3");

    btnDone.textContent = "✔";

    divRight.appendChild(btnDone);

    // Remove Button

    const btnDel = document.createElement("button");
    divRight.appendChild(btnDel);
    btnDel.classList.add("btn");
    btnDel.classList.add("fw-bold");
    btnDel.classList.add("fs-3");
    btnDel.classList.add("pt-3");
    btnDel.classList.add("ps-3");
    btnDel.textContent = "❌";
    btnDel.classList.add("btnDel");

    // let todo = {
    //   text: taskText,
    //   isCompleted: false,
    // };

    // // tasks.push(todo);

    // const tasks = JSON.parse(localStorage.getItem("tasks"));
    // tasks.push(todo);
    // console.log(tasks);
    // localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
  } else {
    alert("Please enter a task.");
  }
});

////////

// Task dell button

let delBtn = container.addEventListener("click", (e) => {
  if (e.target.classList.contains("btnDel")) {
    e.target.parentElement.parentElement.remove();
  }
});
// Task done button

let doneBtn = container.addEventListener("click", (e) => {
  //   console.log(e.target);
  if (e.target.classList.contains("btnDone")) {
    e.target.parentElement.parentElement.firstChild.style.color = "gray";
    e.target.parentElement.parentElement.firstChild.style.textDecoration =
      "line-through";

    // todo.isCompleted = true;
  }
});
