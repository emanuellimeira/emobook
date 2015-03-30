angular.module('Platzi', []);
angular.module('Platzi').controller('BaseCtrl', ['$scope' , function ($scope){

 io.socket.get('/emoji', function (data){
   $scope.emojis = data;
   $scope.$apply();
 });


  // $scope.emojis = [{
  //   id: 1,
  //   text: '=)'
  // },
  // {
  //   id: 2,
  //   text: ':-)'
  // },
  // {
  //   id: 3,
  //   text: '8)'
  // },{
  //   id: 4,
  //   text: ':)'
  // }];

}]);
//alert('!');