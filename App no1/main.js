'use strict';
let accountsData = document.querySelector('#accounts-data');
let allLink = document.querySelectorAll('.nav-link');
let addAcount = document.querySelector('#add-account');
let acounts = document.querySelector('#accounts');
let views = document.querySelectorAll('.view');

for (let i = 0; i < allLink.length; i++) {
  allLink[i].addEventListener('click' , showView)
}
function showView(e){
   e.preventDefault();
    for (let i = 0; i < views.length; i++) {
    views[i].style.display = 'none';
        
    }
    let id = `#${this.getAttribute("href")}`;
    document.querySelector(id).style.display = 'block';
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