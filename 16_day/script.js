const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
let age = 250;
let isMarried = true
const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
// Exercise: LEVEL 1

//1
let skillsString = JSON.stringify(skills)
console.log(typeof skillsString)

//2
let ageString = JSON.stringify(age)
console.log(typeof ageString)

//3
let isMarriedString = JSON.stringify(isMarried)
console.log(typeof isMarriedString)

//4
let studentString = JSON.stringify(student)
console.log(typeof skillsString)


// Exercise: LEVEL 2

//1
let studentStringFLS = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4)
console.log(studentStringFLS)


// Exercise: LEVEL 3

//1
let jsonedText = JSON.parse(txt)
console.log(typeof txt)
console.log(typeof jsonedText)

//2
const users = JSON.parse(txt);

let maxSkillsCount = 0;
let userWithMaxSkills = null;

for (const userName in users) {
    const user = users[userName];
    const skillsCount = user.skills.length;

    if (skillsCount > maxSkillsCount) {
        maxSkillsCount = skillsCount;
        userWithMaxSkills = userName;
    }
}

console.log(`User with the most skills is: ${userWithMaxSkills} with ${maxSkillsCount} skills.`);