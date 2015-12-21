(function (angular) {
    "use strict";

    angular.module("huqas.setup.coa.states", [
        "ui.router"
    ])

    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider

        .state("coa", {
            url : "/coa",
            views : {
                "main" : {
                    controller : "huqas.setup.coa.controllers.main",
                    templateUrl : "events/tpls/main.tpl.html"
                },
                "grid-view@coa" : {
                    templateUrl : "setup/tpls/coa/coa_grid.tpl.html"
                },
                "header@coa": {
                    controller: "huqas.common.controllers.header",
                    templateUrl: "common/tpls/header.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Certificate of Analysis"
            }
        })
        .state("coa.add_coa", {
            url : "/add_coa",
            views : {
                "grid-view@coa" : {
                    controller : "huqas.setup.coa.controllers.edit_coa",
                    templateUrl : "setup/tpls/coa/coa_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Add Certificate of Analysis"
            }
        })
        .state("coa.edit_coa", {
            url : "/edit/:coa_id",
            views : {
                "grid-view@coa" : {
                    controller : "huqas.setup.coa.controllers.edit_coa",
                    templateUrl : "setup/tpls/coa/coa_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Edit Certificate of Analysis"
            }
        });
    }]);
})(window.angular);
