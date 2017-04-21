@Button = ReC
  displayName: "Button"
  getInitialState: ->
    counter: 0
  text: (e) ->
    @setState counter: @state.counter + 1
    console.log(@state.counter)


  render: ->
    R.div null,
      R.input
        type: 'button'
        value: @props.text
        onClick: @text
