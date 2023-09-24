// Exercise: Level 1

//1 Challenge adında bir değişken tanımlayın ve '30 Days Of JavaScript' başlangıç ​​değerine atayın.
let challenge = '30 Days Of JavaScript'

//2 console.log() kullanarak tarayıcı konsolunda değişkeni yazdırın,
console.log(challenge)

//3 console.log() kullanarak tarayıcı konsolunda dizenin length değerini yazdırın,
console.log(challenge.length)

//4 toUpperCase() yöntemini kullanarak tüm dize karakterlerini büyük harflerle değiştirin,
console.log(challenge.toUpperCase())

//5toLowerCase() yöntemini kullanarak tüm dize karakterlerini küçük harflerle değiştirin,
console.log(challenge.toLowerCase())

//6 substring()substr() veya substring() yöntemini kullanarak string'in ilk kelimesini kesin-silin (dilimleyin)
console.log(challenge.substring(0,2))

//7 Days Of JavaScript ifadesini 30 Days Of JavaScript'ten ayırın.
console.log(challenge.split('30'))

//8 includes() yöntemini kullanarak string'in Script kelimesini içerip içermediğini kontrol edin
console.log(challenge.includes('Script'))

//9 split() yöntemini kullanarak string öğesini bir array'ye bölün
console.log(challenge.split())

//10  30 Days Of JavaScript dizesini split() yöntemini kullanarak boşlukta bölün
console.log(challenge.split(' '))

//11 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' dizeyi virgülden split ve bir dizi olarak değiştirin.
let dize='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(dize.split(','))

//12 replace() yöntemini kullanarak 30 Days of JavaScript'i 30 Days of Python olarak değiştirin.
console.log(challenge.replace('JavaScript','Python'))

//13 JavaScript'in 30 Günü' dizesinde dizin 15'teki karakter nedir? charAt() yöntemini kullanın.
console.log(challenge.charAt(15))

//14 charCodeAt() kullanan 'JavaScript'in 30 Günü' dizesindeki J karakter kodu nedir?
console.log(challenge.charCodeAt('J'))

//15 30 Days of JavaScript'te a öğesinin ilk oluşumunun konumunu belirlemek için indexOf kullanın
console.log(challenge.indexOf('a'))

//16 30 Days of JavaScript'te a öğesinin son oluşumunun konumunu belirlemek için lastIndexOf kullanın.
console.log(challenge.lastIndexOf('a'))

// 17 Aşağıdaki cümlede çünkü kelimesinin ilk geçtiği yeri bulmak için indexOf kullanın: 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
let cumle= 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtir.'
console.log(cumle.indexOf('çünkü'))

//18 Aşağıdaki cümlede çünkü kelimesinin son geçtiği yeri bulmak için lastIndexOf kullanın: 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
console.log(cumle.lastIndexOf('çünkü'))

//19 Aşağıdaki cümlede çünkü kelimesinin ilk geçtiği yeri bulmak için search kullanın: 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
console.log(cumle.search('çünkü'))

//20 Bir dizgenin başındaki ve sonundaki boşlukları kaldırmak için trim() kullanın. Örneğin '30 Days Of JavaScript'.
console.log(challenge.trim(' '))

//21 30 Days Of JavaScript dizesiyle startsWith() yöntemini kullanın ve sonucu doğru yapın
console.log(challenge.startsWith('30'))

//22 30 Days Of JavaScript dizesiyle endsWith() yöntemini kullanın ve sonucu doğru yapın 
console.log(challenge.endsWith('JavaScript'))

//23 JavaScript'in 30 Günü'ndeki tüm a'leri bulmak için match() yöntemini kullanın
console.log(challenge.match('a'))

//24 concat() kullanın ve '30 Days of' ve 'JavaScript'i tek bir dize olan '30 Days of JavaScript' ile birleştirin
let conc = ' 30 Days of '
console.log(conc.concat('JavaScript')) 

//25 30 Gün JavaScript'i 2 kez yazdırmak için repeat() yöntemini kullanın
console.log(challenge.repeat(2))

// Exercise: Level 2

//1 console.log() kullanarak aşağıdaki ifadeyi yazdırın:
//The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
let text = "'The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.'"
console.log(text)

//2 console.log() kullanarak aşağıdaki ifadeyi yazdırın:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
let text2= "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(text2)

//3 '10' tipinin tam olarak 10'a eşit olup olmadığını kontrol edin. Değilse tam olarak eşit yapın.
let number= '10'
console.log(typeof(number))

//4 parseFloat('9.8') 10'a tam olarak eşit değilse, 10'a eşit olup olmadığını kontrol edin.
let num1 = parseFloat('9.8')
let num2= 10
console.log(typeof(num1)==typeof(num2))

//5 Hem python hem de jargonda 'on' ifadesinin bulunup bulunmadığını kontrol edin
let python = 'python'
let jargon= 'Umarım bu kurs jargonla dolu değildir'
console.log(python.includes('on'))
console.log(jargon.includes('on'))

//6 Umarım bu kurs jargonla dolu değildir. Cümlede jargon olup olmadığını kontrol edin.
console.log(jargon.includes('jargon'))

//7 0 ile 100 arasında rastgele bir sayı üretin.
randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber)

//50 ile 100 arasında rastgele bir sayı üretin.
randomNumber2 = Math.floor(Math.random() * (100 - 50)+50);
console.log(randomNumber2)

//9 Dahil olmak üzere 0 ile 255 arasında rastgele bir sayı oluşturun.
randomNumber3 = Math.floor(Math.random() * (255)+0);
console.log(randomNumber3)

//10 Rastgele bir sayı kullanarak 'JavaScript' dize karakterlerine erişin.

//11 Aşağıdaki kalıbı yazdırmak için console.log() ve kaçış karakterlerini kullanın.
/*
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

//12 substr kullanarak çünkü çünkü ifadesini aşağıdaki cümleden ayırın:'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
console.log(cumle.substring(37,48))


// Exercise: Level 3

//1 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let love = "Love is the best thing in this world.Some found their love and some are still looking for their love";
console.log(love.search("love"));

//2 Aşağıdaki cümledeki tüm çünkü sayısını saymak için match() kullanın:'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
console.log(cumle.match('çünkü'))

//3 Aşağıdaki metni temizleyin ve en sık kullanılan kelimeyi bulun (ipucu, değiştirme ve normal ifadeleri kullanın).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ''));

//4 Aşağıdaki metinden sayıları çıkararak kişinin yıllık toplam gelirini hesaplayın.
//'Aylık maaşından 5000 euro, yıllık 10000 euro ikramiye, ayda 15000 euro online kurstan kazanıyor.'

let text5 = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
let salaries = text5.match(/\d+/g);
let totalAnnualIncome = 0;
salaries.forEach(element => {
    totalAnnualIncome += Number(element);
})
console.log(totalAnnualIncome)

