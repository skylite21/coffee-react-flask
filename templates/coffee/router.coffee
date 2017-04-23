class @Router
  constructor: (component,props,container) ->
    @component = component
    @props = props
    @container = document.getElementById container
    # @update_token = PubSub.subscribe("Router.update",@update)
    # @refresh_token = PubSub.subscribe("refresh", => @render())
  @update:(result) ->
    @props = Object.assign({},@props,result)

  render: ->
    ReD(Re(@component,@props),@container)
