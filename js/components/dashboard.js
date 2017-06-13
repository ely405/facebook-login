'use strict';

const createDashboard = ()=>{
  let dashboardContainer = $('<div/>',{'class':'dashboard-container'}).html('Dashboard Component');

  if(state.user){
    let name = $('<h1/>').html(state.user.name);
    let email = $('<h1/>').html(state.user.email);
    dashboardContainer.append(name, email);

    let logOut = $('<button/>',{'type':'button'}).html('Salir');
    logOut.on('click', ()=>{
      FB.logout(response=>{
        state.user = null;
        state.doRender();
      });
    });
    dashboardContainer.append(logOut);
  }
  return dashboardContainer;
}
