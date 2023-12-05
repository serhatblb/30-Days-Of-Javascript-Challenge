// Exercise: Level 1

//1- firstName, lastName, country, city, age, isMarried, year değişkenlerini oluşturun ve bunlara değer atayın. Farklı veri türlerini kontrol etmek için typeof operatörünü kullanın.
let firstName = 'Serhat'
console.log(typeof (firstName))
let lastName = 'Bulbul'
console.log(typeof (lastName))
let country = 'Turkey'
console.log(typeof (country))
let city = 'Istanbul'
console.log(typeof (city))
let language = 'JavaScript'
console.log(typeof (language))
let age = 28
console.log(typeof (age))
let isMarried = false
console.log(typeof (isMarried))
let year = new Date()
console.log(typeof (year))

//2- '10' türünün 10'a eşit olup olmadığını kontrol edin
console.log(10 == '10') //true
console.log(10 === '10') //false

//3- parseInt('9.8') 10'a eşit olup olmadığını kontrol edin
console.log(parseInt('9.8') === 10)
console.log(parseInt('9.8') === '10')
console.log(parseInt('9.8') == 10)
console.log(parseInt('9.8') == '10')

//4- Boolean değeri, doğru veya yanlıştır.
//Doğruluk değeri sağlayan üç JavaScript ifadesi yazın.
//Yanlış değer sağlayan üç JavaScript ifadesi yazın.
let a = 10;
let b = 20;
console.log(a < b)
console.log(a * 2 == b)
console.log(a + a == b)
console.log(a > b)
console.log(a * 2 !== b)
console.log(a + a + b == b)

//5- console.log() kullanmadan önce aşağıdaki karşılaştırma ifadesinin sonucunu bulun. Sonuca karar verdikten sonra console.log() kullanarak onaylayın.
4 > 3 true
4 >= 3 true
4 < 3 false
4 <= 3 false
4 == 4 true
4 === 4 true
4 != 4 false
4 !== 4 false
4 != '4'
false
4 == '4'
true
4 === '4'
false
//Python ve jargonun uzunluğunu bulun ve yanlış bir karşılaştırma ifadesi yapın. 

console.log('Answer 5')
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
console.log('python'.length !== 'jargon'.length)

// 6- console.log() kullanmadan önce aşağıdaki ifadelerin sonucunu bulun. Sonuca karar verdikten sonra console.log() kullanarak onaylayın.

//     4 > 3 && 10 < 12 true
//     4 > 3 && 10 > 12 false
//     4 > 3 || 10 < 12 true
//     4 > 3 || 10 > 12 true
//     .!(4 > 3) false
//     .!(4 < 3) true
//     .!(false) true
//     .!(4 > 3 && 10 < 12) false
//     .!(4 > 3 && 10 > 12) true
//     .!(4 === '4') true
//     Hem dragon hem de python'da 'on' yoktur. false

console.log('Answer 6')
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))

//7- Aşağıdaki etkinlikleri yapmak için Date nesnesini kullanın.

// Bugün yıl nedir?
// Bugünün ayı rakam olarak nedir?
// Bugünün tarihi nedir?
// Bugün sayı olarak gün nedir?
// Şimdi saat kaç?
// Dakika kaç şimdi?
// 1 Ocak 1970'den bugüne kadar geçen saniye sayısını bulun.

console.log('Answer 7')
const now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth() + 1)
console.log(now.getDate())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime()) // 1695927541127 guncel :))


// Exercise: Level 2

//1- Kullanıcıdan üçgenin tabanını ve yüksekliğini girmesini ve bir üçgenin alanını hesaplamasını isteyen bir komut dosyası yazın (alan = 0,5 x b x h).
let base = Number(prompt("Ucgenin Tabanini Girin"));
let height = Number(prompt("Ucgenin Yuksekligini Girin "));
let area = 0.5 * base * height;
console.log(`Ucgenin Alani  ${area}`);

//2- Kullanıcıdan üçgenin a kenarını, b kenarını ve c kenarını girmesini ve üçgenin çevresini hesaplamasını isteyen bir komut dosyası yazın (çevre = a + b + c)
let aKenari = Number(prompt("1. Kenar Uzunlugunu Girin "))
let bKenari = Number(prompt("2. Kenar Uzunlugunu Girin "))
let cKenari = Number(prompt("3. Kenar Uzunlugunu Girin "))
let cevre = aKenari + bKenari + cKenari
console.log(`Ucgenin Cevresi  ${cevre}`);

