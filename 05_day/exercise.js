// Exercise: Level 1

const  countries = [

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
    
    
    const  webTechs = [
    
    'HTML',
    
    'CSS',
    
    'JavaScript',
    
    'React',
    
    'Redux',
    
    'Node',
    
    'MongoDB'
    
    ]
    
//1
const emptyArr = []
console.log(typeof emptyArr)

//2
const arr = ["Serhat","Bulbul", "Computer Enginerr",28,"Istanbul",1995]

//3
console.log(arr.length)

//4
console.log(arr[0]) //first
console.log(arr[arr.length/2]) //middle
console.log(arr[arr.length-1]) //last 

//5
const mixedDataTypes = ["Serhat","Bulbul", 33.4,28,"Istanbul",1995]
console.log(mixedDataTypes.length)

//6
const ItCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//7
console.log(ItCompanies)

//8
console.log("sayi: ",ItCompanies.length)

//9
console.log(ItCompanies[0]) //first
console.log(ItCompanies[parseInt(ItCompanies.length/2)]) //middle
console.log(ItCompanies[ItCompanies.length-1]) //last 

// 10
console.log(ItCompanies[0]);
console.log(ItCompanies[1]);
console.log(ItCompanies[2]);
console.log(ItCompanies[3]);
console.log(ItCompanies[4]);
console.log(ItCompanies[5]);
console.log(ItCompanies[6]);

//11
console.log(ItCompanies[0].toUpperCase());
console.log(ItCompanies[1].toUpperCase());
console.log(ItCompanies[2].toUpperCase());
console.log(ItCompanies[3].toUpperCase());
console.log(ItCompanies[4].toUpperCase());
console.log(ItCompanies[5].toUpperCase());
console.log(ItCompanies[6].toUpperCase());

//12
console.log(ItCompanies.toString())

//13
if(ItCompanies.includes("Amazosn")){
    console.log("Amazon exists!");
} else console.log("Amazon dose not exist!");

//14
//15
console.log(ItCompanies.sort())

//16
console.log(ItCompanies.reverse())

//17
console.log(ItCompanies.sort().slice(0,3))

//18
console.log(ItCompanies)
console.log(ItCompanies.slice(4,7))

//19
console.log(ItCompanies.slice(3,4))

//20
console.log(ItCompanies)
console.log(ItCompanies.shift())
console.log(ItCompanies)

//21
console.log(ItCompanies)
console.log(ItCompanies.splice(parseInt(ItCompanies.length/2)-1, 2))
console.log(ItCompanies)

//22
console.log(ItCompanies)
ItCompanies.pop()
console.log(ItCompanies)

//23
console.log("23: -->",ItCompanies)
ItCompanies.splice(0,ItCompanies.length)
console.log(ItCompanies)

// Exercise: Level 3


const  ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//i
const min = ages[0];
const max = ages[ages.length-1];

console.log(ages.sort())
console.log("min:",ages[0], " max:",ages[9])

//ii
let len = ages.length;
let median = (ages[parseInt(len/2)-1] + ages[parseInt(len/2)])/2;
console.log(median)

//iii
const average = (ages[0]+ages[1]+ages[2]+ages[3]+ages[4]+ages[5]+ages[6]+ages[7]+ages[8]+ages[9])/len;

//iv
let range = max-min;
console.log("Range of ages: ", range)

//v
Math.abs(min-average) < Math.abs(max-average) ? console.log("Data is left skewed"): console.log('Data is right skewed!');