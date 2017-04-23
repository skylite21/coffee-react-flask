this.Menu.container = ReC({
  displayName: "Menu Container",
  render: function() {
    var item;
    return R.div({
      className: "row"
    }, R.div({
      className: "col-xs-12"
    }, R.div({
      className: "btn-group custom-menu",
      role: "group"
    }, (function() {
      var i, len, ref, results;
      ref = this.props.menuItems;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        item = ref[i];
        if (!item.login || this.props.user) {
          results.push(Re(Menu.item, {
            item: item,
            key: item.value,
            width: 100 / this.props.menuItems.length
          }));
        } else {
          results.push(void 0);
        }
      }
      return results;
    }).call(this))));
  }
});
