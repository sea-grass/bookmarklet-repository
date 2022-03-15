class AppError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class LoadBookmarkletsError extends AppError {
  constructor() {
    super('Could not load bookmarklets.');
  }
}

export class LoadBookmarkletError extends Error {
  bookmarklet: string;

  constructor(bookmarklet) {
    super('Could not load the requested bookmarklet [' + bookmarklet + ']. Does it exist?');
    this.bookmarklet = bookmarklet;
  }
}
