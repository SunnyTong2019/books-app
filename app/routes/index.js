import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  // redirect to search route when access home URL
  beforeModel() {
    this.transitionTo('search');
  }
}
