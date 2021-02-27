import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SaveController extends Controller {
  @service Book;
  @tracked savedBooks = [];

  @action
  deleteBook(id) {
    if (id) {
      this.Book.deleteBook(id).then((res) => {
        if (res.status === 200) {
          this.savedBooks = this.savedBooks.filter((book) => book._id !== id);
        }
      });
    }
  }
}
