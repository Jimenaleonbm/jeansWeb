(function() {
	var app = angular.module('app', ['ui.router']);

	app.config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise("/home");

		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'views/home.html'
		})
		.state('productos', {
			url: '/productos',
			templateUrl: 'views/productos.html'
		})
		.state('nosotros', {
			url: '/nosotros',
			templateUrl: 'views/nosotros.html'
		})
		.state('contacto', {
			url: '/contacto',
			templateUrl: 'views/contacto.html'
		});
	});
})();