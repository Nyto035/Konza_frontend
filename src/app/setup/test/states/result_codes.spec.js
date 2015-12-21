(function () {
    "use strict";

    describe("Tests for result codes states :", function() {
        var $state;

        beforeEach(function() {
            module("huqas.setup.states");
            module("huqas.dashboard.states");
            module("ui.router");

            inject(["$state", function (s) {
                $state = s;
            }]);
        });

        it("should go to /result_codes url", function () {
            expect($state.href("dashboard.result_codes")).toEqual("#/result_codes");
        });
    });
})();
