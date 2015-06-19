import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  body: DS.attr('string'),
  answers: DS.hasMany('answers', {async: true})
});
