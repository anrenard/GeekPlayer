App = Ember.Application.create();

App.Router.map(function(){
	this.resource('info');
	this.resource('player');
	this.resource('refresh');
})
