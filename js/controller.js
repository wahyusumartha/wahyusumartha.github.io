function PostListCtrl($scope, $http, $templateCache) {
	$scope.recentPosts = function() {

		$http({
			method: 'JSONP',
			url: 'http://personalwordpress.ap01.aws.af.cm/?json=get_recent_posts&callback=JSON_CALLBACK',
			cache: $templateCache
		}).success(function(data, status, header, config){
			/* Set View Model */
			$scope.posts = (data.posts); 

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
	$scope.method = 'JSONP';
	$scope.recentPosts();
}

PostListCtrl.$inject = [ '$scope', '$http', '$templateCache' ];

