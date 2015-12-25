(function (window) {
    "use strict";

    var settings = {
        "SERVER_URL": "http://localhost:8001/",
        "CREDENTIALS": {
            "username": "antony@owaga.com",
            "password": "antony",
            "client_id": "7mfI9iDWXf8VZxn3wqiecmkppFrYhZh26A1YCDlf",
            "client_secret": "",
            "token_url": "o/token/",
            "revoke_url": "o/revoke_token/"
        },
        "TIMEOUT": {"kickout": 540, "warning": 60}
    };

    settings.CREDENTIALS.token_url = settings.SERVER_URL +
        settings.CREDENTIALS.token_url;
    settings.CREDENTIALS.revoke_url = settings.SERVER_URL +
        settings.CREDENTIALS.revoke_url;

    window.HUQAS_SETTINGS = settings;

})(window);
