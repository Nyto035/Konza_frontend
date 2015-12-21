(function (angular) {
    "use strict";

    /**
     * @ngdoc module
     *
     * @name huqas.reports.controllers
     *
     * @description
     * Controllers for the reports related views
     *
     */
    angular.module("huqas.reports.controllers", [
        "ui.router"
    ])

    /**
     * @ngdoc controller
     *
     * @name huqas.reports.controllers.reports
     *
     * @description
     * Controller for listing the reports
     * flow)
     */
    .controller("huqas.reports.controllers.reports",
        ["$scope",
        function ($scope) {
            $scope.reports = "reports";
        }]
    );
})(window.angular);
