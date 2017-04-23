this.Button = ReC({
  displayName: "Button",
  getInitialState: function() {
    return {
      counter: 0
    };
  },
  text: function(event) {
    this.setState({
      counter: this.state.counter + 1
    });
    console.log(this.state.counter);
    return console.log(event.target.value);
  },
  render: function() {
    return R.div(null, R.input({
      type: 'button',
      value: this.props.text,
      onClick: this.text
    }));
  }
});
