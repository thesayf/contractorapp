app.controller('AppCtrl', function ($scope, $http){

$scope.contact = {};
console.log("hello world from controller")

$scope.addContractor = function() {
    console.log($scope.firstname);
    
    $http.post('/contractors', $scope.contact).success(function(response){
                    console.log(response);
                        
                                                                 
});

};

});
