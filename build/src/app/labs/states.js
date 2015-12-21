(function (angular) {
    "use strict";
    /**
    * @ngdoc module
    *
    * @name huqas.labs.states
    *
    * @description
    * States for the labs views
    *
    */
    angular.module("huqas.labs.states", [
        "ui.router"
    ])

    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider

        .state("labs", {
            url : "/labs",
            views : {
                "main" : {
                    templateUrl : "common/tpls/main.tpl.html"
                },
                "header@labs": {
                    controller: "huqas.common.controllers.header",
                    templateUrl: "common/tpls/header.tpl.html"
                },
                "body@labs": {
                    templateUrl: "labs/tpls/labs-grid.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Labs"
            }
        })
        .state("labs.create", {
            url : "/add",
            views : {
                "body@labs": {
                    controller : "huqas.labs.controllers.edit",
                    templateUrl: "labs/tpls/lab-edit.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Add Lab"
            }
        })
        .state("labs.edit", {
            url : "/edit/{lab_id:int}",
            views : {
                "body@labs": {
                    controller : "huqas.labs.controllers.edit",
                    templateUrl: "labs/tpls/lab-edit.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Edit Lab"
            }
        });
    }]);
})(window.angular);
