// använd arraymetoder

class AllFunctions {
  shopsOwnedByPerson(name) {
    return Shops.filter((shop) => shop.owner == name).length;
    /* let count = 0;
    for (let shop of Shops) {
      if (shop.owner == name) {
        count++;
      }
    }
    return count; */
  }

  amountOfSoldGoods(name) {
    let shopIdsOwnedByPerson = Shops.filter((shop) => shop.owner == name).map(
      (shop) => shop.id
    );

    let allPurchases = Purchases.filter((purchase) =>
      shopIdsOwnedByPerson.includes(purchase.shopId)
    ).map((purchase) => purchase.itemIds.length);

    let count = 0;
    for (let purchase of allPurchases) {
      count += purchase;
    }

    return count;
    /**
     * return Purchases.filter(p => Shops.some(s => s.owner === name && s.id === p.shopId))
     * .reduce((sum, p) => sum + p.itemIds.length, 0);
     */
  }

  heaviestPurchase() {
    let arrayOfWeights = Purchases.map(
      function (purchase) {
        purchase.itemIds.map(function (itemId) {
          Items.find((item) => item.id == itemId);
        });
        return item ? item.weight : 0;
      }

      /**
     * let arrayOfWeights = Purchases.map(function(purchase) { 
  // För varje köp, loopa genom itemIds och hämta vikterna för varje vara
  return purchase.itemIds.map(function(itemId) {
    // Hitta varan med rätt id i Items
    let item = Items.find(function(item) {
      return item.id === itemId; // Matcha itemId med id:t i Items
    });
    // Om varan finns, returnera vikten, annars returnera 0
    return item ? item.weight : 0;
  })
  .reduce(function(sum, weight) {
    return sum + weight; // Summera vikterna för hela köpet
  }, 0); // Börja från 0 för att summera vikterna
});
     */
      //(purchase) => purchase.itemIds).find(
      /* (item) => item == Items.id*/
    );
    let arrayOfItemElements = arrayOfItemIds.find((item) => item == Items.id);
  }
}

const functions = new AllFunctions();
console.log(functions.shopsOwnedByPerson("Chang"));

console.log(functions.amountOfSoldGoods("Kwan"));
