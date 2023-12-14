// script.js
src = "countries.js"

const countryList = document.getElementById('countryList');

countries.forEach(country => {
    const countryBox = document.createElement('div');
    countryBox.textContent = country.name;
    countryBox.className = 'countryBox';
    countryList.appendChild(countryBox);
});