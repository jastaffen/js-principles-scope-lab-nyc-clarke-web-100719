// Write your solution in this file!
var customerName = "bob";
var bestCustomer;
const leastFavoriteCustomer = 'not bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer= 'no, yeah, it is bob';
}