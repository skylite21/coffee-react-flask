this.Router = (function() {
  function Router(component, props, container) {
    this.component = component;
    this.props = props;
    this.container = document.getElementById(container);
  }

  Router.update = function(result) {
    return this.props = Object.assign({}, this.props, result);
  };

  Router.prototype.render = function() {
    return ReD(Re(this.component, this.props), this.container);
  };

  return Router;

})();
