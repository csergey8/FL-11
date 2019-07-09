'use strict';

const emailLength = 6;
const passwordLenght = 5;
let password, answer, newPassword, newPasswordConfirm;
const email = prompt('Enter email:');
if(!email) {
  alert('Canceled')
} else if(email.length < emailLength){
  alert('I don\'t know any emails having name length less than 6 symbols');
} else if(email === 'user@gmail.com' || email === 'admin@gmail.com'){
  password = prompt('Enter password:');
  if(!password) {
    alert('Canceled')
  } else if(email === 'user@gmail.com' && password === 'UserPass' || 
  email === 'admin@gmail.com' && password === 'AdminPass'){
    answer = confirm('Do you want to change your password?');
    if(!answer) {
      alert('You have failed the change.')
    } else {
      password = prompt('Enter old password');
      if(!password) {
        alert('Canceled')
      } else if(email === 'user@gmail.com' && password === 'UserPass' || 
      email === 'admin@gmail.com' && password === 'AdminPass'){
        newPassword = prompt('Enter new password:');
        if(newPassword.length < passwordLenght) {
          alert('It\'s too short password. Sorry');
        } else {
          newPasswordConfirm = prompt('Enter new password again');
          if(newPassword === newPasswordConfirm) {
            alert('You have successfully changed your password');
          } else {
            alert('You wrote the wrong password');
          }
        }
      } else {
        alert('Wrong password')
      }
    }
  } else {
    alert('Wrong password');
  }
} else {
  alert('I don\'t know you')
}