// Exercise: LEVEL 3

//1

const colors = ['red', 'green', 'yellow'];

// year
const yearElement = document.querySelector('strong');
yearElement.style.fontSize = '60px';

// rondom color function
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// year color
setInterval(() => {
    yearElement.style.color = getRandomColor();
}, 1000);

// date
const dateElement = document.querySelector('h2');
dateElement.style.fontSize = '30px';
dateElement.style.fontFamily = 'courier';
dateElement.style.fontWeight = 'bold';
dateElement.style.textAlign = 'center';

// Now date
const dateIndicator = document.getElementById('dateIndicator');
const today = new Date();
const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
dateIndicator.textContent = today.toLocaleDateString('en-US', options);


setInterval(() => {
    dateIndicator.style.backgroundColor = getRandomColor();
}, 1000);

// Challenge colors
const challengeList = document.getElementById('challengeList');
const challenges = challengeList.getElementsByTagName('li');

for (let i = 0; i < challenges.length; i++) {
    const challenge = challenges[i];

    if (challenge.classList.contains('completed')) {
        challenge.style.backgroundColor = 'green';
    } else if (challenge.classList.contains('ongoing')) {
        challenge.style.backgroundColor = 'yellow';
    } else if (challenge.classList.contains('coming')) {
        challenge.style.backgroundColor = 'red';
    }

    // List style
    challenge.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;";
    challenge.style.fontSize = '20px';
    challenge.style.listStyleType = 'none';
    challenge.style.fontWeight = '350';
    challenge.style.padding = '28px';
    challenge.style.margin = '6px';
    challenge.style.textAlign = 'left';
}