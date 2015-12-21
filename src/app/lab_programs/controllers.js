(function (angular,_) {
    "use strict";

    /**
     * @ngdoc module
     *
     * @name huqas.programs.controllers
     *
     * @description
     * Controllers for the programs related views
     *
     */
    angular.module("huqas.lab_programs.controllers", [
        "ui.router"
    ])

    /**
     * @ngdoc controller
     *
     * @name huqas.programs.controllers.programs
     *
     * @description
     * Controller for listing the programs
     * flow)
     */
    .controller("huqas.lab_programs.controllers.lab_programs",
        ["$scope","labsApi","$window","$stateParams",
        function ($scope,labsApi,$window,$stateParams) {
            $scope.form_present = false;
            var user =JSON.parse($window.localStorage.getItem("auth.user"));
            labsApi.lab_programs.filter({lab:user.lab_id})
            .success(function (data) {
                $scope.lab_programs = data.results;

                if(!_.isUndefined($stateParams.labprogram_id)){
                    $scope.lab_program = $stateParams.labprogram_id;
                    var event = _.findIndex(data.results, {id:$scope.lab_program});
                    var lab_prog  = _.findWhere($scope.lab_programs,{id:$scope.lab_program});
                    $scope.program = lab_prog.program;
                    $scope.css = event;
                    labsApi.subscriptions.filter({lab_program:$stateParams.labprogram_id})
                    .success(function (data) {
                        $scope.subscriptions = data.results;
                    })
                    .error(function (e) {
                        $scope.errors = e;
                    });
                } else {
                    $scope.lab_program= $scope.lab_programs[0].id;
                    $scope.program= $scope.lab_programs[0].program;
                    labsApi.subscriptions.filter({lab_program:$scope.lab_programs[0].id})
                    .success(function (data) {
                        $scope.subscriptions = data.results;
                    })
                    .error(function (e) {
                        $scope.errors = e;
                    });
                }


            })
            .error(function (e) {
                $scope.errors = e;
            });
            $scope.css = 0;

            $scope.getSubscriptions = function (id, program, event) {
                $scope.form_present = false;
                $scope.lab_program = id;
                $scope.program= program;
                $scope.css = event;
                labsApi.subscriptions.filter({lab_program:id})
                .success(function (data) {
                    $scope.subscriptions = data.results;
                })
                .error(function (e) {
                    $scope.errors = e;
                });
            };
        }]
    )
    .controller("huqas.lab_programs.controllers.edit_subscription", ["$scope",
        "labsApi", "huqas.common.forms.changes", "huqas.events.wrappers", "$state",
        "$stateParams","$window",
        function ($scope, labsApi, forms, wrappers, $state, $stateParams,$window) {
            $scope.$parent.form_present = true;
            var user =JSON.parse($window.localStorage.getItem("auth.user"));
            $scope.select_values = {};
            $scope.subscription_id = $stateParams.subscription_id;
            $scope.lab_program_id = $stateParams.lab_program_id;
            $scope.program_id = $stateParams.program_id;
            $scope.edit_view = $scope.subscription_id ? true : false;
            wrappers.analytes.filter({program:$scope.program_id})
            .success(function (data) {
                $scope.analytes = data.results;
            })
            .error(function (err) {
                $scope.errors = err;
            });
            labsApi.lab_instruments.filter({lab:user.lab_id})
            .success(function (data) {
                $scope.analyzers = data.results;
            })
            .error(function (err) {
                $scope.errors = err;
            });
            $scope.getConfigurationsAnalyte = function (id) {
                wrappers.configurations.filter({analyte:id})
                .success(function (data) {
                    $scope.configurations = data.results;
                })
                .error(function (err) {
                    $scope.errors = err;
                });
                wrappers.unit_conversions.filter({analyte:id})
                .success(function (data) {
                    $scope.units = data.results;
                })
                .error(function (err) {
                    $scope.errors = err;
                });
            };
            $scope.getConfigurationsAnalyteReagent = function (_analyte,_reagent) {
                wrappers.configurations.filter({analyte:_analyte,reagent:_reagent})
                .success(function (data) {
                    $scope.configurations = data.results;
                })
                .error(function (err) {
                    $scope.errors = err;
                });
            };
            if($scope.edit_view) {
                labsApi.subscriptions.get($scope.subscription_id)
                .success(function (data) {
                    $scope.subscription = data;
                    wrappers.unit_conversions.filter({analyte:$scope.subscription.analyte})
                    .success(function (data) {
                        $scope.units = data.results;
                    })
                    .error(function (err) {
                        $scope.errors = err;
                    });
                    $scope.select_values = {
                        analyte: {
                            id: $scope.subscription.analyte,
                            analyte_name: $scope.subscription.analyte_name
                        },
                        unit: {
                            unit: $scope.subscription.unit,
                            name: $scope.subscription.unit_name
                        },
                        analyzer: {
                            analyzer: $scope.subscription.analyzer,
                            analyzer_name: $scope.subscription.analyzer_name
                        },
                        reagent: {
                            reagent_name: $scope.subscription.reagent_name
                        },
                        method: {
                            method: $scope.subscription.method,
                            method_name: $scope.subscription.method_name
                        }
                    };
                })
                .error(function (data) {
                    $scope.errors = data;
                });
            } else{
                $scope.subscription = {
                    "is_active": true
                };
            }
            $scope.save = function (frm) {
                var changed = forms.whatChanged(frm);
                if (! _.isEmpty(changed)) {
                    if($scope.edit_view){
                        labsApi.subscriptions.update($scope.subscription_id, changed)
                        .success(function () {
                            $scope.$parent.form_present = false;
                            $state.go("lab_programs",{},{reload:true});
                        })
                        .error(function (data) {
                            $scope.errors = data;
                        });
                    }else{
                        var sub = {
                            configuration: $scope.configurations[0].id,
                            lab_program:$scope.lab_program_id
                        };
                        labsApi.subscriptions.create(_.extend(changed,sub))
                        .success(function (){
                            $scope.$parent.form_present = false;
                            $state.go("lab_programs",{},{reload:true});
                        })
                        .error(function (er) {
                            $scope.errors = er;
                        });
                    }
                }
            };
        }
    ]);
})(window.angular,window._);
