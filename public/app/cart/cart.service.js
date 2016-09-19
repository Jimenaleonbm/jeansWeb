(function (app) {

    app.factory("cartService", ["$firebaseObject","$firebaseArray",function ($firebaseObject,$firebaseArray) {

        const productsArrayName = "products";

        var ref = firebase.database().ref().child(productsArrayName);
        var refProductsInit = firebase.database().ref().child("productsInit");
        var firebaseArray = $firebaseArray(ref);
        var firebaseArrayProductsInit = $firebaseArray(refProductsInit);

        function saveProduct(product) {
            if (localStorage.getItem(productsArrayName)) {
                products = JSON.parse(localStorage.getItem(productsArrayName));
                var index = products.findIndex(function (enList) {
                    return enList.id === product.id;
                });
                if (index >= 0) {
                    products[index] = product;
                }
                localStorage.setItem(productsArrayName, JSON.stringify(products));
            } else {
                products.push(product);
                localStorage.setItem(productsArrayName, JSON.stringify(products));
            }
        }
        

        function addProduct(product) {
            calculateTotal(product);
            saveProduct(product);
            firebaseArray.$add(product);
        }

        function calculateTotal(product) {
            product.totalQuantity = 0;
            for(var i in product.sizes){
                product.totalQuantity += product.sizes[i].quantity;
            }
            product.totalPrice = product.totalQuantity * product.price;
        }

        function removeProduct(product) {
            if (localStorage.getItem(productsArrayName)) {
                products = JSON.parse(localStorage.getItem(productsArrayName));
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

        function getProductsPurchase() {
            var products = JSON.parse(localStorage.getItem(productsArrayName));
            var productsPurchase = [];
            for(var i in products){
                if(products[i].inCart){
                    productsPurchase.push(products[i]);
                }
            }
            return productsPurchase;
        }

        function deletePurchase() {
            localStorage.clear();
        }
        
        function getProducts(getdata) {
            var products =[];
            if(localStorage.getItem(productsArrayName)){
                products = JSON.parse(localStorage.getItem(productsArrayName));
                getdata(products);
            }else {
                firebaseArrayProductsInit.$loaded().then(function (data) {
                    products = data;
                    localStorage.setItem(productsArrayName,JSON.stringify(products));
                    getdata(data);
                }).catch(function (error) {
                   console.error(error);
                });
            }
        }

        return {
            addProduct: addProduct,
            getProductsPurchase: getProductsPurchase,
            deletePurchase:deletePurchase,
            removeProduct:removeProduct,
            getProducts:getProducts
        };

    }])

}(angular.module("app")));
