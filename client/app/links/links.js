angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function() {
    Links.links().then(function(data) {
      console.log('DATAHERE: ', data);
      $scope.data.links = data.data;
    }); // ??
  };
  $scope.getLinks();
});
