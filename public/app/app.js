(function () {

    var app = angular.module("app", ["ngComponentRouter","ui.bootstrap","firebase"]);

    app.value("$routerRootComponent", "app");

    
    app.component("app",{
       templateUrl:"app/app.html",
        controllerAs:"vm",
        controller:[function () {
            
        }],
        $routeConfig:[
            {path:"/home", name:"Home", component:"homeComponent",useAsDefault:true},
            {path:"/purchase", name:"Purchase",component:"purchaseComponent"},
            {path:"/checkout",name:"Checkout",component:"checkoutComponent"}
        ]
    });
    
}());
