'use strict';
window.addEventListener('beforeunload', save);
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
let eId = document.querySelector('.eId');
let eFirstname = document.querySelector('.eFirstname');
let eLastname = document.querySelector('.eLastname');
let eEmail = document.querySelector('.eEmail');
let ePhone = document.querySelector('.ePhone');
let editBtn = document.querySelector('#edit');
let id;


saveBtn.addEventListener('click', saveAccount);
editBtn.addEventListener('click', saveEditAccount);

function saveEditAccount() {
  const editAccount = {
    id: eId.value,
    firstName: eFirstname.value,
    lastName: eLastname.value,
    email: eEmail.value,
    phone: ePhone.value
  }
  db[id] = editAccount;
  createAccount();
  showView('#accounts');
}


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
            <td><button data-id="${i}" class="edit btn btn-sm btn-warning form-control">Edit</button></td>
            <td><button data-id="${i}" class="delete btn btn-sm btn-danger form-control">Delete</button></td>
        </tr>
       `
    }
    accountsData.innerHTML = htmlAccount;
    let allDeleteBtn = document.querySelectorAll('.delete');
    let allEditBtn = document.querySelectorAll('.edit');
    for (let i = 0; i < allDeleteBtn.length; i++) {
      allDeleteBtn[i].addEventListener('click', deleteAccount);
      allEditBtn[i].addEventListener('click', editAccount);
    }
}

function deleteAccount(){
let id = this.getAttribute('data-id');
db.splice(id,1);
createAccount();
showView('#accounts');
}

function editAccount(){
  id = this.getAttribute('data-id');
  let selectedAccount = db[id];
 
  eId.value = selectedAccount.id;
  eFirstname.value = selectedAccount.firstName;
  eLastname.value = selectedAccount.lastName;
  eEmail.value = selectedAccount.email;
  ePhone.value = selectedAccount.phone;
  showView('#edit-account');
}

function save() {
  localStorage.db = JSON.stringify(db);
}