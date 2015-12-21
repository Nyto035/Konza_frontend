(function (_) {
    "use strict";

    describe("Testing the reagents controller: ", function () {
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
        it("should test edit reagents controller", function () {
            var data = {
                "$stateParams" : {
                    reagent_id : "1"
                }
            };
            $httpBackend.expectGET(SERVER_URL+
                "api/v1/catalog/reagents/").respond(200, {results : []});
            controller("reagents", data);
            $httpBackend.flush();
        });

        it("should test reagents controller : fail", function () {
            var data = {
                "$stateParams" : {
                    reagent_id : "1"
                }
            };
            $httpBackend.expectGET(SERVER_URL+
                "api/v1/catalog/reagents/").respond(500, {});
            controller("reagents", data);
            $httpBackend.flush();
        });
        it("should test editing a reagent",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        reagent_id : "1"
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({
                    "name": "get"
                });
                controller("edit_reagent", data);
                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/manufacturers/")
                    .respond(200, {results : []});
                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/reagents/1/")
                    .respond(200,{results :[]});
                $httpBackend.expectPATCH(SERVER_URL +
                    "api/v1/catalog/reagents/1/")
                    .respond(200, {"name" :"get"});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test editing a reagent: fail",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        reagent_id : "1"
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({"name": "get"});
                controller("edit_reagent", data);
                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/manufacturers/")
                    .respond(500, {});
                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/reagents/1/").respond(500,{});
                $httpBackend.expectPATCH(SERVER_URL +
                    "api/v1/catalog/reagents/1/")
                    .respond(500, {});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test creating a reagents : success",
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
                controller("edit_reagent", data);
                $httpBackend.expectPOST(SERVER_URL +
                    "api/v1/catalog/reagents/")
                    .respond(200, {"name" :"get"});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test creating a reagent : fail",
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
                controller("edit_reagent", data);
                $httpBackend.expectPOST(SERVER_URL +
                    "api/v1/catalog/reagents/")
                    .respond(500, {});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test creating a reagent",
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
                spyOn(formChanges, "whatChanged").and.returnValue({});
                controller("edit_reagent", data);
                scope.save();
            }]);
        });
    });
})(window._);
