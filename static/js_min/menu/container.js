this.Menu.container=ReC({displayName:"menu.container",render:function(){var e;return R.div({className:"row"},R.div({className:"col-xs-12"},R.div({className:"btn-group custom-menu",role:"group"},function(){var n,t,s,r;for(s=this.props.menuItems,r=[],n=0,t=s.length;n<t;n++)e=s[n],r.push(Re(Menu.item,{item:e,key:e.value,width:100/this.props.menuItems.length}));return r}.call(this))))}});