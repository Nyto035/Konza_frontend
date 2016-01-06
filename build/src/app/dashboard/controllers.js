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
        "huqas.auth.services.login",
        function ($scope, loginService) {
            $scope.view = "dashboard";
            $scope.loggedInUser = loginService.getUser();
        }
    ]);
})(window.angular);
