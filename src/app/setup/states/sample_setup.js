(function (angular) {
    "use strict";

    angular.module("huqas.setup.sample_setup.states", [
        "ui.router"
    ])

    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider

        .state("sample_setup", {
            url : "/sample_setup",
            views : {
                "main" : {
                    controller : "huqas.setup.sample_setup.controllers.main",
                    templateUrl : "events/tpls/main.tpl.html"
                },
                "grid-view@sample_setup" : {
                    templateUrl : "setup/tpls/sample/sample_setup.tpl.html"
                },
                "header@sample_setup": {
                    controller: "huqas.common.controllers.header",
                    templateUrl: "common/tpls/header.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Sample Setup"
            }
        })
        /*Sample states*/
        .state("dashboard.samples", {
            url : "samples",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.sample_setup.controllers.samples",
                    templateUrl : "setup/tpls/sample/samples_grid.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Samples"
            }
        })
        .state("dashboard.samples.add_sample", {
            url : "/add_sample",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.sample_setup.controllers.edit_sample",
                    templateUrl : "setup/tpls/sample/samples_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Add Sample"
            }
        })
        .state("dashboard.samples.edit_sample", {
            url : "/edit/:sample_id",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.sample_setup.controllers.edit_sample",
                    templateUrl : "setup/tpls/sample/samples_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Edit Sample"
            }
        })
        /*sample types states*/
        .state("dashboard.sample_types", {
            url : "sample_types",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.sample_setup.controllers.sample_types",
                    templateUrl : "setup/tpls/sample/sample_types_grid.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Sample Types"
            }
        })
        .state("dashboard.sample_types.add_sample_type", {
            url : "/add_sample_type",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.sample_setup.controllers.edit_sample_type",
                    templateUrl : "setup/tpls/sample/sample_types_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Add Sample Type"
            }
        })
        .state("dashboard.sample_types.edit_sample_type", {
            url : "/edit/:sample_type_id",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.sample_setup.controllers.edit_sample_type",
                    templateUrl : "setup/tpls/sample/sample_types_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Edit Sample Type"
            }
        });
    }]);
})(window.angular);
