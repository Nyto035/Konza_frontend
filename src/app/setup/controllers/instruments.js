(function (angular, _) {
    "use strict";

    angular.module("huqas.setup.instruments.controllers", [
        "ui.router",
        "huqas.events.services",
        "huqas.common.forms"
    ])

    .controller("huqas.setup.instruments.controllers.main", ["$scope",
        "huqas.events.wrappers",
        function ($scope, wrappers) {
            wrappers.instruments.list()
            .success(function (data) {
                $scope.instruments = data.results;
            })
            .error(function (data) {
                $scope.errors = data;
            });
        }
    ])
    .controller("huqas.setup.instruments.controllers.edit_instrument",
        ["$scope", "huqas.events.wrappers", "huqas.common.forms.changes",
        "$state", "$stateParams",
        function ($scope, wrappers, forms, $state, $stateParams) {
            $scope.instrument_id = $stateParams.instrument_id;
            $scope.edit_view = $scope.instrument_id ? true : false;
            wrappers.manufacturers.list()
            .success(function (data) {
                $scope.manufacturers = data.results;
            })
            .error(function (data) {
                $scope.errors = data;
            });
            if($scope.edit_view) {
                wrappers.instruments.get($scope.instrument_id)
                .success(function (data) {
                    $scope.instrument = data;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
                $scope.obj = {
                    "instrument" : $scope.instrument_id
                };
                wrappers.instrument_models.filter($scope.obj)
                .success(function (data) {
                    $scope.instrument_models = data.results;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
            }
            $scope.save = function (frm) {
                var changed = forms.whatChanged(frm);
                if (! _.isEmpty(changed)) {
                    if($scope.edit_view){
                        wrappers.instruments.update(
                            $scope.instrument_id, changed)
                        .success(function () {
                            $state.go("instruments", {reload: true});
                        })
                        .error(function (data) {
                            $scope.errors = data;
                        });
                    }else{
                        wrappers.instruments.create($scope.instrument)
                        .success(function (){
                            $state.go("instruments");
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
