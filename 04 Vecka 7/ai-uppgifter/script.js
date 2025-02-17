class LibraryItem {
  static allItems = [];
  static filterByType(type) {
    LibraryItem.allItems.filter((x) => x.type == type);
  }
  constructor(data) {
    this.title = data.title;
    this.year = data.year;
    this.type = data.type;
    this.id = data.id;

    LibraryItem.allItems.push(this);
  }

  getInfo() {
    return `${this.title} (${this.year})`;
  }
}

class Book extends LibraryItem {
  constructor(data, author) {
    super(data);
    this.author = author;
  }
}

class Movie extends LibraryItem {
  constructor(data, director) {
    super(data);
    this.director = director;
  }
}

class Animal {
  static allAnimals = [];
  static getOlderAnimals(age) {
    Animal.allAnimals.filter((x) => x.age > age);
  }
  constructor(data) {
    this.name = data.name;
    this.age = data.age;
    Animal.allAnimals.push(this);
  }

  describe() {
    return `${this.name} är ${this.age} gammal`;
  }
}

class Carnivore extends Animal {
  constructor(data) {
    super(data);
    this.meat = meat;
  }

  hunt() {
    return `jagar sitt byte!`;
  }
}

class Herbivore extends Animal {
  constructor(data) {
    super(data);
    this.greens = greens;
  }

  graze() {
    return `äter växter!`;
  }
}

class Employee {
  static all = [];
  static averageSalary() {
    let salary;

    for (let person of Employee.all) {
      salary += person.salary;
    }
    let medelSalary = salary / Employee.all.length;
    return medelSalary;
  }
  constructor(data) {
    this.name = data.name;
    this.salary = data.salary;
    Employee.all.push(this);
  }
  get formattedSalary() {
    return `${this.salary} kr`;
  }
}

class Manager extends Employee {
  constructor(data, bonus) {
    super(data);
    this.bonus = bonus;
  }

  getTotalSalary() {
    return this.salary + this.bonus;
  }
}

class Developer extends Employee {
  constructor(data, programmingLanguage) {
    super(data);
    this.programmingLanguage = programmingLanguage;
  }
}

class Product {
  constructor(data) {
    this.name = data.name;
    this.price = data.price;
  }

  get formattedPrice() {
    return `${this.price} kr`;
  }
}

class Electronics extends Product {
  constructor(data, warrantYears) {
    super(data);
    this.warrantYears = warrantYears;
  }
}
