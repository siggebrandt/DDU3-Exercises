class Movie {
  static allMovies = [];

  constructor(data) {
    this.title = data.title;
    this.director = data.director;
    this.year = data.year;
    this.review = data.review;
    Movie.allMovies.push(this);
  }

  get year() {
    return this._year;
  }
  set year(value) {
    if (value < 1 || !Number.isInteger(value)) {
      throw Error("inkorrekt tal");
    }
    this._year = value;
  }

  get review() {
    return this._review;
  }
  set review(value) {
    if (value < 1 || value > 5) throw Error();
    this._review = value;
  }
}

class FilmKatalog {
  static allUsers = [];

  constructor(data) {
    this.username = data.username;
    this.userMovies = [];

    FilmKatalog.allUsers.push(this);
  }

  addMovie(movie) {
    this.userMovies.push(movie);
  }
  removeMovie(movie) {
    // använd filter istället
    for (let i = 0; i < this.userMovies.length; i++) {
      if (movie == this.userMovies[i]) {
        this.userMovies.splice(i, 1);
      }
    }
  }
  searchMovie(searchInput) {
    for (let i = 0; i < Movie.allMovies.length; i++) {
      if (
        Movie.allMovies[i].title.includes(searchInput) ||
        Movie.allMovies[i].director.includes(searchInput) ||
        Movie.allMovies[i].year === searchInput
      ) {
        return Movie.allMovies[i];
      } else {
        console.log("Found no movie");
      }
    }
  }
}

class MovieList {
  constructor(name, movie) {
    this.name = name;
    this.favouriteMovies = [];
  }
  addMovieToList(movie) {
    this.favouriteMovies.push(movie);
  }
  removeMovieFromList(movie) {
    for (let i = 0; i < this.favouriteMovies.length; i++) {
      if (movie == this.favouriteMovies[i]) {
        this.favouriteMovies.splice(i, 1);
      }
    }
  }

  get nFilms() {
    return this.favouriteMovies.length;
  }

  get averageReview() {
    let totalScore = 0;
    for (let i = 0; i < this.favouriteMovies.length; i++) {
      totalScore += this.favouriteMovies[i].review;
    }
    return totalScore / this.favouriteMovies.length;
  }
}

const katalog = new FilmKatalog("John");

const movie1 = new Movie({
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  review: 5,
});
const movie2 = new Movie({
  title: "Interstellar",
  director: "Christopher Nolan",
  year: 2014,
  review: 4,
});

katalog.addMovie(movie1);
katalog.addMovie(movie2);

console.log(katalog.searchMovie("Nolan")); // Hittar båda filmerna
console.log(katalog.searchMovie(2010)); // Hittar "Inception"
katalog.removeMovie(movie1);

console.log(katalog.userMovies); // Endast "Interstellar" kvar

console.log("--------");

const movie3 = new Movie({
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  review: 5,
});
const movie4 = new Movie({
  title: "Interstellar",
  director: "Christopher Nolan",
  year: 2014,
  review: 4,
});

const list = new MovieList("Favoriter");

list.addMovieToList(movie3);
list.addMovieToList(movie4);

console.log("how many?; ", list.nFilms); // 2
console.log(list.averageReview); // (5 + 4) / 2 = 4.5

list.removeMovieFromList(movie3);
console.log(list.nFilms); // 1
console.log(list.averageReview); // 4 (Endast "Interstellar" kvar)
