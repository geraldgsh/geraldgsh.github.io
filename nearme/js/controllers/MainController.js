app.controller('MainController', ['$scope', 'places', function ($scope, places) {
	$scope.mapCenter = {
	  lat: 1.290270,
	  lng: 103.851959,
	  zoom: 16
	};
	places.success(function (data) {
		$scope.geodata = data;
		$scope.mapMarkers = geodataToMarkers($scope.geodata);
	});
}]);