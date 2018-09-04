'use strict';
var XLSX = require('xlsx');
const workbook = require('xlsx').readFile('../TestData.xlsx');
var sheetName = workbook.SheetNames[0];
var worksheet = workbook.Sheets[sheetName];
var firsname = worksheet['A2'];
var lastname= worksheet['B2'];
var password= worksheet['C2'];
var customer= worksheet['D2'];
var role= worksheet['E2'];
var email= worksheet['F2'];
var cell= worksheet['G2'];
var username=workbook['H2'];

const MAIN = {
    BASEAPIURL: 'http://www.way2automation.com/angularjs-protractor/webtables/',
}
const URL = {
    HOME: MAIN.BASEAPIURL, 
};
const CONTENT = {    
    HEADER:'Add User',
    USERNAME:username,
    FIRSTNAME:firsname,
    LASTNAME:lastname,
    PASSWORD:password,
    CUSTOMER:customer,
    ROLE:role,
    EMAIL:email,
    CELL:cell,
}
module.exports = {
   
    URL: URL,
    CONTENT: CONTENT
};
