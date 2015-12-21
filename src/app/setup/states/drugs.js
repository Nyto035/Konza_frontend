(function (angular) {
    "use strict";

    angular.module("huqas.setup.drugs.states", [
        "ui.router"
    ])

    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider

        .state("dashboard.drugs", {
            url : "drugs",
            views : {
                "main" : {
                    controller : "huqas.setup.drugs.controllers.main",
                    templateUrl : "events/tpls/main.tpl.html"
                },
                "grid-view@dashboard" : {
                    templateUrl : "setup/tpls/drugs/drugs_grid.tpl.html"
                },
                "header@dashboard": {
                    controller: "huqas.common.controllers.header",
                    templateUrl: "common/tpls/header.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Drugs"
            }
        })
        .state("dashboard.drugs.add_drug", {
            url : "/add_drug",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.drugs.controllers.edit_drug",
                    templateUrl : "setup/tpls/drugs/drugs_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Add Drug"
            }
        })
        .state("dashboard.drugs.edit_drug", {
            url : "/edit/:drug_id",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.drugs.controllers.edit_drug",
                    templateUrl : "setup/tpls/drugs/drugs_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Edit Drug"
            }
        });
    }]);
})(window.angular);
