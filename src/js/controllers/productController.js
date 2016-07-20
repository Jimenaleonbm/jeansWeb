angular.module('app')
 	.controller('productController', function ($scope) {

 		var ctrl = this;

 		ctrl.datos = [

			{
				nombre: "producto 1",
				precio: "30.000",
				imagen: "src/images/producto1.jpg",
				descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
				tallas: "S , M, L"
			},
			{
				nombre: "producto 2",
				precio: "30.000",
				imagen: "src/images/producto2.jpg",
				descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
				tallas: "S , M, L"
			},
			{
				nombre: "producto 3",
				precio: "30.000",
				imagen: "src/images/producto3.jpg",
				descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
				tallas: "S , M, L"
			},
			{
				nombre: "producto 4",
				precio: "30.000",
				imagen: "src/images/producto4.jpg",
				descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
				tallas: "S , M, L"
			},
			{
				nombre: "producto 5",
				precio: "30.000",
				imagen: "src/images/producto5.jpg",
				descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
				tallas: "S , M, L"
			},
			{
				nombre: "producto 6",
				precio: "30.000",
				imagen: "src/images/producto6.jpg",
				descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
				tallas: "S , M, L"
			}
		]
});
