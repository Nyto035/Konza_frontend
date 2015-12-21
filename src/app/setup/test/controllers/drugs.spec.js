(function (_) {
    "use strict";

    describe("Testing the drugs controller: ", function () {
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
                            "huqas.setup.drugs.controllers."+ctrl,
                            _.extend(data, params));
                    };
                }
            ]);
        });

        it("should test edit drugs controller | success", function () {
            var dt = {
                $stateParams: {drug_id: 1}
            };
            var res = {msg: "ok"};
            $httpBackend.expectGET(SERVER_URL+"api/v1/catalog/drugs/").respond(200, res);
            controller("main",dt);
            $httpBackend.flush();
        });

        it("should test edit drugs controller | fail", function () {
            var dt = {
                $stateParams: {drug_id: 1}
            };
            $httpBackend.expectGET(SERVER_URL+"api/v1/catalog/drugs/").respond(500, {});
            controller("main",dt);
            $httpBackend.flush();
        });
        it("should test editing a drug",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        drug_id : "1"
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({
                    "name": "get"
                });
                controller("edit_drug", data);
                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/drugs/1/").respond(200,{results :[]});
                $httpBackend.expectPATCH(SERVER_URL +
                    "api/v1/catalog/drugs/1/")
                    .respond(200, {"name" :"get"});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test editing a drug: fail",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        drug_id : "1"
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({"name": "get"});
                controller("edit_drug", data);
                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/drugs/1/").respond(500,{});
                $httpBackend.expectPATCH(SERVER_URL +
                    "api/v1/catalog/drugs/1/")
                    .respond(500, {});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test creating a drug : success",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        drug_id : null
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({"name": "get"});
                controller("edit_drug", data);
                $httpBackend.expectPOST(SERVER_URL +
                    "api/v1/catalog/drugs/")
                    .respond(200, {"name" :"get"});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test creating a drug: fail",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        drug_id : null
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({"name": "get"});
                controller("edit_drug", data);
                $httpBackend.expectPOST(SERVER_URL +
                    "api/v1/catalog/drugs/")
                    .respond(500, {});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test creating a drug",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        drug_id : null
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({});
                controller("edit_drug", data);
                scope.save();
            }]);
        });
    });
})(window._);
