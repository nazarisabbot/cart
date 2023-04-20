const cart = {
  items: [],
  get totalPrice() {
    return this.calculateItemPrice();
  },
  count: 0,
  add(nameNewProduct, priseNewProduct, countNewProduct = 1) {
    this.items[this.items.length - 1 + 1] = {
      nameProduct: nameNewProduct,
      prise: priseNewProduct,
      countProduct: countNewProduct,
    };
    this.increaseCount(countNewProduct);
  },
  increaseCount(numIncrease) {
    this.count += numIncrease;
  },
  calculateItemPrice() {
    return this.items.reduce((acc, item) => {
      acc += item.prise * item.countProduct;
      return acc;
    }, 0);
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice);
  },
};

cart.add('MacBook Pro', 100, 2);
cart.add('SM Xiaomi 13 pro', 200, 5);
cart.add('Lenova 14 Pro', 350, 10);
cart.print();
