// Exercise: LEVEL 1

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Turkey']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [{
        product: 'banana',
        price: 3
    },
    {
        product: 'mango',
        price: 6
    },
    {
        product: 'potato',
        price: ' '
    },
    {
        product: 'avocado',
        price: 8
    },
    {
        product: 'coffee',
        price: 10
    },
    {
        product: 'tea',
        price: ''
    },
]

//3
countries.forEach(country => console.log(country));

//4
names.forEach(n => console.log(n));

//5
numbers.forEach(num => console.log(num))

//6
const upperCountries = countries.map((country) => country.toUpperCase())
console.log(upperCountries)

//7
const lenghtCountries = countries.map((country) => country.length);
console.log(lenghtCountries)

//8
const squareNumbers = numbers.map(num => num ** 2)
console.log(squareNumbers)

//9
const upperNames = names.map((n) => n.toUpperCase())
console.log(upperNames)

//10
const prices = products.map(p => p.price);
console.log(prices)

//11
const landCountries = countries.filter(country => country.toLowerCase().includes('land'))
console.log(landCountries)

//12
const sixCharCountries = countries.filter(country => country.length === 6);
console.log(sixCharCountries)

//13
const sixMoreCharCountries = countries.filter(country => country.length > 5);
console.log(sixMoreCharCountries)

//14
const countriesStartingWithE = countries.filter(country => country.startsWith('E'));
console.log(countriesStartingWithE);

//15
const validPrices = products.filter(p => {
    return typeof p.price != 'string'
})
console.log(validPrices)

//16
function getStringLists(arr) {
    return arr.filter(item => typeof item === 'string');
}
const mixedArray = ['apple', 5, 'banana', 10, 'strawberry'];
const onlyStrings = getStringLists(mixedArray);
console.log(onlyStrings);

//17
const sum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum)

//18
const sentence = countries.reduce((acc, country, index) => {
    if (index === countries.length - 1) {
        return `${acc} and ${country} are north European countries`;
    } else {
        return `${acc}, ${country}`;
    }
}, 'Estonia');

console.log(sentence)

// 19: some vs. every     
/** some -> returns true if at least one of the element of an iterable satisfies the condition imposed by the callback, false if none do.     
    
    every -> returns treu if all the valeus of iterable satisfy the condition imposed by callback, returns false if none at least no does not satisfy it.
**/

//20
const namesLen = names.some(n => n.length > 7);
console.log(namesLen)

//21
const checkLand = countries.every(c => c.toLowerCase().includes('land'))
console.log(checkLand)

// 22: Difference between 'find' and 'findIndex'
/** 
    find -> applies a callback to each element of an iterable and returns the first element that satisfies the callback condition   
    findIndex -> does the same but returns the index of the object instead of the object itself.   
**/

//23
const sixCharCountries2 = countries.find(sixChar => sixChar.length === 6)
console.log(sixCharCountries2)

// 24 
let indexOfSixCharsCountry = countries.findIndex(c => c.length === 6);
console.log(indexOfSixCharsCountry)

// 25 
let indexOfNorway = countries.findIndex(c => c === 'Norway');
console.log(indexOfNorway)

// 26
let indexOfRussia = countries.findIndex(c => c === 'Russia');
console.log(indexOfRussia)

// Exercise: LEVEL 2

//1