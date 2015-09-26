var app = angular.module('myApp', []);

var gitCtrl = function($scope, $http) {
  $scope.title = "Git API";
  $scope.name = "eddington-chad";
  console.log($scope.name);

  var userRecieved = function(response) {
    $scope.user = response.data
    console.log($scope.user);
  }

  var onError = function(reason) {
    $scope.error = "Could not find the user";
  }


  $http.get("https://api.github.com/users/" + $scope.name)
       .then(userRecieved, onError);
}

// The array is not needed unless you use a minifier
// This lets the minifier shrink the variable names
// so the controller stil knows whta they are
app.controller('gitCtrl',["$scope", "$http", gitCtrl]);
