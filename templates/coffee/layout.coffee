class Layout extends React.Component
  constructor: ->
    super
    @state = {name: "will"}
    return

  render: ->
    setTimeout ->
      (this.setState {name: "bob"}
      1000)
      return
    R.div null,
      R.h1 null, "This is the main layout #{@state.name}"
      Re Container

app = document.getElementById "mount-point"
ReD(Re(Layout), app)
