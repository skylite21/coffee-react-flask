this.Container=ReC({displayName:"Container",getInitialState:function(){return{counter:0}},change:function(e){return this.setState({counter:e.target.value}),console.log(this.state.counter)},render:function(){var e;return R.div(null,Re(Menu.container,{menuItems:[{value:"menu1"},{value:"menu2",xy:"akarmi"},{value:"menu43"}]}),R.input({type:"number",value:this.state.counter,onChange:this.change}),function(){var t,n,u;for(u=[],e=t=0,n=this.state.counter;0<=n?t<=n:t>=n;e=0<=n?++t:--t)u.push(Re(Button,{text:e,key:e}));return u}.call(this))}});