(function() {
  var app=angular.module('starter', ['ionic']);


  app.controller('imcCtrl',function($scope){
    $scope.medidas=angular.fromJson(window.localStorage['medidas'] || '[]');

    $scope.altura='';
    $scope.peso='';
    $scope.imc=0;
    $scope.status='sem status';
    $scope.calcula=function(peso,altura){
      $scope.medidas.push({'peso':peso,'altura':altura});
      window.localStorage['medidas']=angular.toJson($scope.medidas);
      $scope.imc=peso/(altura*altura);
      if ($scope.imc<20){
        $scope.status='muito magro';
      }
      else if ($scope.imc<23){
        $scope.status='magro';
      }
      else if ($scope.imc<25){
        $scope.status='gordo';
      }
      else {
        $scope.status='muito gordo';
      }
    }


  });


  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

}());
