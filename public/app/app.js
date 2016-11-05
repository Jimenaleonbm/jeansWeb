(function () {

    var app = angular.module("app", [
        "ngComponentRouter",
        "ngMessages",
        "ngAnimate",
        "ui.bootstrap",
        "firebase"]);

    app.value("$routerRootComponent", "app");

    app.config(function($locationProvider) {
        $locationProvider.html5Mode(true);
    })

    app.run(["$routerRootComponent","$rootScope","$location",function ($routerRootComponent,$rootScope,$location) {

        console.log($routerRootComponent);
        console.log($rootScope);
        console.log($location)

    }]);
    
    app.component("app",{
       templateUrl:"app/app.html",
        controllerAs:"vm",
        controller:[function () {
            
        }],
        $routeConfig:[
            {path:"/home", name:"Home", component:"homeComponent",useAsDefault:true},
            {path:"/purchase", name:"Purchase",component:"purchaseComponent"},
            {path:"/checkout",name:"Checkout",component:"checkoutComponent"},
            {path:"/admin",name:"Admin",component:"adminComponent"},
            {path:"/login",name:"Login",component:"loginComponent"}
        ]
    });
    
}());
