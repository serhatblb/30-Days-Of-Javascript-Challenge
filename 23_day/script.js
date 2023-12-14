const buton = document.getElementById('btn')

buton.addEventListener('mouseenter', function (e) {
    console.log("basildi")
})

const input = document.getElementById('name')

input.addEventListener('keyup', function (e) {
    console.log("yaziliyorrr", e.target.value)
})

const color = document.getElementById('color-picker')
color.addEventListener('input', e => {
    document.body.style.backgroundColor = e.target.value

})