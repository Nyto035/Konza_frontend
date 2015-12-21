(function (angular) {
    "use strict";
    /**
    * @ngdoc module
    *
    * @name huqas.lab_programs.states
    *
    * @description
    * States for the lab_programs views
    *
    */
    angular.module("huqas.lab_programs.states", [
        "ui.router"
    ])

    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider

        .state("lab_programs", {
            url : "/lab_programs?{labprogram_id:int}",
            views : {
                "main" : {
                    templateUrl : "common/tpls/main.tpl.html"
                },
                "header@lab_programs": {
                    controller: "huqas.common.controllers.header",
                    templateUrl: "common/tpls/header.tpl.html"
                },
                "body@lab_programs": {
                    controller: "huqas.lab_programs.controllers.lab_programs",
                    templateUrl: "lab_programs/tpls/lab-programs-grid.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Programs"
            }
        })
        .state("lab_programs.create_subscription", {
            url : "/add/{program_id:int}/{lab_program_id:int}",
            views : {
                "form@lab_programs": {
                    controller : "huqas.lab_programs.controllers.edit_subscription",
                    templateUrl: "lab_programs/tpls/lab-program-edit.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Add Analyte"
            }
        })
        .state("lab_programs.edit_subscription", {
            url : "/edit/{program_id:int}/{lab_program_id:int}/{subscription_id:int}",
            views : {
                "form@lab_programs": {
                    controller : "huqas.lab_programs.controllers.edit_subscription",
                    templateUrl: "lab_programs/tpls/lab-program-edit.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Edit Analyte"
            }
        });
    }]);
})(window.angular);
