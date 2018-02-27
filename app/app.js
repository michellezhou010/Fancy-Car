
angular.module("carApp", ["ngRoute"]);

//Route Config
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
