angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function () {
    Links.newLinks($scope.link).then(function(data) {

      $location.path('/links');
    })
    .catch(function(error) {
      console.error(error);
    });
  };
});
