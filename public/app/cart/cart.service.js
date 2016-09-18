(function (app) {

    app.factory("cartService", [function () {

        var total = 0;
        var products = [];

        function saveProduct(product) {
            if (localStorage.getItem("products")) {
                products = JSON.parse(localStorage.getItem("products"));
                var index = products.findIndex(function (enList) {
                    return enList.id === product.id;
                });
                if (index < 0) {
                    products.push(product);
                } else {
                    products[index].quantity += product.quantity;
                }
                localStorage.setItem("products", JSON.stringify(products));
            } else {
                products.push(product);
                localStorage.setItem("products", JSON.stringify(products));
            }
        }

        function saveTotal(product) {
            if (localStorage.getItem("total")) {
                total = parseInt(localStorage.getItem("total"));
                total += (product.price * product.quantity);
                localStorage.setItem("total", total);
            } else {
                total += (product.price * product.quantity);
                localStorage.setItem("total", total);
            }
        }

        function addProduct(product) {
            saveTotal(product);
            saveProduct(product);
            console.info(total);
        }

        function removeProduct(product) {
            if (localStorage.getItem("products")) {
                products = JSON.parse(localStorage.getItem("products"));
                var index = products.findIndex(function (enList) {
                    return enList.id === product.id;
                });
                if (index >= 0) {
                    if(products[index].quantity > 0){
                        products[index].quantity--;
                        localStorage.setItem("products", JSON.stringify(products));
                        total = parseInt(localStorage.getItem("total"));
                        total -= product.price;
                        localStorage.setItem("total",total);
                    }
                    }
                   
            }
        }

        function getTotal() {
            return parseInt(localStorage.getItem("total"));
        }

        function getProductsPurchase() {
            return JSON.parse(localStorage.getItem("products"));
        }

        function deletePurchase() {
            localStorage.clear();
            total = 0;
        }

        return {
            addProduct: addProduct,
            getTotal: getTotal,
            getProductsPurchase: getProductsPurchase,
            deletePurchase:deletePurchase,
            removeProduct:removeProduct
        }
    }])

}(angular.module("app")));
