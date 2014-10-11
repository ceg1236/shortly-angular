angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function (newLink) {
    Links.newLinks(newLink).then(function(data) {
      $scope.link.links = data.data;
      $location.path('/links');
    })
  };
  // $scope.addLink({url: 'http://www.google.com'});
});
