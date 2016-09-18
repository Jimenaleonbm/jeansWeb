(function (app) {

    angular.module("app")
        .component("aboutComponent",{
            templateUrl:"app/about/about.html",
            controllerAs:"vm",
            controller:["cartService","$rootScope",function (cartService,$rootScope) {

                var vm = this;

              
        }]});

}(angular.module("app")))
