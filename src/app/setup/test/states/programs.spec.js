(function () {
    "use strict";

    describe("Tests for programs states :", function() {
        var $state;

        beforeEach(function() {
            module("huqas.setup.states");
            module("huqas.dashboard.states");
            module("ui.router");

            inject(["$state", function (s) {
                $state = s;
            }]);
        });

        it("should go to /programs url", function () {
            expect($state.href("dashboard.programs")).toEqual("#/programs");
        });
    });
})();
