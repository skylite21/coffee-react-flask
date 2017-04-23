@Button = ReC
  displayName: "Button"
  getInitialState: ->
    counter: 0
  text: (event) ->
    @setState counter: @state.counter + 1
    console.log(@state.counter)
    console.log(event.target.value)


  render: ->
    R.div null,
      R.input
        type: 'button'
        value: @props.text
        onClick: @text

