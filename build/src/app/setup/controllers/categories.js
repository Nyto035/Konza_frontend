(function (angular, _) {
    "use strict";

    angular.module("huqas.setup.categories.controllers", [
        "ui.router",
        "huqas.events.services",
        "huqas.common.forms"
    ])

    .controller("huqas.setup.categories.controllers.main", ["$scope",
        "huqas.events.wrappers",
        function ($scope, wrappers) {
            $scope.view = "Categories";
            wrappers.categories.list()
            .success(function (data) {
                $scope.categories = data.results;
            })
            .error(function (data) {
                $scope.errors = data;
            });
        }
    ])
    .controller("huqas.setup.categories.controllers.edit_category", ["$scope",
        "huqas.events.wrappers", "huqas.common.forms.changes", "$state",
        "$stateParams",
        function ($scope, wrappers, forms, $state, $stateParams) {
            $scope.cat_id = $stateParams.cat_id;
            $scope.edit_view = $scope.cat_id ? true : false;
            if($scope.edit_view) {
                wrappers.categories.get($scope.cat_id)
                .success(function (data) {
                    $scope.category = data;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
                wrappers.programs.filter({"category" : $scope.cat_id})
                .success(function (data) {
                    $scope.cat_programs = data.results;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
            }
            $scope.filters = {category : $scope.cat_id};
            $scope.save = function (frm) {
                var changed = forms.whatChanged(frm);
                if (! _.isEmpty(changed)) {
                    if($scope.edit_view){
                        wrappers.categories.update($scope.cat_id, changed)
                        .success(function () {
                            $state.go("categories", {reload: true});
                        })
                        .error(function (data) {
                            $scope.errors = data;
                        });
                    }else{
                        wrappers.categories.create($scope.category)
                        .success(function (){
                            $state.go("categories");
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
