// Exercise: LEVEL 1

//1
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
console.table(countries)

//2
let countriesObj = {
    first: 'Pakistan',
    Second: 'India',
    Third: 'Afghanistan',
    Fourth: 'Turkey'
};
console.table(countriesObj)

//3
console.group("Array and Object");
console.table(countries);
console.table(countriesObj);
console.groupEnd();


// Exercise: LEVEL 2

//1
console.assert(10 > 2 * 10, "buyuk degil")

//2
console.warn("This is a Warning message")

//3
console.error("This is a Error Message")


// Exercise: LEVEL 3

//1
//for
console.time('for loop time:')
for (let i = 0; i < 10; i++) {
    console.log(i)
}
console.timeEnd('for loop time:')

//while
let i = 0;
console.time("while loop time:")
while (i < 10) {
    console.log(i)
    i++;
}
console.timeEnd("while loop time:")

//for of
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.time('for-of loop time:');
for (const value of array) {
    console.log(value);
}
console.timeEnd('for-of loop time:')

//forEach
console.time('ForEach Loop')
array.forEach(x => console.log(x));
console.timeEnd(`ForEach Loop`);