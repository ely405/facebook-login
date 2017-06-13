'use strict';
const createLogin = ()=>{
  let login = $('<div/>',{'class':'login'});
  let title = $('<h1/>').html('Log into Laboratoria');
  let inputEmail = $('<input/>',{'type':'email', 'class':'user-name', 'placeholder':'Email'});
  let inputPassword = $('<input/>',{'type':'password', 'class':'password', 'placeholder':'Password'});
  let loginButton = $('<button/>',{'type':'button'}).html('Ingresa');
  let loginFacebookButton = $('<button/>',{'type':'button'}).html('Ingresa con Facebook');

  login.append(title, inputEmail, inputPassword, loginButton, loginFacebookButton);
  loginButton.on('click', (e)=>{
    e.preventDefault();
    alert('Not implement yet');
  });
  loginFacebookButton.on('click', (e)=>{
    e.preventDefault();
    doLogin();
  });
  return login;
}
