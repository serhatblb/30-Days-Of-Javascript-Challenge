// Exercise: LEVEL 1

//1
localStorage.setItem('firstName', 'Serhat')
localStorage.setItem('lastName', 'Bulbul')
localStorage.setItem('age', 28)
localStorage.setItem('country', 'Turkey')
localStorage.setItem('city', 'Istanbul')

console.log(localStorage.getItem('firstName'))

localStorage.clear();

// Exercise: LEVEL 2

//1
let student = {
    fullName: 'Serhat Bulbul',
    age: 28,
    skills: ['JavaScript', 'Python', 'HTML', 'CSS'],
    county: 'Turkey',
}

let studentString = JSON.stringify(student);
localStorage.setItem('student', studentString)


// Exercise: LEVEL 3

//1
const personAccount = {
    firstName: '',
    lastName: '',
    incomes: [],
    expenses: [],


    totalIncome: function () {
        let total = 0;
        this.incomes.forEach(item => {
            total += item.amount;
        });
        return total;
    },


    totalExpense: function () {
        let total = 0;
        this.expenses.forEach(item => {
            total += item.amount;
        });
        return total;
    },


    accountInfo: function () {
        return `firstName: ${this.firstName}, lastName: ${this.lastName}, Total Incomes: ${this.totalIncome()}, Total Expenses: ${this.totalExpense()}`;
    },


    firstNamedIncome: function (description, amount) {
        this.incomes.push({
            description,
            amount
        });
    },


    firstNamedExpense: function (description, amount) {
        this.expenses.push({
            description,
            amount
        });
    },


    accountBalance: function () {
        return this.totalIncome() - this.totalExpense();
    }
};


personAccount.firstName = 'Serhat';
personAccount.lastName = 'Bulbul';
personAccount.firstNamedIncome('Salary', 5000);
personAccount.firstNamedExpense('Rent', 2000);
personAccount.firstNamedExpense('Invoice', 500);
personAccount.firstNamedIncome('Frelance Job', 9000)
console.log(personAccount.accountInfo());
console.log('Account balance:', personAccount.accountBalance());

localStorage.clear()
console.clear()