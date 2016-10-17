(function (app) {

    app.component("checkoutComponent", {
        templateUrl: "app/checkout/checkout.html",
        controllerAs: "vm",
        controller: ["cartService", "$scope", "$http", "$q", function (cartService, $scope, $http, $q) {

            var vm = this;
            vm.arreglo = [];
            vm.miarreglodiv = [];
            vm.products = cartService.getProductsPurchase();

            vm.sendEmail = function (user) {
                user.message_html = "";
                for (var i in vm.products) {
                    user.message_html += "Nombre " + vm.products[i].name + " Precio " + vm.products[i].price + " <br>";
                }
                emailjs.send("default_service", "template_43W8FQXP", user)
                    .then(function (response) {
                        console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                    }, function (err) {
                        console.log("FAILED. error=", err);
                    });
            };

            function asyncGreet(name) {
                return $q(function (resolve, reject) {
                    setTimeout(function () {
                        if (name === "Esteban") {
                            resolve("Hello " + name);
                        } else {
                            reject("Fail " + name + "No ")
                        }
                    }, 2000);
                });
            }

            var text = "The search() method enables you to search a string for a particular piece of text. If the text is "
                + "found, the character position at which it was found is returned; otherwise, ‐1 is returned. The "
                + "method takes only one parameter, namely the text you want to search for.";
            console.log("search",text.search("method"));
            var myRegExp = /\b'|'\b/;
            console.log(myRegExp);

            var names = "Paul, Paula, Pauline, paul, Paul";
            myRegExp= /Paul/;
            names = names.replace(myRegExp,"Esteban");
            console.log(names);

            names = "Paul, Paula, Pauline, paul, Paul";
            myRegExp = /Paul/gi;

            names = names.replace(myRegExp,"Esteban");
            console.log(names);

            var number = "1-800-888-5474";
            myRegExp = /\d-\d\d\d-\d\d\d-\d\d\d\d/;
            console.log("Valid number",myRegExp.test(number));
            number = "23423534546456";
            console.log("Valid number",myRegExp.test(number));

            number = "1-800-888-5474";
            myRegExp = /\d-\d{3}-\d{3}-\d{4}/;
            console.log("Valid number",myRegExp.test(number));

            text = "fsdfggs.-.*`-´#@|¢∞¬";
            myRegExp = /[^a-z\d]/i;
            console.log("Invalid ",myRegExp.test(text));
            text = "qwertyuiopas11Adfghjklzxcvbnm";
            console.log("Invalid ",myRegExp.test(text));

            myRegExp = /[^ ]/;
            text = "     ";
            console.log("Invalid ",myRegExp.test(text));
            text = "asdf";
            console.log("Invalid ",myRegExp.test(text));

            names = "Paul, Paula, Pauline, paul, Paul";
            myRegExp = /Paula?/gi;
            names = names.replace(myRegExp,"Esteban");
            console.log(names);

            var myString = "Hello world!, let´s look at boundaries said 007.";
            myRegExp = /\b/g;
            myString = myString.replace(myRegExp,"|");
            console.log(myString);
            myRegExp = /\B/g;
            myString = "Hello world!, let´s look at boundaries said 007.";
            myString = myString.replace(myRegExp,"|");
            console.log(myString);

            names = "Paul, Paula, Pauline, paul, Paul";
            myRegExp = /Paul\W/gi;
            names = names.replace(myRegExp,"Esteban");
            console.log(names);

            names = "Paul, Paula, Pauline, paul, Paul";
            myRegExp = /Paul\b/gi;
            names = names.replace(myRegExp,"Esteban");
            console.log(names);

            names = "Paul, Paula, Pauline, paul, Paul, JeanPaul";
            names = names.replace(myRegExp,"Esteban");
            console.log(names);


            names = "Paul, Paula, Pauline, paul, Paul, JeanPaul";
            myRegExp = /\bPaul\b/gi;
            names = names.replace(myRegExp,"Esteban");
            console.log(names);

            var promise = asyncGreet("Esteban");
            promise.then(function (data) {
                //console.log(data);
            }, function (error) {
               // console.log(error);
            });

            var promise = asyncGreet("EstebanLopez");
            promise.then(function (data) {
               // console.log(data);
            }, function (error) {
               // console.log(error);
            });

        }]
    })

}(angular.module("app")));