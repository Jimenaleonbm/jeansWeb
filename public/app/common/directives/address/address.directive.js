(function () {
    "use strict";
    var module = angular.module("app");
    module.directive("direccion", [function () {
        return {
            templateUrl: "app/common/directives/address/address.directive.html",
            require: ["^form", "?ngModel"],
            scope: {
                modelo: "=ngModel",
                multiple: "="
            },
            link: function (scope, element, attrs, controllers) {
                var direccionInvalida = "direccionInvalida";
                var direccionRequerida = "direccionRequerida";
                var urbana = "Urbana";
                var rural = "Rural";
                scope.requerido = false;
                scope.direccion = {};
                scope.direccion.TipoDireccion = urbana;
                if (attrs.required) {
                    scope.requerido = true;
                }

                if (scope.multiple) {
                    if (scope.modelo !== undefined) {
                        if (Array.isArray(scope.modelo)) {
                        }
                    } else {
                        scope.modelo = [];
                    }
                } else {
                    scope.modelo = scope.direccion;

                }

                scope.$watch("direccion", function (nuevo, viejo) {
                    if(scope.multiple){
                        validadDireccionRequerida();
                    } else {
                        validarFormatoDireccion(nuevo);
                        validadDireccionRequerida(nuevo);
                    }
                }, true);

                function validarFormatoDireccion(direccion) {
                    if(direccion.TipoDireccion === urbana){
                        if (direccion.TipoVia !== undefined && direccion.NumVia !== undefined && direccion.NumViaGeneradora !== undefined && direccion.NumeroPlaca !== undefined &&
                            direccion.TipoVia !== null && direccion.NumVia !== null && direccion.NumViaGeneradora !== null && direccion.NumeroPlaca !== null &&
                            direccion.TipoVia !== "" && direccion.NumVia !== "" && direccion.NumViaGeneradora !== "" && direccion.NumeroPlaca !== "") {
                            asignarError(direccionInvalida,true);
                        } else {
                            asignarError(direccionInvalida,false);
                        }
                    } else if (direccion.TipoDireccion === rural){
                        if (direccion.SinFormato !== undefined && direccion.SinFormato.trim()) {
                            asignarError(direccionInvalida,true);
                        } else {
                            asignarError(direccionInvalida,false);
                        }
                    }

                }

                function validadDireccionRequerida(direccion) {
                    if (scope.multiple && scope.requerido) {
                        if (scope.modelo.length > 0) {
                            asignarError(direccionRequerida,true);
                        } else {
                            asignarError(direccionRequerida,false);
                        }
                    } else if (scope.requerido){
                        if(direccion.TipoDireccion === urbana){
                            if (direccion.TipoVia !== undefined && direccion.NumVia !== undefined && direccion.NumViaGeneradora !== undefined && direccion.NumeroPlaca !== undefined &&
                                direccion.TipoVia !== null && direccion.NumVia !== null && direccion.NumViaGeneradora !== null && direccion.NumeroPlaca !== null &&
                                direccion.TipoVia !== "" && direccion.NumVia !== "" && direccion.NumViaGeneradora !== "" && direccion.NumeroPlaca !== "") {
                                asignarError(direccionRequerida,true);
                            } else {
                                asignarError(direccionRequerida,false);
                            }
                        } else if (direccion.TipoDireccion === rural){
                            if (direccion.SinFormato !== undefined && direccion.SinFormato.trim()) {
                                asignarError(direccionRequerida,true);
                            } else {
                                asignarError(direccionRequerida,false);
                            }
                        }
                    }
                }

                scope.agregrarDireccion = function (direccion) {
                    var copia = angular.copy(direccion);
                    if (Object.keys(direccion).length > 0) {
                        if (direccion.TipoDireccion === urbana) {
                            if (direccion.TipoVia !== undefined && direccion.NumVia !== undefined && direccion.NumViaGeneradora !== undefined && direccion.NumeroPlaca !== undefined &&
                                direccion.TipoVia !== "" && direccion.NumVia !== "" && direccion.NumViaGeneradora !== "" && direccion.NumeroPlaca !== "") {
                                scope.direccion = {};
                                scope.direccion.TipoDireccion = urbana;
                                scope.modelo.push(copia);
                            }
                            else {
                                console.log("Direccion invalida")
                            }
                        } else if (direccion.TipoDireccion === rural) {
                            if (direccion.SinFormato !== undefined && direccion.SinFormato.trim()) {
                                var index = scope.modelo.findIndex(function (enLista) {
                                    return enLista.SinFormato === direccion.SinFormato;
                                });
                                if (index < 0) {
                                    scope.direccion = {};
                                    scope.direccion.TipoDireccion = urbana;
                                    scope.modelo.push(copia);
                                }
                            }
                        }
                    }
                };

                function asignarError(error, estado) {
                    controllers[1].$setValidity(error, estado);
                }

                scope.editarDireccion = function (direccion) {
                    scope.direccion = angular.copy(direccion);
                    scope.eliminarDireccion(direccion);
                };

                scope.eliminarDireccion = function (dir) {
                    var index = scope.modelo.indexOf(dir);
                    if (index > -1) {
                        scope.modelo.splice(index, 1);
                    }
                    validadDireccionRequerida();
                };

                //Recibe el formulario del padre necesario para hacer validaciones
                scope.formulario = controllers[0];
            }
        }
    }]);

}());
