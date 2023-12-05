// Exercise: LEVEL 1

//1
const constants = [2.72, 3.14, 9.81, 37, 100]

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)

//2
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

const [fin, est, sw, den, nor] = countries
console.log(fin, est, sw, den, nor)

//3
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}

let {
    with: w,
    height: h,
    area: a,
    perimeter: p
} = rectangle

// Exercise: LEVEL 2
const users = [{
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
]

//1
for (const {
        name,
        scores,
        skills,
        age
    } of users) {
    console.log(name, scores, age);
    skills.forEach(x => console.log(x));
}

//2
for (const {
        name,
        scores,
        skills,
        age
    } of users) {
    if (skills.length < 2) {
        console.log(name); // John
    }
}

// Exercise: LEVEL 3

//1
for (const {
        name,
        capital,
        languages,
        population
    } of countries) {
    console.log('Name', name);
    console.log('Capital', capital);
    console.log('languages', languages);
    console.log('population', population);
}

// day 11 exercises finished.