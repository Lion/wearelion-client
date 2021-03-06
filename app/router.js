import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('blog', function() {
    this.route('converting-an-existing-site-to-ember');
  });
  this.route('why');
  this.route('jobs');
  this.route('contact');
});

export default Router;
