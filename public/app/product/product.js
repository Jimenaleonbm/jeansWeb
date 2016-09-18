(function (app) {

    app.component("productComponent",{
        templateUrl:"app/product/product.html",
        controllerAs:"vm",
        controller:["cartService","$rootScope",function (cartService,$rootScope) {

            var vm = this;

            vm.productPopover ={
              templateUrl:"productoTemplate.html"
            };
            vm.addProduct = function (product) {
                cartService.addProduct(product);
                $rootScope.$broadcast("addProduct");
            };


            vm.datos = [

                {
                    id:1,
                    name: "producto 1",
                    price: 30000,
                    image: "app/content/images/producto1.jpg",
                    descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
                    tallas: "S , M, L",
                    quantity:1
                },
                {
                    id:2,
                    name: "producto 2",
                    price: 30000,
                    image: "app/content/images/producto2.jpg",
                    descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
                    tallas: "S , M, L",
                    quantity:1
                },
                {
                    id:3,
                    name: "producto 3",
                    price: 30000,
                    image: "app/content/images/producto3.jpg",
                    descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
                    tallas: "S , M, L",
                    quantity:1
                },
                {
                    id:4,
                    name: "producto 4",
                    price: 30000,
                    image: "app/content/images/producto4.jpg",
                    descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
                    tallas: "S , M, L",
                    quantity:1
                },
                {
                    id:5,
                    name: "producto 5",
                    price: 30000,
                    image: "app/content/images/producto5.jpg",
                    descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
                    tallas: "S , M, L",
                    quantity:1
                },
                {
                    id:6,
                    name: "producto 6",
                    price: 30000,
                    image: "app/content/images/producto6.jpg",
                    descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
                    tallas: "S , M, L",
                    quantity:1
                }
            ]
        }]
    })

}(angular.module("app")))
