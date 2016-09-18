(function (app) {

    angular.module("app")
        .component("contactComponent",{
            templateUrl:"app/contact/contact.html",
            controllerAs:"vm",
            controller:["cartService","$rootScope",function (cartService,$rootScope) {

                var vm = this;


            }]});

}(angular.module("app")))
