// Exercise: LEVEL 1 - 2

//1
const p = document.querySelector('p')
console.log(p)

//2
let firstP = document.querySelector('#first-paragraf');
let secondP = document.querySelector('#second-paragraf');
let thirdP = document.querySelector('#third-paragraf');
let fourthP = document.querySelector('#fourth-paragraf');

//3
let tumParagraflar = document.querySelectorAll('p')
console.log(tumParagraflar)

//4
tumParagraflar.forEach(icerik => {
    console.log(icerik.textContent)
})

//5
fourthP.textContent = "New Fourth Paragraf"

//6
firstP.setAttribute('class', 'first')
thirdP.className = 'sixty parag.'

// Exercise: LEVEL 2

//1 - 2
const paragraf = document.querySelectorAll('p')
paragraf.forEach((p, i) => {
    p.style.fontSize = '33px'
    if (i % 2 === 0) {
        p.style.color = 'red'
        p.style.backgroundColor = "yellow"
    } else {
        p.style.color = 'blue'
        p.style.backgroundColor = "orange"
    }

})

//3
// Tüm paragraf elementlerini seçme
const paragraphs = document.querySelectorAll('p');

// Her bir paragrafı döngüyle işleyelim
paragraphs.forEach((paragraph, index) => {
    // Text content ekleyelim
    paragraph.textContent = `This is paragraph ${index + 1}`;

    // ID ve class ataması yapalım
    paragraph.id = `paragraph-${index + 1}`;
    paragraph.classList.add(`paragraph-class-${index + 1}`);
});