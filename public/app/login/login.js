(function (app) {

    app.component("loginComponent",{
        templateUrl:"app/login/login.html",
        controllerAs:"vm",
        $canActivate:["auth",function (auth) {
          debugger
           return  auth.$requireSignIn();
        }
        ],
        controller:["auth",function (auth) {
            var vm = this;
            vm.$routerCanActivate = function () {
              return false;
            };

            vm.signIn = function () {
                auth.$signInWithPopup("google").then(function (data) {
                    console.log(data);
                });
            };
            
            vm.signOut = function () {
              auth.$signOut();  
            };
        }]
    })

}(angular.module("app")));

