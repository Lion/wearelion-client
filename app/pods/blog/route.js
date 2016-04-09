import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
     this.transitionTo('blog.converting-an-existing-site-to-ember');
   }
});
