import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var question = this.modelFor('question');
    var answer = this.store.createRecord('answer');
    post.get('answers').then(function(answers) {
      answers.pushObject(answer);
    });
    return answer;
  }
});
