import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { name: 'a' },
      { name: 'b' },
      { name: 'c' }
    ];
  },

  actions: {
    reorderItems(updated) {
      this.controller.set('model', updated);
    }
  }
});
