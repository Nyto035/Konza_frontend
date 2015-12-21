(function (angular) {
    "use strict";

    angular.module("huqas.setup.evaluation_criteria.states", [
        "ui.router"
    ])

    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider

        .state("dashboard.evaluation_criteria", {
            url : "evaluation_criteria",
            views : {
                "main" : {
                    controller : "huqas.setup.evaluation_criteria.controllers.main",
                    templateUrl : "events/tpls/main.tpl.html"
                },
                "grid-view@dashboard" : {
                    templateUrl : "setup/tpls/evaluation_criteria/evaluation_criteria_grid.tpl.html"
                },
                "header@dashboard": {
                    controller: "huqas.common.controllers.header",
                    templateUrl: "common/tpls/header.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Evaluation Criteria"
            }
        })
        .state("dashboard.evaluation_criteria.add_evaluation_criterion", {
            url : "/add_evaluation_criterion",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.evaluation_criteria."+
                        "controllers.edit_evaluation_criterion",
                    templateUrl : "setup/tpls/evaluation_criteria/evaluation_criteria_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Add Evaluation Criterion"
            }
        })
        .state("dashboard.evaluation_criteria.edit_evaluation_criterion", {
            url : "/edit/:criterion_id",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.evaluation_criteria."+
                        "controllers.edit_evaluation_criterion",
                    templateUrl : "setup/tpls/evaluation_criteria/evaluation_criteria_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Edit Evaluation Criterion"
            }
        });
    }]);
})(window.angular);
