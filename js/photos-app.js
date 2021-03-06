angular.module('ngApp')

.controller('PhotosCtrl', ['$scope', '$ionicModal', '$ionicSlideBoxDelegate', function($scope, $ionicModal, $ionicSlideBoxDelegate) {

    $ionicModal.fromTemplateUrl('image-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function(index) {
        $scope.modal.show();
        // Important: This line is needed to update the current ion-slide's width
        // Try commenting this line, click the button and see what happens
        // https://github.com/driftyco/ionic/issues/1865
        $ionicSlideBoxDelegate.update();
        $ionicSlideBoxDelegate.select(index);
    };

    $scope.closeModal = function() {
        $scope.modal.hide();
    };

    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hide', function() {
        // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
        // Execute action
    });
    $scope.$on('modal.shown', function() {
        console.log('Modal is shown!');
    });

    // Call this functions if you need to manually control the slides
    $scope.next = function() {
        $ionicSlideBoxDelegate.next();
    };

    $scope.previous = function() {
        $ionicSlideBoxDelegate.previous();
    };

    // Called each time the slide changes
    $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
    };
}]);