(function (angular) {
    "use strict";

    /*
     * @ngdoc module
     *
     * @name huqas.lab_programs
     *
     * @description
     * Contains lab_programs app modules
     */

    angular.module("huqas.lab_programs", [
        "huqas.lab_programs.controllers",
        "huqas.lab_programs.states",
        "huqas.labs.services",
        "huqas.events.services"
    ]);

})(window.angular);
