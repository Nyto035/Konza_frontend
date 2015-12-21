(function (angular) {
    "use strict";

    angular.module("huqas.setup.categories.states", [
        "ui.router"
    ])

    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider

        .state("dashboard.categories", {
            url : "categories",
            views : {
                "main" : {
                    controller : "huqas.setup.categories.controllers.main",
                    templateUrl : "events/tpls/main.tpl.html"
                },
                "grid-view@dashboard" : {
                    templateUrl : "setup/tpls/categories/categories_grid.tpl.html"
                },
                "header@dashboard": {
                    controller: "huqas.common.controllers.header",
                    templateUrl: "common/tpls/header.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Categories"
            }
        })
        .state("dashboard.categories.add_category", {
            url : "/new_category",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.categories.controllers.edit_category",
                    templateUrl : "setup/tpls/categories/categories_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Add Category"
            }
        })
        .state("dashboard.categories.edit_category", {
            url : "/edit/:cat_id",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.setup.categories.controllers.edit_category",
                    templateUrl : "setup/tpls/categories/categories_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Edit Category"
            }
        });
    }]);
})(window.angular);
