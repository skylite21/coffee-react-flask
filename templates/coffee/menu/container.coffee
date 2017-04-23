@Menu.container = ReC
  displayName: "Menu Container"
  render: ->
    R.div className: "row",
      R.div className: "col-xs-12",
        R.div
          className: "btn-group custom-menu"
          role: "group",
          for item in @props.menuItems
            if !item.login || @props.user
              Re Menu.item,
                item: item
                key: item.value
                width: 100/@props.menuItems.length



    


