(function (angular) {
    "use strict";
    /**
    * @ngdoc module
    *
    * @name huqas.auth.controllers
    *
    * @description
    * Controllers for the dashboard related views
    *
    */

    angular.module("huqas.dashboard.controllers", [
        "ui.router",
        "huqas.auth.services",
        "huqas.events.services"
    ])
    /**
    * @ngdoc controller
    *
    * @name huqas.dashboard.controllers.home
    *
    * @description
    * Controller for dashboard view
    */
    .controller("huqas.dashboard.controllers.main", ["$scope",
        "huqas.auth.services.login", "huqas.events.wrappers",
        function ($scope, loginService, wrappers) {
            $scope.view = "dashboard";
            $scope.loggedInUser = loginService.getUser();
            wrappers.open_event.list()
            .success(function (data){
                $scope.test_event = data;
            })
            .error(function (data) {
                $scope.errors = data;
            });
            $scope.lab_id = $scope.loggedInUser.lab_id;
            $scope.obj = {lab : $scope.lab_id};
            wrappers.lab_programs.filter($scope.obj)
            .success(function (data){
                $scope.lab_programs = data.results;
            })
            .error(function (data) {
                $scope.errors = data;
            });
        }
    ]);
})(window.angular);
