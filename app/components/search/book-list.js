import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SearchBookListComponent extends Component {
  @service Book;

  @action
  saveBook(book) {
    this.Book.saveBook({
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks
        ? book.volumeInfo.imageLinks.thumbnail
        : '',
      infoLink: book.volumeInfo.infoLink,
    }).then((res) => {
      if (res['_id']) {
        alert('Saved successfully!');
      } else if (res.toString() === 'Already Saved') {
        alert('Already Saved!');
      }
    });
  }
}
