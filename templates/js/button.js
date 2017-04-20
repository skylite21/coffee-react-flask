this.Button = React.createClass({
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
    return React.DOM.input({
      type: 'button',
      value: this.props.text,
      onClick: this.text
    });
  }
});
