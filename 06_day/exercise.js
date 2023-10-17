// Exercise: Level 1

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
    ]
    
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
    ]
    
const mernStack = ['MongoDB', 'Express', 'React', 'Node']

/*

//1
let i = 0
let z = 0
while(i<=10){
    console.log(i)
    i++;
}

do{
    console.log(z)
    z++
}while(z<=10)

//2
let ii = 10
let zz = 10
while(ii>=0){
    console.log(ii)
    ii--;
}

do{
    console.log(zz)
    zz--;
}while(zz>=0)

3
let n = prompt("Bir sayi giriniz: ");
let i = 0;

for(i;i<=n;i++){
    console.log(i);
}

//4
for(i=1;i<=7;i++){
    console.log("#".repeat(i));
}

//5
let a=0
for(a;a<=10;a++){
    console.log(`${a} x ${a} = ${a*a}`)
}

//6
let i = 0
console.log("i\ti^2\ti^3");
for(i;i<=10;i++) {
    console.log(`${i}\t${i**2}\t${i**3}`)
}

//7
for(a=0;a<=100;a += 2){
    console.log(a)
}

//8
for(b=1;b<=100;b+=2){
    console.log(b)
}

//9
let count=0
let i,j ;
for(j=2;j<=100;j++){
    for( i=1;i<=j;i++){
        if(j%i==0)
            count++
        }
    if(count==2)
    console.log(j)
    count=0
}

//10
let toplam=0
let k = 0
for(k;k<=100;k++){
    toplam +=k
}
console.log(`The sum of all numbers from 0 to 100 is ${toplam}`)

//12
let sumEven = 0;
let sumOdd = 0;
for (let l = 0;l<=100;l++){
    if(l%2==0) sumEven += l;
    else sumOdd += l;
}console.log(sumEven,sumOdd)

*/

// Exercise: Level 2

//1
let characters = '123456789abcdefghijklmnopqrstuvwxyz123456789';
let n = parseInt((Math.random()*characters.length)%16)
let rands = [];

for(let i = 0; i<=n; i++){
    rands.push(characters[Math.floor(Math.random()*characters.length) -1])
}
console.log(rands.join(""));

//2
let hexadecimalNumbers = '123456789abcdef';
let hexChars = [];

for(let i = 0; i<6; i++){
    hexChars.push(hexadecimalNumbers[parseInt(Math.random()*hexadecimalNumbers.length)-1]);
}
console.log('#'+ hexChars.join(''));

//3
// let r = Math.floor(Math.random()*255)
// let g = Math.floor(Math.random()*255)
// let b = Math.floor(Math.random()*255)

// console.log(`rcb(${r},${g},${b})`)

let rgb = [];
for(const char of '123'){
    var red = (parseInt(Math.random()*255));
    var green = (parseInt(Math.random()*255));
    var blue = (parseInt(Math.random()*255));

    rgb.push(red,green,blue);
}
console.log(`rgb(${red},${green},${blue})`);

//4
let country = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]