// Exercise: LEVEL 1

//1
const dog = {}
//2
console.log(dog)
//3
dog['name'] = "Fido";
dog['legs'] = 4;
dog['color'] = "Yellow";
dog["bark"] = () => "Woof Woof";

//4
console.log(dog.name, dog.legs, dog.color, dog.bark())

//5
// Adding new properties to the dog object
dog.breed = "Golden Retriever";
dog.getDogInfo = function () {
    return `Name: ${this.name}, Breed: ${this.breed}, Legs: ${this.legs}, Color: ${this.color}, Bark: ${this.bark()}`;
};
console.log(dog.breed);
console.log(dog.getDogInfo());

//Exercise: LEVEL 2
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

//1
let maxSkills = 0;
let personWithMostSkills;

for (const user in users) {
    const yetenekSayisi = users[user].skills.length;
    if (yetenekSayisi > maxSkills) {
        maxSkills = yetenekSayisi;
        personWithMostSkills = user;
    }
}
console.log("Max Skills Name:", personWithMostSkills, maxSkills)

//2
let loggedInUsersCount = 0;
let highPointsUsersCount = 0;

for (const user in users) {
    if (users[user].isLoggedIn) {
        loggedInUsersCount++;
    }
    if (users[user].points >= 50) {
        highPointsUsersCount++;
    }
}
console.log(loggedInUsersCount, highPointsUsersCount)

//3
const mernStackDevelopers = [];

for (const developer in users) {
    const devSkills = users[developer].skills;

    if (devSkills.includes('MongoDB') &&
        devSkills.includes('Express') &&
        devSkills.includes('React') &&
        devSkills.includes('Node')
    )
        mernStackDevelopers.push(developer)
}
console.log('MERN Stack Developers:', mernStackDevelopers);

//4
const usersCopy = Object.assign({}, users);
usersCopy['Serhat'] = {
    email: 'Serhat@example.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Django', 'React', 'Python'],
    age: 28,
    isLoggedIn: true, // You can set this to true if you're logged in
    points: 50,
};
console.log(usersCopy)

//5
const keys = Object.keys(users);
console.log('Keys (Properties) of the users object:', keys);

//6 
const values = Object.values(users);
console.log('Values of the users object:', values);

//7
const countries = require('../countries.js')
const country = countries[Object.keys(countries)[0]];

console.log("Name: ", country.name)
console.log("Capital: ", country.capital)
console.log("Population: ", country.population);
console.log("Languages: ", country.languages);

// day 8 exercises finished.