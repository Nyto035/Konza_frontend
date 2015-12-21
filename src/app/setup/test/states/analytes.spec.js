(function () {
    "use strict";

    describe("Tests for events states :", function() {
        var $state;

        beforeEach(function() {
            module("huqas.setup.states");
            module("ui.router");

            inject(["$state", function (s) {
                $state = s;
            }]);
        });

        it("should go to /analyte_setup url", function () {
            expect($state.href("analyte_setup")).toEqual("#/analyte_setup");
        });
    });
})();
