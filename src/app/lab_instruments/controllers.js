(function (angular, _) {
    "use strict";

    angular.module("huqas.lab_instruments.controllers", [
        "ui.router",
        "huqas.events.services",
        "huqas.auth.services",
        "huqas.common.forms"
    ])

    .controller("huqas.lab_instruments.controllers.main", ["$scope",
        "huqas.events.wrappers", "huqas.auth.services.login",
        function ($scope, wrappers, loginService) {
            /*TODO replace hardcoded code with actual lab ID*/
            $scope.loggedInUser = loginService.getUser();
            $scope.lab_id = $scope.loggedInUser.lab_id;
            $scope.filters = {"lab" : $scope.lab_id};
            wrappers.lab_instruments.filter({"lab" : $scope.lab_id})
            .success(function (data) {
                $scope.lab_instruments = data.results;
            })
            .error(function (data) {
                $scope.errors = data;
            });
        }
    ])
    .controller("huqas.lab_instruments.controllers.edit_instrument", ["$scope",
        "huqas.events.wrappers", "huqas.common.forms.changes", "$state",
        "$stateParams", "huqas.auth.services.login",
        function ($scope, wrappers, forms, $state, $stateParams,loginService) {
            $scope.select_values = {};
            $scope.loggedInUser = loginService.getUser();
            $scope.instrument_id = $stateParams.instrument_id;
            $scope.lab_instrument = {
                lab : $scope.loggedInUser.lab_id
            };
            $scope.edit_view = $scope.instrument_id ? true : false;

            /*Listing all existing manufacturers*/
            wrappers.manufacturers.filter({page_size:500})
            .success(function (data) {
                $scope.manufacturers = data.results;
            })
            .error(function (data) {
                $scope.errors = data;
            });

            //Get instruments by manufacturer
            $scope.manufacturerInstruments = function (manu_id) {
                wrappers.instruments.filter({manufacturer: manu_id})
                .success(function (data) {
                    $scope.instruments = data.results;
                })
                .error(function (data) {
                    $scope.errors = data;
                });
            };

            //Get models by instrument
            $scope.instrumentModels = function (_id) {
                var instrument = _.filter($scope.instruments,{id:_id});
                $scope.instrument = instrument[0];
            };

            if($scope.edit_view) {
                wrappers.lab_instruments.get($scope.instrument_id)
                .success(function (data) {
                    $scope.lab_instrument = data;
                    $scope.select_values = {
                        manufacturer:{
                            manufacturer_id: $scope.lab_instrument.manufacturer_id,
                            manufacturer_name: $scope.lab_instrument.manufacturer_name
                        },
                        instrument:{
                            instrument_id: $scope.lab_instrument.instrument_id,
                            instrument_name: $scope.lab_instrument.instrument_name
                        },
                        instrument_model:{
                            instrument_model: $scope.lab_instrument.instrument_model,
                            instrument_model_name: $scope.lab_instrument.instrument_model_name
                        }
                    };

                    /*Listing instruments by manufacturer*/
                    wrappers.instruments.filter({manufacturer:data.manufacturer_id})
                    .success(function (data) {
                        $scope.instruments = data.results;
                    })
                    .error(function (data) {
                        $scope.errors = data;
                    });
                })
                .error(function (data) {
                    $scope.errors = data;
                });
            } else {
                $scope.lab_instrument.active = true;
            }
            $scope.save = function (frm) {
                var changed = forms.whatChanged(frm);
                if (! _.isEmpty(changed)) {
                    if($scope.edit_view){
                        wrappers.lab_instruments.update($scope.instrument_id,
                        changed)
                        .success(function () {
                            $state.go("lab_instruments");
                        })
                        .error(function (data) {
                            $scope.errors = data;
                        });
                    }else{
                        wrappers.lab_instruments
                        .create(_.extend(changed,{lab: $scope.loggedInUser.lab_id}))
                        .success(function (){
                            $state.go("lab_instruments");
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
