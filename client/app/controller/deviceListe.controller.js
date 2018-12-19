angular.module("app").controller("deviceListeCtrl",["$scope","DeviceService", function($scope,DeviceService){
	$scope.listeDevices = DeviceService.query();
}]);