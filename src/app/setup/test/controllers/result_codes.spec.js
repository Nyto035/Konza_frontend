(function (_) {
    "use strict";

    describe("Testing the result code controller: ", function () {
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
                            "huqas.setup.result_codes.controllers."+ctrl,
                            _.extend(data, params));
                    };
                }
            ]);
        });

        it("should test main result_codes controller", function () {
            var dt = {
                $stateParams: {code_id: 1}
            };
            $httpBackend.expectGET(SERVER_URL+"api/v1/catalog/result_codes/")
                .respond(200, {result : []});
            controller("main",dt);
            $httpBackend.flush();
        });

        it("should test edit result code controller | fail", function () {
            var dt = {
                $stateParams: {code_id: 1}
            };
            $httpBackend.expectGET(SERVER_URL+"api/v1/catalog/result_codes/")
                .respond(500, {});
            controller("main",dt);
            $httpBackend.flush();
        });
        it("should test editing a result code",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        code_id : "1"
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({
                    "name": "get"
                });
                controller("edit_result_code", data);
                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/result_codes/1/")
                    .respond(200,{results :[]});
                $httpBackend.expectPATCH(SERVER_URL +
                    "api/v1/catalog/result_codes/1/")
                    .respond(200, {"name" :"get"});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test editing a result code: fail",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        code_id : "1"
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({"name": "get"});
                controller("edit_result_code", data);
                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/result_codes/1/").respond(500,{});
                $httpBackend.expectPATCH(SERVER_URL +
                    "api/v1/catalog/result_codes/1/")
                    .respond(500, {});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test creating a result code : success",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        code_id : null
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({"name": "get"});
                controller("edit_result_code", data);
                $httpBackend.expectPOST(SERVER_URL +
                    "api/v1/catalog/result_codes/")
                    .respond(200, {"name" :"get"});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test creating a result code: fail",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        code_id : null
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({"name": "get"});
                controller("edit_result_code", data);
                $httpBackend.expectPOST(SERVER_URL +
                    "api/v1/catalog/result_codes/")
                    .respond(500, {});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test creating a result code",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        code_id : null
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({});
                controller("edit_result_code", data);
                scope.save();
            }]);
        });
    });
})(window._);
