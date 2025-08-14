"use strict"

const user = {
    email:"admin@test.com",
    password:"admin123"
}

const form = document.querySelector("form");
const input = document.querySelectorAll('input');
const alertSuccess = document.querySelector('#alert-success');
const alertWarning = document.querySelector('#alert-warning');
const alertReminder = document.querySelector('#alert-fill');
const btn=document.querySelector('.btn')

const submitedForm = (e)=>{
    e.preventDefault();
    if (!input[0].value || !input[1].value) {
        alertReminder.style.display='flex'
    }else{
        if (input[0].value === user.email && input[1].value === user.password) {
            alertSuccess.style.display='flex'
        }else{
            alertWarning.style.display='flex'
        }
        
    }
}

form.onsubmit = submitedForm;

const lockBtn  = document.querySelector('.lock');
lockBtn.onclick = ()=>{
    if (input[1].type === 'password') {
        input[1].type = 'text';
    }else{
        input[1].type = 'password';
    }
}