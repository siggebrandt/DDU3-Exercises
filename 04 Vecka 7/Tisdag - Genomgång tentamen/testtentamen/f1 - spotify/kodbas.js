class Person {
  static all = []
  constructor(id, alias) {
    this.constructor.all.push(this);
    this.id = id;
    this.alias = alias;
  }
}
class Artist extends Person {
  constructor(id, alias, country) {    
    super(id, alias);
    this.country = country;
  }
}
class Listener extends Person {
  constructor(id, alias, follows = []) {
    super(id, alias);
    this.follows = follows; // Array of artists' ids
  }
}
class Song {
  static all = []
  static Genres = ["rock", "pop", "soul", "punk"]
  constructor(id, title, genre, artistId) {
    this.constructor.all.push(this);
    this.id = id;
    this.title = title;
    this.genre = genre;
    this.artistId = artistId;
  }
}
class Listening {
  static all = []
  constructor(date, listenerId, songId) {
    this.constructor.all.push(this);
    this.date = date; // {year: int, month: int, day: int}
    this.listenerId = listenerId;
    this.songId = songId;
  }
}
function inputError () {
  // En Error kastas här så att kodexekveringen avslutas
}