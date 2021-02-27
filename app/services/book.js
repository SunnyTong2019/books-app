import Service from '@ember/service';

export default class BookService extends Service {
  async saveBook(book) {
    const response = await fetch('/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
    const res = await response.json();
    return res;
  }

  async deleteBook(bookID) {
    const response = await fetch('/api/books/' + bookID, {
      method: 'DELETE',
    });
    return response;
  }
}
