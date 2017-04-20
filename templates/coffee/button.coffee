@Button = React.createClass
  displayName: "Button"
  getInitialState: ->
    counter: 0
  text: (e) ->
    @setState counter: @state.counter + 1
    console.log(@state.counter)

  render: ->
    React.DOM.input
      type: 'button'
      value: @props.text
      onClick: @text

