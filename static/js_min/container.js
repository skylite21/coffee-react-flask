this.Container = ReC({
  displayName: "Main Container",
  render: function() {
    return R.div(null, Re(Menu.container, {
      menuItems: [
        {
          value: "login",
          page: Page.login
        }, {
          value: "home",
          page: Page.home,
          login: true
        }, {
          value: "menu43"
        }
      ],
      user: this.props.user
    }), Re(this.props.page || User.login, {}));
  }
});
