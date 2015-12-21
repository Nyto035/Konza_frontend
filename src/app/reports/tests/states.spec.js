(function () {
    "use strict";

    describe("Tests for reports states :", function() {
        var $state;

        beforeEach(function() {
            module("huqas.reports.states");
            module("ui.router");

            inject(["$state", function (s) {
                $state = s;
            }]);
        });

        it("should go to /reports url", function () {
            expect($state.href("reports")).toEqual("#/reports");
        });
    });
})();
