// --- Constructor ve Nesne Olusturma ---

let serhat = {
    name: "serhat",
    yearOfBirth: 1995,
    job: "computer engineer",
}

val = serhat;
console.log(val);
console.log(typeof val);

function Student(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

    // console.log(this);
    this.calculateAge = function () {
        return 2023 - this.yearOfBirth;
    }
};


let serhat = new Student("Serhat", 1995, "Computer E.");
let serhat2 = new Student("Serhat22", 199522, "Computer E.22");

console.log(serhat.name);
console.log(serhat2.job);
console.log(serhat.calculateAge());
console.log(serhat2.calculateAge());


// --- Prototype ---

let Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

}

let aylin = new Person("aylin", 1980, "teacher");
let kaan = new Person("kaan", 2008, "student")

Person.prototype.calculateAge = function () {
    return 2023 - this.yearOfBirth;
}

Person.prototype.getName = function () {
    return this.name;
}

console.log(aylin);
console.log(aylin.calculateAge());
console.log(aylin.getName());

console.log("------------------------------")

console.log(kaan.getName());
console.log(kaan);
console.log(kaan.calculateAge());


// --- Object.create Metodu ---

let personProto = {
    calculateAge() {
        return 2023 - this.yearOfBirth;
    }
}

let kaan = Object.create(personProto);
kaan.name = "kaan";
kaan.yearOfBirth = 2008;
kaan.job = "student";

let aylin = Object.create(personProto, {
    name: {
        value: "aylin"
    },
    yearOfBirth: {
        value: 1980
    },
    job: {
        value: "teacher"
    },
});

console.log(kaan);
console.log(kaan.calculateAge());
console.log(aylin);
console.log(aylin.calculateAge())



// --- Prototype Tabanli Kalitim ---

let Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function () {
    return 2023 - this.yearOfBirth;
}

let Teacher = function (name, yearOfBirth, job, subject) {
    Person.call(this, name, yearOfBirth, job);

    this.subject = subject;
}

//Inherit hte Person Prototype methods
Teacher.prototype = Object.create(Person.prototype);
console.log(Teacher.prototype.constructor);

//set Teacher constructor
Teacher.prototype.constructor = Teacher;

let aylin = new Teacher("aylin", 1980, "teacher", "computer Science")
console.log(aylin);
console.log(aylin.calculateAge());


// --- Immediate Fonsiyonlar ---

function welcome() {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var today = new Date();
    var msg = "Welcome. Today is " + days[today.getDay()];
    return msg;
}
console.log(welcome());

(function (name) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var today = new Date();
    var msg = "Welcome " + name + " Today is " + days[today.getDay()];
    console.log(msg);
}("Serhat"));