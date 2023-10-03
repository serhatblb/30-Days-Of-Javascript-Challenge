// Exercise: Level 1

//1
let age = Number(prompt("enter age"));
if (age > 18) {
    console.log("you are old enough to drive")
} else {
    console.log(`you are left with ${18 - age} year(s) to drive`)
}

//2
let myAge = 28;
let yourAge = Number(prompt("Enter your age:"));

if (yourAge > myAge) {
    console.log(`You are ${yourAge - myAge} years older than me.`)
}
else if (myAge > yourAge) {
    console.log(`You are ${myAge - yourAge} years younger than me.`)
}
else {
    console.log("We are at the same age")
}

//3
let a = 4; let b = 3;
//way 1
if (a > b) {
    console.log("a is greater than b")
}
else if (a < b) {
    console.log("a is less than b")
}
//way 2
(a > b) ? console.log("a is greater than b") : console.log("a is less than b");

//4
let number = Number(prompt("Enter a number: "))

if (number % 2 == 0) {
    console.log(`${number} is an even number`)
}
else {
    console.log(`${number} is an odd number`)
}

//Exercise: Level 2

//1
let score = parseInt(prompt("Enter the score "));

if (score > 79 && score < 101)
    console.log("A");
else if (score > 69 && score < 90)
    console.log("B");
else if (score > 59 && score < 70)
    console.log("C");
else if (score > 49 && score < 60)
    console.log("D");
else console.log("F");

//2
let month = prompt("enter month to check seasons");
switch (month) {
    case "september":
    case "october":
    case "November":
        console.log("the season is Autumn");
        break;
    case "december":
    case "january":
    case "febuary":
        console.log("the season is Winter");
        break;
    case "march":
    case "april":
    case "may":
        console.log("the season is Spring");
        break;
    case "june":
    case "july":
    case "august":
        console.log("the season is Summer");
        break;
    default:
        console.log("invalid Month")
}

//3
let weekDay = prompt("enter weekDay to check if it's a weekend").toLowerCase();
if (weekDay == "saturday" || weekDay == "sunday") {
    console.log(`${weekDay} is a weekend day`)
} else if (weekDay == "monday" || weekDay == "tuesday" || weekDay == "wednesday" || weekDay == "thursday" || weekDay == "friday") {
    console.log(`${weekDay} is a work day`)
} else {
    console.log("invalid weekDay")
}

//Exercise: Level 2

//1
let month = prompt("enter month to check number of days");
switch (month) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log(`${month} has 31 days`)
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        console.log(`${month} has 30 days`)
        break;
    case "febuary":
        console.log(`${month} has 29 days`)
        break;
    default:
        console.log("invalid month entered");
}