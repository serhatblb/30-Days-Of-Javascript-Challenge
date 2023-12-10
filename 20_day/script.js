// Exercise: CLEAN CODE


let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'

const PI = Math.PI
const gravity = 9.81


// arrays
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const languages = ['Amharic', 'Arabic', 'English', 'French', 'Spanish']
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Python']
const fruits = ['banana', 'orange', 'mango', 'lemon']
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']

// function which return full name of a person
const printFullName = (firstName, lastName) => firstName + ' ' + lastName

// function which calculates a square of a number
const n = 0
const square = (n) => n * n

// a function which generate random hexa colors
const hexaColor = () => {
    const str = '0123456789abcdef'
    let hexa = '#'
    let index
    for (let i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * str.length)
        hexa += str[index]
    }
    return hexa
}

// a function which shows date and time
const showDateTime = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }

    const dateMonthYear = date + '.' + month + '.' + year
    const time = hours + ':' + minutes
    const fullTime = dateMonthYear + ' ' + time
    return fullTime
}

for (let i = 0; i < n; i++) {
    console.log()
}

// declaring an array variable
const names2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// iterating an array using regular for loop
let len = names.length;
for (let i = 0; i < len; i++) {
    console.log(names[i].toUpperCase())
}


// iterating an array using for of
for (const name of names) {
    console.log(name.toUpperCase())
}

// iterating array using forEach 
names.forEach((name) => name.toUpperCase())


const person2 = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB', 'Python', 'D3.js'],
    isMarried: true
}
for (const key in person2) {
    console.log(key)
}

// declaring object literal
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Node', 'MongoDB', 'Python', 'D3.js'],
    isMarried: true
}
// iterating through object keys
for (const key in person) {
    console.log(key, person[key])
}

// defining class
class Person {
    constructor(firstName, lastName) {
        console.log(this) // Check the output from here
        this.firstName = firstName
        this.lastName = lastName
    }
}

// day 20 exercises finished.