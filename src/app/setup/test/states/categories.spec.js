(function () {
    "use strict";

    describe("Tests for events states :", function() {
        var $state;

        beforeEach(function() {
            module("huqas.setup.states");
            module("huqas.dashboard.states");
            module("ui.router");

            inject(["$state", function (s) {
                $state = s;
            }]);
        });

        it("should go to /categories url", function () {
            expect($state.href("dashboard.categories")).toEqual("#/categories");
        });
    });
})();
