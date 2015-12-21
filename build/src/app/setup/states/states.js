(function (angular) {
    "use strict";

    angular.module("huqas.setup.states", [
        "huqas.setup.categories.states",
        "huqas.setup.programs.states",
        "huqas.setup.drugs.states",
        "huqas.setup.units.states",
        "huqas.setup.instruments.states",
        "huqas.setup.result_codes.states",
        "huqas.setup.analyte_setup.states",
        "huqas.setup.sample_setup.states",
        "huqas.setup.evaluation_criteria.states",
        "huqas.setup.coa.states"
    ]);
})(window.angular);
