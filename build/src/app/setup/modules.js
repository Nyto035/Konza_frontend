(function (angular) {
    "use strict";
    /**
    * @ngdoc module
    * @name huqas setup
    *
    * @description
    * The events module.
    * It is the module that manages  setup.
    *
    */
    angular.module("huqas.setup", [
        "ui.router",
        "huqas.setup.controllers",
        "huqas.setup.states",
        "huqas.common.directives"
    ]);
})(window.angular);
