const cart = {
  items: [],
  get totalPrice() {
    return this.calculateItemPrice();
  },
  count: 0,
  discount: 0,
  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    }
    if (promocode === 'NEWYEAR') {
      this.discount = 21;
    }
  },
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
      acc +=
        item.prise * item.countProduct -
        ((item.prise * item.countProduct) / 100) * this.discount;
      return acc;
    }, 0);
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
    this.discount = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice);
  },
};

cart.add('MacBook Pro', 100, 2);
cart.add('SM Xiaomi 13 pro', 200, 5);
cart.add('Lenova 14 Pro', 350, 10);
cart.setDiscount = 'NEWYEAR';
cart.print();
