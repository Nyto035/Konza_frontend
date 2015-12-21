(function (angular, _) {
    "use strict";

    /**
     * @ngdoc module
     *
     * @name huqas.results.controllers
     *
     * @description
     * Controllers for the results related views
     *
     */
    angular.module("huqas.results.controllers", [
        "ui.router",
        "huqas.events.services",
        "huqas.auth.services"
    ])

    /**
     * @ngdoc controller
     *
     * @name huqas.results.controllers.results
     *
     * @description
     * Controller for listing the results
     * flow)
     */
    .controller("huqas.results.controllers.results",
        ["$scope", "huqas.events.wrappers", "$state",
        "huqas.auth.services.login", "$stateParams",
        function ($scope, wrappers, $state, loginService, $stateParams) {
            $scope.loggedInUser = loginService.getUser();
            wrappers.open_event.list()
            .success(function (data){
                $scope.test_event = data;
            })
            .error(function (data) {
                $scope.errors = data;
            });
            $scope.lab_programs = [];
            $scope.labprog_id = $stateParams.program_id;
            $scope.program_samples = true;
            $scope.samples = {
                sample_a : "",
                sample_b : "",
                sample_c : "",
                sample_d : "",
                sample_e : ""
            };
            /*Change after review*/
            $scope.enrolled = true;
            $scope.enrollments = [];
            $scope.lab_id = $scope.loggedInUser.lab_id;
            $scope.isQuantitative = function (sub_obj) {
                wrappers.analytes.get(sub_obj.analyte)
                .success(function (data) {
                    $scope.is_quantitative = data.is_quantitative;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
            };
            $scope.labSubscriptions = function () {
                $scope.lab_program = _.findWhere($scope.lab_programs,
                {"id" : parseInt($scope.labprog_id, 10)});
                wrappers.lab_enrollments.filter({"lab_program" :$scope.labprog_id})
                .success(function (data) {
                    $scope.enrollments = data.results;
                    $scope.enrolled = $scope.enrollments.length ? true : false;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
                wrappers.programs.get($scope.lab_program.program)
                .success(function (data) {
                    $scope.program = data;
                    _.each($scope.program.samples, function (a_sample) {
                        switch(a_sample.sample_name) {
                        case "A":
                            $scope.samples.sample_a = a_sample.id;
                            break;
                        case "B":
                            $scope.samples.sample_b = a_sample.id;
                            break;
                        case "C":
                            $scope.samples.sample_c = a_sample.id;
                            break;
                        case "D":
                            $scope.samples.sample_d = a_sample.id;
                            break;
                        case "E":
                            $scope.samples.sample_e = a_sample.id;
                            break;
                        }
                    });
                })
                .error(function (data) {
                    $scope.errors = data;
                });
            };
            $scope.confirmSubscriptions = function (subscriptions) {
                var post_counter = 1;
                _.each(subscriptions, function (a_sub) {
                    if(post_counter <= $scope.counter) {
                        a_sub.test_event = $scope.test_event.id;
                        wrappers.lab_enrollments.create(a_sub)
                        .success(function () {
                            post_counter ++;
                            if(post_counter >= $scope.counter){
                                $state.go("results.programs.program_samples");
                            }
                        })
                        .error(function (data) {
                            $scope.errors = data;
                        });
                    }
                });
            };
            $scope.checker = ($state.current.name.indexOf("results.programs") >= 0);
            wrappers.lab_programs.filter({"lab" : $scope.lab_id})
            .success(function (data) {
                $scope.lab_programs = data.results;
                $scope.labprog_id = $scope.labprog_id ?
                    $scope.labprog_id : $scope.lab_programs[0].id;
                wrappers.lab_subscriptions.filter({"lab_program" :
                    $scope.labprog_id})
                .success(function (data) {
                    $scope.subscriptions = data.results;
                    $scope.labSubscriptions();
                    $scope.isQuantitative($scope.subscriptions[0]);
                    $scope.counter = $scope.subscriptions.length;
                    if(!$scope.checker){
                        $state.go("results.programs",
                        {program_id : $scope.labprog_id});
                    }
                })
                .error(function (data) {$scope.errors = data;});
            })
            .error(function (data) {
                $scope.errors = data;
            });
        }]
    )
    .controller("huqas.results.controllers.enrollments", ["$scope",
        "huqas.events.wrappers", "$state",
        function ($scope, wrappers, $state) {
            $scope.reverseEnrollment = function () {
                $scope.reversal_obj = {
                    "lab_program" : $scope.lab_program.id,
                    "test_event" : $scope.$parent.test_event.id,
                    "reverse_enrollment" : true
                };

                wrappers.reverse_enrollments.create($scope.reversal_obj)
                .success(function () {
                    $scope.$parent.enrolled = false;
                    $state.go("results.programs",
                        {program_id : $scope.$parent.lab_program.id, reload : true});
                })
                .error(function (data) {
                    $scope.errors = data;
                });
            };
            $scope.$watch("lab_program", function (lab_prog) {
                if(_.isUndefined(lab_prog)) {
                    return;
                }
                wrappers.lab_enrollments.filter({"lab_program" :
                    $scope.$parent.lab_program.id})
                .success(function (data) {
                    $scope.$parent.enrollments = data.results;
                    $scope.$parent.enrolled = $scope.enrollments.length ? true : false;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
            });
        }
    ])
    .controller("huqas.results.controllers.quantitative_results", ["$scope",
        "huqas.events.wrappers",
        function ($scope, wrappers) {
            $scope.$watch("enrollments", function (enrollments) {
                if(_.isUndefined(enrollments)){
                    return;
                }
                $scope.results = $scope.enrollments;
                _.each($scope.results, function (result) {
                    var analyte_obj = _.findWhere($scope.subscriptions,
                        {configuration : result.configuration});
                    result.analyte_name = analyte_obj.analyte_name;
                    result.unit_name = analyte_obj.unit_name;
                });
                wrappers.result_codes.list()
                .success(function (data) {
                    $scope.result_codes = data.results;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
            });
        }
    ])
    .controller("huqas.results.controllers.program_samples", ["$scope",
        "huqas.events.wrappers", "$state",
        function ($scope, wrappers, $state) {
            $scope.$parent.program_samples = false;
            $scope.$watch("lab_program", function (lab_prog) {
                if(_.isUndefined(lab_prog)) {
                    return;
                }
                wrappers.programs.get($scope.$parent.lab_program.program)
                .success(function (data) {
                    $scope.a_program = data;
                    $scope.sample_counter = $scope.a_program.samples.length;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
            });
            $scope.sampleConditions = function () {
                var post_counter = 1;
                _.each($scope.a_program.samples, function (sample) {
                    sample.lab = $scope.$parent.lab_id;
                    sample.test_event = $scope.$parent.test_event.id;
                    sample.program_sample = sample.id;
                    if(post_counter <= $scope.sample_counter) {
                        wrappers.sample_conditions.create(sample)
                        .success(function () {
                            post_counter ++;
                            if(post_counter >= $scope.sample_counter){
                                $state.go("results.programs", {program_id :
                                    $scope.$parent.lab_program.id,
                                    reload : true});
                            }
                        })
                        .error(function (data) {
                            $scope.$parent.errors = data;
                        });
                    }
                });
            };
        }
    ]);
})(window.angular, window._);
