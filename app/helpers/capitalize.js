import Ember from 'ember';

export function capitalize(input) {
  return input;
}

export default Ember.Handlebars.makeBoundHelper(capitalize);
