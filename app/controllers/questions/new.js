import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addQuestion: function() {
      var newQuestion = this.store.createRecord('question', {
        name: this.get('name'),
        question: this.get('question')
      });
      newQuestion.save();
      this.setProperties({
        name:'',
        question:''
      });
    }
  }
});
