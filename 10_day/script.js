// Exercise: LEVEL 1

//1
const newSet = new Set()
console.log(newSet)

//2
for (i = 0; i < 11; i++) {
    newSet.add(i)
}
console.log(newSet)

//3
newSet
newSet.delete(2)
console.log(newSet)

//4
newSet.clear()

//5
const stringArray = ['Apple', 'Banana', 'Orange', 'Grape', 'Pineapple']
const stringSet = new Set(stringArray)

console.log(stringSet)

//6
const countries2 = new Map();
countries2.set('USA', 'USA'.length);
countries2.set('France', 'France'.length);
countries2.set('Germany', 'Germany'.length);
countries2.set('Japan', 'Japan'.length);
countries2.set('India', 'India'.length);
console.log(countries2);

// Exercise: LEVEL 2
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

const setA = new Set(a);
const setB = new Set(b);

//1
const union = new Set([...setA, ...setB]);
console.log(Array.from(union))

//2
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(Array.from(intersection))

//3
const aWithB = new Set([...setA].filter(x => setB.has(x)));
console.log(Array.from(aWithB))

// Exercise: LEVEL 3

// 1: 
let count = (new Set(countries.reduce((arr, cur) => {
    arr = arr.concat(cur.languages);
    return arr;
}, []))).size;
console.log(count);

// 2
function mostSpokenLanguages(countries, n) {
    const countryLanguages = {
        'Finland': ['Finnish', 'Swedish', 'English'],
        'Sweden': ['Swedish', 'English'],
        'Norway': ['Norwegian', 'English'],
    };

    const languageCount = {};

    countries.forEach(country => {
        const languages = countryLanguages[country];
        if (languages) {
            languages.forEach(language => {
                languageCount[language] = (languageCount[language] || 0) + 1;
            });
        }
    });


    const sortedLanguages = Object.entries(languageCount)
        .map(([language, count]) => ({
            [language]: count
        }))
        .sort((a, b) => Object.values(b)[0] - Object.values(a)[0]);


    return sortedLanguages.slice(0, n);
}


console.log(mostSpokenLanguages(['Finland', 'Sweden', 'Norway'], 10));

console.log(mostSpokenLanguages(['Finland', 'Sweden', 'Norway'], 3));

// day 10 exercises finished.