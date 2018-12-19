
angular.module('app').controller('homeCtrl', ['$scope', '$http',
    function($scope, $http) {

      
        
        $scope.myLed = function() {
            
            console.log($scope.ordre.valeur);

            $http({
                method: 'POST',
                url: 'https://api.particle.io/v1/devices/250019000547363339343638/\n' +
                    'led?access_token=25284da3137f8bad7265097b3f1e2b4f0b4b1864',
                data: {"arg" : $scope.ordre.valeur}             
            }).then(function successCallback(response) {
                console.log(response);
                if(response.data.return_value==1){
                	console.log("lumière allumée");
                	
                }
                else if(response.data.return_value==0){
                	console.log("lumière éteinte");
                	
                }
                else if(response.data.return_value==-1){
                	console.log("Un problème a été rencontré");
                	
                }
                
            }, function errorCallback(response) {
                console.log(response);
                
              
            });
        };

    }
]);