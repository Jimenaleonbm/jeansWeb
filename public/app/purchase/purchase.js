(function (app) {
    
    app.component("purchaseComponent",{
        templateUrl:"app/purchase/purchase.html",
        bindings:{
          $router:'<'
        },
        controllerAs:"vm",
        controller:["cartService","$rootScope",function (cartService,$rootScope) {
            var vm = this;

            vm.addProduct = function (product) {
                product.quantity = 1;
                cartService.addProduct(product);
                $rootScope.$broadcast("addProduct");
                vm.productsPurchase = cartService.getProductsPurchase();
            };

            vm.removeProduct = function (product) {
                cartService.removeProduct(product);
                $rootScope.$broadcast("removeProduct");
                vm.productsPurchase = cartService.getProductsPurchase();
            }
            
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
