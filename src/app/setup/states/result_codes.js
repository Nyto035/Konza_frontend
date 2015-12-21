(function (angular) {
    "use strict";

    angular.module("huqas.setup.result_codes.states", [
        "ui.router"
    ])

    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider

        .state("dashboard.result_codes", {
            url : "result_codes",
            views : {
                "main" : {
                    controller : "huqas.setup.result_codes.controllers.main",
                    templateUrl : "events/tpls/main.tpl.html"
                },
                "grid-view@dashboard" : {
                    templateUrl : "setup/tpls/result_codes/result_codes_grid.tpl.html"
                },
                "header@dashboard": {
                    controller: "huqas.common.controllers.header",
                    templateUrl: "common/tpls/header.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Result Codes"
            }
        })
        .state("dashboard.result_codes.add_result_code", {
            url : "/new_result_code",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.result_codes.controllers.edit_result_code",
                    templateUrl : "setup/tpls/result_codes/result_codes_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Add Result Code"
            }
        })
        .state("dashboard.result_codes.edit_result_code", {
            url : "/edit/:code_id",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.result_codes.controllers.edit_result_code",
                    templateUrl : "setup/tpls/result_codes/result_codes_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Edit Result Code"
            }
        });
    }]);
})(window.angular);
