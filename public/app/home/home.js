(function (app) {

    angular.module("app")
        .component("homeComponent",{
        templateUrl:"app/home/home.html",
        controllerAs:"vm",
        controller:["cartService","$rootScope", "$timeout",function (cartService,$rootScope, $timeout) {

            var vm = this;


        /**
        * Init Swiper
        */
        $timeout(function () {
            var mySwiper = new Swiper ('.swiper-container', {
                // Optional parameters
                direction: 'horizontal',
                loop: true,
                // Enable lazy loading
                lazyLoading: true,

                // If we need pagination
                //pagination: '.swiper-pagination',

                // Navigation arrows
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
             
            });

            apply($scope);
        }, 100);  


        }],
    })

}(angular.module("app")))
