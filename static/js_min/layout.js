var Layout, app,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Layout = (function(superClass) {
  extend(Layout, superClass);

  function Layout() {
    return Layout.__super__.constructor.apply(this, arguments);
  }

  Layout.prototype.render = function() {
    return R.div(null, R.h1(null, "This is the main layout"), Re(Container));
  };

  return Layout;

})(React.Component);

app = document.getElementById("mount-point");

ReD(Re(Layout), app);
