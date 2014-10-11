angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.data = {};
  $scope.getLinks = function() {
    Links.links().then(function(data) {
      $scope.data.links = data.data;
    });
  };
  $scope.getLinks();
});
