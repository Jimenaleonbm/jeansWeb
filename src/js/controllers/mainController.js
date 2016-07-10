angular.module('app')
 	.controller('mainCtrl', function ($scope) {

 		var ctrl = this;

 		ctrl.sections = [
 		{
 			id: "home",
 			name: "inicio",
 			templateUrl: "views/home.html"
 		},
 		{
 			id: "productos",
 			name: "productos",
 			templateUrl: "views/productos.html"
 		},
 		{
 			id: "contacto",
 			name: "contacto",
 			templateUrl: "views/contacto.html"
 		},
 		{
 			id: "nosotros",
 			name: "nosotros",
 			templateUrl: "views/nosotros.html"
 		}
 	];

 });