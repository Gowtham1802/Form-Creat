'use script'

const firstName = document.getElementById('id-first-name');
const lastName = document.getElementById('id-last-name');
const eMail = document.getElementById('id-email');
const phoneNumber = document.getElementById('phone-num');
const dateOfBirth = document.getElementById('id-dob');
const newPassword = document.getElementById('id-new-password');
const conPassword = document.getElementById('id-con-password');
const urlContainer = document.getElementById('id-url');
const genderSelect = document.querySelectorAll('input[type=radio]');
console.log(genderSelect);
const languageSelect = document.querySelectorAll('input[type=checkbox]');
const districtSelect = document.querySelector('id-district');
const rangeSelect = document.getElementById('id-ranges');

const submitBtn = document.getElementById('id-submit');
const resetBtn = document.getElementById('id-reset');


// Global Variables

//  Function

function init(){
  
}

//  Event listener

submitBtn.addEventListener("click", ()=> {
  checkValidation();
});
