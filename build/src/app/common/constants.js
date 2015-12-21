(function (angular) {
    "use strict";

    angular.module("huqas.common.constants", [])
    .constant("api_version","v1")
    .constant("huqas.error.messages", {
        errors : "Sorry, ",
        connection : "a connection error occured",
        data : "failed to save updates",
        contacts : "failed to update contacts",
        fetch_contacts : "failed to fetch contacts"
    })
    .constant("huqas.drug.classifications", {
        classifications : [
            {
                display_value : "Group A",
                value : "A"
            },
            {
                display_value : "Group B",
                value : "B"
            },
            {
                display_value : "Group C",
                value : "C"
            },
            {
                display_value : "Group U",
                value : "U"
            }
        ]
    })
    .constant("huqas.evaluation_criteria.limits", {
        limits : [
            {
                display_value : "SD",
                value : "SD"
            },
            {
                display_value : "Percentage of Target",
                value : "PC"
            },
            {
                display_value : "Fixed Value",
                value : "FV"
            },
            {
                display_value : "Combination max limit",
                value : "CM"
            }
        ]
    });
})(window.angular);
