(function (app) {

    app.component("productComponent",{
        templateUrl:"app/product/product.html",
        controllerAs:"vm",
        controller:["cartService","$rootScope","$scope",function (cartService,$rootScope,$scope) {

            var vm = this;
            
            vm.addProduct = function (product) {
                product.inCart = true;
                cartService.addProduct(product);
                $rootScope.$broadcast("addProduct");
            };

            vm.$onInit = function () {
                cartService.getProducts(function (data) {
                    vm.products = data;
                });
            };
        }]
    })

}(angular.module("app")));
