(function (angular) {
    "use strict";
    /**
    * @ngdoc module
    *
    * @name huqas.reports.states
    *
    * @description
    * States for the reports views
    *
    */
    angular.module("huqas.reports.states", [
        "ui.router"
    ])

    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider

        .state("reports", {
            url : "/reports",
            views : {
                "main" : {
                    controller : "huqas.reports.controllers.reports",
                    templateUrl : "common/tpls/main.tpl.html"
                },
                "header@reports": {
                    controller: "huqas.common.controllers.header",
                    templateUrl: "common/tpls/header.tpl.html"
                },
                "body@reports": {
                    controller: "huqas.common.controllers.header",
                    templateUrl: "reports/tpls/main.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Reports"
            }
        });
    }]);
})(window.angular);
