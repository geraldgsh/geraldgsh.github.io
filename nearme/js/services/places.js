app.factory('places', ['$http', function ($http) {
	return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=9000&gscoord=1.290270%7C103.851959&gslimit=90&format=json&callback=JSON_CALLBACK').success(function (data) {
		return data;
	}).error(function (err) {
		return err;
	});
}]);