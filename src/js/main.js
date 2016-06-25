//Configurar Enrutamiento
var configApp = function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "views/home.html",
		controller: "indexController"
	})
	.when("/productos",{
		templateUrl: "views/productos.html",
		controller: "productsController"
	})
	.when("/nosotros",{
		templateUrl: "views/nosotros.html",
		controller: "aboutController"
	})
	.when("/contacto",{
		templateUrl: "views/contacto.html",
		controller: "contactController"
	})
}

var app = angular.module("app", ["ngRoute", "ngResource"]);
	app.directive("mainMenu", function(){
		return{
			restrict: "E",
			templateUrl: "views/main-menu.html"
			};
	});