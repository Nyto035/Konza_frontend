(function (angular) {
    "use strict";

    angular.module("huqas.setup.analyte_setup.states", [
        "ui.router"
    ])

    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider

        .state("analyte_setup", {
            url : "/analyte_setup",
            views : {
                "main" : {
                    controller : "huqas.setup.analyte_setup.controllers.main",
                    templateUrl : "events/tpls/main.tpl.html"
                },
                "grid-view@analyte_setup" : {
                    templateUrl : "setup/tpls/analyte/analyte_setup.tpl.html"
                },
                "header@analyte_setup": {
                    controller: "huqas.common.controllers.header",
                    templateUrl: "common/tpls/header.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Analyte Setup"
            }
        })
        .state("dashboard.manufacturers", {
            url : "manufacturers",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.analyte_setup.controllers.manufacturers",
                    templateUrl : "setup/tpls/analyte/manufacturers_grid.tpl.html"
                },
                "header@dashboard": {
                    controller: "huqas.common.controllers.header",
                    templateUrl: "common/tpls/header.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Manufacturers"
            }
        })
        .state("dashboard.manufacturers.add_manufacturer", {
            url : "/add_manufacturer",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.analyte_setup.controllers.edit_manufacturer",
                    templateUrl : "setup/tpls/analyte/manufacturers_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Add Manufacturer"
            }
        })
        .state("dashboard.manufacturers.edit_manufacturer", {
            url : "/edit/:manu_id",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.analyte_setup.controllers.edit_manufacturer",
                    templateUrl : "setup/tpls/analyte/manufacturers_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Edit Manufacturer"
            }
        })
        /*Methods states*/
        .state("dashboard.methods", {
            url : "methods",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.analyte_setup.controllers.methods",
                    templateUrl : "setup/tpls/analyte/methods_grid.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Methods"
            }
        })
        .state("dashboard.methods.add_method", {
            url : "/add_method",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.analyte_setup.controllers.edit_method",
                    templateUrl : "setup/tpls/analyte/methods_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Add Method"
            }
        })
        .state("dashboard.methods.edit_method", {
            url : "/edit/:method_id",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.analyte_setup.controllers.edit_method",
                    templateUrl : "setup/tpls/analyte/methods_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Edit Method"
            }
        })
        /*Reagents states*/
        .state("dashboard.reagents", {
            url : "reagents",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.analyte_setup.controllers.reagents",
                    templateUrl : "setup/tpls/analyte/reagents_grid.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Reagents"
            }
        })
        .state("dashboard.reagents.add_reagent", {
            url : "/add_reagent",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.analyte_setup.controllers.edit_reagent",
                    templateUrl : "setup/tpls/analyte/reagents_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Add Reagent"
            }
        })
        .state("dashboard.reagents.edit_reagent", {
            url : "/edit/:reagent_id",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.analyte_setup.controllers.edit_reagent",
                    templateUrl : "setup/tpls/analyte/reagents_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Edit Reagent"
            }
        })
        /*Analyte states*/
        .state("dashboard.analytes", {
            url : "analytes",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.analyte_setup.controllers.analytes",
                    templateUrl : "setup/tpls/analyte/analytes_grid.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Analytes"
            }
        })
        .state("dashboard.analytes.add_analyte", {
            url : "/add_analyte",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.analyte_setup.controllers.edit_analyte",
                    templateUrl : "setup/tpls/analyte/analytes_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Add Analyte"
            }
        })
        .state("dashboard.analytes.edit_analyte", {
            url : "/edit/:analyte_id",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.analyte_setup.controllers.edit_analyte",
                    templateUrl : "setup/tpls/analyte/analytes_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Edit Analytes"
            }
        });
    }]);
})(window.angular);
