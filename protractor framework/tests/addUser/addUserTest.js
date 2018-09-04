'use strict';
const CONFIG = require('../../config/config');
const EC = protractor.ExpectedConditions;
const util = require('../../utilities/util');

let adduser = () => {

    it(' Verify list table is displayed', function () {
        util.waitFor('.btn-link');
        util.waitFor('.smart-table-header-row');        
    });

    it(' Open add user modal', function () {
        util.clickElement('.btn-link');
        util.textAssert('h3',CONFIG.CONTENT.HEADER);        
    });
    it(' add user data', function () {
        util.clearAndEnterData('input[name="FirstName"]',CONFIG.CONTENT.FIRSTNAME);
        util.clearAndEnterData('input[name="LastName"]',CONFIG.CONTENT.LASTNAME);
        util.clearAndEnterData('input[name="UserName"]',CONFIG.CONTENT.USERNAME);
        util.clearAndEnterData('input[name="Password"]',CONFIG.CONTENT.PASSWORD);
        util.textAssertClick('.radio',CONFIG.CONTENT.CUSTOMER);
        util.textAssertClick('option',CONFIG.CONTENT.ROLE);
        util.clearAndEnterData('input[name="Email"]',CONFIG.CONTENT.EMAIL);
        util.clearAndEnterData('input[name="Mobilephone"]',CONFIG.CONTENT.CELL);
        util.Enabled('.btn-succes');
        util.waitForAndClick('.btn-succes');        
               
    });
};

module.exports = {
  run: adduser
};