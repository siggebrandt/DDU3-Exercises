class ProductOne {
  constructor(data) {
    this.name = data.name;
    this.price = data.price;
    this.discount = data.discount;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }

  get price() {
    return this._price;
  }
  set price(value) {
    if (value < 0) {
      throw Error("priset kan inte vara negativt");
    }
    this._price = value;
  }

  get discount() {
    return this._discount;
  }
  set discount(value) {
    if (value < 0 || value > 100) {
      throw Error("rabatten är inte giltig");
    }
    this._discount = value;
  }

  get finalPrice() {
    let finalPrice;
    finalPrice = this.price - this.price * (this.discount / 100);
    return finalPrice;
  }
}

let nocco = new ProductOne({ name: "Nocoo dark", price: 50, discount: 50 });

console.log(nocco.name, "price:", nocco.finalPrice);

class Product {
  constructor(data) {
    this._name = data.name;
    this._price = data.price;
    this._discount = data.discount;
  }

  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }
  set price(value) {
    if (value < 0) {
      throw Error("Error: Negativt tal");
      //return;
    }
    this._price = value;
    //else return this._price;
  }

  get discount() {
    return this._discount;
  }
  set discount(value) {
    if (value < 0 || value > 100) {
      throw Error("Error: ogiltigt discount");
    }
    /*else return*/ this._discount = value;
  }

  get finalPrice() {
    return this._price - this._price * (this._discount / 100);
  }
}

let p = new Product({ name: "Nocoo", price: 100, discount: 25 });

console.log(p.name, "price:", p.finalPrice);
