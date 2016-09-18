(function (app) {

    angular.module("app")
        .component("homeComponent",{
        templateUrl:"app/home/home.html",
        controllerAs:"vm",
        controller:["cartService","$rootScope",function (cartService,$rootScope) {

            var vm = this;
            
        }],
    })

}(angular.module("app")))
