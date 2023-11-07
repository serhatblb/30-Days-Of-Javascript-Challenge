let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2")
const card = document.querySelector(".card");


value = todoList;
value = todo;
value = card;

value = todoList.childNodes;
value = todoList.children;
value = todoList.children[2];
value = todoList.children[todoList.children.length - 1];
value = todoList.children[1].textContent = "Degiswn madde"

value = card.children[1].children[0].textContent = "Merhabala";
value = todoList.firstElementChild;
value = todoList.lastElementChild;
value = todoList.childElementCount;

value = card.parentElement.parentElement;
value = todo.previousElementSibling;
value = todo.nextElementSibling;
console.log(value);

//Element Olusturma

const li = document.createElement("li");

//add class
li.className = "list-group-item list-group-item-danger";

//add Attribute
li.setAttribute("title", "new item");
li.setAttribute("data-id", "5");

const text = document.createTextNode("new item899889");
li.appendChild(text);

const a = document.createElement("a");
a.setAttribute("href", "#");
a.className = "delete-item float-right";
a.innerHTML = '<i class="fa fa-trash"></i>';

li.appendChild(a);

document.querySelector("#task-list").appendChild(li);
console.log(li);

// Element Silme

const taskList = document.querySelector("#task-list");

// taskList.remove();
// taskList.children[3].remove();

// taskList.children[1].removeAttribute("class")

for (let i = 0; i < taskList.children.length; i++) {
    taskList.children[i].removeAttribute("class")
}

console.log(taskList);

// Element Guncelleme

const cardHeader = document.querySelector(".card-header");
const h2 = document.createElement("h2");

h2.setAttribute("class", "card-header");
h2.appendChild(document.createTextNode("Yeni Listeler"));

const parent = document.querySelector(".card");
parent.replaceChild(h2, cardHeader)
console.log(h2);

// Event Listener

const btn = document.querySelector("#btnDeleteAll");
const plusBtn = document.querySelector("#btnAddNewTask")

function tikTik() {
    console.log("Tik Tiiik")
};
btn.addEventListener("click", tikTik);
plusBtn.addEventListener("click", tikTik);

// Mause Eventleri

const btn = document.querySelector("#btnAddNewTask");
const ul = document.querySelector("#task-list");

//click event
btn.addEventListener("click", run)
ul.addEventListener("click", run);

//double click
btn.addEventListener("dblclick", run);

//mause down event - masue up event
btn.addEventListener("mousedown", run);
btn.addEventListener("mouseup", run);

//mause enter event - mause leave event
btn.addEventListener("mouseenter", run);
btn.addEventListener("mouseleave", run);

//mouseOver - mouse out event
ul.addEventListener("mouseover", run);
ul.addEventListener("mouseout", run);

//mouse move event
ul.addEventListener("mousemove", run);


function run(event) {
    console.log(`event type: ${event.type}`)
}

//Keyboard Eventleri

const text = document.getElementById("txtTaskName");

//Focus Event -- Blur Event
// text.addEventListener("focus", run);
// text.addEventListener("blur", run);

//Paste Event -- Copy Event -- Cut Event
text.addEventListener("paste", run);
text.addEventListener("copy", run);
text.addEventListener("cut", run);

//Select Event
text.addEventListener("select", run);

//KeyDown - KeyUp event
text.addEventListener("keydown", run);
text.addEventListener("keyup", run);
// text.addEventListener("keypress", run);

function run(e) {
    console.log(e.type);
    console.log(e.target.value);
}

// Event Bubbling
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const card = document.querySelector(".card");
const container = document.querySelector(".container");

form.addEventListener("click", function (e) {
    console.log("form");
    e.stopPropagation();

});
cardBody.addEventListener("click", function (e) {
    console.log("cardBody");
    e.stopPropagation();
});
card.addEventListener("click", function (e) {
    console.log("card");
    e.stopPropagation();
});
container.addEventListener("click", function (e) {
    console.log("container");
    e.stopPropagation();
});

// Event Capturing

form.addEventListener("click", function (e) {
    console.log("form");


}, true);
cardBody.addEventListener("click", function (e) {
    console.log("cardBody");

}, true);
card.addEventListener("click", function (e) {
    console.log("card");

}, true);
container.addEventListener("click", function (e) {
    console.log("container");

}, true);

const deleteItems = document.querySelectorAll(".fa-times");
deleteItems.forEach(function (item) {
    item.addEventListener("click", function (e) {
        console.log(e.target);
    })
});

const ul = document.querySelector("ul");
ul.addEventListener("click", function (e) {
    if (e.target.className === "fas fa-times") {
        e.target.parentElement.parentElement.remove();
    }
})