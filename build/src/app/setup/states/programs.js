(function (angular) {
    "use strict";

    angular.module("huqas.setup.programs.states", [
        "ui.router"
    ])

    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider

        .state("dashboard.programs", {
            url : "programs",
            views : {
                "main" : {
                    controller : "huqas.setup.programs.controllers.main",
                    templateUrl : "events/tpls/main.tpl.html"
                },
                "grid-view@dashboard" : {
                    templateUrl : "setup/tpls/programs/programs_grid.tpl.html"
                },
                "header@dashboard": {
                    controller: "huqas.common.controllers.header",
                    templateUrl: "common/tpls/header.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Programs"
            }
        })
        .state("dashboard.programs.add_program", {
            url : "/new_program",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.programs.controllers.edit_program",
                    templateUrl : "setup/tpls/programs/programs_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Add Program"
            }
        })
        .state("dashboard.programs.edit_program", {
            url : "/edit/:program_id",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.programs.controllers.edit_program",
                    templateUrl : "setup/tpls/programs/programs_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Edit Program"
            }
        });
    }]);
})(window.angular);
