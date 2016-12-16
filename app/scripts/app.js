'use strict';

/**
 * @ngdoc overview
 * @name imageManagerApp
 * @description
 * # imageManagerApp
 *
 * Main module of the application.
 */
 
/*
angular
  .module('imageManagerApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
*/

var IMApp = angular.module('imageManagerApp', []);

var imageModel = [
	{ "url": "http://rocknycliveandrecorded.com/wp-content/uploads/2016/05/chance-the-rapper-chance-3-new-album-download-free-stream-640x640.jpg",
	"title": "What's up my nigga!!!",
	"description":"Nigger of THUG LIFE. NOOICE!!!"
	},
	{ "url": "http://www.dailygarnish.com/wp-content/uploads/2012/04/IMG_20120414_205845-640x640.jpg",
	"title": "Lazy Dog",
	"description":"Movie Night on the couch with pups."
	}
]

IMApp.controller("IMCtrl", function($scope){
	$scope.image = imageModel;
	
	$scope.popupId = "";
	$scope.popupTitle = ""
	$scope.popupSubmit = ""
	$scope.flag = 1;
	$scope.index = -1;
	
	$scope.addNewImage = function(url, title, description){
		$scope.image.push({"url": url, "title": title, "description": description});
	}
	
	$scope.updateImage = function(url, title, description){
		$scope.image[$scope.index].url = url;
		$scope.image[$scope.index].title = title;
		$scope.image[$scope.index].description = description;
	}
	
	$scope.deleteImage = function(){
		console.log($scope.index);
		$scope.image.splice($scope.index, 1);
	}
	
	$scope.loadPopup = function(flag, index=-1, Url="", Title="", Description=""){
		$scope.index = index;
		if(flag){
			//Add
			$scope.popupId = "addImageModal";
			$scope.popupTitle = "Add Image";
			$scope.popupSubmit = "Add";
			$scope.flag = flag;
			//Clear popup
			$scope.url = Url;
			$scope.title = Title;
			$scope.description = Description;
		}
		else{
			//Update
			$scope.popupId = "updImageModal";
			$scope.popupTitle = "Update Image";
			$scope.popupSubmit = "Update";
			$scope.flag = flag;
			//Fill Popup
			$scope.url = Url;
			$scope.title = Title;
			$scope.description = Description;
		}
	}
	
	$scope.check = function(url, title, description){
		if($scope.flag) $scope.addNewImage(url, title, description);
		else $scope.updateImage(url, title, description);
	}
	
	$scope.hideCheck = function(){
		return $scope.flag;
	}
});


