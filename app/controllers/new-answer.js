import Ember from 'ember';

var NewAnswerController = {
  actions: {
    save: function() {
      var answer = this.get('model');
      answer.save();

      var controller = this;
      answer.get('question').then(function(question) {
        question.save();
        controller.transitionToRoute('question', question);
      });
    }
  }
};
