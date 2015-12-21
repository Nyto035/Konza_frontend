(function (_) {
    "use strict";

    describe("Testing the programs controller: ", function () {
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
                            "huqas.setup.programs.controllers."+ctrl,
                            _.extend(data, params));
                    };
                }
            ]);
        });

        it("should test main programs controller", function () {
            var dt = {
                $stateParams: {program_id: 1}
            };
            var res = {msg: "ok"};
            $httpBackend.expectGET(SERVER_URL+"api/v1/catalog/programs/").respond(200, res);
            controller("main",dt);
            $httpBackend.flush();
        });

        it("should test edit programs controller | fail", function () {
            var dt = {
                $stateParams: {program_id: 1}
            };
            $httpBackend.expectGET(SERVER_URL+"api/v1/catalog/programs/").respond(500, {});
            controller("main",dt);
            $httpBackend.flush();
        });
        it("should test editing a program",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        program_id : "1"
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({
                    "name": "get"
                });
                controller("edit_program", data);
                $httpBackend.expectGET(SERVER_URL+
                    "api/v1/catalog/categories/").respond(200, {results :[]});
                $httpBackend.expectGET(SERVER_URL+"api/v1/catalog/units/")
                    .respond(200, {results :[]});
                $httpBackend.expectGET(SERVER_URL+"api/v1/catalog/samples/")
                    .respond(200, {results :[]});
                $httpBackend.expectGET(SERVER_URL+
                    "api/v1/catalog/sample_types/").respond(200,{results :[]});
                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/programs/1/").respond(200,{results :[]});
                $httpBackend.expectPATCH(SERVER_URL +
                    "api/v1/catalog/programs/1/")
                    .respond(200, {"name" :"get"});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test editing a program: fail",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        program_id : "1"
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({"name": "get"});
                controller("edit_program", data);
                $httpBackend.expectGET(SERVER_URL+"api/v1/catalog/categories/").respond(500, {});
                $httpBackend.expectGET(SERVER_URL+"api/v1/catalog/units/")
                    .respond(500, {});
                $httpBackend.expectGET(SERVER_URL+"api/v1/catalog/samples/")
                    .respond(500, {});
                $httpBackend.expectGET(SERVER_URL+
                    "api/v1/catalog/sample_types/").respond(500, {});
                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/programs/1/").respond(500,{});
                $httpBackend.expectPATCH(SERVER_URL +
                    "api/v1/catalog/programs/1/")
                    .respond(500, {});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test creating a program : success",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        program_id : null
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({"name": "get"});
                controller("edit_program", data);
                $httpBackend.expectPOST(SERVER_URL +
                    "api/v1/catalog/programs/")
                    .respond(200, {"name" :"get"});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test creating a program: fail",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        program_id : null
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({"name": "get"});
                controller("edit_program", data);
                $httpBackend.expectPOST(SERVER_URL +
                    "api/v1/catalog/programs/")
                    .respond(500, {});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test creating a program",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        cat_id : null
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({});
                controller("edit_program", data);
                scope.save();
            }]);
        });
    });
})(window._);
