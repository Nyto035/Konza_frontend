(function (angular, _) {
    "use strict";

    angular.module("huqas.setup.units.controllers", [
        "ui.router",
        "huqas.events.services",
        "huqas.common.forms"
    ])

    .controller("huqas.setup.units.controllers.main", ["$scope",
        "huqas.events.wrappers",
        function ($scope, wrappers) {
            wrappers.units.list()
            .success(function (data) {
                $scope.units = data.results;
            })
            .error(function (data) {
                $scope.errors = data;
            });
        }
    ])
    .controller("huqas.setup.units.controllers.edit_unit", ["$scope",
        "huqas.events.wrappers", "huqas.common.forms.changes", "$state",
        "$stateParams",
        function ($scope, wrappers, forms, $state, $stateParams) {
            $scope.unit_id = $stateParams.unit_id;
            $scope.edit_view = $scope.unit_id ? true : false;
            wrappers.analytes.list()
                .success(function (data) {
                    $scope.analytes = data.results;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
            if($scope.edit_view) {
                wrappers.units.get($scope.unit_id)
                .success(function (data) {
                    $scope.unit = data;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
                wrappers.unit_conversions.filter({"unit" :$scope.unit_id})
                .success(function (data) {
                    $scope.unit_conversions = data.results;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
            }
            $scope.save = function (frm) {
                var changed = forms.whatChanged(frm);
                if (! _.isEmpty(changed)) {
                    if($scope.edit_view){
                        wrappers.units.update($scope.unit_id, changed)
                        .success(function () {
                            $state.go("units", {reload: true});
                        })
                        .error(function (data) {
                            $scope.errors = data;
                        });
                    }else{
                        wrappers.units.create($scope.unit)
                        .success(function (){
                            $state.go("units");
                        })
                        .error(function (data) {
                            $scope.errors = data;
                        });
                    }
                }
            };
        }
    ]);
})(window.angular, window._);
