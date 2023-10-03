// Exercise: Level 1

//1
let age = Number(prompt("enter age"));
if (age > 18) {
    console.log("you are old enough to drive")
} else {
    console.log(`you are left with ${18-age} year(s) to drive`)
}

//2
let myAge = 28;
let yourAge = Number(prompt("Enter your age:"));

if (yourAge > myAge){
    console.log(`You are ${yourAge-myAge} years older than me.`)
}
else if(myAge > yourAge){
    console.log(`You are ${myAge-yourAge} years younger than me.`)
}
else{
    console.log("We are at the same age")
}

//3
let a = 4; let b = 3;
//way 1
if (a>b){
    console.log("a is greater than b")
}
else if(a<b){
    console.log("a is less than b")
}
//way 2
(a>b) ? console.log("a is greater than b"): console.log("a is less than b");

//4
let number = Number(prompt("Enter a number: "))

if (number%2 == 0){
    console.log(`${number} is an even number`)
}
else{
    console.log(`${number} is an odd number`)
}

// Exercise: Level 2
