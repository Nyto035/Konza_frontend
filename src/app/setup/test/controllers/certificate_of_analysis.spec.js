(function (_) {
    "use strict";

    describe("Testing the coa controller: ", function () {
        var controller, data, root, scope, SERVER_URL,
            _$stateParams, state, $httpBackend;

        beforeEach(function () {
            module("huqasAppConfig");
            module("huqas.setup.controllers");

            inject(["$rootScope", "$controller", "SERVER_URL",
                "$stateParams","$httpBackend", "$state",
                function ($rootScope, $controller, _SERVER_URL,
                          $stateParams, _$httpBackend, $state) {
                    root = $rootScope;
                    scope = root.$new();
                    SERVER_URL = _SERVER_URL;
                    $httpBackend = _$httpBackend;
                    $stateParams = _$stateParams;
                    state = $state;
                    data = {
                        $scope : scope
                    };
                    controller = function (ctrl, params) {
                        return $controller(
                            "huqas.setup.coa.controllers."+ctrl,
                            _.extend(data, params));
                    };
                }
            ]);
        });

        it("should test main coa controller", function () {
            var dt = {
                $stateParams: {program_id: 1}
            };
            var res = {msg: "ok"};
            $httpBackend.expectGET(SERVER_URL+"api/v1/events/test_events/").respond(200, res);
            controller("main",dt);
            $httpBackend.flush();
            $httpBackend.expectGET(SERVER_URL+"api/v1/events/coa_qualitative/?test_event=1")
                .respond(200, res);
            $httpBackend.expectGET(SERVER_URL+"api/v1/events/coa_quantitative/?test_event=1")
                .respond(200, res);
            $httpBackend.expectGET(SERVER_URL+"api/v1/events/coa_special_qualitative/?test_event=1")
                .respond(200, res);
            $httpBackend.expectGET(SERVER_URL+"api/v1/events/coa_approved_drugs/?test_event=1")
            .respond(200, res);
            scope.getCoa(1);
            $httpBackend.flush();
        });

        it("should test main coa controller | fail", function () {
            var dt = {
                $stateParams: {program_id: 1}
            };
            var res = {msg: "ok"};
            $httpBackend.expectGET(SERVER_URL+"api/v1/events/test_events/").respond(500, res);
            controller("main",dt);
            $httpBackend.flush();
            $httpBackend.expectGET(SERVER_URL+"api/v1/events/coa_qualitative/?test_event=1")
                .respond(500, res);
            $httpBackend.expectGET(SERVER_URL+"api/v1/events/coa_quantitative/?test_event=1")
                .respond(500, res);
            $httpBackend.expectGET(SERVER_URL+"api/v1/events/coa_special_qualitative/?test_event=1")
                .respond(500, res);
            $httpBackend.expectGET(SERVER_URL+"api/v1/events/coa_approved_drugs/?test_event=1")
            .respond(500, res);
            scope.getCoa(1);
            $httpBackend.flush();
        });
    });
})(window._);