//3- Komut istemini kullanarak uzunluk ve genişliği alın ve bir dikdörtgenin alanını hesaplayın (alan = uzunluk x genişlik ve dikdörtgenin çevresi (çevre = 2 x (uzunluk + genişlik))
let genislik = Number(prompt("Karenin Genisligini Girin "));
let yukseklik = Number(prompt("Karenin Uzunlugunu Girin "));
let kareninAlani = genislik * yukseklik;
let kareninCevresi = 2 * (genislik + yukseklik);
console.log(`Karenin Alani: ${kareninAlani} Ve Karenin Cevresi ${kareninCevresi}`)


//4- Komut istemini kullanarak yarıçapı alın ve bir dairenin alanını (alan = pi x r x r) ve bir dairenin çevresini (c = 2 x pi x r) hesaplayın, burada pi = 3.14.
let yaricap = Number(prompt("Dairenin Yaricapini Girin "));
let pi = 3.14
let alan = pi * yaricap * yaricap
let cevre = 2 * pi * yaricap
console.log(`Dairenin Alani: ${alan} Dairenin Cevresi:  ${cevre}`)



//5- y = 2x -2'nin eğimini, x kesme noktasını ve y kesme noktasını hesaplayın
let x_intercept = 1;
let y_intercept = -2;
let slope1 = 2;

//6- Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2
let y1 = 2
let x2 = 6
let y2 = 10
let slope2 = (y2 - y1) / (x2 - x1)
console.log(`Egim  ${slope2}`);

//7-Yukarıdaki iki sorunun eğimini karşılaştırın.
slope2 > slope1 ? console.log("Slope2 is bigger") : console.log("slope1 is bigger");

//8- y'nin değerini hesaplayın (y = x2 + 6x + 9). Farklı x değerleri kullanmayı deneyin ve y'nin hangi x değerinin 0 olduğunu bulun.
let x = -3
let y = x ** 2 + x * 6 + 9
console.log(`y: `, y)

//9- Kullanıcıdan saat ve saat başına oran girmesini isteyen bir komut dosyası yazın. Kişinin ücretini hesapla?
let hrs = parseFloat(prompt("Enter hours: "));
let ratePerHr = parseFloat(prompt("Enter rate per hours: "));
console.log(" Enter hours: ", hrs, "\n", "Enter rate per hours: ", ratePerHr, "\n", "Your weekly earning is : ", hrs * ratePerHr);


//10- Adınızın uzunluğu 7'den büyükse, adınız uzun, yoksa adınızın kısa olduğunu söyleyin.
let adiniz = String(prompt("Adinizi Girin"))
console.log("Adiniz Kisa", adiniz.length < 7, "Adiniz Uzun ", adiniz.length > 7)

//11- Adınızın uzunluğunu ve soyadınızın uzunluğunu karşılaştırın ve bu çıktıyı almalısınız.
let firstName = 'Serhat'
let lastName = 'Bülbül'
console.log("Your first name,", firstName, "is longer than your family name,", lastName)

//12
let myAge = 234;
let yourAge = 223;
console.log(`I am ${myAge - yourAge} years older than you!`);

//13
let birthYear = parseInt(prompt("Enter birth year: "));
let age = 2023 - birthYear
2023 - birthYear >= 18 ? console.log(`You are ${2023 - birthYear}. You are old enough to drive!`) : console.log(`You are ${2023 - birthYear}. You will be allowed to drive after ${18 - age} years.`);

// 14
let yrsLived = parseInt(prompt("Enter number of years you live: "));
console.log(`You lived ${yrsLived * 31536000} seconds!`);

const d = new Date();

let mins = d.getMinutes();
let hrs = d.getHours();

let year = d.getFullYear();
let month = d.getMonth();
let date = d.getDate();

// Format 1
console.log(`${year}-${month + 1}-${date} ${hrs}:${mins}`);
// Format 2
console.log(`${date}-${month+1}-${year} ${hrs}:${mins}`);
// Format 3
console.log(`${date}/${month+1}/${year} ${hrs}:${mins}`);



// LEVEL 3
// 1: create a human readable format for date
const d = new Date();

let mins = d.getMinutes();
mins < 10 ? '0' + mins.toString() : mins;
let hrs = d.getHours();
hrs < 10 ? '0' + hrs.toString() : hrs;

let year = d.getFullYear();
let month = d.getMonth();
let date = d.getDate();

console.log(`${year}-${month+1}-${date}  ${hrs}:${mins}`);


//Finished