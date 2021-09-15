'use strict';
let accountsData = document.querySelector('#accounts-data');
let allLink = document.querySelectorAll('.nav-link');
let addAcount = document.querySelector('#add-account');
let acounts = document.querySelector('#accounts');
let views = document.querySelectorAll('.view');
let idInput = document.querySelector('[placeholder="id"]');
let firstNameInput = document.querySelector('[placeholder="first-name"]');
let lastnameInput = document.querySelector('[placeholder="last-name"]');
let emailInput = document.querySelector('[placeholder="email"]');
let phoneInput = document.querySelector('[placeholder="phone"]');
let saveBtn = document.querySelector('#save');

saveBtn.addEventListener('click', saveAccount);


function saveAccount() {
  const newAccount = {
        id: idInput.value,
        firstName: firstNameInput.value,
        lastName: lastnameInput.value,
        email: emailInput.value,
        phone: phoneInput.value 
  }
db.push(newAccount);
idInput.value = "";
firstNameInput.value = "";
lastnameInput.value = "";
emailInput.value = "";
phoneInput.value = ""; 
createAccount();
showView('#accounts');
}

for (let i = 0; i < allLink.length; i++) {
  allLink[i].addEventListener('click' , showView)
}
function showView(e){
  for (let i = 0; i < views.length; i++) {
    views[i].style.display = 'none';
  }
  if(e instanceof Event) {
    e.preventDefault();
    let id = `#${this.getAttribute("href")}`;
    document.querySelector(id).style.display = 'block';
  } else {
    document.querySelector(e).style.display = 'block';
  }
  
    
} 

createAccount();

function createAccount(){
    let htmlAccount = " ";
    for (let i = 0; i < db.length; i++) {
       const account = db[i];
       htmlAccount += `
       <tr>
            <td>${account.id}</td>
            <td>${account.firstName}</td>
            <td>${account.lastName}</td>
            <td>${account.email}</td>
            <td>${account.phone}</td>
        </tr>
       `
    }
    accountsData.innerHTML = htmlAccount;
}