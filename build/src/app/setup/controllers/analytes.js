(function (angular, _) {
    "use strict";

    angular.module("huqas.setup.analyte_setup.controllers", [
        "ui.router",
        "huqas.events.services",
        "huqas.common.forms"
    ])

    .controller("huqas.setup.analyte_setup.controllers.main", ["$scope",
        function ($scope) {
            $scope.view = "Analyte setup";
        }
    ])
    .controller("huqas.setup.analyte_setup.controllers.manufacturers",
        ["$scope", "huqas.events.wrappers",
        function ($scope, wrappers) {
            wrappers.manufacturers.list()
            .success(function (data) {
                $scope.manufacturers = data.results;
            })
            .error(function (data) {
                $scope.errors = data;
            });
        }
    ])
    .controller("huqas.setup.analyte_setup.controllers.edit_manufacturer",
        ["$scope", "huqas.events.wrappers", "huqas.common.forms.changes",
        "$state", "$stateParams",
        function ($scope, wrappers, forms, $state, $stateParams) {
            $scope.manu_id = $stateParams.manu_id;
            $scope.edit_view = $scope.manu_id ? true : false;
            if($scope.edit_view) {
                wrappers.manufacturers.get($scope.manu_id)
                .success(function (data) {
                    $scope.manufacturer = data;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
            }
            $scope.save = function (frm) {
                var changed = forms.whatChanged(frm);
                if (! _.isEmpty(changed)) {
                    if($scope.edit_view){
                        wrappers.manufacturers.update($scope.manu_id, changed)
                        .success(function () {
                            $state.go("analyte_setup.manufacturers", {reload: true});
                        })
                        .error(function (data) {
                            $scope.errors = data;
                        });
                    }else{
                        wrappers.manufacturers.create($scope.manufacturer)
                        .success(function (){
                            $state.go("analyte_setup.manufacturers");
                        })
                        .error(function (data) {
                            $scope.errors = data;
                        });
                    }
                }
            };
        }
    ])
    /*Method managements controllers*/
    .controller("huqas.setup.analyte_setup.controllers.methods",
        ["$scope", "huqas.events.wrappers",
        function ($scope, wrappers) {
            wrappers.methods.list()
            .success(function (data) {
                $scope.methods = data.results;
            })
            .error(function (data) {
                $scope.errors = data;
            });
        }
    ])
    .controller("huqas.setup.analyte_setup.controllers.edit_method",
        ["$scope", "huqas.events.wrappers", "huqas.common.forms.changes",
        "$state", "$stateParams",
        function ($scope, wrappers, forms, $state, $stateParams) {
            $scope.method_id = $stateParams.method_id;
            $scope.edit_view = $scope.method_id ? true : false;
            if($scope.edit_view) {
                wrappers.methods.get($scope.method_id)
                .success(function (data) {
                    $scope.method = data;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
            }
            $scope.save = function (frm) {
                var changed = forms.whatChanged(frm);
                if (! _.isEmpty(changed)) {
                    if($scope.edit_view){
                        wrappers.methods.update($scope.method_id, changed)
                        .success(function () {
                            $state.go("analyte_setup.methods", {reload: true});
                        })
                        .error(function (data) {
                            $scope.errors = data;
                        });
                    }else{
                        wrappers.methods.create($scope.method)
                        .success(function (){
                            $state.go("analyte_setup.methods");
                        })
                        .error(function (data) {
                            $scope.errors = data;
                        });
                    }
                }
            };
        }
    ])
    /*Reagents management controllers*/
    .controller("huqas.setup.analyte_setup.controllers.reagents",
        ["$scope", "huqas.events.wrappers",
        function ($scope, wrappers) {
            wrappers.reagents.list()
            .success(function (data) {
                $scope.reagents = data.results;
            })
            .error(function (data) {
                $scope.errors = data;
            });
        }
    ])
    .controller("huqas.setup.analyte_setup.controllers.edit_reagent",
        ["$scope", "huqas.events.wrappers", "huqas.common.forms.changes",
        "$state", "$stateParams",
        function ($scope, wrappers, forms, $state, $stateParams) {
            $scope.reagent_id = $stateParams.reagent_id;
            $scope.edit_view = $scope.reagent_id ? true : false;
            /*get list of all manufacturers*/
            wrappers.manufacturers.list()
            .success(function (data) {
                $scope.manufacturers = data.results;
            })
            .error(function (data) {
                $scope.errors = data;
            });
            if($scope.edit_view) {
                wrappers.reagents.get($scope.reagent_id)
                .success(function (data) {
                    $scope.reagent = data;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
            }
            $scope.save = function (frm) {
                var changed = forms.whatChanged(frm);
                if (! _.isEmpty(changed)) {
                    if($scope.edit_view){
                        wrappers.reagents.update($scope.reagent_id, changed)
                        .success(function () {
                            $state.go("analyte_setup.reagents",{reload: true});
                        })
                        .error(function (data) {
                            $scope.errors = data;
                        });
                    }else{
                        wrappers.reagents.create($scope.reagent)
                        .success(function (){
                            $state.go("analyte_setup.reagents");
                        })
                        .error(function (data) {
                            $scope.errors = data;
                        });
                    }
                }
            };
        }
    ])
    /*Analyte management controllers*/
    .controller("huqas.setup.analyte_setup.controllers.analytes",
        ["$scope", "huqas.events.wrappers",
        function ($scope, wrappers) {
            wrappers.analytes.list()
            .success(function (data) {
                $scope.analytes = data.results;
            })
            .error(function (data) {
                $scope.errors = data;
            });
        }
    ])
    .controller("huqas.setup.analyte_setup.controllers.edit_analyte",
        ["$scope", "huqas.events.wrappers", "huqas.common.forms.changes",
        "$state", "$stateParams",
        function ($scope, wrappers, forms, $state, $stateParams) {
            $scope.analyte_id = $stateParams.analyte_id;
            $scope.edit_view = $scope.analyte_id ? true : false;
            /*get list of all programs*/
            wrappers.programs.list()
            .success(function (data) {
                $scope.programs = data.results;
            })
            .error(function (data) {
                $scope.errors = data;
            });
            /*get list of all units*/
            wrappers.units.list()
            .success(function (data) {
                $scope.units = data.results;
            })
            .error(function (data) {
                $scope.errors = data;
            });
            if($scope.edit_view) {
                wrappers.analytes.get($scope.analyte_id)
                .success(function (data) {
                    $scope.analyte = data;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
            }
            $scope.save = function (frm) {
                var changed = forms.whatChanged(frm);
                if (! _.isEmpty(changed)) {
                    if($scope.edit_view){
                        wrappers.analytes.update($scope.analyte_id, changed)
                        .success(function () {
                            $state.go("analyte_setup.analytes",{reload: true});
                        })
                        .error(function (data) {
                            $scope.errors = data;
                        });
                    }else{
                        wrappers.analytes.create($scope.analyte)
                        .success(function (){
                            $state.go("analyte_setup.analytes");
                        })
                        .error(function (data) {
                            $scope.errors = data;
                        });
                    }
                }
            };
        }
    ]);
})(window.angular, window._);
