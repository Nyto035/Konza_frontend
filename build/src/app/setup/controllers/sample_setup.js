(function (angular, _) {
    "use strict";

    angular.module("huqas.setup.sample_setup.controllers", [
        "ui.router",
        "huqas.events.services",
        "huqas.common.forms"
    ])

    .controller("huqas.setup.sample_setup.controllers.main", ["$scope",
        function ($scope) {
            $scope.view = "Sample setup";
        }
    ])
    /*Sample management*/
    .controller("huqas.setup.sample_setup.controllers.samples",
        ["$scope", "huqas.events.wrappers",
        function ($scope, wrappers) {
            wrappers.samples.list()
            .success(function (data) {
                $scope.samples = data.results;
            })
            .error(function (data) {
                $scope.errors = data;
            });
        }
    ])
    .controller("huqas.setup.sample_setup.controllers.edit_sample",
        ["$scope", "huqas.events.wrappers", "huqas.common.forms.changes",
        "$state", "$stateParams",
        function ($scope, wrappers, forms, $state, $stateParams) {
            $scope.sample_id = $stateParams.sample_id;
            $scope.edit_view = $scope.sample_id ? true : false;
            if($scope.edit_view) {
                wrappers.samples.get($scope.sample_id)
                .success(function (data) {
                    $scope.sample = data;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
            }
            $scope.save = function (frm) {
                var changed = forms.whatChanged(frm);
                if (! _.isEmpty(changed)) {
                    if($scope.edit_view){
                        wrappers.samples.update($scope.sample_id, changed)
                        .success(function () {
                            $state.go("sample_setup.samples", {reload: true});
                        })
                        .error(function (data) {
                            $scope.errors = data;
                        });
                    }else{
                        wrappers.samples.create($scope.sample)
                        .success(function (){
                            $state.go("sample_setup.samples");
                        })
                        .error(function (data) {
                            $scope.errors = data;
                        });
                    }
                }
            };
        }
    ])
    /*Sample type managements controllers*/
    .controller("huqas.setup.sample_setup.controllers.sample_types",
        ["$scope", "huqas.events.wrappers",
        function ($scope, wrappers) {
            wrappers.sample_types.list()
            .success(function (data) {
                $scope.sample_types = data.results;
            })
            .error(function (data) {
                $scope.errors = data;
            });
        }
    ])
    .controller("huqas.setup.sample_setup.controllers.edit_sample_type",
        ["$scope", "huqas.events.wrappers", "huqas.common.forms.changes",
        "$state", "$stateParams",
        function ($scope, wrappers, forms, $state, $stateParams) {
            $scope.sample_type_id = $stateParams.sample_type_id;
            $scope.edit_view = $scope.sample_type_id ? true : false;
            if($scope.edit_view) {
                wrappers.sample_types.get($scope.sample_type_id)
                .success(function (data) {
                    $scope.sample_type = data;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
            }
            $scope.save = function (frm) {
                var changed = forms.whatChanged(frm);
                if (! _.isEmpty(changed)) {
                    if($scope.edit_view){
                        wrappers.sample_types.update($scope.sample_type_id,
                            changed)
                        .success(function () {
                            $state.go("sample_setup.sample_types",
                                {reload: true});
                        })
                        .error(function (data) {
                            $scope.errors = data;
                        });
                    }else{
                        wrappers.sample_types.create($scope.sample_type)
                        .success(function (){
                            $state.go("sample_setup.sample_types");
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
