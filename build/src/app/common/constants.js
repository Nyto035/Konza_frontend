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
    })
    .constant("konza.showcases", {
        showcases : [
            {
                id : 1,
                company_name : "Yitchouse",
                town : "Mombasa",
                industry : "IT",
                contacts : [
                    {
                        type : "phone",
                        contact : "0719333989"
                    },
                    {
                        type : "email",
                        contact : "yitchouse@inc.io"
                    },
                    {
                        type : "address",
                        contact : "Box 80100-83931, Mombasa, White House, Moi Avenue"
                    }
                ],
                idea : "This is an agriculture based company specialized"+
                    "with green houses for growing commercial plantations "+
                    "with green houses for growing commercial plantations "+
                    "with green houses for growing commercial plantations "+
                    "and rearing of fish",
                overview : "This is an IT company specialized with "+
                "developing software inline with financial industry. From"+
                "ERPs to Accounting specific software"
            },
            {
                id : 2,
                company_name : "Owaga",
                town : "Nairobi",
                industry : "IT",
                overview : "This is an IT company specialized with "+
                "developing software inline with financial industry. From "+
                "ERPs to Accounting specific software"
            },
            {
                id : 3,
                company_name : "TMNT Limited",
                town : "Nairobi",
                industry : "Agricultural",
                overview : "This is an agriculture based company specialized"+
                    "with green houses for growing commercial plantations."+
                    "and rearing of fish"
            }
        ]
    });
})(window.angular);
