class Dog {
  static all = [];
  static breeds(region) {
    /**
     * returnerar en array av objekt, varje objekt reprsenterar en av hundraserna som lever i i regionen region (variabel).
     * {
        breed: string (the name of the breed)
        nDogsAlive: antalet hundar av den rasen som lever i den regionen
        nDogsTotal: antalet hundar av den rasen som lever eller har levt i den regionen
        averageAgeInRegion: genomsnittliga åldern på hundarna av den rasen som har levt i den regionen
        averageAgeTotal: genomsnittliga åldern på hundarna av den rasen (oavsett vilken region de har levt i)
     * }
     * 
     **/
  }

  constructor(id, weight, born, died, breed, kennelId) {
    this.constructor.all.push(this);
    this.id = id;
    this.weight = weight; // Kg
    this.born = born; // year, four digits
    this.died = died; // year, four digits; 0 if dog still alive
    this.breed = breed; // String, for example: "Boxer".
    this.kennelId = kennelId; // Kennel in which the dog was born
  }
}

class Kennel {
  static all = [];
  constructor(id, breeds) {
    this.constructor.all.push(this);
    this.id = id;
    this.breeds = breeds; // array of strings, for example: ["Boxer", "Husky"]
  }
}

class Owner {
  static all = [];
  constructor(id, region, dogIds) {
    this.constructor.all.push(this);
    this.id = id;
    this.region = region;
    this.dogIds = dogIds; // Array of dog IDs
  }
}
