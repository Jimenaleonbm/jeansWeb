String.prototype.trim = function () {
    return String(this).replace(/^\s+|\s+$/g, '');
};
(function (app) {

    app.directive("numerico", [function () {
        return {
            require: "ngModel",
            link: function (scope, element, attrs, modelCtrl) {
                modelCtrl.$parsers.push(function (inputValue) {
                    var transformedInput = inputValue.replace(/[^0-9\.]*/g, "");

                    if (transformedInput !== inputValue) {
                        modelCtrl.$setViewValue(transformedInput);
                        modelCtrl.$render();
                    }
                    return transformedInput;
                });
            }
        };
    }]);

    app.directive("arregloRequerido", [function () {
        return {
            require: "ngModel",
            scope: {
                arregloRequerido: "="
            },
            link: function (scope, ele, attrs, model) {
                scope.$watch("arregloRequerido", function (nuevo, viejo) {
                    if (scope.arregloRequerido.length > 0) {
                        model.$setValidity("arregloRequerido", true);
                        console.log("Desde arreglo", true);
                    } else {
                        model.$setValidity("arregloRequerido", false);
                        console.log("Desde arreglo", false);
                    }
                }, true);

            }
        }
    }]);

    app.directive("eliminarElemento", [function () {
        return {
            scope: {
                eliminarElemento: "=",
                arreglo: "="
            },
            link: function (scope, ele, attrs) {
                ele.on("click", function () {
                    if (Array.isArray(scope.arreglo) && scope.eliminarElemento !== undefined) {
                        var index = scope.arreglo.indexOf(scope.eliminarElemento);
                        if (index >= 0) {
                            scope.arreglo.splice(index, 1);
                            scope.$apply();
                        }
                    }
                });
            }
        }
    }]);

    app.directive("agregarElemento", [function () {
        return {
            scope: {
                agregarElemento: "=",
                arreglo: "="
            },
            link: function (scope, ele, attrs) {
                ele.on("click", function () {
                    if (!Array.isArray(scope.arreglo)) scope.arreglo = [];
                    if (scope.agregarElemento !== undefined && scope.agregarElemento.trim()) {
                        var index = scope.arreglo.indexOf(scope.agregarElemento);
                        if(index < 0){
                            scope.arreglo.push(angular.copy(scope.agregarElemento));
                            scope.agregarElemento = undefined;
                            scope.$apply();
                        }
                    }
                });
            }
        }
    }]);

}(angular.module("app")));