//List Controller
function carListCtrl($scope, $http) {
	$http.get("api/cars.json").success(function(data) {
		$scope.cars = data;
	});
	$scope.orderProp = "name";
}

//Car Controller
function carViewCtrl($scope, $http, $routeParams) {
	$http.get("api/cars.json").success(function(data) {
		var i = parseInt($routeParams.carId)-1;
		$scope.car= data[i];
		if($routeParams.carName) {
			console.log("Car's Name: " + $routeParams.carName);
		}
	});

	$scope.getCar = function(carInfo) {
		console.log("Car Info: " + carInfo);
	};

}
