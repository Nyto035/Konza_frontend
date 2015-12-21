(function (_) {
    "use strict";

    describe("Testing the analytes controller: ", function () {
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
        it("should test edit analytes controller", function () {
            var data = {
                "$stateParams" : {
                    analyte_id : "1"
                }
            };
            $httpBackend.expectGET(SERVER_URL+
                "api/v1/catalog/analytes/").respond(200, {results : []});
            controller("analytes", data);
            $httpBackend.flush();
        });

        it("should test analytes controller : fail", function () {
            var data = {
                "$stateParams" : {
                    analyte_id : "1"
                }
            };
            $httpBackend.expectGET(SERVER_URL+
                "api/v1/catalog/analytes/").respond(500, {});
            controller("analytes", data);
            $httpBackend.flush();
        });
        it("should test editing a analyte",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        analyte_id : "1"
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({
                    "name": "get"
                });
                controller("edit_analyte", data);
                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/programs/")
                    .respond(200, {results : []});
                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/units/")
                    .respond(200, {results : []});
                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/analytes/1/")
                    .respond(200,{results :[]});
                $httpBackend.expectPATCH(SERVER_URL +
                    "api/v1/catalog/analytes/1/")
                    .respond(200, {"name" :"get"});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test editing a analyte : fail",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        analyte_id : "1"
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({"name": "get"});
                controller("edit_analyte", data);
                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/programs/")
                    .respond(500, {});
                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/units/")
                    .respond(500, {});
                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/analytes/1/").respond(500,{});
                $httpBackend.expectPATCH(SERVER_URL +
                    "api/v1/catalog/analytes/1/")
                    .respond(500, {});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test creating a analyte : success",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        analyte_id : null
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({"name": "get"});
                controller("edit_analyte", data);
                $httpBackend.expectPOST(SERVER_URL +
                    "api/v1/catalog/analytes/")
                    .respond(200, {"name" :"get"});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test creating a analyte : fail",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        reagent_id : null
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({"name": "get"});
                controller("edit_analyte", data);
                $httpBackend.expectPOST(SERVER_URL +
                    "api/v1/catalog/analytes/")
                    .respond(500, {});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test creating a analyte",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        analyte_id : null
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({});
                controller("edit_analyte", data);
                scope.save();
            }]);
        });
    });
})(window._);
