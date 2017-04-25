class Layout extends React.Component
  render: ->
    R.div null,
      R.h1 null, "This is the main layout"
      Re Container

app = document.getElementById "mount-point"
ReD(Re(Layout), app)
