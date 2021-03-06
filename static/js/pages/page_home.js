this.Page.home = ReC({
  displayName: "Home page for this page",
  getInitialState: function() {
    return {
      counter: 0
    };
  },
  change: function(e) {
    this.setState({
      counter: e.target.value
    });
    return console.log(this.state.counter);
  },
  render: function() {
    var i;
    return R.div(null, R.input({
      type: 'number',
      value: this.state.counter,
      onChange: this.change
    }), (function() {
      var j, ref, results;
      results = [];
      for (i = j = 0, ref = this.state.counter; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
        results.push(Re(Button, {
          text: i,
          key: i
        }));
      }
      return results;
    }).call(this));
  }
});
