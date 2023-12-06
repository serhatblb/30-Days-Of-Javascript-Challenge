// Exercise: LEVEL 1

//1
function outerFunction(outerVar) {
    function innerFunction(innerVar) {

        let result = outerVar + innerVar;
        return result;
    }
    return innerFunction;
}

let closure = outerFunction(10);


let result = closure(5);
console.log(result);


// Exercise: LEVEL 2

//1
function outerFunction(outerVar) {
    function innerFunction1() {
        console.log(`This is inner function 1 with outerVar: ${outerVar}`);
    }

    function innerFunction2() {
        console.log(`This is inner function 2 with outerVar: ${outerVar}`);
    }

    function innerFunction3() {
        console.log(`This is inner function 3 with outerVar: ${outerVar}`);
    }

    return {
        innerFunc1: innerFunction1,
        innerFunc2: innerFunction2,
        innerFunc3: innerFunction3
    };
}

const closures = outerFunction(25);

closures.innerFunc1();
closures.innerFunc2();
closures.innerFunc3();


// Exercise: LEVEL 3

//1
function personAccount(firstName, lastName) {
    let incomes = [];
    let expenses = [];

    function totalIncome() {
        let total = 0;
        for (let income of incomes) {
            total += income.amount;
        }
        return total;
    }

    function totalExpense() {
        let total = 0;
        for (let expense of expenses) {
            total += expense.amount;
        }
        return total;
    }

    function accountInfo() {
        return `Account Information for ${firstName} ${lastName}: Total Income - ${totalIncome()}, Total Expense - ${totalExpense()}, Account Balance - ${totalIncome() - totalExpense()}`;
    }

    function addIncome(description, amount) {
        incomes.push({
            description,
            amount
        });
    }

    function addExpense(description, amount) {
        expenses.push({
            description,
            amount
        });
    }

    function accountBalance() {
        return totalIncome() - totalExpense();
    }

    return {
        accountInfo,
        addIncome,
        addExpense,
        accountBalance
    };
}

// Example usage:
const person = personAccount('John', 'Doe');
person.addIncome('Salary', 3000);
person.addIncome('Freelancing', 1000);
person.addExpense('Rent', 1000);
person.addExpense('Food', 500);
person.addExpense('Transportation', 200);

console.log(person.accountInfo());
console.log('Current Account Balance:', person.accountBalance());