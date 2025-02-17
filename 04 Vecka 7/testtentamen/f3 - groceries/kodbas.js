class Item {
  static all = [];

  static get allBeans() {
    return Item.all.filter((item) => item.constructor === Beans);
  }

  static moreExpensiveThan(pricePerKg) {
    return Item.all.filter((item) => item.pricePerKilo > pricePerKg);
  }

  constructor(name, price, weight, quantity) {
    Item.all.push(this);
    this.name = name;
    this.price = price;
    this.weight = weight; // in grams
    this.quantity = quantity; // Hur många finns det i affären
  }

  get pricePerKilo() {
    return this.price / (this.weight * 1000);
  }
}

class VegetarianItem extends Item {
  constructor(name, price, weight, quantity, isEco) {
    super(name, price, weight, quantity);
    this.isEco = isEco;
  }
}

class Fruit extends VegetarianItem {
  constructor(name, price, weight, quantity, isEco, color) {
    super(name, price, weight, quantity, isEco);
    this.color = color;
  }
}

class Beans extends VegetarianItem {
  constructor(name, price, weight, quantity, isEco, type) {
    super(name, price, weight, quantity, isEco);
    this.type = type; // vilken typ av bönor det handlar om
  }
}
