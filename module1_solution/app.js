angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope','$filter'];
function LunchCheckController($scope,$filter) {
    $scope.check = function() {
      var _dataEntered = validateInput();
      if(!_dataEntered) return;
      var re = /\s*(?:,|$)\s*/;
      var _splitInputString = $scope.inputString.split(re);
      var _tmpString = [];
      _splitInputString.forEach(function(val) {
          if(val.length == 0) {
          //  do nothing
          }
          else _tmpString.push(val)

      });
      if (_tmpString.length > 3) $scope.message = "Too much!";
      else $scope.message = "Enjoy!";

    };

    function validateInput() {
        if (typeof $scope.inputString === 'undefined' || $scope.inputString.length == 0) {
            $scope.message = "Please enter data first";
            return false;
        }

        return true;
    }


};
