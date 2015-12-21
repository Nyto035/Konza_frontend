(function (_) {
    "use strict";

    describe("Testing the sample controllers: ", function () {
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
                            "huqas.setup.sample_setup.controllers."+ctrl,
                            _.extend(data, params));
                    };
                }
            ]);
        });
        it("should test main controller", function () {
            controller("main");
            expect(scope.view).toEqual("Sample setup");
        });
        it("should test edit sample controller", function () {
            var data = {
                "$stateParams" : {
                    sample_id : "1"
                }
            };
            $httpBackend.expectGET(SERVER_URL+
                "api/v1/catalog/samples/").respond(200, {results : []});
            controller("samples", data);
            $httpBackend.flush();
        });

        it("should test samples controller : fail", function () {
            var data = {
                "$stateParams" : {
                    sample_id : "1"
                }
            };
            $httpBackend.expectGET(SERVER_URL+
                "api/v1/catalog/samples/").respond(500, {});
            controller("samples", data);
            $httpBackend.flush();
        });
        it("should test editing a sample",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        sample_id : "1"
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({
                    "name": "get"
                });
                controller("edit_sample", data);
                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/samples/1/")
                    .respond(200,{results :[]});
                $httpBackend.expectPATCH(SERVER_URL +
                    "api/v1/catalog/samples/1/")
                    .respond(200, {"name" :"get"});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test editing a sample : fail",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        sample_id : "1"
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({"name": "get"});
                controller("edit_sample", data);
                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/samples/1/").respond(500,{});
                $httpBackend.expectPATCH(SERVER_URL +
                    "api/v1/catalog/samples/1/")
                    .respond(500, {});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test creating a sample : success",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        sample_id : null
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({"name": "get"});
                controller("edit_sample", data);
                $httpBackend.expectPOST(SERVER_URL +
                    "api/v1/catalog/samples/")
                    .respond(200, {"name" :"get"});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test creating a sample : fail",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        sample_id : null
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({"name": "get"});
                controller("edit_sample", data);
                $httpBackend.expectPOST(SERVER_URL +
                    "api/v1/catalog/samples/")
                    .respond(500, {});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test creating a samples",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        sample_id : null
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({});
                controller("edit_sample", data);
                scope.save();
            }]);
        });
        /*Sample types test*/
        it("should test edit sample type controller", function () {
            var data = {
                "$stateParams" : {
                    sample_type_id : "1"
                }
            };
            $httpBackend.expectGET(SERVER_URL+
                "api/v1/catalog/sample_types/").respond(200, {results : []});
            controller("sample_types", data);
            $httpBackend.flush();
        });

        it("should test sample_types controller : fail", function () {
            var data = {
                "$stateParams" : {
                    sample_type_id : "1"
                }
            };
            $httpBackend.expectGET(SERVER_URL+
                "api/v1/catalog/sample_types/").respond(500, {});
            controller("sample_types", data);
            $httpBackend.flush();
        });
        it("should test editing a sample_types",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        sample_type_id : "1"
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({
                    "name": "get"
                });
                controller("edit_sample_type", data);
                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/sample_types/1/")
                    .respond(200,{results :[]});
                $httpBackend.expectPATCH(SERVER_URL +
                    "api/v1/catalog/sample_types/1/")
                    .respond(200, {"name" :"get"});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test editing a sample_types : fail",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        sample_type_id : "1"
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({"name": "get"});
                controller("edit_sample_type", data);
                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/sample_types/1/").respond(500,{});
                $httpBackend.expectPATCH(SERVER_URL +
                    "api/v1/catalog/sample_types/1/")
                    .respond(500, {});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test creating a sample_types : success",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        sample_type_id : null
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({"name": "get"});
                controller("edit_sample_type", data);
                $httpBackend.expectPOST(SERVER_URL +
                    "api/v1/catalog/sample_types/")
                    .respond(200, {"name" :"get"});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test creating a sample_types : fail",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        sample_type_id : null
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({"name": "get"});
                controller("edit_sample_type", data);
                $httpBackend.expectPOST(SERVER_URL +
                    "api/v1/catalog/sample_types/")
                    .respond(500, {});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test creating a sample_types",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        sample_type_id : null
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({});
                controller("edit_sample_type", data);
                scope.save();
            }]);
        });
    });
})(window._);
