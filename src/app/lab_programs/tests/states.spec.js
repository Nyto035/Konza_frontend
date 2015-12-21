(function () {
    "use strict";

    describe("Tests for lab_programs states :", function() {
        var $state;

        beforeEach(function() {
            module("huqas.lab_programs.states");
            module("ui.router");

            inject(["$state", function (s) {
                $state = s;
            }]);
        });

        it("should go to /lab_programs url", function () {
            expect($state.href("lab_programs")).toEqual("#/lab_programs");
        });
    });
})();
