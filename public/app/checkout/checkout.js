(function (app) {

    app.component("checkoutComponent", {
        templateUrl: "app/checkout/checkout.html",
        controllerAs: "vm",
        controller: ["cartService", "$scope", "$http", function (cartService, $scope, $http) {

            var vm = this;
            vm.arreglo = [];
            vm.products = cartService.getProductsPurchase();

            vm.sendEmail = function (user) {
                user.message_html = "";
                for(var i in vm.products){
                    user.message_html += "Nombre " +vm.products[i].name + " Precio "+vm.products[i].price + " <br>";
                }
                emailjs.send("default_service", "template_43W8FQXP",user)
                    .then(function (response) {
                        console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                    }, function (err) {
                        console.log("FAILED. error=", err);
                    });
            };

        }]
    })

}(angular.module("app")));