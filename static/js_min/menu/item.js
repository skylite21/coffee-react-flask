this.Menu.item = ReC({
  displayName: "menu item",
  loadPage: function() {
    site.props.page = this.props.item.page;
    site.render();
    return console.log("page " + this.props.item.value + " loaded");
  },
  render: function() {
    return R.input({
      type: "button",
      className: "btn btn-primary",
      style: {
        width: this.props.width + "%"
      },
      value: this.props.item.value,
      onClick: this.loadPage
    });
  }
});
