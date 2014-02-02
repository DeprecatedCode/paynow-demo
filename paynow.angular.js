var angular = window.angular;
var paynow = angular.module('paynow', []);

paynow.controller('PayNowDemoCtrl', function ($scope, $timeout) {
    var reset = function () {
        $scope.ui = {};
    
        $timeout(function () {
            $scope.ui.app = true;
        }, 1500);
    };
    
    reset();
});
