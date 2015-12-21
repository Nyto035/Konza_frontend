(function (angular, _) {
    "use strict";

    angular.module("huqas.setup.evaluation_criteria.controllers", [
        "ui.router",
        "huqas.events.services",
        "huqas.common.forms",
        "huqas.common.constants"
    ])

    .controller("huqas.setup.evaluation_criteria.controllers.main", ["$scope",
        "huqas.events.wrappers", "huqas.evaluation_criteria.limits",
        function ($scope, wrappers, limits) {
            $scope.limit_values = limits.limits;
            wrappers.evaluation_criteria.list()
            .success(function (data) {
                $scope.evaluation_criteria = data.results;
            })
            .error(function (data) {
                $scope.errors = data;
            });
        }
    ])
    .controller("huqas.setup.evaluation_criteria.controllers.edit_evaluation_criterion", ["$scope",
        "huqas.events.wrappers", "huqas.common.forms.changes", "$state",
        "$stateParams", "huqas.evaluation_criteria.limits",
        function ($scope, wrappers, forms, $state, $stateParams,
            limits) {
            $scope.criterion_id = $stateParams.criterion_id;
            $scope.edit_view = $scope.criterion_id ? true : false;
            $scope.limits = limits.limits;
            wrappers.analytes.list()
                .success(function (data) {
                    $scope.analytes = data.results;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
            $scope.limitChecker = function (limit_val) {
                if(limit_val === "SD"){
                    $scope.is_sd = true;
                    $scope.is_pc = false;
                    $scope.is_fv = false;
                }
                else if(limit_val === "CM"){
                    $scope.is_sd = true;
                    $scope.is_pc = true;
                    $scope.is_fv = true;
                }
                else if(limit_val === "PC"){
                    $scope.is_pc = true;
                    $scope.is_sd = false;
                    $scope.is_fv = false;
                }
                else if(limit_val === "FV"){
                    $scope.is_fv = true;
                    $scope.is_pc = false;
                    $scope.is_sd = false;
                }
            };
            if($scope.edit_view) {
                wrappers.evaluation_criteria.get($scope.criterion_id)
                .success(function (data) {
                    $scope.criterion = data;
                    $scope.limitChecker($scope.criterion.limit);
                })
                .error(function (data) {
                    $scope.errors = data;
                });
            }
            $scope.save = function (frm) {
                var changed = forms.whatChanged(frm);
                if (! _.isEmpty(changed)) {
                    if($scope.edit_view){
                        wrappers.evaluation_criteria.update(
                        $scope.criterion_id, changed)
                        .success(function () {
                            $state.go("evaluation_criteria", {reload: true});
                        })
                        .error(function (data) {
                            $scope.errors = data;
                        });
                    }else{
                        wrappers.evaluation_criteria.create($scope.criterion)
                        .success(function (){
                            $state.go("evaluation_criteria");
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
