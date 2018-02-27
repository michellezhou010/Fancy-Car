angular.module("carApp").filter("posAvailability", function() {
	return function(val) {
		var pos = "Unknown";
		switch (val) {
			case 1:
				pos = "In Dealership";
				break;
			case 2:
				pos = "Out Of Stock";
				break;
			case 3:
				pos = "Unavailable";
				break;
			default:
				break;
		}
		return pos;
	}
});
