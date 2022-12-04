export class Category {

    percentageFromIncome = 0.0;
    percentageFromTotalExpense = 0.0;
    percentageFromCategoryExpense = 0.0;
    subCategorie = new Array();

    constructor(categoryName, categoryExpenses){
        this.categoryName = categoryName;
        this.categoryExpenses = categoryExpenses;
    }

    setPercentageFromIncome(percentage){
        this.percentageFromIncome = percentage;
    }

    getPercentageFromIncome(){
        return this.percentageFromIncome;
    }

    setPercentageFromTotalExpense(percentage){
        this.percentageFromTotalExpense = percentage;
    }

    getPercentageFromTotalExpense(){
        return this.percentageFromTotalExpense;
    }

    setPercentageFromCategoryExpense(percentage){
        this.percentageFromCategoryExpense = percentage;
    }

    getPercentageFromCategoryExpense(){
        return this.percentageFromIncome;
    }

    addSubcategory(subCategory){
        this.subCategories.push(subCategory);
    }

    getSubCategories(){
        return this.subCategories;
    }

    getTotalExpenses(){
        let total = 0.0;
        for (let key in this.categoryExpenses) {
            if(typeof this.categoryExpenses[key] === "number"){
                total += this.categoryExpenses[key];
            }
        }
        return total;
    }‚
}