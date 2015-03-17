var myApp = angular.module('myApp', []);

myApp.controller('moviesController', ['$scope', function($scope) {

        $scope.Movies = [	
        					{title: "Redirected", year: "2014", description: "corruptos y cerveza barata", genero: "Comedia, Suspenso"}, 
               				{title: "Redirect", year: "2015", description: "las diferencias culturales", genero: "Comedia"}
                          ];

$scope.Save=function(){
	$scope.Movies.push({title:$scope.newMovie.title, year:$scope.newMovie.year, description:$scope.newMovie.description, genero:$scope.newMovie.genero})

$scope.formVisibility=false;
console.log($scope.formVisibility)
}


$scope.formVisibility = false;

$scope.ShowForm=function(){
	$scope.formVisibility=true;
	console.log($scope.formVisibility)
}

    }]);

