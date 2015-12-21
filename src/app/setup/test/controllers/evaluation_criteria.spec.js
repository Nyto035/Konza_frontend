(function (_) {
    "use strict";

    describe("Testing the evaluation criteria controllers: ", function () {
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
                            "huqas.setup.evaluation_criteria.controllers."+
                            ctrl, _.extend(data, params));
                    };
                }
            ]);
        });

        it("should test edit eval critetrion controller", function () {
            var dt = {
                $stateParams: {criterion_id: 1}
            };
            var res = {msg: "ok"};
            $httpBackend.expectGET(SERVER_URL+"api/v1/catalog/"+
                "evaluation_criteria/").respond(200, res);
            controller("main",dt);
            $httpBackend.flush();
        });

        it("should test edit eval criterion controller", function () {
            var dt = {
                $stateParams: {criterion_id: 1}
            };
            $httpBackend.expectGET(SERVER_URL+"api/v1/catalog/"+
                "evaluation_criteria/").respond(500, {});
            controller("main",dt);
            $httpBackend.flush();
        });
        it("should test editing an evaluation criterion",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        criterion_id : "1"
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({
                    "name": "get"
                });
                controller("edit_evaluation_criterion", data);
                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/analytes/")
                    .respond(200,{results :[]});

                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/evaluation_criteria/1/")
                    .respond(200,{results :[]});

                $httpBackend.expectPATCH(SERVER_URL +
                    "api/v1/catalog/evaluation_criteria/1/")
                    .respond(200, {"name" :"get"});
                scope.limitChecker("CM");
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test editing an evaluation criterion: fail",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        criterion_id : "1"
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({"name": "get"});
                controller("edit_evaluation_criterion", data);
                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/analytes/")
                    .respond(500,{});

                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/evaluation_criteria/1/").respond(500,{});

                $httpBackend.expectPATCH(SERVER_URL +
                    "api/v1/catalog/evaluation_criteria/1/")
                    .respond(500, {});
                scope.limitChecker("FV");
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test creating an evalutaion criterion : success",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        criterion_id : null
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({"name": "get"});
                controller("edit_evaluation_criterion", data);
                $httpBackend.expectPOST(SERVER_URL +
                    "api/v1/catalog/evaluation_criteria/")
                    .respond(200, {"name" :"get"});
                scope.limitChecker("PC");
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test creating an evaluation criterion: fail",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        criterion_id : null
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({"name": "get"});
                controller("edit_evaluation_criterion", data);
                $httpBackend.expectPOST(SERVER_URL +
                    "api/v1/catalog/evaluation_criteria/")
                    .respond(500, {});
                scope.save();
                scope.limitChecker("SD");
                $httpBackend.flush();
            }]);
        });
        it("should test creating an evaluation criterion : no call",
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
                controller("edit_evaluation_criterion", data);
                scope.save();
            }]);
        });
    });
})(window._);
