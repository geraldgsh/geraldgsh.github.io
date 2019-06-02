app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions) {
  
  $scope.posts = suggestions.posts;
  
  //if input empty, don't submit
  $scope.addSuggestion = function() {
  	if (!$scope.title || $scope.title === "") {
  	  return;
  	}
  	//push suggestion posts in suggestions.js
  	$scope.posts.push({
  		title: $scope.title,
  		addvotes: 0,
      comments: []
  	});
  	//after submit, clear input
  	$scope.title = '';
  };

  $scope.addVote = function(index) {
  	$scope.posts[index].addvotes += 1; 
  };
}]);