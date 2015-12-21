(function (angular, _) {
    "use strict";

    angular.module("huqas.setup.drugs.controllers", [
        "ui.router",
        "huqas.events.services",
        "huqas.common.forms",
        "huqas.common.constants"
    ])

    .controller("huqas.setup.drugs.controllers.main", ["$scope",
        "huqas.events.wrappers",
        function ($scope, wrappers) {
            wrappers.drugs.list()
            .success(function (data) {
                $scope.drugs = data.results;
            })
            .error(function (data) {
                $scope.errors = data;
            });
        }
    ])
    .controller("huqas.setup.drugs.controllers.edit_drug", ["$scope",
        "huqas.events.wrappers", "huqas.common.forms.changes", "$state",
        "$stateParams", "huqas.drug.classifications",
        function ($scope, wrappers, forms, $state, $stateParams,
            classification) {
            $scope.drug_id = $stateParams.drug_id;
            $scope.edit_view = $scope.drug_id ? true : false;
            $scope.classifications = classification.classifications;
            if($scope.edit_view) {
                wrappers.drugs.get($scope.drug_id)
                .success(function (data) {
                    $scope.drug = data;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
            }
            $scope.save = function (frm) {
                var changed = forms.whatChanged(frm);
                if (! _.isEmpty(changed)) {
                    if($scope.edit_view){
                        wrappers.drugs.update($scope.drug_id, changed)
                        .success(function () {
                            $state.go("drugs", {reload: true});
                        })
                        .error(function (data) {
                            $scope.errors = data;
                        });
                    }else{
                        wrappers.drugs.create($scope.drug)
                        .success(function (){
                            $state.go("drugs");
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
