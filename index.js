// Cтворіть функцію конструктор Продукт з властивостями:
// назва(рядок), ціна(число), кількість(число - залишок на складі)

// Cтворіть функцію конструктор прототипу Продукту з функціоналом:
// showInfo() - повертає рядок з усіма данними
// setSaleToPrice(value=0) - встановлює знижку і повертає нову ціну
// buyAmountProduct(amountValue) - повертає загальну вартість, якщо є достатня кількість, якщо не має повертаєте - null


/**
 *
 * @param {string} name
 * @param {number} price
 * @param {number} count
 */
 function Product(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }
  
  function ProductPrototype() {
    this.showInfo = function () {
      return (
        "Product name: " +
        this.name +
        " | " +
        "Product prise: " +
        this.price +
        " | " +
        "Products in stock : " +
        this.count
      );
    };
    this.setSaleToPrice = function (value) {
      this.discountProcent = (value * 100) / this.price;
      if (this.price - value > 0) {
        return (
          "Price with sale : " +
          (this.price -= value) +
          " | " +
          "Discount percentage - " +
          this.discountProcent +
          " %"
        );
      }
      return "Please enter discount amount";
    };
    this.buyAmountProduct = function (amount) {
      if (amount <= this.count && amount > 0) {
        if (amount > 1) {
          return (
            "You bought - " +
            amount +
            " " +
            this.name +
            "`s" +
            " | " +
            " Summary price : " +
            this.price * amount +
            " USD"
          );
        }
        return (
          "You bought - " +
          amount +
          " " +
          this.name +
          " | " +
          " Summary price : " +
          this.price * amount +
          " USD"
        );
      }
      return null;
    };
  }
  Product.prototype = new ProductPrototype();
  
  const phone = new Product("Xiaomi", 1000, 10);
  const phone2 = new Product("Iphone", 5000, 5);
  const phone3 = new Product("Samsung", 2500, 15);
  
  console.log(phone.showInfo());
  console.log(phone.setSaleToPrice(600));
  console.log(phone.buyAmountProduct(7));
  console.log("");
  console.log(phone2.showInfo());
  console.log(phone2.setSaleToPrice(550));
  console.log(phone2.buyAmountProduct(5));
  console.log("");
  console.log(phone3.showInfo());
  console.log(phone3.setSaleToPrice(200));
  console.log(phone3.buyAmountProduct(5));