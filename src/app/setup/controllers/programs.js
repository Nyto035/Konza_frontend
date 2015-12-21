(function (angular, _) {
    "use strict";

    angular.module("huqas.setup.programs.controllers", [
        "ui.router",
        "huqas.events.services",
        "huqas.common.forms"
    ])

    .controller("huqas.setup.programs.controllers.main", ["$scope",
        "huqas.events.wrappers",
        function ($scope, wrappers) {
            wrappers.programs.list()
            .success(function (data) {
                $scope.programs = data.results;
            })
            .error(function (data) {
                $scope.errors = data;
            });
        }
    ])
    .controller("huqas.setup.programs.controllers.edit_program", ["$scope",
        "huqas.events.wrappers", "huqas.common.forms.changes", "$state",
        "$stateParams",
        function ($scope, wrappers, forms, $state, $stateParams) {
            $scope.program_id = $stateParams.program_id;
            $scope.edit_view = $scope.program_id ? true : false;
            /*categories*/
            wrappers.categories.list()
                .success(function (data) {
                    $scope.categories = data.results;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
            /*units*/
            wrappers.units.list()
                .success(function (data) {
                    $scope.units = data.results;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
            /*samples*/
            wrappers.samples.list()
                .success(function (data) {
                    $scope.samples = data.results;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
            /*sample types*/
            wrappers.sample_types.list()
                .success(function (data) {
                    $scope.sample_types = data.results;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
            if($scope.edit_view) {
                wrappers.programs.get($scope.program_id)
                .success(function (data) {
                    $scope.program = data;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
            }
            $scope.save = function (frm) {
                var changed = forms.whatChanged(frm);
                if (! _.isEmpty(changed)) {
                    if($scope.edit_view){
                        wrappers.programs.update($scope.program_id, changed)
                        .success(function () {
                            $state.go("programs", {reload: true});
                        })
                        .error(function (data) {
                            $scope.errors = data;
                        });
                    }else{
                        wrappers.programs.create($scope.program)
                        .success(function (){
                            $state.go("programs");
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
