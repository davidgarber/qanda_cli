import Ember from 'ember';

export default Eber.Controller.extend({
  needs:['question'],
  actions: {
    addAnswer: function() {
      var newAnswer = this.store.createRecord('answer', {
        date: this.get('date'),
        name: this.get('name'),
        body: this.get('body')
      });
      var question = this.get('controllers.questions/question.model');
      newAnswer.save().then(function() {
        question.get('answers').pushObject(newAnswer);
        question.save();
      });
      this.setProperties({
        name:'',
        body:''
      });


    }
  }
});
