class Product {
    static all = [];

    constructor() {
        Product.all.push(this);
    }

    get index() {
        for (let i = 0; i < Product.all.length; i++) {
            if (Product.all[i] == this) {
                return i;
            }
        }
    }
}

const product1 = new Product();
const product2 = new Product();
const product3 = new Product();

// console.log(product1.index); // 0
// console.log(product2.index); // 1
console.log(product3.index); // 2


//Ändra eller lägg till kod så att instanserna av Product har en getter "index" som ger instansens index i arrayen Product.all