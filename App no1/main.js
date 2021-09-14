let accountsData = document.querySelector('#accounts-data');

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