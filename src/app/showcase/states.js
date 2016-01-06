(function (angular) {
    "use strict";

    angular.module("huqas.lab_instruments.states", [
        "ui.router"
    ])

    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider

        .state("lab_instruments", {
            url : "/showcase",
            views : {
                "main" : {
                    templateUrl : "common/tpls/main.tpl.html"
                },
                "body@lab_instruments" : {
                    controller : "huqas.lab_instruments.controllers.main",
                    templateUrl : "showcase/tpls/instruments_grid.tpl.html"
                },
                "header@lab_instruments": {
                    controller: "huqas.common.controllers.header",
                    templateUrl: "common/tpls/header.tpl.html"
                },
                "footer@lab_instruments" : {
                    templateUrl : "common/tpls/footer.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Lab Instruments"
            },
            requireUser: false,
            requireLogin: false
        });
    }]);
})(window.angular);
