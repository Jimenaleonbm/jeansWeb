(function (app) {

    app.component("checkoutComponent",{
        templateUrl:"app/checkout/checkout.html",
        controllerAs:"vm",
        controller:["cartService","$scope","$http",function (cartService,$scope,$http) {
            
            var vm = this;
            vm.products = cartService.getProductsPurchase();

            vm.sendEmail = function () {
         
            }
        }]
    })

}(angular.module("app")));