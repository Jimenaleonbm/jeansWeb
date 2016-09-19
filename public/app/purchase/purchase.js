(function (app) {
    
    app.component("purchaseComponent",{
        templateUrl:"app/purchase/purchase.html",
        bindings:{
          $router:'<'
        },
        controllerAs:"vm",
        controller:["cartService","$rootScope",function (cartService,$rootScope) {
            var vm = this;

            vm.addQuantitySize = function (product,size) {
                for(var i in product.sizes) {
                    if (product.sizes[i].size === size.size) {
                        product.sizes[i].quantity++;
                    }
                }
                cartService.addProduct(product);
                $rootScope.$broadcast("addProduct");
                vm.productsPurchase = cartService.getProductsPurchase();
            };

            vm.removeQuantitySize = function (product,size) {
                if(size.quantity !== 0){
                    for(var i in product.sizes){
                        if(product.sizes[i].size == size.size){
                            product.sizes[i].quantity--;
                        }
                    }
                    cartService.addProduct(product);
                    $rootScope.$broadcast("removeProduct");
                    vm.productsPurchase = cartService.getProductsPurchase();
                }
            };
            
            vm.productsPurchase = cartService.getProductsPurchase();
            vm.deletePurchase = function () {
                vm.productsPurchase = [];
                cartService.deletePurchase();
                $rootScope.$broadcast("deletePurchase");
                vm.$router.navigate(["Home"]);
            }
            
        }]
    })
    
}(angular.module("app")))
