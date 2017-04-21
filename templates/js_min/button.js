this.Button = ReC({
  displayName: "Button",
  getInitialState: function() {
    return {
      counter: 0
    };
  },
  text: function(e) {
    this.setState({
      counter: this.state.counter + 1
    });
    return console.log(this.state.counter);
  },
  render: function() {
    return R.div(null, R.input({
      type: 'button',
      value: this.props.text,
      onClick: this.text
    }));
  }
});
