angular.module('app', [])
.controller('BooksController', function($scope, $http) {
	$scope.books;
  var initialize = function() {
  	$http.get('/books')
  	.then(function(response) {
  		$scope.books = response.data;
  	});
  }();
  $scope.selectBook = undefined;
  $scope.click = function(book) {
  	console.log("it's alive");
  	$scope.selectBook = book;
	};
});