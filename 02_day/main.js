//Degiskenler

var serhatpass;
console.log(serhatpass)

serhatpass="Serhat";
console.log(serhatpass)

//yas = 28;
//console.log(yas)

//Degisken Tanımlama Kurallari

// -Degisken isimleri sayi ile baslayamaz
//yas1= 28;
// -Degisken isimleri komut isimleriyle ayni olamaz (for,while..)
// -degisken isimlerinde bosluk olamaz
var adSoyad = "Serhat Bulbul"
console.log(adSoyad)

// -Degisken isimlerinde Turkce karakter kullanilamaz !!!!!! :))

// const ile verilenler sabittir degistirlemez

const email ="serhat@gmail.com"
console.log(email)

//email = "bulbul@gmail.com"
console.log(email) // burdaki e mail gozukmuyor ustteki sabit(const) old. icin

// DEGISKEN TURLERI

//Primitive (Ilkel) Types

//String
let firstName = "Serhat";
console.log(typeof firstName)

// Number
let yas = 28;
console.log(typeof yas)

// Boolean
let evetHayir= false;
console.log(typeof evetHayir)

//Undefined
let phone;
console.log(typeof phone)

//REFERENCE TYPES = OBJECTS

//Array
let liste= ["Ali","Veli","Serhat"]
console.log(typeof liste)

// Objects Literals
let adress = {
    city:"Ankara",
    country:"Turkiye",
}
console.log(typeof adress)

//Function

var hesapla = function(){
    return 0;
}
console.log(typeof hesapla)