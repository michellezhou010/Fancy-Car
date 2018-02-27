# Fancy-Car
Fancy Car HomePage using Angular
## Modules

Fancy is the Homepage of XXX Car's shop. The modules are as follows:

api: store the cars infomation and bakcend controller can call from it.

//Route Configuration as below
angular.module("carApp").config(["$routeProvider", function($routeProvider) {
	$routeProvider.when("/car/list", {
		templateUrl: "views/list.html",
		controller: carListCtrl
	}).when("/car/view/:carId", {
		templateUrl: "views/view.html",
		controller: carViewCtrl
	}).when("/car/view/:carId/:carName", {
		templateUrl: "views/view.html",
		controller: carViewCtrl
	}).otherwise({
		redirectTo: "/car/list"
	});
}]);


## Running the Tests

under your project, use npm-http-server to run the server to test my homepage

npm install -g http-server

then run the commend line below to run the local server

http-server -o

I test the website on chrome and firefox, it works well on different devices and browser
