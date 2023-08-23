'use script'

const firstName = document.getElementById('id-first-name');
const lastName = document.getElementById('id-last-name');
const eMail = document.getElementById('id-email');
const phoneNumber = document.getElementById('phone-num');
const dateOfBirth = document.getElementById('id-dob');
const newPassword = document.getElementById('id-new-password');
const conPassword = document.getElementById('id-con-password');
const urlLink = document.getElementById('id-url');
const genderSelect = document.querySelectorAll('input[type=radio]');
console.log(genderSelect);
const languageSelect = document.querySelectorAll('input[type=checkbox]');
const districtSelect = document.querySelector('#id-district');
const rangeSelect = document.getElementById('id-ranges');

const submitBtn = document.getElementById('id-submit');
const resetBtn = document.getElementById('id-reset');


// Global Variables
let isValidated = false

//  Function

function init(){

}

function checkValidation(){
  if(!(isValidated === true)){  
    if(firstName.value === ""){
      firstName.style.borderColor = "red";
    }else{
      firstName.style.borderColor = "green";
    }
    if(lastName.value === ""){
      lastName.style.borderColor = "red";
    }else{
      lastName.style.borderColor = "green";
    }
    if(eMail.value === ""){
      eMail.style.borderColor = "red";
    }else{
      eMail.style.borderColor = "green";
    }
    if(phoneNumber.value === ""){
      phoneNumber.style.borderColor = "red";
    }else{
      phoneNumber.style.borderColor = "green";
    }
    if(dateOfBirth.value === ""){
      dateOfBirth.style.borderColor = "red";
    }else{
      dateOfBirth.style.borderColor = "green";
    }
    if(newPassword.value === ""){
      newPassword.style.borderColor = "red"
    }else{
      newPassword.style.borderColor = "green";
    }
    if(conPassword.value === ""){
      conPassword.style.borderColor = "red";
    }else{
      conPassword.style.borderColor = "green";
    }
    if(urlLink.value === ""){
      urlLink.style.borderColor = "red";
    }else{
      urlLink.style.borderColor = "green";
    }
    if(genderSelect.value === ""){
      genderSelect.style.borderColor = "red";
    }else{
      genderSelect.style.borderColor = "green";
    }
    if(languageSelect.value === ""){
      languageSelect.style.borderColor = "red";
    }else{
      languageSelect.style.borderColor = "green";
    }
    if(districtSelect.checked){
      districtSelect.style.borderColor = "red";
    }else{
      districtSelect.style.borderColor = "green";
    }
  }
}

//  Event listener

submitBtn.addEventListener("click", ()=> {
  checkValidation();
});
