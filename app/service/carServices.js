
angular.module("carApp").service("voteSer", ["$q", "$http", function($q, $http) {
	this.getCarNames = function() {
		return $http.get("api/cars.json").then(function(resp) {
			if(typeof resp.data === "object") {
				var carNames = [];
				angular.forEach(resp.data, function(v, k) {
					carNames.push(v.name.toLowerCase());
				});
				return carNames;
			}else {

				return $q.reject(resp.data);
			}
		}, function(resp) {
			return $q.reject(resp.status);
		});
	};
}]);
