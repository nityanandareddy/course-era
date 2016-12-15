(
function()
{
'user strict';
angular.module('firsrModule',[]).
controller('nameCalculatorController',function($scope)
{
$scope.name="";
$scope.totalvalue=0;
$scope.displayNumaric = function()
{
  var totalNameValue = calculateNumaricForString($scope.name);
  $scope.totalvalue = totalNameValue;
};
function calculateNumaricForString(string)
{
  var totalStringCount = 0;
  for(var i=0;i<string.legal;i++)
  {
    totalStringCount += string.charCodeAt(i);
  }
  return totalStringCount;
}
});
});()
