// Exercise: LEVEL 1 - 2

//1
class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    animalInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`;
    }
    animalSound() {
        return "Animal Sound"
    }
}

//2

class Dog extends Animal {

    animalSound() {
        return "Hav Hav"
    }
}

class Cat extends Animal {
    constructor(name, age, color) {

        super(name, age, color, 4);
    }
    animalSound() {
        return "Miyav"
    }
}
const myDog = new Dog('Buddy', 3, 'Brown', 4);
const myCat = new Cat('Whiskers', 2, 'White', 3);

console.log(myDog.animalInfo());
console.log(myDog.animalSound());

console.log(myCat.animalInfo());
console.log(myCat.animalSound());

//3
class Statistics {
    constructor(data) {
        this.data = data;
    }

    count() {
        return this.data.length;
    }

    sum() {
        return this.data.reduce((acc, val) => acc + val, 0);
    }

    min() {
        return Math.min(...this.data);
    }

    max() {
        return Math.max(...this.data);
    }

    range() {
        return this.max() - this.min();
    }

    mean() {
        return this.sum() / this.count();
    }

    median() {
        const sortedData = this.data.slice().sort((a, b) => a - b);
        const mid = Math.floor(sortedData.length / 2);

        if (sortedData.length % 2 === 0) {
            return (sortedData[mid - 1] + sortedData[mid]) / 2;
        } else {
            return sortedData[mid];
        }
    }

    mode() {
        const freqMap = {};
        this.data.forEach(item => {
            if (!freqMap[item]) {
                freqMap[item] = 1;
            } else {
                freqMap[item]++;
            }
        });

        let mode = null;
        let maxFrequency = 0;

        for (const key in freqMap) {
            if (freqMap[key] > maxFrequency) {
                mode = key;
                maxFrequency = freqMap[key];
            }
        }

        return {
            mode: parseInt(mode),
            count: maxFrequency
        };
    }

    variance() {
        const mean = this.mean();
        const squaredDiffs = this.data.map(val => Math.pow(val - mean, 2));
        return this.sumArray(squaredDiffs) / this.count();
    }

    std() {
        return Math.sqrt(this.variance());
    }

    freqDist() {
        const freqMap = {};
        this.data.forEach(item => {
            if (!freqMap[item]) {
                freqMap[item] = 1;
            } else {
                freqMap[item]++;
            }
        });

        return Object.entries(freqMap)
            .sort((a, b) => b[1] - a[1])
            .map(([key, value]) => [value, parseInt(key)]);
    }

    describe() {
        return {
            Count: this.count(),
            Sum: this.sum(),
            Min: this.min(),
            Max: this.max(),
            Range: this.range(),
            Mean: this.mean(),
            Median: this.median(),
            Mode: `(${this.mode().mode}, ${this.mode().count})`,
            Variance: this.variance(),
            'Standard Deviation': this.std(),
            'Frequency Distribution': this.freqDist()
        };
    }

    sumArray(arr) {
        return arr.reduce((acc, val) => acc + val, 0);
    }
}

// Sample data
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

// Creating an instance of the Statistics class
const statistics = new Statistics(ages);

// Outputting the results
console.log('Count:', statistics.count());
console.log('Sum: ', statistics.sum());
console.log('Min: ', statistics.min());
console.log('Max: ', statistics.max());
console.log('Range: ', statistics.range());
console.log('Mean: ', statistics.mean());
console.log('Median: ', statistics.median());
console.log('Mode: ', statistics.mode());
console.log('Variance: ', statistics.variance());
console.log('Standard Deviation: ', statistics.std());
console.log('Frequency Distribution: ', statistics.freqDist());
console.log('Describe: ', statistics.describe());