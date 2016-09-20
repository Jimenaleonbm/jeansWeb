(function (app) {
    
    app.factory("auth",["$firebaseAuth",function ($firebaseAuth) {
        return $firebaseAuth();
    }]);
    
}(angular.module("app")));
