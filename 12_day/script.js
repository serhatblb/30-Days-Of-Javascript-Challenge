// Exercise: LEVEL 1

//1
const text = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
let pattern = /\d+/g;
const totalIncome = text.match(pattern).reduce((acc, curr) => acc + parseInt(curr), 0);

console.log('Total Income:', totalIncome * 12, 'euro');

//2

const points = '-1, 2, -4, -3, -1, 0, 4, 8';
const numbers = points.match(/-?\d+/g).map(Number);

const sortedNumbers = numbers.sort((a, b) => a - b);
const distance = sortedNumbers[sortedNumbers.length - 1] - sortedNumbers[0];
console.log('En uzak iki nokta arasindaki mesafe:', Math.abs(distance)); // 12

//3
function is_valid_variable(str) {
    console.log(
        /^[a-z_]+$/i.test(str)
    )
}
is_valid_variable('first_name') // True
is_valid_variable('first-name') // False
is_valid_variable('1first_name') // False
is_valid_variable('firstname') // True

// Exercise: LEVEL 2

//1
const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
console.log(tenMostFrequentWords(paragraph))

console.log(paragraph)
const words = paragraph.match(/\b\w+\b/g)
console.log(words)

function tenMostFrequentWords(paragraph, limit = 10) {
    const wordCount = {};
    const words = paragraph.match(/\b\w+\b/g)

    for (const word of words) {
        wordCount[word] ? wordCount[word]++ : (wordCount[word] = 1)
    }
    const sortedWords = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);
    const result = sortedWords.slice(0, limit).map(([word, count]) => ({
        word,
        count
    }));

    return result;
}
console.log(tenMostFrequentWords(paragraph)); // Varsayilan olarak ilk 10 siklikta kelimeyi getirir.
console.log(tenMostFrequentWords(paragraph, 3));

// Exercise: LEVEL 3

//1
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
const matches = sentence.replace(/[~|@|#|!|$|%|\^|&|;|\\?]/g, '')
console.log(matches)
let cleanText = (text) => {
    let pattern = /[~|@|#|!|$|%|\^|&|;|\\?]/g;
    let cleanedText = text.replace(pattern, '')
    return tenMostFrequentWords(cleanedText);
}
console.log(cleanText(sentence));