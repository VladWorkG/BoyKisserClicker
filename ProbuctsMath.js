var Product1QuantitySum = document.getElementById("Product1QuantitySum");
var Product1PriceSumm = document.getElementById("Product1PriceSumm");

        const UpButt1 = document.getElementById('UpButt1');
        UpButt1.addEventListener('click', function () {
        if (TotalKiss >= Product1.ProductPrice) {
            TotalKiss = TotalKiss - Product1.ProductPrice;
            KissPerClick = KissPerClick + Product1.ProductProgress;
            Product1.ProductQuantity = Product1.ProductQuantity + 1;
        } else {

        }
        SUM.textContent = TotalKiss;
        Product1QuantitySum.textContent = Product1.ProductQuantity;
        Product1PriceSumm.textContent = Product1.ProductPrice;
        });

var Product2QuantitySum = document.getElementById("Product2QuantitySum");
var Product2PriceSumm = document.getElementById("Product2PriceSumm");

        const UpButt2 = document.getElementById('UpButt2');
        UpButt2.addEventListener('click', function () {
        if (TotalKiss >= Product2.ProductPrice) {
            TotalKiss = TotalKiss - Product2.ProductPrice;
            KissPerSecond = KissPerSecond + Product2.ProductProgress;
            Product2.ProductQuantity = Product2.ProductQuantity + 1;
        } else {

        }
        SUM.textContent = TotalKiss;
        KissPerSecondStats.textContent = Math.round(KissPerSecond * 10) / 10;
        Product2QuantitySum.textContent = Product2.ProductQuantity;
        Product2PriceSumm.textContent = Product2.ProductPrice;
        });

        var Product3QuantitySum = document.getElementById("Product3QuantitySum");
        var Product3PriceSumm = document.getElementById("Product3PriceSumm");
        
        const UpButt3 = document.getElementById('UpButt3');
        UpButt3.addEventListener('click', function () {
            if (TotalKiss >= Product3.ProductPrice) {
                TotalKiss = TotalKiss - Product3.ProductPrice;
                KissPerSecond = KissPerSecond + Product3.ProductProgress;
                Product3.ProductQuantity = Product3.ProductQuantity + 1;
            } else {
                // Не хватает поцелуев
            }
            SUM.textContent = TotalKiss;
            KissPerSecondStats.textContent = Math.round(KissPerSecond * 10) / 10;
            Product3QuantitySum.textContent = Product3.ProductQuantity;
            Product3PriceSumm.textContent = Product3.ProductPrice;
        });
        
        var Product4QuantitySum = document.getElementById("Product4QuantitySum");
        var Product4PriceSumm = document.getElementById("Product4PriceSumm");
        
        const UpButt4 = document.getElementById('UpButt4');
        UpButt4.addEventListener('click', function () {
            if (TotalKiss >= Product4.ProductPrice) {
                TotalKiss = TotalKiss - Product4.ProductPrice;
                KissPerSecond = KissPerSecond + Product4.ProductProgress;
                Product4.ProductQuantity = Product4.ProductQuantity + 1;
            } else {
                // Не хватает поцелуев
            }
            SUM.textContent = TotalKiss;
            KissPerSecondStats.textContent = Math.round(KissPerSecond * 10) / 10;
            Product4QuantitySum.textContent = Product4.ProductQuantity;
            Product4PriceSumm.textContent = Product4.ProductPrice;
        });
        
        var Product5QuantitySum = document.getElementById("Product5QuantitySum");
        var Product5PriceSumm = document.getElementById("Product5PriceSumm");
        
        const UpButt5 = document.getElementById('UpButt5');
        UpButt5.addEventListener('click', function () {
            if (TotalKiss >= Product5.ProductPrice) {
                TotalKiss = TotalKiss - Product5.ProductPrice;
                KissPerSecond = KissPerSecond + Product5.ProductProgress;
                Product5.ProductQuantity = Product5.ProductQuantity + 1;
            } else {
                // Не хватает поцелуев
            }
            SUM.textContent = TotalKiss;
            KissPerSecondStats.textContent = Math.round(KissPerSecond * 10) / 10;
            Product5QuantitySum.textContent = Product5.ProductQuantity;
            Product5PriceSumm.textContent = Product5.ProductPrice;
        });
        
        // Продолжайте аналогично для следующих продуктов...
        
        var Product6QuantitySum = document.getElementById("Product6QuantitySum");
        var Product6PriceSumm = document.getElementById("Product6PriceSumm");
        
        const UpButt6 = document.getElementById('UpButt6');
        UpButt6.addEventListener('click', function () {
            if (TotalKiss >= Product6.ProductPrice) {
                TotalKiss = TotalKiss - Product6.ProductPrice;
                KissPerSecond = KissPerSecond + Product6.ProductProgress;
                Product6.ProductQuantity = Product6.ProductQuantity + 1;
            } else {
                // Не хватает поцелуев
            }
            SUM.textContent = TotalKiss;
            KissPerSecondStats.textContent = Math.round(KissPerSecond * 10) / 10;
            Product6QuantitySum.textContent = Product6.ProductQuantity;
            Product6PriceSumm.textContent = Product6.ProductPrice;
        });
        
        var Product7QuantitySum = document.getElementById("Product7QuantitySum");
        var Product7PriceSumm = document.getElementById("Product7PriceSumm");
        
        const UpButt7 = document.getElementById('UpButt7');
        UpButt7.addEventListener('click', function () {
            if (TotalKiss >= Product7.ProductPrice) {
                TotalKiss = TotalKiss - Product7.ProductPrice;
                KissPerSecond = KissPerSecond + Product7.ProductProgress;
                Product7.ProductQuantity = Product7.ProductQuantity + 1;
            } else {
                // Не хватает поцелуев
            }
            SUM.textContent = TotalKiss;
            KissPerSecondStats.textContent = Math.round(KissPerSecond * 10) / 10;
            Product7QuantitySum.textContent = Product7.ProductQuantity;
            Product7PriceSumm.textContent = Product7.ProductPrice;
        });
        
        var Product8QuantitySum = document.getElementById("Product8QuantitySum");
        var Product8PriceSumm = document.getElementById("Product8PriceSumm");
        
        const UpButt8 = document.getElementById('UpButt8');
        UpButt8.addEventListener('click', function () {
            if (TotalKiss >= Product8.ProductPrice) {
                TotalKiss = TotalKiss - Product8.ProductPrice;
                KissPerSecond = KissPerSecond + Product8.ProductProgress;
                Product8.ProductQuantity = Product8.ProductQuantity + 1;
            } else {
                // Не хватает поцелуев
            }
            SUM.textContent = TotalKiss;
            KissPerSecondStats.textContent = Math.round(KissPerSecond * 10) / 10;
            Product8QuantitySum.textContent = Product8.ProductQuantity;
            Product8PriceSumm.textContent = Product8.ProductPrice;
        });
        
        var Product9QuantitySum = document.getElementById("Product9QuantitySum");
        var Product9PriceSumm = document.getElementById("Product9PriceSumm");
        
        const UpButt9 = document.getElementById('UpButt9');
        UpButt9.addEventListener('click', function () {
            if (TotalKiss >= Product9.ProductPrice) {
                TotalKiss = TotalKiss - Product9.ProductPrice;
                KissPerSecond = KissPerSecond + Product9.ProductProgress;
                Product9.ProductQuantity = Product9.ProductQuantity + 1;
            } else {
                // Не хватает поцелуев
            }
            SUM.textContent = TotalKiss;
            KissPerSecondStats.textContent = Math.round(KissPerSecond * 10) / 10;
            Product9QuantitySum.textContent = Product9.ProductQuantity;
            Product9PriceSumm.textContent = Product9.ProductPrice;
        });
        
        var Product10QuantitySum = document.getElementById("Product10QuantitySum");
        var Product10PriceSumm = document.getElementById("Product10PriceSumm");
        
        const UpButt10 = document.getElementById('UpButt10');
        UpButt10.addEventListener('click', function () {
            if (TotalKiss >= Product10.ProductPrice) {
                TotalKiss = TotalKiss - Product10.ProductPrice;
                KissPerSecond = KissPerSecond + Product10.ProductProgress;
                Product10.ProductQuantity = Product10.ProductQuantity + 1;
            } else {
                // Не хватает поцелуев
            }
            SUM.textContent = TotalKiss;
            KissPerSecondStats.textContent = Math.round(KissPerSecond * 10) / 10;
            Product10QuantitySum.textContent = Product10.ProductQuantity;
            Product10PriceSumm.textContent = Product10.ProductPrice;
        });
        
        var Product11QuantitySum = document.getElementById("Product11QuantitySum");
        var Product11PriceSumm = document.getElementById("Product11PriceSumm");
        
        const UpButt11 = document.getElementById('UpButt11');
        UpButt11.addEventListener('click', function () {
            if (TotalKiss >= Product11.ProductPrice) {
                TotalKiss = TotalKiss - Product11.ProductPrice;
                KissPerSecond = KissPerSecond + Product11.ProductProgress;
                Product11.ProductQuantity = Product11.ProductQuantity + 1;
            } else {
                // Не хватает поцелуев
            }
            SUM.textContent = TotalKiss;
            KissPerSecondStats.textContent = Math.round(KissPerSecond * 10) / 10;
            Product11QuantitySum.textContent = Product11.ProductQuantity;
            Product11PriceSumm.textContent = Product11.ProductPrice;
        });
        
        var Product12QuantitySum = document.getElementById("Product12QuantitySum");
        var Product12PriceSumm = document.getElementById("Product12PriceSumm");
        
        const UpButt12 = document.getElementById('UpButt12');
        UpButt12.addEventListener('click', function () {
            if (TotalKiss >= Product12.ProductPrice) {
                TotalKiss = TotalKiss - Product12.ProductPrice;
                KissPerSecond = KissPerSecond + Product12.ProductProgress;
                Product12.ProductQuantity = Product12.ProductQuantity + 1;
            } else {
                // Не хватает поцелуев
            }
            SUM.textContent = TotalKiss;
            KissPerSecondStats.textContent = Math.round(KissPerSecond * 10) / 10;
            Product12QuantitySum.textContent = Product12.ProductQuantity;
            Product12PriceSumm.textContent = Product12.ProductPrice;
        });