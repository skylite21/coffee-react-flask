this.Container = ReC({
  displayName: "Main Container",
  render: function() {
    return R.div(null, Re(Menu.container, {
      menuItems: [
        {
          value: "menu1"
        }, {
          value: "menu2",
          xy: "akarmis2"
        }, {
          value: "menu43"
        }
      ]
    }), Re(this.props.page || Page.home, {}));
  }
});
