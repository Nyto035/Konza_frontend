(function () {
    "use strict";

    describe("Testing the reports controller: ", function () {
        var controller, data, root, scope;

        beforeEach(function () {
            module("huqasAppConfig");
            module("huqas.reports.controllers");

            inject(["$rootScope", "$controller",
                function ($rootScope, $controller) {
                    root = $rootScope;
                    scope = root.$new();
                    data = {
                        $scope : scope
                    };
                    controller = function (ctrl) {
                        return $controller("huqas.reports.controllers."+ctrl, data);
                    };
                }
            ]);
        });

        it("should test 'reports' controller", function () {
            controller("reports");
            expect(scope.reports).toEqual("reports");
        });

    });
})();
