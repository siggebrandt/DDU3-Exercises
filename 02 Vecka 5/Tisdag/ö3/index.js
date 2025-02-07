class Book {
  constructor(data) {
    this.title = data.title;
    this.author = data.author;
    this.year = data.year;
  }

  capitalize(value) {
    return value[0].toUpperCase() + value.slice(1);
  }

  get title() {
    return this._title;
  }
  set title(value) {
    this._title = this.capitalize(value);
  }

  get author() {
    return this._author;
  }
  set author(value) {
    this._author = this.capitalize(value);
  }

  get year() {
    return this._year;
  }
  set year(value) {
    if (value < 0) {
      throw Error("year är inte ett positivt tal");
      console.error("year är inte ett positivt tal");
      return;
    }
    if (!Number.isInteger(value)) {
      throw Error("year är inte ett heltal");
      console.error("year är inte ett heltal");
      return;
    }
    this._year = value;
  }

  get print() {
    return `${this.author} (${this.year}): ${this.title}`;
  }
}
let b = new Book({
  title: "the first ever book",
  author: "victor",
  year: 2020,
});
//b.title = "the other book";
//b.author = "alex";
// b.year = -34.77;
console.log(b.print);
