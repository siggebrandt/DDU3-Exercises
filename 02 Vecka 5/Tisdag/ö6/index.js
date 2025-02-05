class Movie {
    constructor(data) {
        this.title = data.title;
        this.director = data.director;
        this.year = data.year;
        this.review = data.review;
    }

    get year() { return this._year }
    set year(value) {
        if (value < 0 || value != Math.floor(value)) throw Error();
        this._year = value;
    }

    get review() { return this._review }
    set review(value) {
        if (value < 1 || value > 5) throw Error();
        this._review = value;
    }
}

class FilmKatalog {

}

class MovieList {

}