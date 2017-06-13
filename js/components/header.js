'use strict';

const createHeader = ()=>{
  const header = $('<header/>');
  const logo = $('<img/>',{'src':'img/logo.png'});

  header.append(logo);
  return header;
}
