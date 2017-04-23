@Menu.item = ReC
  displayName: "menu item"
  loadPage: ->
    site.props.page = @props.item.page
    site.render()
    console.log "page #{@props.item.value} loaded"
  render: ->
    R.input
      type: "button"
      className: "btn btn-primary"
      style:
        width: "#{@props.width}%"
      value: @props.item.value
      onClick: @loadPage

