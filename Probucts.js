var Product1 = { 
    ProductQuantity: 0,
    ProductProgress: 1,
    get ProductPrice() {
        return Math.round(100 * 1.2 ** this.ProductQuantity);
    }
};

var Product2 = { //Помада
    ProductQuantity: 0,
    ProductProgress: 0.1,
    get ProductPrice() {
        return Math.round(15 * 1.2 ** this.ProductQuantity);
    }
};


var Product3 = { //Сладости
    ProductQuantity: 0,
    ProductProgress: 0.5,
    get ProductPrice() {
        return Math.round(350 * 1.2 ** this.ProductQuantity);
    }
};


var Product4 = { //Романтическая музыка
    ProductQuantity: 0,
    ProductProgress: 4,
    get ProductPrice() {
        return Math.round(500 * 1.2 ** this.ProductQuantity);
    }
};


var Product5 = { //Плюшевы игрушки
    ProductQuantity: 0,
    ProductProgress: 10,
    get ProductPrice() {
        return Math.round(3000 * 1.2 ** this.ProductQuantity);
    }
};


var Product6 = { //Романтические письма
    ProductQuantity: 0,
    ProductProgress: 40,
    get ProductPrice() {
        return Math.round(8000 * 1.2 ** this.ProductQuantity);
    }
};


var Product7 = { //Розовые очки
    ProductQuantity: 0,
    ProductProgress: 100,
    get ProductPrice() {
        return Math.round(30000 * 1.2 ** this.ProductQuantity);
    }
};


var Product8 = { //Автомат для поцелуев
    ProductQuantity: 0,
    ProductProgress: 400,
    get ProductPrice() {
        return Math.round(160000 * 1.2 ** this.ProductQuantity);
    }
};


var Product9 = { //Целовательная вечеринка
    ProductQuantity: 0,
    ProductProgress: 6666,
    get ProductPrice() {
        return Math.round(1100000 * 1.2 ** this.ProductQuantity);
    }
};


var Product10 = { //Поцелуй-машина
    ProductQuantity: 0,
    ProductProgress: 98765,
    get ProductPrice() {
        return Math.round(63456789 * 1.2 ** this.ProductQuantity);
    }
};


var Product11 = { //Завод поцелуев
    ProductQuantity: 0,
    ProductProgress: 999999,
    get ProductPrice() {
        return Math.round(1400999999 * 1.2 ** this.ProductQuantity);
    }
};


var Product12 = { //Дрон целователь
    ProductQuantity: 0,
    ProductProgress: 9999999,
    get ProductPrice() {
        return Math.round(4950000000 * 1.2 ** this.ProductQuantity);
    }
};


var Product13 = { //Компьютерный вирус
    ProductQuantity: 0,
    ProductProgress: 999999999,
    get ProductPrice() {
        return Math.round(22000000000 * 1.2 ** this.ProductQuantity);
    }
};
