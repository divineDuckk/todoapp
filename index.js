const addBtn = document.querySelector(".add-btn");
const task = document.querySelector(".input-task");
const URN_WIDTH = 25;

const createUrnButton = () => {
  const urn = document.createElement("img");
  const urnButton = document.createElement("button");

  urn.src = "./images/1.svg ";
  urn.width = URN_WIDTH;

  urnButton.className = "urn-button";
  urnButton.type = "submit";
  urnButton.append(urn);

  return urnButton;
};

const createElements = () => {
  const chechbox = document.createElement("input");
  const tasks = document.createElement("div");
  const tasklist = document.querySelector(".task-list");
  const urnButton = createUrnButton();

  tasks.className = "tasks";
  tasks.innerHTML = task.value;

  urnButton.onclick = () => tasks.remove();

  chechbox.type = "checkbox";
  chechbox.className = "chechbox-ts";

  chechbox.onchange = changeCheckboxState.bind(null, tasks, tasklist);

  return { chechbox, tasks, tasklist, urnButton };
};

const changeCheckboxState = (tasks, tasklist) => {
  tasks.classList.toggle("line-through");
  tasks.classList.toggle("ts-opacity");

  const containsLineThrough = tasks.classList.contains("line-through");

  if (containsLineThrough) {
    const taksList = document.querySelector(".taks-list");
    console.log(taksList);
    tasklist.append(tasks);
  }
  if (!containsLineThrough) {
    const taksList = document.querySelector(".taks-list");
    tasklist.prepend(tasks);
  }
};

const addElementsToDocument = (tasks, tasklist, chechbox, urnButton) => {
  tasks.append(chechbox);
  tasks.append(urnButton);
  tasklist.append(tasks);
};

const addTodo = (e) => {
  if (e.code && e.code !== "Enter") return;
  if (task.value == "") return;

  const { chechbox, tasks, tasklist, urnButton } = createElements();

  task.value = "";

  addElementsToDocument(tasks, tasklist, chechbox, urnButton);

  const containsLineThrough = tasks.classList.contains("line-through");

  if (!containsLineThrough) tasklist.prepend(tasks);
};

addBtn.addEventListener("click", addTodo);
task.addEventListener("keydown", addTodo);

const addLineUnderCompTask = (e) => {
  if (e.code && e.code !== "Enter") return;
  if (task.value == "") return;
  const tasks = document.querySelectorAll("tasks");
  console.log(tasks);
};
