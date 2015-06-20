import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("questions", {path: '/'}, function() {
    this.route('question', {path: 'question/:question_id'}, function(){
      this.route('new-answer');
    });
    this.route('new');
  });
  this.route("about");
});

export default Router;
