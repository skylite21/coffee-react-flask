@Container = ReC
  displayName: "Container"
  getInitialState: ->
    counter: 0
  change: (e) ->
    @setState counter: e.target.value
    console.log(@state.counter)


  render: ->
    R.div null,
      Re Menu.container,
        menuItems: [
          value: "menu1"
        ,
          value: "menu2"
          xy: "akarmis2"
        ,
          value: "menu43"
        ]
      R.input
        type: 'number'
        value: @state.counter
        onChange: @change
      for i in [0..@state.counter]
        Re Button,
          text:i
          key:i
