(function (app) {

    app.directive("data",["dataService",function (dataService) {
        return {
            scope:{
                ngModel:"=",
                arreglo:"=",
                data:"@"
            },
            link:function (scope,ele) {
                if (!Array.isArray(scope.arreglo)) scope.arreglo = [];
                dataService.findByName("name").then(function (data) {

                    data.data.forEach(function (value) {
                       if(value.Type == scope.data){
                           scope.arreglo.push(value);
                       }
                    });
                   // scope.arreglo = data.data.executeSql();
                })
            }
        }
    }]);

}(angular.module("app")));
