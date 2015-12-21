(function (angular, _) {
    "use strict";

    angular.module("huqas.setup.result_codes.controllers", [
        "ui.router",
        "huqas.events.services",
        "huqas.common.forms"
    ])

    .controller("huqas.setup.result_codes.controllers.main", ["$scope",
        "huqas.events.wrappers",
        function ($scope, wrappers) {
            wrappers.result_codes.list()
            .success(function (data) {
                $scope.result_codes = data.results;
            })
            .error(function (data) {
                $scope.errors = data;
            });
        }
    ])
    .controller("huqas.setup.result_codes.controllers.edit_result_code",
        ["$scope", "huqas.events.wrappers", "huqas.common.forms.changes",
        "$state", "$stateParams",
        function ($scope, wrappers, forms, $state, $stateParams) {
            $scope.code_id = $stateParams.code_id;
            $scope.edit_view = $scope.code_id ? true : false;
            if($scope.edit_view) {
                wrappers.result_codes.get($scope.code_id)
                .success(function (data) {
                    $scope.result_code = data;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
            }
            $scope.save = function (frm) {
                var changed = forms.whatChanged(frm);
                if (! _.isEmpty(changed)) {
                    if($scope.edit_view){
                        wrappers.result_codes.update(
                            $scope.code_id, changed)
                        .success(function () {
                            $state.go("result_codes", {reload: true});
                        })
                        .error(function (data) {
                            $scope.errors = data;
                        });
                    }else{
                        wrappers.result_codes.create($scope.result_code)
                        .success(function (){
                            $state.go("result_codes");
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
