import Route from '@ember/routing/route';

export default class SaveRoute extends Route {
  async setupController(controller, model) {
    super.setupController(controller, model);
    const response = await fetch('/api/books');
    const data = await response.json();
    controller.savedBooks = data;
  }
}
