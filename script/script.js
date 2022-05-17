var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: '/partials/main.html'
    })
    .when('/edit', {
        templateUrl: '/partials/edit.html'
    })
});

app.controller('myController', function($scope, $location, $routeParams){
    $scope.students = [
        {name: 'Nam', class: 10},
        {name: 'Tan', class: 11},
        {name: 'Vy', class: 12}
    ]
    $scope.edit = function(student){
        $scope.student = student;
    };

    $scope.save = function(student){
        $location.path('/');
    }
});
