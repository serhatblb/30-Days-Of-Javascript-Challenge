// let value;

// const todoList = document.querySelector(".list-group");
// const todo = document.querySelector(".list-group-item:nth-child(2")
// const card = document.querySelector(".card");


// value = todoList;
// value = todo;
// value = card;

// value = todoList.childNodes;
// value = todoList.children;
// value = todoList.children[2];
// value = todoList.children[todoList.children.length - 1];
// value = todoList.children[1].textContent = "Degiswn madde"

// value = card.children[1].children[0].textContent = "Merhabala";
// value = todoList.firstElementChild;
// value = todoList.lastElementChild;
// value = todoList.childElementCount;

// value = card.parentElement.parentElement;
// value = todo.previousElementSibling;
// value = todo.nextElementSibling;
// console.log(value);

// //Element Olusturma

// const li = document.createElement("li");

// //add class
// li.className = "list-group-item list-group-item-danger";

// //add Attribute
// li.setAttribute("title", "new item");
// li.setAttribute("data-id", "5");

// const text = document.createTextNode("new item899889");
// li.appendChild(text);

// const a = document.createElement("a");
// a.setAttribute("href", "#");
// a.className = "delete-item float-right";
// a.innerHTML = '<i class="fa fa-trash"></i>';

// li.appendChild(a);

// document.querySelector("#task-list").appendChild(li);
// console.log(li);

//Element Silme

// const taskList = document.querySelector("#task-list");

// // taskList.remove();
// // taskList.children[3].remove();

// // taskList.children[1].removeAttribute("class")

// for (let i = 0; i < taskList.children.length; i++) {
//     taskList.children[i].removeAttribute("class")
// }

// console.log(taskList);

//Element Guncelleme

// const cardHeader = document.querySelector(".card-header");
// const h2 = document.createElement("h2");

// h2.setAttribute("class", "card-header");
// h2.appendChild(document.createTextNode("Yeni Listeler"));

// const parent = document.querySelector(".card");
// parent.replaceChild(h2, cardHeader)
// console.log(h2);

//Event Listener

// const btn = document.querySelector("#btnDeleteAll");
// const plusBtn = document.querySelector("#btnAddNewTask")

// function tikTik() {
//     console.log("Tik Tiiik")
// };
// btn.addEventListener("click", tikTik);
// plusBtn.addEventListener("click", tikTik);