(function (angular) {
    "use strict";

    angular.module("huqas.setup.units.states", [
        "ui.router"
    ])

    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider

        .state("dashboard.units", {
            url : "units",
            views : {
                "main" : {
                    controller : "huqas.setup.units.controllers.main",
                    templateUrl : "events/tpls/main.tpl.html"
                },
                "grid-view@dashboard" : {
                    templateUrl : "setup/tpls/units/units_grid.tpl.html"
                },
                "header@dashboard": {
                    controller: "huqas.common.controllers.header",
                    templateUrl: "common/tpls/header.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Units"
            }
        })
        .state("dashboard.units.add_unit", {
            url : "/add_unit",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.units.controllers.edit_unit",
                    templateUrl : "setup/tpls/units/units_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Add Unit"
            }
        })
        .state("dashboard.units.edit_unit", {
            url : "/edit/:unit_id",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.units.controllers.edit_unit",
                    templateUrl : "setup/tpls/units/units_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Edit Unit"
            }
        });
    }]);
})(window.angular);
