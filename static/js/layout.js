var Layout, app,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Layout = (function(superClass) {
  extend(Layout, superClass);

  function Layout() {
    Layout.__super__.constructor.apply(this, arguments);
    this.state = {
      name: "will"
    };
    return;
  }

  Layout.prototype.render = function() {
    setTimeout(function() {
      this.setState({
        name: "bob"
      });
      1000;
    });
    return R.div(null, R.h1(null, "This is the main layout " + this.state.name), Re(Container));
  };

  return Layout;

})(React.Component);

app = document.getElementById("mount-point");

ReD(Re(Layout), app);
