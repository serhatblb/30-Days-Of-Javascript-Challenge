// Exercise: LEVEL 1

//1 Write a function that calculates the factorial of a given number. However, show an error message for negative numbers.

function calculatedFunction(num) {
    try {
        if (num < 0) {
            throw new Error("The factorial of negative numbers cannot be calculated!");
        } else {
            let factorial = 1;
            for (let i = 2; i <= num; i++) {
                factorial *= i;
            }
            return factorial;
        }
    } catch (error) {
        return 'Error' + error.message;
    }
}
console.log(calculatedFunction(5));
console.log(calculatedFunction(-5));


// Exercise: LEVEL 2

//1 Write a function that finds the number of times a particular word occurs in a sentence. However, consider cases where there is no sentence or word.

function wordCount(sentence, word) {
    try {
        if (!sentence || !word) {
            throw new Error('Invalid input: Please enter a valid sentence and word!');
        } else {
            const regex = new RegExp("\\b" + word + "\\b", "gi");
            const matches = sentence.match(regex);
            return matches ? matches.length : 0;
        }
    } catch (error) {
        return 'Error: ' + error.message;
    }
}

console.log(wordCount("Hello world, how beautiful is the world", "world")); // Sonuç: 2
console.log(wordCount("", "hello")); // Error: Invalid input: Please enter a valid sentence and word!



// Exercise: LEVEL 3

//1 Write a function to find the largest number in an array. However, handle scenarios where the array is empty or contains non-numeric elements by displaying an appropriate error message.
function findLargestNumber(arr) {
    try {
        if (arr.length === 0) {
            throw new Error('Array is empty: Cannot find the largest number!');
        } else if (arr.some(item => typeof item !== 'number')) {
            throw new Error('Invalid data type: Non-numeric element(s) found in the array!');
        } else {
            return Math.max(...arr);
        }
    } catch (error) {
        return 'Error: ' + error.message;
    }
}

console.log(findLargestNumber([1, 5, 10, 3])); // Output: 10
console.log(findLargestNumber([])); // Output: Error: Array is empty: Cannot find the largest number!
console.log(findLargestNumber([1, 2, 'abc', 4])); // Output: Error: Invalid data type: Non-numeric element(s) found in the array

// day 14 exercises finished.