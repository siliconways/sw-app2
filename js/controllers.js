
angular.module('ngApp.controllers', [])

.controller('MainCtrl', function($scope, $rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
	$scope.$state = $state.current;
    $scope.params = $stateParams;
	$scope.bodyClass = '';
})

.controller('cAboutUsCtrl', function($scope, $rootScope, $state, $stateParams) { var scope = angular.element('body').scope(); scope.bodyClass = 'cAboutUs'; }).controller('cCallUsCtrl', function($scope, $rootScope, $state, $stateParams) { var scope = angular.element('body').scope(); scope.bodyClass = 'cCallUs'; }).controller('cContentCtrl', function($scope, $rootScope, $state, $stateParams) { var scope = angular.element('body').scope(); scope.bodyClass = 'cContent'; }).controller('cFormsCtrl', function($scope, $rootScope, $state, $stateParams) { var scope = angular.element('body').scope(); scope.bodyClass = 'cForms'; }).controller('cPhotosCtrl', function($scope, $rootScope, $state, $stateParams) { var scope = angular.element('body').scope(); scope.bodyClass = 'cPhotos'; }).controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
	$scope.showMenu = function () {
		$ionicSideMenuDelegate.toggleLeft();
	  };
	  $scope.showRightMenu = function () {
		$ionicSideMenuDelegate.toggleRight();
	  };
});

