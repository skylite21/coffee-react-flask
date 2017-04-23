@Page.home = ReC
  displayName: "Home page for this shit"
  getInitialState: ->
    counter: 0
  change: (e) ->
    @setState counter: e.target.value
    console.log(@state.counter)

  render: ->
    R.div null,
      R.input
        type: 'number'
        value: @state.counter
        onChange: @change
      for i in [0..@state.counter]
        Re Button,
          text:i
          key:i
