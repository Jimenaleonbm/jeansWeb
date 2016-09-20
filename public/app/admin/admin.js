(function (app) {
    
    app.component("adminComponent",{
        templateUrl:"app/admin/admin.html",
        controllerAs:"vm",
        controller:["$firebaseAuth",function ($firebaseAuth) {
            var vm = this;

            var auth = $firebaseAuth();
            
            vm.login = function () {

                auth.$signInWithPopup("google").then(function (data) {
                   console.log(data);
                });
            }
        }]
    })
    
}(angular.module("app")));
