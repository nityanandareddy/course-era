(function ()
{
  'use srtict';
  angular.module('myFirstAp',[]).
  controller("myFisrtController",function($scope)
  {
    $scope.name= "nitya";
    $scope.sayHello = function()
    {
      return "hellow.";
    }
  });
})()
