(function (angular) {
    "use strict";

    angular.module("huqas.events.states", [
        "ui.router"
    ])

    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider

        .state("dashboard.events", {
            url : "test_events",
            views : {
                "main" : {
                    controller : "huqas.events.controllers.main",
                    templateUrl : "events/tpls/main.tpl.html"
                },
                "grid-view@dashboard" : {
                    templateUrl : "events/tpls/events_grid.tpl.html"
                },
                "header@dashboard": {
                    controller: "huqas.common.controllers.header",
                    templateUrl: "common/tpls/header.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Events"
            }
        })
        .state("dashboard.events.add_event", {
            url : "/new_event",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.events.controllers.edit_event",
                    templateUrl : "events/tpls/events_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Add Event"
            }
        })
        .state("dashboard.events.edit_event", {
            url : "/edit/:event_id",
            views : {
                "grid-view@dashboard" : {
                    controller : "huqas.events.controllers.edit_event",
                    templateUrl : "events/tpls/events_form.tpl.html"
                }
            },
            ncyBreadcrumb: {
                label: "Edit Event"
            }
        });
    }]);
})(window.angular);
