class LibraryItem {
  static all = [];
  static get totalItems() {
    return LibraryItem.all.length;
  }

  constructor(title, year) {
    this.title = title;
    this.year = year;
    LibraryItem.all.push(this);
  }
}

class Book extends LibraryItem {
  constructor(title, year, author) {
    super(title, year);
    this.author = author;
  }

  get author() {
    return this._author;
  }
  set author(value) {
    this._author = value;
  }
}

class Magazine extends LibraryItem {
  constructor(title, year, issueNumber) {
    super(title, year);
    this.issueNumber = issueNumber;
  }
  get issueNumber() {
    return this._issueNumber;
  }
  set issueNumber(value) {
    this._issueNumber = value;
  }
}
