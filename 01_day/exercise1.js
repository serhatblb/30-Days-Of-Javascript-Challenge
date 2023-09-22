let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true ( Burada iki değişkende 3 e eşit olduğu için birbirine eşit olduğu sonucu çıkıyor )

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false  ( Burada iki değişkende farklı olduğu ve eşitlenemedikleri için false yani 0 değeri dönüyor )

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff)  //false  ( Yukarıdaki örnek gibi eeşit olmadıkları için false yani 0 değeri dönüyor )


let nums=[1,2,3]
nums[0]=10

console.log(nums) 

// ONEMLI
// İlkel olmayan veri türleri aynı özelliklere ve değerlere sahip olsa bile, kesinlikle eşit değildirler.
let numsee = [1, 2, 3]
let numberss = [1, 2, 3]

console.log(numsee == numberss)  // false

//Temel kural, ilkel olmayan veri türlerini karşılaştıramıyoruz. Dizileri (arrays), fonksiyonları (functions) veya nesneleri (objects) karşılaştırmayın. İlkel olmayan değerler, değer yerine referansla karşılaştırıldıkları için referans türleri olarak adlandırılır. İki nesne, yalnızca aynı temel nesneye atıfta bulunuyorlarsa kesinlikle eşittir.

let numsq =[1,2,3]
let numbers = numsq

console.log( numbers == numsq) //true

const PI = Math.PI
console.log(PI)


let min = Math.min(-5, 3, 20, 4, 5, 10)
let max =Math.max(-5, 3, 20, 4, 5, 10)
console.log(min)
console.log(max)

const randNum = Math.random() // 0 ile 0.999999 arasında rastgele bir sayı üretir.
console.log(randNum)

const num = Math.floor(Math.random () * 11) // 0 ile 10 arasında rastgele sayı oluşturur
console.log(num)

let space = ' '           // boş alan string tek tırnaklı
let firstName = 'Asabeneh' // tek tırnaklı string
let lastName = 'Yetayeh' // tek tırnaklı string

let fullName = firstName + space + lastName;
console.log(fullNamel) 

