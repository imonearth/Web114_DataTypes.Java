//Lex Williams - 10.17.25

"use strict";
let money = 1000; 
let housing = 100;
let food = 500;
let utilities = 225;
let totalIncome= money;
let totalExpense= housing + food + utilities;
let remainingMoney= totalIncome - totalExpense; 

let rentPercentage= (housing/totalIncome) * 100;
let groceryPercentage= (food/totalIncome) * 100; 
console.log( "The total income was: " +   money.toLocaleString("en-US", {style: "currency", currency: "USD", }));
console.log( "The grocery total was: " +  food.toLocaleString("en-US", { style: "currency", currency:"USD" }));
console.log("The rent total was: " + housing.toLocaleString("en-US", {style: "currency", currency: "USD"}));
console.log("The utility total was: " + utilities.toLocaleString("en-US", {style: "currency", currency: "USD"}));
console.log("The total expenses were: " + totalExpense.toLocaleString("en-US", {style: "currency", currency: "USD"}));
console.log("The remaining money was: " + remainingMoney.toLocaleString("en-US", {style: "currency", currency: "USD"}));

console.log("Percentage spent on rent: " + rentPercentage.toFixed(2) + "%");
console.log("Percentage spent on groceries: " + groceryPercentage.toFixed(2) + "%");
