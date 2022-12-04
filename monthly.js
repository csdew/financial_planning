import { Category } from "./category.js"
import { SubCategory } from "./subCategory.js";

class Insurance {
    constructor(dentalInsurance, accidentInsurance){
        this.dentalInsurance = dentalInsurance;
        this.accidentInsurance = accidentInsurance
    }

    total(){
        return this.dentalInsurance + this.accidentInsurance;
    }
}

class Expenses {
    constructor(housing, insurance, transferedToSharedAccount){
        this.housing = housing;
        this.insurance = insurance;
        this.transferedToSharedAccount = transferedToSharedAccount;
    }

    total(){
        return this.housing + this.insurance;
    }

    getOthers(){
        return this.transferedToSharedAccount - this.housing;
    }
}

class ExpenseCalculator {
    constructor(income, expenses){
        this.income = income;
        this.expenses = expenses;
    }

    expenseShare(){
        return this.expenses/this.income * 100.0;
    }
}



// --
const sharedAccount = new Category("Shared Account", 850);
const sport = new Category("Sport", 80);
const insurances = new Category("Insurance", 0);
insurances.addSubcategory(new SubCategory("Dental Insurance", 18.5));
insurances.addSubcategory(new SubCategory("Accident Insurance", 18.5));

const houseExpenses = {
    rent: 432.5,
    electricity: 31.5,
    internet: 10
}
const housing = new Category("Housing", houseExpenses);

const insuranceExpenses = {
    dental: 18.5,
    accident: 15.15
}
const insurance = new Category("Insurance", insuranceExpenses);

const income = 2718;

const transferedToSharedAccount = 750.0;
const e = new Expenses(housing.getTotalExpenses(), insurance.getTotalExpenses(), transferedToSharedAccount);
console.log("Expenses: " + e.total());
console.log("Others: " + e.getOthers());

// const c = new ExpenseCalculator(income, e);
// console.log(c.expenseShare());