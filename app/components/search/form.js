import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SearchFormComponent extends Component {
  @service Google;
  @tracked searchTerm = '';

  @action
  onChange(event) {
    this.searchTerm = event.target.value;
  }

  @action
  onSubmitSearch(event) {
    event.preventDefault();
    this.Google.searchGoogleBooks(this.searchTerm);
  }
}
