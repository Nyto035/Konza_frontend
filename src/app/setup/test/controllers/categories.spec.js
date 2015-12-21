(function (_) {
    "use strict";

    describe("Testing the categories controller: ", function () {
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
                            "huqas.setup.categories.controllers."+ctrl,
                            _.extend(data, params));
                    };
                }
            ]);
        });

        it("should test edit categories controller | success", function () {
            var dt = {
                $stateParams: {cat_id: 1}
            };
            var res = {msg: "ok"};
            $httpBackend.expectGET(SERVER_URL+"api/v1/catalog/categories/").respond(200, res);
            controller("main",dt);
            $httpBackend.flush();
        });

        it("should test edit categories controller | fail", function () {
            var dt = {
                $stateParams: {cat: 1}
            };
            $httpBackend.expectGET(SERVER_URL+"api/v1/catalog/categories/").respond(500, {});
            controller("main",dt);
            $httpBackend.flush();
        });
        it("should test editing a category",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        cat_id : "1"
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({
                    "name": "get"
                });
                controller("edit_category", data);
                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/categories/1/").respond(200,{results :[]});
                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/programs/?category=1")
                    .respond(200,{results :[]});
                $httpBackend.expectPATCH(SERVER_URL +
                    "api/v1/catalog/categories/1/")
                    .respond(200, {"name" :"get"});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test editing a category: fail",
            function () {
            inject(["huqas.common.forms.changes", function (formChanges) {
                var data = {
                    "$stateParams" : {
                        cat_id : "1"
                    },
                    "$state" : state,
                    "huqas.common.forms.changes": formChanges
                };
                spyOn(state, "go");
                spyOn(formChanges, "whatChanged").and.returnValue({"name": "get"});
                controller("edit_category", data);
                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/categories/1/").respond(500,{});
                $httpBackend.expectGET(SERVER_URL +
                    "api/v1/catalog/programs/?category=1")
                    .respond(500,{});
                $httpBackend.expectPATCH(SERVER_URL +
                    "api/v1/catalog/categories/1/")
                    .respond(500, {});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test creating a category : success",
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
                spyOn(formChanges, "whatChanged").and.returnValue({"name": "get"});
                controller("edit_category", data);
                $httpBackend.expectPOST(SERVER_URL +
                    "api/v1/catalog/categories/")
                    .respond(200, {"name" :"get"});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test creating a category: fail",
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
                spyOn(formChanges, "whatChanged").and.returnValue({"name": "get"});
                controller("edit_category", data);
                $httpBackend.expectPOST(SERVER_URL +
                    "api/v1/catalog/categories/")
                    .respond(500, {});
                scope.save();
                $httpBackend.flush();
            }]);
        });
        it("should test creating a category",
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
                controller("edit_category", data);
                scope.save();
            }]);
        });
    });
})(window._);
