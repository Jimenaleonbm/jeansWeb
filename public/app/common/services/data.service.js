(function (app) {

    app.factory("dataService",["$http",function ($http) {

        function findByName(name) {
            return $http.get("app/common/services/data.json").then(function (data) {
                return data;
            });
        }
        return {
            findByName:findByName
        }
    }])

}(angular.module("app")));
