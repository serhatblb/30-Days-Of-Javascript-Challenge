// Exercise: Level 1

//1
function fullName(){
    console.log("Serhat Bülbül")
}
fullName()

//2
function fullName2(firstName,lastName){
    console.log(firstName + ' ' +lastName)
}
fullName2("Serhat","Bülbül")

//3
function addNumbers(a,b){
    return a+b;
}
console.log(addNumbers(10,20))

//4
function areaOfRectangle(l,w){
    return l*w
}
console.log(areaOfRectangle(10,20))

//5
function perimeterOfRectangle(l, w) {
    return 2*(l+w);
}
console.log(perimeterOfRectangle(2, 34))

//6
function volumeOfRectPrism(l,w,h){
    return l*w*h;
}
console.log(volumeOfRectPrism(2,3,4))

//7
function areaOfCircle(r){
    area = Math.PI*r*r
    return area
}
console.log(areaOfCircle(5))

//8
function circumOfCircle(r){
    circumference = 2 * Math.PI * r;
    return circumference;
}
console.log(circumOfCircle(3))

// 9 
function densityOfSubstance (m, v) {
    return m/v;
}
console.log(densityOfSubstance(23, 3))

//10
function calcSpeed(d,t){
    return d/t;
}
console.log(calcSpeed(300,5))

//11
function calcWeight(mass){
    let gravity = parseFloat(9,80665) 
    return mass * gravity
}
console.log(calcWeight(11))

//12
function convertCelsiusToFahrenheit(oC){
    let oF = (oC * 9/5) + 32;
    return oF;
}
console.log(convertCelsiusToFahrenheit(300))

//13
function vKI(kilo,boy){
    return kilo/(boy**2);
}
let vucutKitleEndeksi = vKI(85,1.79);
if(vucutKitleEndeksi < 18.5) console.log("Underweight");
else if (vucutKitleEndeksi < 24.9)   
    console.log("Normal Weight");
else if (vucutKitleEndeksi < 29.9) {
    console.log("Overweight");
} else {
    console.log("OBESE!")
}; 

// 14 
function checkSeason(month) {
    let season;
    
    switch (month.toLowerCase()) {
        case "september":
        case "october":
        case "november":
            season = "Autumn";
            break;
    
        case "december":
        case "january":
        case "february":
            season = "Winter";
            break;
    
        case "march":
        case "april":
        case "may":
            season = "Spring";
        
        case "june":
        case "july":
        case "august":
            season = "Summer";
            break;
    }
    return season;
}
console.log(console.log(checkSeason("DecEMBer")))

// 15 
function findMax(a, b, c) {
    let max = 0;
    for(const elem of arguments) {
        if (elem > max) max = elem;
    } return max;
}
console.log(findMax(2, 34, 4));

//LEVEL 2

//1
//  ax + by + c = 0
function solveLinEquation(a, b, c){
    var x = (-c - b) / a;
    var y = (-c - a) / b;
    return { x, y };
}
var result = solveLinEquation(2, 3, -6);
console.log("x =", result.x); // x = 3
console.log("y =", result.y); // y = 2

//2
//ax2 + bx + c = 0
function solveQuadratic(a,b,c){
    const discriminant = b * b - 4 * a * c;
    if(discriminant > 0){
        const root1 = (-b + Math.sqrt(discriminant))/ (2 * a);
        const root2 = (-b - Math.sqrt(discriminant))/ (2 * a);
        return [root1, root2];
    }else if(discriminant === 0){
        const singleRoot = -b / (2 * a);
        return [singleRoot];
    }else{
        return "No way."; //If the discriminant is negative, there is no solution, return an empty array.
    }
}
console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}

//3
function printArray(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
const myArray = [1, 2, 3, 4, 5];
printArray(myArray);
printArray([2,3,45,3,4343,43,342])

//4
function showDateTime() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}`;
    console.log(formattedDateTime);
}
showDateTime();

//5
function swapValues(x, y){
    console.log("Before swapping: x =", x, "y =", y);
    const temp = x;
    x = y;
    y = temp
    console.log("After swapping: x =", x, "y =", y);
}
swapValues(3, 4) 
swapValues(4, 5) 

//6
