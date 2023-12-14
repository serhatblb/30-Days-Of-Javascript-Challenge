// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

// Get the container div
const container = document.getElementById('numberContainer');
const button = document.getElementById('button')
const input = document.getElementById('input-number')

button.addEventListener('click', () => {
    const number = parseInt(input.value);

    // Clear previous numbers in the container
    container.innerHTML = '';

    // Generate numbers and append to the container div
    for (let i = 0; i <= number; i++) {
        const numberDiv = document.createElement('div');
        numberDiv.textContent = i;

        if (i % 2 === 0) {
            numberDiv.className = 'number green-bg'; // Even numbers with green background
        } else {
            numberDiv.className = 'number yellow-bg'; // Odd numbers with yellow background
        }

        if (isPrime(i)) {
            numberDiv.className = 'number red-bg'; // Prime numbers with red background
        }

        container.appendChild(numberDiv);
    }
});