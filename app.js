const inputBox = document.querySelector("#input_box");
const listContainer = document.querySelector(".list_container");
const addBtn = document.querySelector("button");

function addTask() {
  if (inputBox.value === "") {
    alert("Your have to write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    saveData();
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
    saveData();
  }
});

addBtn.addEventListener("click", addTask);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showData();
