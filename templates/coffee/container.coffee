@Container = ReC
  displayName: "Main Container"

  render: ->
    R.div null,
      Re Menu.container,
        menuItems: [
          value: "login"
          page: Page.login
        ,
          value: "home"
          page: Page.home
          login: true
        ,
          value: "menu43"
        ]
        user: @props.user
      Re @props.page || User.login,
        {}
