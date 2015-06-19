import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr('string'),
  text: DS.attr('string'),
  date: DS.attr('data'),
  question: DS.belongsTo('question', {async: true})
});
