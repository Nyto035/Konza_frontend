(function (angular) {
    "use strict";

    angular.module("huqas.lab_instruments.states", [
        "ui.router"
    ])

    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider

        .state("lab_instruments", {
            url : "/lab_instruments",
            views : {
                "main" : {
                    templateUrl : "common/tpls/main.tpl.html"
                },
                "body@lab_instruments" : {
                    controller : "huqas.lab_instruments.controllers.main",
                    templateUrl : "lab_instruments/tpls/instruments_grid.tpl.html"
                },
                "header@lab_instruments": {
                    controller: "huqas.common.controllers.header",
                    templateUrl: "common/tpls/header.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Lab Instruments"
            }
        })
        .state("lab_instruments.add_instrument", {
            url : "/add_instrument",
            views : {
                "body@lab_instruments" : {
                    controller : "huqas.lab_instruments.controllers.edit_instrument",
                    templateUrl : "lab_instruments/tpls/instruments_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Add Instrument"
            }
        })
        .state("lab_instruments.edit_instruments", {
            url : "/edit/:instrument_id",
            views : {
                "body@lab_instruments" : {
                    controller : "huqas.lab_instruments.controllers.edit_instrument",
                    templateUrl : "lab_instruments/tpls/instruments_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Edit Instrument"
            }
        });
    }]);
})(window.angular);
