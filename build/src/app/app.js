(function (angular) {
    "use strict";

    /**
     * @ngdoc module
     * @name huqasApp
     *
     * @description
     * The main application module.
     * It combines the various components to make the application.
     *
     */
    angular.module("huqasApp", [
        "templates-app",
        "templates-common",
        "common.logging",
        "api.wrapper",
        "huqasAppConfig",
        "huqas.common",
        "huqas.auth",
        "huqas.dashboard",
        "huqas.events",
        "huqas.setup",
        "huqas.labs",
        "huqas.lab_instruments",
        "huqas.reports",
        "huqas.results",
        "huqas.lab_programs",
        "huqas.users",
        "jcs-autoValidate"
    ]);

})(window.angular);
