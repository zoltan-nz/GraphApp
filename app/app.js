import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'graph-app', // TODO: loaded via config
  Resolver: Resolver
  ,LOG_TRANSITIONS_INTERNAL:  true
  ,LOG_ACTIVE_GENERATION:     true
  ,LOG_VIEW_LOOKUPS:          true
  ,LOG_RESOLVER:              true
});


Ember.run.backburner.DEBUG            = true;
Ember.ENV.RAISE_ON_DEPRECATION        = true;
Ember.LOG_STACKTRACE_ON_DEPRECATION   = true;
Ember.LOG_BINDINGS                    = true;
Ember.RSVP.on('error', function(error) {
  Ember.Logger.assert(false, error);
});

loadInitializers(App, 'graph-app');

export default App;
