(function (angular) {
    "use strict";

    angular.module("huqas.setup.coa.controllers", [
        "ui.router",
        "huqas.events.services",
        "huqas.common.forms",
        "huqas.common.constants"
    ])

    .controller("huqas.setup.coa.controllers.main", ["$scope",
        "huqas.events.wrappers",
        function ($scope, wrappers) {
            $scope.css = 0;
            wrappers.events.list()
            .success(function (data) {
                $scope.events = data.results;
            })
            .error(function (data) {
                $scope.errors = data;
            });

            $scope.getCoa = function (id, event) {
                $scope.css = event;
                wrappers.coa_qualitative.filter({test_event:id})
                .success(function (data) {
                    $scope.coa_qualitative = data.results;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
                wrappers.coa_quantitative.filter({test_event:id})
                .success(function (data) {
                    $scope.coa_quantitative = data.results;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
                wrappers.coa_semi.filter({test_event:id})
                .success(function (data) {
                    $scope.coa_semi = data.results;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
                wrappers.coa_approved_drugs.filter({test_event:id})
                .success(function (data) {
                    $scope.coa_drugs = data.results;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
            };
        }
    ]);
})(window.angular);
