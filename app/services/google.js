import Service from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class GoogleService extends Service {
  @tracked bookList = [];

  @action
  async searchGoogleBooks(search) {
    let response = await fetch(
      'https://www.googleapis.com/books/v1/volumes?q=' +
        search +
        '&key=AIzaSyB2DmDMvrzr6RVnFGr6a2qkYkO1r0Zdl0I'
    );
    let { items } = await response.json();
    this.bookList = items;
  }
}
