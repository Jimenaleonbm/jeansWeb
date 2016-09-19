(function (app) {
    
    app.component("cartComponent",{
        templateUrl:"app/cart/cart.html",
        controllerAs:"vm",
        controller:["cartService","$scope",function (cartService,$scope) {
            var vm = this;

            vm.products = cartService.getProductsPurchase();

            $scope.$on("addProduct",function () {
                vm.products = cartService.getProductsPurchase();
            });
            
            $scope.$on("deletePurchase",function () {
                vm.products = cartService.getProductsPurchase();
            });
            
            $scope.$on("removeProduct",function () {
                vm.products = cartService.getProductsPurchase();
            });
            
            vm.totalPurchase = function (products) {
                var total = 0;
                for(var i in products){
                    total += products[i].totalPrice;
                }
                return total;
            };
        }]
    });
    
    
}(angular.module("app")));
