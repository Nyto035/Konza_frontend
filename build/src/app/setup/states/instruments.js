(function (angular) {
    "use strict";

    angular.module("huqas.setup.instruments.states", [
        "ui.router"
    ])

    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider

        .state("dashboard.instruments", {
            url : "instruments",
            views : {
                "main" : {
                    controller : "huqas.setup.instruments.controllers.main",
                    templateUrl : "events/tpls/main.tpl.html"
                },
                "grid-view@dashboard" : {
                    templateUrl : "setup/tpls/instruments/instruments_grid.tpl.html"
                },
                "header@dashboard": {
                    controller: "huqas.common.controllers.header",
                    templateUrl: "common/tpls/header.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Instruments"
            }
        })
        .state("dashboard.instruments.add_instrument", {
            url : "/add_instrument",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.instruments.controllers.edit_instrument",
                    templateUrl : "setup/tpls/instruments/instruments_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Add Instrument"
            }
        })
        .state("dashboard.instruments.edit_instrument", {
            url : "/edit/:instrument_id",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.instruments.controllers.edit_instrument",
                    templateUrl : "setup/tpls/instruments/instruments_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Edit Instrument"
            }
        });
    }]);
})(window.angular);
