'use strict';

const render = (root)=>{
  root.empty();
  const wrapper = $('<div/>',{'id':'wrapper'});
  wrapper.append(createHeader());
  if(state.user == null){
    wrapper.append(createLogin());
  }else{
    wrapper.append(createDashboard());
  }
  root.append(wrapper);
};

const state = {
  user: null,
  status: null
};

$( _ => {
  alert('carga');
  const root = $('#root');
  render(root);
  state.doRender = render.bind(null, root);
});
