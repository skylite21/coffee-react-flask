this.User.login = ReC({
  login: function() {
    return $.ajax({
      method: "POST",
      dataType: "json",
      url: "/login",
      data: {
        user: {
          name: this.refs.name.value,
          password: this.refs.password.value
        }
      },
      success: function(result) {
        site.props.user = result.user;
        $.getScript("static/js_min/pages/page_home.js", function(textStatus) {
          site.props.page = Page.home;
          site.render();
          return console.log(textStatus);
        });
        return console.log(result);
      }
    });
  },
  displayName: "User login",
  render: function() {
    return R.div(null, R.input({
      type: "text",
      ref: "name",
      className: "form-control"
    }), R.input({
      type: "password",
      ref: "password",
      className: "form-control"
    }), R.input({
      type: "button",
      className: "btn btn-primary",
      onClick: this.login
    }));
  }
});
