function PostListCtrl($scope, $http, $templateCache) {
	$scope.recentPosts = function() {
		$http({
			method: 'GET',
			url: 'http://personalwordpress.ap01.aws.af.cm/?json=1',
			cache: $templateCache
		}).success(function(data, status, header, config){
			/* Set View Model */
			$scope.posts = data.posts; 
			console.log(data.posts);
			/* Set to List View */
			$scope.view = './partials/recent-contents.html';
		}).error(function(data, status, header, config){
			$scope.posts = data || "Request Failed";
			$scope.status = status;
			$scope.view = './partials/recent-contents.html';
		});
	}

	/* Set Default View */
	$scope.view = './partials/recent-contents.html';
	$scope.recentPosts();
}

PostListCtrl.$inject = [ '$scope', '$http', '$templateCache' ];

