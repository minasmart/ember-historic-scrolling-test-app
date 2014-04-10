var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'history'
});

Router.map(function() {
  this.route('one');
  this.route('two');
  this.route('three');
  this.route('four');
  this.route('five');
  this.route('six');
  this.route('seven');
  this.route('eight');
});

export default Router;
