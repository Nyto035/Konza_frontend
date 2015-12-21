(function (angular) {
    "use strict";

    angular.module("huqas.setup.controllers", [
        "huqas.setup.categories.controllers",
        "huqas.setup.programs.controllers",
        "huqas.setup.drugs.controllers",
        "huqas.setup.units.controllers",
        "huqas.setup.instruments.controllers",
        "huqas.setup.result_codes.controllers",
        "huqas.setup.analyte_setup.controllers",
        "huqas.setup.sample_setup.controllers",
        "huqas.setup.evaluation_criteria.controllers",
        "huqas.setup.coa.controllers"
    ]);
})(window.angular);
