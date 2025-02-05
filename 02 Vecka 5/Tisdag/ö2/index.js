class Product {
    constructor(data) {
        this._name = data.name;
        this._price = data.price;
        this._discount = data.discount;
    }

    get name() { return this._name }

    get price() { return this._price };
    set price(value) {
        if (value < 0) {
            throw Error("Error: Negativt tal")
            //return;
        }
        this._price = value;
        //else return this._price;
    }

    get discount() { return this._discount }
    set discount(value) {
        if (value < 0 && value > 100) { throw Error("Error: ogiltigt discount") }
        /*else return*/ this._discount = value;
    }

    get finalPrice() { return (this._price - (this._price * (this._discount / 100))) }

}


let p = new Product({ name: "Nocoo", price: 100, discount: 25 });

console.log(p.name, "price:", p.finalPrice);