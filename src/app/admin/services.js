(function (angular) {
    "use strict";

    /*
     * @ngdoc module
     *
     * @name huqas.events.services
     *
     * @description
     * Module containing services used in test events app
     */
    angular.module("huqas.events.services", [
        "api.wrapper"
    ])

    /*
     * @ngdoc service
     *
     * @name huqas.events.wrappers
     *
     * @description
     * Module containing api wrappers used in test event app
     */
    .service("huqas.events.wrappers", ["api", function (api) {

        this.events = api.setBaseUrl("api/v1/events/test_events/");
        this.open_event = api.setBaseUrl("api/v1/events/open_event/");
        this.event_programs = api.setBaseUrl("api/v1/events/event_programs/");
        this.programs = api.setBaseUrl("api/v1/catalog/programs/");
        this.categories = api.setBaseUrl("api/v1/catalog/categories/");
        this.lab_programs = api.setBaseUrl("api/v1/labs/lab_programs/");
        this.lab_instruments = api.setBaseUrl("api/v1/labs/lab_instruments/");
        this.lab_subscriptions = api.setBaseUrl("api/v1/labs/subscriptions/");
        this.lab_enrollments = api.setBaseUrl("api/v1/labs/enrollments/");
        this.reverse_enrollments = api.setBaseUrl("api/v1/labs/reverse_enrollments/");
        this.sample_conditions = api.setBaseUrl("api/v1/labs/sample_conditions/");
        this.units = api.setBaseUrl("api/v1/catalog/units/");
        this.unit_conversions = api.setBaseUrl(
            "api/v1/catalog/unit_conversions/");
        this.instruments = api.setBaseUrl("api/v1/catalog/instruments/");
        this.instrument_models = api.setBaseUrl(
            "api/v1/catalog/instrument_models/");
        this.samples = api.setBaseUrl("api/v1/catalog/samples/");
        this.sample_types = api.setBaseUrl("api/v1/catalog/sample_types/");
        this.result_codes = api.setBaseUrl("api/v1/catalog/result_codes/");
        this.manufacturers = api.setBaseUrl("api/v1/catalog/manufacturers/");
        this.methods = api.setBaseUrl("api/v1/catalog/methods/");
        this.reagents = api.setBaseUrl("api/v1/catalog/reagents/");
        this.analytes = api.setBaseUrl("api/v1/catalog/analytes/");
        this.drugs = api.setBaseUrl("api/v1/catalog/drugs/");
        this.configurations = api.setBaseUrl("api/v1/catalog/configurations/");
        this.evaluation_criteria = api.setBaseUrl("api/v1/catalog/evaluation_criteria/");
        this.coa_quantitative = api.setBaseUrl("api/v1/events/coa_quantitative/");
        this.coa_qualitative = api.setBaseUrl("api/v1/events/coa_qualitative/");
        this.coa_semi = api.setBaseUrl("api/v1/events/coa_special_qualitative/");
        this.coa_approved_drugs = api.setBaseUrl("api/v1/events/coa_approved_drugs/");
        this.coa_drugs = api.setBaseUrl("api/v1/events/coa_drugs/");
    }]);
})(window.angular);
