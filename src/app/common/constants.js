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
    .constant("konza.chat_list", {
        list : [
            {
                id : "1",
                name : "Peter Otieno",
                messages : [
                    {
                        mine : "Hello this is a message from me to my bro."+
                        " I wrote this message while I was making the Konza"+
                        "application to be utilized",
                        mine_time : "20/02/2015 at 09:00",
                        other : "Now this is yet another message from me "+
                        " bro. I write this message just wondering stuff ",
                        other_time: "20/02/2015 at 09:03"
                    },
                    {
                        mine : "Now this is yet another message from me "+
                        " bro. I write this message just wondering stuff ",
                        mine_time : "20/02/2015 at 09:00",
                        other : "Hello how have you been",
                        other_time: "20/02/2015 at 09:03"
                    },
                    {
                        other : "Hello this is a message from me to my bro."+
                        " I wrote this message while I was making the Konza"+
                        "application to be utilized",
                        other_time : "20/02/2015 at 09:00",
                        mine : "Now this is yet another message from me "+
                        " bro. I write this message just wondering stuff ",
                        mine_time: "20/02/2015 at 09:03"
                    }
                ]
            },
            {
                id : "2",
                name : "Christine Brown",
                messages : [
                    {
                        mine : "Hello",
                        mine_time : "20/02/2015 at 09:00",
                        other : "Hello how have you been",
                        other_time: "20/02/2015 at 09:03"
                    }
                ]
            },
            {
                id : "3",
                name : "Gorge Kinyanjui",
                messages : [
                    {
                        mine : "Hello",
                        mine_time : "20/02/2015 at 09:00",
                        other : "Hello how have you been",
                        other_time: "20/02/2015 at 09:03"
                    }
                ]
            },
            {
                id : "4",
                name : "Andrew Mwangi",
                messages : [
                    {
                        mine : "Hello",
                        mine_time : "20/02/2015 at 09:00",
                        other : "Hello how have you been",
                        other_time: "20/02/2015 at 09:03"
                    }
                ]
            },
            {
                id : "5",
                name : "Peter Otieno",
                messages : [
                    {
                        mine : "Hello this is a message from me to my bro."+
                        " I wrote this message while I was making the Konza"+
                        "application to be utilized",
                        mine_time : "20/02/2015 at 09:00",
                        other : "Now this is yet another message from me "+
                        " bro. I write this message just wondering stuff ",
                        other_time: "20/02/2015 at 09:03"
                    },
                    {
                        mine : "Now this is yet another message from me "+
                        " bro. I write this message just wondering stuff ",
                        mine_time : "20/02/2015 at 09:00",
                        other : "Hello how have you been",
                        other_time: "20/02/2015 at 09:03"
                    },
                    {
                        other : "Hello this is a message from me to my bro."+
                        " I wrote this message while I was making the Konza"+
                        "application to be utilized",
                        other_time : "20/02/2015 at 09:00",
                        mine : "Now this is yet another message from me "+
                        " bro. I write this message just wondering stuff ",
                        mine_time: "20/02/2015 at 09:03"
                    }
                ]
            },
            {
                id : "6",
                name : "Christine Brown",
                messages : [
                    {
                        mine : "Hello",
                        mine_time : "20/02/2015 at 09:00",
                        other : "Hello how have you been",
                        other_time: "20/02/2015 at 09:03"
                    }
                ]
            },
            {
                id : "7",
                name : "Gorge Kinyanjui",
                messages : [
                    {
                        mine : "Hello",
                        mine_time : "20/02/2015 at 09:00",
                        other : "Hello how have you been",
                        other_time: "20/02/2015 at 09:03"
                    }
                ]
            },
            {
                id : "8",
                name : "Andrew Mwangi",
                messages : [
                    {
                        mine : "Hello",
                        mine_time : "20/02/2015 at 09:00",
                        other : "Hello how have you been",
                        other_time: "20/02/2015 at 09:03"
                    }
                ]
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
                "developing software inline with financial industry. From "+
                "ERPs to Accounting specific software"
            },
            {
                id : 3,
                company_name : "TMNT Limited",
                town : "Nairobi",
                industry : "Agricultural",
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
                overview : "This is an agriculture based company specialized"+
                    "with green houses for growing commercial plantations."+
                    "and rearing of fish"
            }
        ]
    });
})(window.angular);
