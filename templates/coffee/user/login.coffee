@User.login = ReC
  login: ->
    $.ajax
      method: "POST"
      dataType:"json"
      url: "/login"
      data:
        user:
          name: @refs.name.value
          password: @refs.password.value
      success: (result) ->
        site.props.user = result.user
        $.getScript "static/js_min/pages/page_home.js", (textStatus) ->
          site.props.page = Page.home
          site.render()
          console.log textStatus
        console.log result



  displayName: "User login"
  render: ->
    R.div null,
      R.input
        type: "text"
        ref: "name"
        className: "form-control"
      R.input
        type: "password"
        ref: "password"
        className: "form-control"
      R.input
        type: "button"
        className: "btn btn-primary"
        onClick: @login
        
