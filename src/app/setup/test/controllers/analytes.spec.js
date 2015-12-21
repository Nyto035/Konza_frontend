(function (_) {
    "use strict";

    describe("Testing the analyte_setup controller: ", function () {
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
                            "huqas.setup.analyte_setup.controllers."+ctrl,
                            _.extend(data, params));
                    };
                }
            ]);
        });
        it("should test main controller", function () {
            controller("main");
            expect(scope.view).toEqual("Analyte setup");
        });
        it("should test edit manufacturer controller", function () {
            var data = {
                "$stateParams" : {
                    manu_id : "1"
                }
            };
            $httpBackend.expectGET(SERVER_URL+
                "api/v1/catalog/manufacturers/").respond(200, {results : []});
            controller("manufacturers", data);
            $httpBackend.flush();
        });

        it("should test manufacturer controller : fail", function () {
            var data = {
                "$stateParams" : {
                    manu_id : "1"
                }
            };
            $httpBackend.expectGET(SERVER_URL+
                "api/v1/catalog/manufacturers/").respond(500, {});
            controller("manufacturers", data);
            $httpBackend.flush();
        });
        it("should test editing a manufacturer",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        manu_id : "1"
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({
                    "name": "get"
                });
                controller("edit_manufacturer", data);
                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/manufacturers/1/")
                    .respond(200,{results :[]});
                $httpBackend.expectPATCH(SERVER_URL +
                    "api/v1/catalog/manufacturers/1/")
                    .respond(200, {"name" :"get"});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test editing a manufacturer: fail",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        manu_id : "1"
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({"name": "get"});
                controller("edit_manufacturer", data);
                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/manufacturers/1/").respond(500,{});
                $httpBackend.expectPATCH(SERVER_URL +
                    "api/v1/catalog/manufacturers/1/")
                    .respond(500, {});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test creating a manufacturer : success",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        manu_id : null
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({"name": "get"});
                controller("edit_manufacturer", data);
                $httpBackend.expectPOST(SERVER_URL +
                    "api/v1/catalog/manufacturers/")
                    .respond(200, {"name" :"get"});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test creating a manufacturer: fail",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        manu_id : null
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({"name": "get"});
                controller("edit_manufacturer", data);
                $httpBackend.expectPOST(SERVER_URL +
                    "api/v1/catalog/manufacturers/")
                    .respond(500, {});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test creating a manufacturer",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        manu_id : null
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({});
                controller("edit_manufacturer", data);
                scope.save();
            }]);
        });
    });
})(window._);
