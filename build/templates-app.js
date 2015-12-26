angular.module('templates-app', ['auth/tpls/login.tpl.html', 'auth/tpls/reset_pwd.tpl.html', 'auth/tpls/reset_pwd_confirm.tpl.html', 'common/tpls/403.tpl.html', 'common/tpls/about.tpl.html', 'common/tpls/del-pop.tpl.html', 'common/tpls/delete.tpl.html', 'common/tpls/footer.tpl.html', 'common/tpls/header-no-login.tpl.html', 'common/tpls/header.tpl.html', 'common/tpls/list.assignment.tpl.html', 'common/tpls/main.tpl.html', 'common/tpls/revision.grid.tpl.html', 'common/tpls/revision.list.tpl.html', 'common/tpls/statemodal.tpl.html', 'dashboard/tpls/dashboard_menu.tpl.html', 'dashboard/tpls/lab_dashboard.tpl.html', 'dashboard/tpls/main.tpl.html', 'events/tpls/events_form.tpl.html', 'events/tpls/events_grid.tpl.html', 'events/tpls/events_list.tpl.html', 'events/tpls/main.tpl.html', 'lab_instruments/tpls/instruments_form.tpl.html', 'lab_instruments/tpls/instruments_grid.tpl.html', 'lab_instruments/tpls/instruments_list.tpl.html', 'lab_programs/tpls/lab-program-edit.tpl.html', 'lab_programs/tpls/lab-programs-grid.tpl.html', 'lab_programs/tpls/main.tpl.html', 'labs/tpls/lab-contacts.tpl.html', 'labs/tpls/lab-create.tpl.html', 'labs/tpls/lab-details.tpl.html', 'labs/tpls/lab-edit.tpl.html', 'labs/tpls/lab-programs.tpl.html', 'labs/tpls/lab-users.tpl.html', 'labs/tpls/labs-grid.tpl.html', 'labs/tpls/labs-list.tpl.html', 'labs/tpls/labs-wizard-create.tpl.html', 'reports/tpls/main.tpl.html', 'results/tpls/confirm_subscription.tpl.html', 'results/tpls/main.tpl.html', 'results/tpls/nested_content.tpl.html', 'results/tpls/program_samples.tpl.html', 'results/tpls/programs.tpl.html', 'results/tpls/quantitative_results.tpl.html', 'results/tpls/reverse_enrollment.tpl.html', 'setup/tpls/analyte/analyte_setup.tpl.html', 'setup/tpls/analyte/analytes_form.tpl.html', 'setup/tpls/analyte/analytes_grid.tpl.html', 'setup/tpls/analyte/analytes_list.tpl.html', 'setup/tpls/analyte/manufacturers_form.tpl.html', 'setup/tpls/analyte/manufacturers_grid.tpl.html', 'setup/tpls/analyte/manufacturers_list.tpl.html', 'setup/tpls/analyte/methods_form.tpl.html', 'setup/tpls/analyte/methods_grid.tpl.html', 'setup/tpls/analyte/methods_list.tpl.html', 'setup/tpls/analyte/reagents_form.tpl.html', 'setup/tpls/analyte/reagents_grid.tpl.html', 'setup/tpls/analyte/reagents_list.tpl.html', 'setup/tpls/categories/categories_form.tpl.html', 'setup/tpls/categories/categories_grid.tpl.html', 'setup/tpls/categories/categories_list.tpl.html', 'setup/tpls/categories/program_categories.tpl.html', 'setup/tpls/coa/coa_grid.tpl.html', 'setup/tpls/drugs/drugs_form.tpl.html', 'setup/tpls/drugs/drugs_grid.tpl.html', 'setup/tpls/drugs/drugs_list.tpl.html', 'setup/tpls/evaluation_criteria/evaluation_criteria_form.tpl.html', 'setup/tpls/evaluation_criteria/evaluation_criteria_grid.tpl.html', 'setup/tpls/evaluation_criteria/evaluation_criteria_list.tpl.html', 'setup/tpls/instruments/instruments_form.tpl.html', 'setup/tpls/instruments/instruments_grid.tpl.html', 'setup/tpls/instruments/instruments_list.tpl.html', 'setup/tpls/programs/programs_form.tpl.html', 'setup/tpls/programs/programs_grid.tpl.html', 'setup/tpls/programs/programs_list.tpl.html', 'setup/tpls/result_codes/result_codes_form.tpl.html', 'setup/tpls/result_codes/result_codes_grid.tpl.html', 'setup/tpls/result_codes/result_codes_list.tpl.html', 'setup/tpls/sample/sample_setup.tpl.html', 'setup/tpls/sample/sample_types_form.tpl.html', 'setup/tpls/sample/sample_types_grid.tpl.html', 'setup/tpls/sample/sample_types_list.tpl.html', 'setup/tpls/sample/samples_form.tpl.html', 'setup/tpls/sample/samples_grid.tpl.html', 'setup/tpls/sample/samples_list.tpl.html', 'setup/tpls/units/units_form.tpl.html', 'setup/tpls/units/units_grid.tpl.html', 'setup/tpls/units/units_list.tpl.html', 'users/tpls/main.tpl.html', 'users/tpls/user-edit.tpl.html', 'users/tpls/users-grid.tpl.html', 'users/tpls/users-list.tpl.html']);

angular.module("auth/tpls/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("auth/tpls/login.tpl.html",
    "<div class=\"row login-content\">\n" +
    "    <div class=\"bg-overlay\">\n" +
    "        <div class=\"col-xs-12 col-sm-8 col-sm-offset-2 col-md-10 col-md-offset-1 col-md-offset-3 col-lg-6 col-lg-offset-3\">\n" +
    "            <div class=\"margin-t-120 content-card col-xs-12\">\n" +
    "                <div class=\"row title-line\">\n" +
    "                    <h2 class=\"text-center\">\n" +
    "                        HuQAS EQA\n" +
    "                    </h2>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-12 col-md-10 col-md-offset-1 alert alert-info\" ng-if=\"params.reset_pwd||params.reset_pwd_confirm||params.timeout||params.change_pwd||logout\">\n" +
    "                    <button class=\"close\" data-dismiss=\"alert\" ><span>&times;</span></button>\n" +
    "                    <p ng-if=\"params.reset_pwd\">Password reset instructions have been sent to your email.</p>\n" +
    "                    <p ng-if=\"params.reset_pwd_confirm\">Password has been reset successfully.</p>\n" +
    "                    <p ng-if=\"params.change_pwd\">Password has been changed successfully.</p>\n" +
    "                    <p ng-if=\"params.timeout\">Your session has expired. Please login again.</p>\n" +
    "                    <p ng-if=\"logout\">Logging out your session.</p>\n" +
    "                </div>\n" +
    "                <span ng-if=\"login_err_html\" ng-bind-html=\"login_err_html\" class=\"col-xs-12 fade-content alert alert-danger col-md-10 col-md-offset-1\">\n" +
    "                    <span class=\"pull-right\">\n" +
    "                        <i class=\"fa fa-times\"></i>\n" +
    "                    </span>\n" +
    "                </span>\n" +
    "                <form role=\"form\" class=\"pad-b-20\" name=\"frm_login\" ng-submit=\"submitUser(user)\" novalidate>\n" +
    "                    <div class=\"col-xs-12 col-sm-10 col-sm-offset-1 margin-b-20\">\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label class=\"control-label\" for=\"email\">Email Address</label>\n" +
    "                            <input type=\"text\" ng-model=\"user.username\" required autofocus name=\"email\" id=\"email\" class=\"form-control\" ng-disabled=\"logout\">\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label class=\"control-label\" for=\"password\">Password</label>\n" +
    "                            <input type=\"password\" ng-model=\"user.password\" required name=\"password\" id=\"password\" class=\"form-control\" ng-disabled=\"logout\">\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <div class=\"pull-left\">\n" +
    "                                <button id=\"login_btn\" type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"spinner||login.$invalid||logout\">Login</button>\n" +
    "                                <span ng-if=\"spinner\" style=\"display: inline-block;\" class=\"margin-r-10 margin-t-5\">\n" +
    "                                    <i class=\"fa fa-spin fa-circle-o-notch\"></i>\n" +
    "                                </span>\n" +
    "                            </div>\n" +
    "                            <div class=\"pull-right\">\n" +
    "                                <a ui-sref=\"reset_pwd\">Forgot password</a>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("auth/tpls/reset_pwd.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("auth/tpls/reset_pwd.tpl.html",
    "<section class=\"section row\">\n" +
    "  <div ui-view=\"header\"></div>\n" +
    "  <div class=\"content\">\n" +
    "    <div class=\"content-header\">\n" +
    "      <h2 class=\"content-title\"><span>Request Password Reset</span></h2>\n" +
    "    </div>\n" +
    "    <div class=\"content-body\">\n" +
    "       <div class=\"col-xs-12\">\n" +
    "          <div class=\"pad-20 col-xs-10 col-xs-offset-1 content-card margin-t-20\">\n" +
    "            <div class=\"col-xs-12\">\n" +
    "              <form ng-submit=\"reset_pwd()\" name=\"frm_reset_pwd\" novalidate>\n" +
    "                <drf-err-msg></drf-err-msg>\n" +
    "                <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Email Address</label>\n" +
    "                  <input type=\"email\" class=\"form-control\" name=\"email\" ng-model=\"email\" required autofocus api-checker/>\n" +
    "                </div>\n" +
    "                <button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"frm_reset_pwd.$invalid\">Send Request</button>\n" +
    "                <a ui-sref=\"login\" class=\"btn btn-default\">Cancel</a>\n" +
    "              </form>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "       </div>\n" +
    "    </div>\n" +
    " </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("auth/tpls/reset_pwd_confirm.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("auth/tpls/reset_pwd_confirm.tpl.html",
    "<section class=\"section\">\n" +
    "  <div ui-view=\"header\"></div>\n" +
    "  <div class=\"content\">\n" +
    "    <div class=\"content-header\">\n" +
    "       <h2 class=\"content-title\"><span>Password Reset Confirmation</span></h2>\n" +
    "    </div>\n" +
    "    <div class=\"content-body\">\n" +
    "      <div class=\"pad-form\">\n" +
    "        <div class=\"content-card\">\n" +
    "          <form ng-submit=\"reset_pwd_confirm()\" name=\"frm_reset_pwd_confirm\" novalidate>\n" +
    "            <drf-err-msg></drf-err-msg>\n" +
    "            <div class=\"form-group\">\n" +
    "              <label class=\"control-label\">Password ({{::PWD_RULE}})</label>\n" +
    "              <input name=\"new_password1\" type=\"password\" ng-model=\"new_password1\" required autofocus name=\"new_password1\" api-checker class=\"form-control\"/>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "              <label class=\"control-label\">Confirm Password ({{::PWD_RULE}})</label>\n" +
    "              <input name=\"new_password2\" type=\"password\" ng-model=\"new_password2\" required name=\"new_password2\" api-checker class=\"form-control\"/>\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"frm_reset_pwd_confirm.$invalid\">Confirm Password Reset</button>\n" +
    "            <a ui-sref=\"login\" class=\"btn btn-default\">Cancel</a>\n" +
    "          </form>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    " </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("common/tpls/403.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/tpls/403.tpl.html",
    "<div class=\"content col-xs-12 jumbotron\">\n" +
    "    <div class=\"col-xs-6 text-center margin-t-30\">\n" +
    "        <h1 style=\"font-size: 200px;\">\n" +
    "            403\n" +
    "        </h1>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-6 margin-t-70\">\n" +
    "        <h2>Access to the page was denied</h2>\n" +
    "        <p class=\"small-text\">Sorry about that. You are not allowed to view the requested page. Please contact the <b>system administrator</b> for more details.</p>\n" +
    "        <a href=\"javascript:window.history.back()\" class=\"btn btn-default btn-lg\" title=\"Go Back\">Go Back</a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("common/tpls/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/tpls/about.tpl.html",
    "<div class=\"content\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\" col-xs-12\">\n" +
    "                <div class=\"col-xs-12 margin-t-70\">\n" +
    "                   <div class=\"content-card\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("common/tpls/del-pop.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/tpls/del-pop.tpl.html",
    "<div style=\"width:190px\">\n" +
    "    <p>Are you sure you want to delete?</p>\n" +
    "    <div>\n" +
    "            <button class=\"btn btn-danger\" ng-click=\"removeChild(child)\">Delete</button>\n" +
    "            <a class=\"btn btn-default\" ng-click=\"toggle()\">Cancel</a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("common/tpls/delete.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/tpls/delete.tpl.html",
    "<statemodal>\n" +
    "  <h4>Are you sure you want to delete <strong>{{deleteText}}</strong>?</h4>\n" +
    "  <div class=\"margin-t-20\">\n" +
    "    <button id=\"del_btn\" class=\"btn btn-danger\" ng-click=\"remove()\">Delete</button>\n" +
    "    <a class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</a>\n" +
    "  </div>\n" +
    "</statemodal>\n" +
    "");
}]);

angular.module("common/tpls/footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/tpls/footer.tpl.html",
    "<footer>\n" +
    "    <div class=\"col-xs-12\">\n" +
    "       <div class=\"row margin-10\">\n" +
    "            <div class=\"col-md-4\"></div>\n" +
    "            <div class=\"col-md-4 text-center\">\n" +
    "            <div class=\"col-md-8 col-md-offset-2\">\n" +
    "                <span class=\"fa-stack fa-lg fs-28 text-dark-green pad-l-3 col-md-12\">\n" +
    "                  <i class=\"fa fa-circle-o fa-stack-2x\"></i>\n" +
    "                  <i class=\"fa fa-facebook fa-stack-1x fa-inverse text-dark-green\"></i>\n" +
    "                </span>\n" +
    "                <span class=\"fa-stack fa-lg fs-28 text-dark-green pad-l-3 col-md-12\">\n" +
    "                  <i class=\"fa fa-circle-o fa-stack-2x\"></i>\n" +
    "                  <i class=\"fa fa-twitter fa-stack-1x fa-inverse text-dark-green\"></i>\n" +
    "                </span>\n" +
    "                <span class=\"fa-stack fa-lg fs-28 text-dark-green pad-l-3 col-md-12\">\n" +
    "                  <i class=\"fa fa-circle-o fa-stack-2x\"></i>\n" +
    "                  <i class=\"fa fa-google-plus fa-stack-1x fa-inverse text-dark-green\"></i>\n" +
    "                </span>\n" +
    "                <span class=\"fa-stack fa-lg fs-28 text-dark-green pad-l-3 col-md-12\">\n" +
    "                  <i class=\"fa fa-circle-o fa-stack-2x\"></i>\n" +
    "                  <i class=\"fa fa-linkedin fa-stack-1x fa-inverse text-dark-green\"></i>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\"></div>\n" +
    "            <div class=\"col-xs-12 text-center\">\n" +
    "                <p class=\"text-center margin-t-10\">\n" +
    "                   <a href=\"\">Powered by Yitchouse</a>\n" +
    "                </p>\n" +
    "            </div>\n" +
    "       </div>\n" +
    "    </div>\n" +
    "</footer>\n" +
    "");
}]);

angular.module("common/tpls/header-no-login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/tpls/header-no-login.tpl.html",
    "<!-- Begining of bootstrap header -->\n" +
    "<nav class=\"header text-white navbar navbar-default\">\n" +
    "  <div class=\"\">\n" +
    "    <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "      <a class=\"navbar-brand\" ui-sref=\"dashboard\">HuQAS</a>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "      <ul class=\"nav navbar-nav navbar-right header-color\">\n" +
    "      </ul>\n" +
    "    </div><!-- /.navbar-collapse -->\n" +
    "  </div><!-- /.container-fluid -->\n" +
    "</nav>\n" +
    "<!-- End of bootstrap header -->\n" +
    "");
}]);

angular.module("common/tpls/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/tpls/header.tpl.html",
    "<nav class=\"header navbar navbar-default navbar-fixed-top\">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "    <div class=\"navbar-header margin-t--10\">\n" +
    "      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "      <a class=\"navbar-brand\" ui-sref=\"dashboard\"><img class=\"\" src=\"assets/images/Konza_Techno_City_Logo.png\" width=\"80px\" height=\"60px\" alt=\"logo\"></a>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "      <ul class=\"nav navbar-nav navbar-right margin-t-10\">\n" +
    "        <li ui-sref-active=\"active\"><a ui-sref=\"dashboard\">Home</a></li>\n" +
    "        <li ui-sref-active=\"active\"><a ui-sref=\"lab_instruments\">Showcase</a></li>\n" +
    "        <li class=\"dropdown\">\n" +
    "          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n" +
    "          <ul class=\"dropdown-menu\">\n" +
    "            <li><a href=\"#\">Action</a></li>\n" +
    "            <li><a href=\"#\">Another action</a></li>\n" +
    "            <li><a href=\"#\">Something else here</a></li>\n" +
    "            <li role=\"separator\" class=\"divider\"></li>\n" +
    "            <li><a href=\"#\">Separated link</a></li>\n" +
    "            <li role=\"separator\" class=\"divider\"></li>\n" +
    "            <li><a href=\"#\">One more separated link</a></li>\n" +
    "          </ul>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div><!-- /.navbar-collapse -->\n" +
    "  </div><!-- /.container-fluid -->\n" +
    "</nav>\n" +
    "<!-- Begining of bootstrap header -->\n" +
    "<!-- <nav class=\"header border-nav text-white navbar navbar-default navbar-fixed-top\">\n" +
    "  <div class=\"\"> -->\n" +
    "    <!-- Brand and toggle get grouped for better mobile display -->\n" +
    " <!--    <div class=\"navbar-header\">\n" +
    "      <button id=\"expand_main_menu\" type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#links\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "      <a class=\"navbar-brand\" ui-sref=\"dashboard\"><img class=\"w100\" src=\"assets/images/logo.png\" alt=\"logo\"></a>\n" +
    "    </div> -->\n" +
    "\n" +
    "    <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "    <!-- <div class=\"collapse navbar-collapse\" id=\"links\">\n" +
    "      <ul class=\"nav navbar-nav navbar-left header-color\">\n" +
    "        <li ui-sref-active=\"active\">\n" +
    "          <a ui-sref=\"dashboard\">Home</a>\n" +
    "        </li>\n" +
    "         <li ui-sref-active=\"active\" ng-if=\"user.is_staff\">\n" +
    "          <a ui-sref=\"labs\">Labs</a>\n" +
    "        </li>\n" +
    "        <li ui-sref-active=\"active\" ng-if=\"!user.is_staff\">\n" +
    "          <a ui-sref=\"lab_instruments\">Instruments</a>\n" +
    "        </li>\n" +
    "        <li ui-sref-active=\"active\" ng-if=\"!user.is_staff\">\n" +
    "          <a ui-sref=\"lab_programs\">Programs</a>\n" +
    "        </li>\n" +
    "         <li ui-sref-active=\"active\" ng-if=\"!user.is_staff\">\n" +
    "          <a ui-sref=\"results\">Results</a>\n" +
    "        </li>\n" +
    "        <li ui-sref-active=\"active\" ng-if=\"!user.is_staff\">\n" +
    "          <a ui-sref=\"reports\">Reports</a>\n" +
    "        </li>\n" +
    "        <li ui-sref-active=\"active\" ng-if=\"user.is_staff\">\n" +
    "          <a ui-sref=\"coa\">COA</a>\n" +
    "        </li>\n" +
    "        <li ui-sref-active=\"active\" ng-if=\"user.is_staff\">\n" +
    "          <a ui-sref=\"users\">Users</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "      <ul class=\"nav navbar-nav navbar-right header-color\">\n" +
    "          <li class=\"dropdown\">\n" +
    "            <a href class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "              <span class=\"profile-username text-center\"><i class=\"fa fa-user\"></i> {{user.first_name}} {{user.last_name}}</span>\n" +
    "              <span class=\"fa fa-angle-down\"></span>\n" +
    "            </a>\n" +
    "            <ul class=\"dropdown-menu animated dropdown-width\" role=\"menu\">\n" +
    "              <li><a ui-sref=\"profile.basic\"><i class=\"fa fa-cog\"></i> Profile</a></li>\n" +
    "              <li><a ui-sref=\"logout\" ><i class=\"fa fa-sign-out\"></i> Log Out</a></li>\n" +
    "            </ul>\n" +
    "          </li>\n" +
    "          <li ui-sref-active=\"active\" >\n" +
    "              <a ui-sref=\"about\" id=\"about\">Help</a>\n" +
    "          </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</nav> -->\n" +
    "<!-- End of bootstrap header -->\n" +
    "");
}]);

angular.module("common/tpls/list.assignment.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/tpls/list.assignment.tpl.html",
    "<div class=\"col-xs-12 margin-b-20 margin-t-10\">\n" +
    "    <div id=\"lst-available\" class=\"col-xs-5\">\n" +
    "        <h4>Available {{title}}</h4>\n" +
    "        <div class=\"group margin-t-20 margin-b-20\">\n" +
    "            <label>\n" +
    "                Search Available {{title}}:\n" +
    "            </label>\n" +
    "            <div>\n" +
    "                <input type=\"search\" ng-model=\"search.available_query\" class=\"form-control\" placeholder=\"Enter {{title}}...\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <ul class=\"nav nav-pills nav-stacked perm-container margin-b-20\" >\n" +
    "            <li ng-repeat=\"item in filtered_items | filter: search.available_query\"\n" +
    "                class=\"list-item\" ng-class=\"{active : item.selected}\"  >\n" +
    "                <a href ng-click=\"clickedItem(item)\">{{item[displayAttr]}}</a>\n" +
    "            </li>\n" +
    "            <li ng-show=\"(filtered_items | filter: search.available_query).length == 0\">\n" +
    "                    No {{title}} By That Name\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div id=\"lst-divider\" class=\"col-xs-2 perm-divider\">\n" +
    "        <span class=\"text-primary\" ng-click=\"addItems()\">\n" +
    "            <i class=\"fa fa-long-arrow-right fa-2x\"></i>\n" +
    "        </span>\n" +
    "        <br>\n" +
    "        <span class=\"text-primary\" ng-click=\"revertItems()\">\n" +
    "            <i class=\"fa fa-long-arrow-left fa-2x\"></i>\n" +
    "        </span>\n" +
    "    </div>\n" +
    "    <div id=\"lst-assigned\" class=\"col-xs-5\">\n" +
    "        <h4>Assigned {{title}}</h4>\n" +
    "        <div class=\"group margin-t-20 margin-b-20\">\n" +
    "            <label>\n" +
    "                Search Assigned {{title}}:\n" +
    "            </label>\n" +
    "            <input type=\"search\" ng-model=\"search.assigned_query\" class=\"form-control\" placeholder=\"Enter {{title}}...\">\n" +
    "        </div>\n" +
    "        <ul class=\"nav nav-pills nav-stacked perm-container margin-b-20\" >\n" +
    "            <span ng-hide=\"assigneditems.length\">\n" +
    "                <p class=\"fs-16 lead margin-l-5\"><i class=\"fa fa-info-circle\"></i> Nothing assigned yet</p>\n" +
    "            </span>\n" +
    "            <li ng-repeat=\"set_item in assigneditems | filter: search.assigned_query\" class=\"list-item\"\n" +
    "            ng-class=\"{active : set_item.set_selected}\">\n" +
    "                <a href ng-click=\"setItem(set_item)\">{{set_item.name}}</a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("common/tpls/main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/tpls/main.tpl.html",
    "<section class=\"section row\">\n" +
    "    <div ui-view=\"header\"></div>\n" +
    "    <div ui-view=\"body\" class=\"content fx-fade-up fx-speed-500\"></div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("common/tpls/revision.grid.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/tpls/revision.grid.tpl.html",
    "<div class=\"col-xs-12\">\n" +
    "    <div class=\"col-xs-12 content-card margin-b-20 margin-t-20\">\n" +
    "    <sil-grid template=\"common/tpls/revision.list.tpl.html\" grid-for=\"facilities\"\n" +
    "        data=\"facilities\" filters=\"filters\" error=\"alert\" api-key=\"facilities\">\n" +
    "    </sil-grid>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("common/tpls/revision.list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/tpls/revision.list.tpl.html",
    "<div class=\"col-xs-12 pad-r-0 pad-l-0\">\n" +
    "    <div class=\"margin-t-20\">\n" +
    "        <button type=\"button\" ng-if=\"!showRevisions\" ng-disabled=\"!id\" class=\"btn btn-default\" ng-click=\"fetchRevisions()\">View Changelog</button>\n" +
    "        <button type=\"button\" ng-if=\"showRevisions\" ng-click=\"hideRevisions()\" class=\"btn btn-default\">Hide Changelog</button>\n" +
    "    </div>\n" +
    "    <div ng-if=\"id&&showRevisions\">\n" +
    "        <table class=\"table table-hover\">\n" +
    "            <thead>\n" +
    "                <tr>\n" +
    "                    <th>Date</th>\n" +
    "                    <th>User</th>\n" +
    "                    <th>Updates</th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody ng-if=\"!revisions.length\">\n" +
    "                <tr>\n" +
    "                    <td class=\"text-center\" colspan=\"3\">Sorry, no revisions found</td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "            <tbody ng-if=\"revisions.length\">\n" +
    "                <tr ng-repeat=\"rev in revisions\">\n" +
    "                    <td>{{::rev.updated_on | dateFilter}}</td>\n" +
    "                    <td>{{::rev.updated_by}}</td>\n" +
    "                    <td>\n" +
    "                        <p ng-repeat=\"upd in rev.updates\">\n" +
    "                            <strong>{{::upd.name | titlecase}}</strong> : <span style=\"color:red\">{{::upd.old}}</span> >> <span style=\"color:green\">{{::upd.new}}</span>\n" +
    "                        </p>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("common/tpls/statemodal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/tpls/statemodal.tpl.html",
    "<div class=\"\" style=\"z-index: 10;height:inherit;position:fixed;background-color:rgba(0, 0, 0, 0.4);display: block;top:0;bottom:0;left:0;right:0;\">\n" +
    "  <div class=\"col-xs-12 margin-t-20\">\n" +
    "    <div>\n" +
    "      <div class=\"col-xs-12 col-sm-offset-3 col-sm-6 text-center\">\n" +
    "        <div class=\"margin-t-20p\">\n" +
    "          <div class=\"content-card\">\n" +
    "            <ng-transclude></ng-transclude>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboard/tpls/dashboard_menu.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/tpls/dashboard_menu.tpl.html",
    "<div class=\"content-header\">\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "            <i class=\"fa fa-dashboard\"></i> Dashboard\n" +
    "            <span class=\"pull-right\" title=\"Hide/show advanced search\" sidebar-toogle=\"#search_frm_div\">\n" +
    "                <i class=\"fa fa-chevron-circle-left text-primary menu-toggle-btn\"></i>\n" +
    "            </span>\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12 margin-t-30\">\n" +
    "\n" +
    "    <!-- Test event menu -->\n" +
    "    <div class=\"col-md-6 col-xs-12\" id=\"search_frm_div\">\n" +
    "        <div class=\"col-xs-12 content-card pad-0\" style=\"border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;\">\n" +
    "            <div class=\"bg-white col-xs-12 pad-l-5 pad-t-15 pad-b-15\">\n" +
    "                <h1 class=\"fs-22 text-purple margin-t-10 lato-light\">\n" +
    "                    Test Event Setup\n" +
    "                </h1>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12 list-group pad-0 margin-b-0\" style=\"font-family : 'Lato Light', sans-serif;\">\n" +
    "              <a class=\"list-group-item fs-18 pad-t-5 pad-b-5\" ui-sref=\"dashboard.events\">\n" +
    "                <span class=\"fa-stack fa-lg fs-22 text-blue pad-l-3 col-md-4\">\n" +
    "                  <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                  <i class=\"fa fa-calendar fa-stack-1x fa-inverse\"></i>\n" +
    "                </span>\n" +
    "                &nbsp;\n" +
    "                <span class=\"fs-18 text-blue margin-b-0 col-md-8\">\n" +
    "                    Test Events\n" +
    "                </span>\n" +
    "                <br>\n" +
    "                <span class=\"fs-14 text-black margin-l-20\">\n" +
    "                    View, add & edit test events\n" +
    "                </span>\n" +
    "              </a>\n" +
    "              <a class=\"list-group-item fs-18 pad-t-5 pad-b-5\" ui-sref=\"events\">\n" +
    "                <span class=\"fa-stack fa-lg fs-22 text-blue pad-l-3 col-md-4\">\n" +
    "                  <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                  <i class=\"fa fa-link fa-stack-1x fa-inverse\"></i>\n" +
    "                </span>\n" +
    "                &nbsp;<span class=\"fs-18 text-blue col-md-8\">\n" +
    "                    Events Program Sample History\n" +
    "                </span>\n" +
    "                <br>\n" +
    "                <span class=\"margin-l-20 fs-14 text-black\">\n" +
    "                    Manage Event Program Sample History\n" +
    "                </span>\n" +
    "              </a>\n" +
    "              <a class=\"list-group-item fs-18 pad-t-5 pad-b-5\" ui-sref=\"programs\">\n" +
    "                <span class=\"fa-stack fa-lg fs-22 text-blue pad-l-3 col-md-4\">\n" +
    "                  <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                  <i class=\"fa fa-external-link fa-stack-1x fa-inverse\"></i>\n" +
    "                </span>\n" +
    "                &nbsp;<span class=\"fs-18 text-blue col-md-8\">\n" +
    "                    Link Events to Analytes\n" +
    "                </span>\n" +
    "                <br>\n" +
    "                <span class=\"margin-l-20 fs-14 text-black\">\n" +
    "                    Setup analytes for different events\n" +
    "                </span>\n" +
    "              </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- End of Test event menu -->\n" +
    "\n" +
    "    <!-- Analysis setup menu -->\n" +
    "    <div class=\"col-md-6 col-xs-12\">\n" +
    "        <div class=\"col-xs-12 content-card pad-0\" style=\"border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;\">\n" +
    "            <div class=\"bg-white col-xs-12 pad-l-5 pad-t-15 pad-b-15\">\n" +
    "                <h1 class=\"fs-22 margin-t-10 text-purple lato-light\">\n" +
    "                    Analysis Setup\n" +
    "                </h1>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12 list-group pad-0 margin-b-0\" style=\"font-family : 'Lato Light', sans-serif;\">\n" +
    "              <a class=\"list-group-item fs-18 pad-t-5 pad-b-5\" ui-sref=\"dashboard.result_codes\">\n" +
    "                <span class=\"fa-stack fa-lg fs-22 text-blue pad-l-3 col-md-4\">\n" +
    "                  <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                  <i class=\"fa fa-barcode fa-stack-1x fa-inverse\"></i>\n" +
    "                </span>\n" +
    "                &nbsp;\n" +
    "                <span class=\"fs-18 text-blue margin-b-0 col-md-8\">\n" +
    "                    Result Code\n" +
    "                </span>\n" +
    "                <br>\n" +
    "                <span class=\"fs-14 text-black margin-l-20\">\n" +
    "                    Manage Result Codes\n" +
    "                </span>\n" +
    "              </a>\n" +
    "              <a class=\"list-group-item fs-18 pad-t-5 pad-b-5\" ui-sref=\"dashboard.evaluation_criteria\">\n" +
    "                <span class=\"fa-stack fa-lg fs-22 text-blue pad-l-3 col-md-4\">\n" +
    "                  <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                  <i class=\"fa fa-th-list fa-stack-1x fa-inverse\"></i>\n" +
    "                </span>\n" +
    "                &nbsp;<span class=\"fs-18 text-blue col-md-8\">\n" +
    "                    Evaluation Criteria\n" +
    "                </span>\n" +
    "                <br>\n" +
    "                <span class=\"margin-l-20 fs-14 text-black\">\n" +
    "                    Manage Evaluation Criteria\n" +
    "                </span>\n" +
    "              </a>\n" +
    "              <a class=\"list-group-item fs-18 pad-t-5 pad-b-5\" ui-sref=\"programs\">\n" +
    "                <span class=\"fa-stack fa-lg fs-22 text-blue pad-l-3 col-md-4\">\n" +
    "                  <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                  <i class=\"fa fa-certificate fa-stack-1x fa-inverse\"></i>\n" +
    "                </span>\n" +
    "                &nbsp;<span class=\"fs-18 text-blue col-md-8\">\n" +
    "                    Certificate of Analysis\n" +
    "                </span>\n" +
    "                <br>\n" +
    "                <span class=\"margin-l-20 fs-14 text-black\">\n" +
    "                    Manage Certificate of Analysis\n" +
    "                </span>\n" +
    "              </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- End of test event setup menu -->\n" +
    "    <div class=\"clearfix visible-md visible-lg hidden-sm hidden-xs margin-t-20 margin-b-20\"></div>\n" +
    "    <!-- program setup menu -->\n" +
    "    <div class=\"col-md-6 col-xs-12 pad-0\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "            <div class=\"col-xs-12 content-card pad-0\" style=\"border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;\">\n" +
    "                <div class=\"bg-white col-xs-12 pad-l-5 pad-t-15 pad-b-15\">\n" +
    "                    <h1 class=\"fs-22 margin-t-10 text-purple lato-light\">\n" +
    "                        Program Setup\n" +
    "                    </h1>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-12 list-group pad-0 margin-b-0\" style=\"font-family : 'Lato Light', sans-serif;\">\n" +
    "                  <a class=\"list-group-item fs-18 pad-t-5 pad-b-5\" ui-sref=\"dashboard.categories\">\n" +
    "                    <span class=\"fa-stack fa-lg fs-22 text-blue pad-l-3 col-md-4\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-book fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                    &nbsp;\n" +
    "                    <span class=\"fs-18 text-blue margin-b-0 col-md-8\">\n" +
    "                        Categories\n" +
    "                    </span>\n" +
    "                    <br>\n" +
    "                    <span class=\"fs-14 text-black margin-l-20\">\n" +
    "                        Manage Categories\n" +
    "                    </span>\n" +
    "                  </a>\n" +
    "                  <a class=\"list-group-item fs-18 pad-t-5 pad-b-5\" ui-sref=\"dashboard.programs\">\n" +
    "                    <span class=\"fa-stack fa-lg fs-22 text-blue pad-l-3 col-md-4\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-sitemap fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                    &nbsp;<span class=\"fs-18 text-blue col-md-8\">\n" +
    "                        Programs\n" +
    "                    </span>\n" +
    "                    <br>\n" +
    "                    <span class=\"margin-l-20 fs-14 text-black\">\n" +
    "                        Manage Programs\n" +
    "                    </span>\n" +
    "                  </a>\n" +
    "                  <a class=\"list-group-item fs-18 pad-t-5 pad-b-5\" ui-sref=\"programs\">\n" +
    "                    <span class=\"fa-stack fa-lg fs-22 text-blue pad-l-3 col-md-4\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-list-alt fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                    &nbsp;<span class=\"fs-18 text-blue col-md-8\">\n" +
    "                        Program Samples\n" +
    "                    </span>\n" +
    "                    <br>\n" +
    "                    <span class=\"margin-l-20 fs-14 text-black\">\n" +
    "                        Manage Program Samples\n" +
    "                    </span>\n" +
    "                  </a>\n" +
    "                  <a class=\"list-group-item fs-18 pad-t-5 pad-b-5\" ui-sref=\"dashboard.analytes\">\n" +
    "                    <span class=\"fa-stack fa-lg fs-22 text-blue pad-l-3 col-md-4\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-flask fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                    &nbsp;<span class=\"fs-18 text-blue col-md-8\">\n" +
    "                        Analyte\n" +
    "                    </span>\n" +
    "                    <br>\n" +
    "                    <span class=\"margin-l-20 fs-14 text-black\">\n" +
    "                        Manage Analyte\n" +
    "                    </span>\n" +
    "                  </a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "         <!-- Analysis setup menu -->\n" +
    "        <div class=\"col-xs-12\">\n" +
    "            <div class=\"col-xs-12 content-card pad-0\" style=\"border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;\">\n" +
    "                <div class=\"bg-white col-xs-12 pad-l-5 pad-t-15 pad-b-15\">\n" +
    "                    <h1 class=\"fs-22 margin-t-10 text-purple lato-light\">\n" +
    "                        Lab Setup\n" +
    "                    </h1>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-12 list-group pad-0 margin-b-0\" style=\"font-family : 'Lato Light', sans-serif;\">\n" +
    "                  <a class=\"list-group-item fs-18 pad-t-5 pad-b-5\" ui-sref=\"result_codes\">\n" +
    "                    <span class=\"fa-stack fa-lg fs-22 text-blue pad-l-3 col-md-4\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-ticket fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                    &nbsp;\n" +
    "                    <span class=\"fs-18 text-blue margin-b-0 col-md-8\">\n" +
    "                        Subscriptions\n" +
    "                    </span>\n" +
    "                    <br>\n" +
    "                    <span class=\"fs-14 text-black margin-l-20\">\n" +
    "                        View Lab Subscriptions\n" +
    "                    </span>\n" +
    "                  </a>\n" +
    "                  <a class=\"list-group-item fs-18 pad-t-5 pad-b-5\" ui-sref=\"evaluation_criteria\">\n" +
    "                    <span class=\"fa-stack fa-lg fs-22 text-blue pad-l-3 col-md-4\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-briefcase fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                    &nbsp;<span class=\"fs-18 text-blue col-md-8\">\n" +
    "                        Enrollments\n" +
    "                    </span>\n" +
    "                    <br>\n" +
    "                    <span class=\"margin-l-20 fs-14 text-black\">\n" +
    "                        View Lab Enrollments\n" +
    "                    </span>\n" +
    "                  </a>\n" +
    "                  <a class=\"list-group-item fs-18 pad-t-5 pad-b-5\" ui-sref=\"programs\">\n" +
    "                    <span class=\"fa-stack fa-lg fs-22 text-blue pad-l-3 col-md-4\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-clipboard fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                    &nbsp;<span class=\"fs-18 text-blue col-md-8\">\n" +
    "                        Results\n" +
    "                    </span>\n" +
    "                    <br>\n" +
    "                    <span class=\"margin-l-20 fs-14 text-black\">\n" +
    "                        View Lab Results\n" +
    "                    </span>\n" +
    "                  </a>\n" +
    "                  <a class=\"list-group-item fs-18 pad-t-5 pad-b-5\" ui-sref=\"programs\">\n" +
    "                    <span class=\"fa-stack fa-lg fs-22 text-blue pad-l-3 col-md-4\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-user-md fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                    &nbsp;<span class=\"fs-18 text-blue col-md-8\">\n" +
    "                        Log in as Lab User\n" +
    "                    </span>\n" +
    "                    <br>\n" +
    "                    <span class=\"margin-l-20 fs-14 text-black\">\n" +
    "                        Log in as Lab User to act on Lab Enrollments\n" +
    "                    </span>\n" +
    "                  </a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!-- End of Test event menu -->\n" +
    "    </div>\n" +
    "    <!--  -->\n" +
    "    <!-- End of program setup menu -->\n" +
    "    <!-- Master data menu -->\n" +
    "    <div class=\"col-md-6 col-xs-12\">\n" +
    "        <div class=\"col-xs-12 content-card pad-0\" style=\"border-bottom: 1px solid #e0e0e0;border-left: 1px solid #e0e0e0;\">\n" +
    "            <div class=\"bg-white col-xs-12 pad-l-5 pad-t-15 pad-b-15\">\n" +
    "                <h1 class=\"fs-22 margin-t-10 text-purple lato-light\">\n" +
    "                    Master Data Setup\n" +
    "                </h1>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12 list-group pad-0 margin-b-0\" style=\"font-family : 'Lato Light', sans-serif;\">\n" +
    "              <a class=\"list-group-item fs-18 pad-t-5 pad-b-5\" ui-sref=\"dashboard.manufacturers\">\n" +
    "                <span class=\"fa-stack fa-lg fs-22 text-blue pad-l-3 col-md-4\">\n" +
    "                  <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                  <i class=\"fa fa-building fa-stack-1x fa-inverse\"></i>\n" +
    "                </span>\n" +
    "                &nbsp;\n" +
    "                <span class=\"fs-18 text-blue margin-b-0 col-md-8\">\n" +
    "                    Manufacturer\n" +
    "                </span>\n" +
    "                <br>\n" +
    "                <span class=\"fs-14 text-black margin-l-20\">\n" +
    "                    Manage Manufacturer\n" +
    "                </span>\n" +
    "              </a>\n" +
    "              <a class=\"list-group-item fs-18 pad-t-5 pad-b-5\" ui-sref=\"dashboard.methods\">\n" +
    "                <span class=\"fa-stack fa-lg fs-22 text-blue pad-l-3 col-md-4\">\n" +
    "                  <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                  <i class=\"fa fa-server fa-stack-1x fa-inverse\"></i>\n" +
    "                </span>\n" +
    "                &nbsp;<span class=\"fs-18 text-blue col-md-8\">\n" +
    "                    Methods\n" +
    "                </span>\n" +
    "                <br>\n" +
    "                <span class=\"margin-l-20 fs-14 text-black\">\n" +
    "                    Manage Methods\n" +
    "                </span>\n" +
    "              </a>\n" +
    "              <a class=\"list-group-item fs-18 pad-t-5 pad-b-5\" ui-sref=\"dashboard.instruments\">\n" +
    "                <span class=\"fa-stack fa-lg fs-22 text-blue pad-l-3 col-md-4\">\n" +
    "                  <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                  <i class=\"fa fa-sliders fa-stack-1x fa-inverse\"></i>\n" +
    "                </span>\n" +
    "                &nbsp;<span class=\"fs-18 text-blue col-md-8\">\n" +
    "                    Instruments & Instrument Models\n" +
    "                </span>\n" +
    "                <br>\n" +
    "                <span class=\"margin-l-20 fs-14 text-black\">\n" +
    "                    Manage Instruments & Instrument Models\n" +
    "                </span>\n" +
    "              </a>\n" +
    "              <a class=\"list-group-item fs-18 pad-t-5 pad-b-5\" ui-sref=\"dashboard.units\">\n" +
    "                <span class=\"fa-stack fa-lg fs-22 text-blue pad-l-3 col-md-4\">\n" +
    "                  <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                  <i class=\"fa fa-superscript fa-stack-1x fa-inverse\"></i>\n" +
    "                </span>\n" +
    "                &nbsp;<span class=\"fs-18 text-blue col-md-8\">\n" +
    "                    Units & Unit Conversions\n" +
    "                </span>\n" +
    "                <br>\n" +
    "                <span class=\"margin-l-20 fs-14 text-black\">\n" +
    "                    Manage Units & Unit Conversions\n" +
    "                </span>\n" +
    "              </a>\n" +
    "              <a class=\"list-group-item fs-18 pad-t-5 pad-b-5\" ui-sref=\"dashboard.samples\">\n" +
    "                <span class=\"fa-stack fa-lg fs-22 text-blue pad-l-3 col-md-4\">\n" +
    "                  <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                  <i class=\"fa fa-eyedropper fa-stack-1x fa-inverse\"></i>\n" +
    "                </span>\n" +
    "                &nbsp;<span class=\"fs-18 text-blue col-md-8\">\n" +
    "                    Samples\n" +
    "                </span>\n" +
    "                <br>\n" +
    "                <span class=\"margin-l-20 fs-14 text-black\">\n" +
    "                    Manage Samples\n" +
    "                </span>\n" +
    "              </a>\n" +
    "              <a class=\"list-group-item fs-18 pad-t-5 pad-b-5\" ui-sref=\"dashboard.sample_types\">\n" +
    "                <span class=\"fa-stack fa-lg fs-22 text-blue pad-l-3 col-md-4\">\n" +
    "                  <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                  <i class=\"fa fa-pie-chart fa-stack-1x fa-inverse\"></i>\n" +
    "                </span>\n" +
    "                &nbsp;<span class=\"fs-18 text-blue col-md-8\">\n" +
    "                    Sample Types\n" +
    "                </span>\n" +
    "                <br>\n" +
    "                <span class=\"margin-l-20 fs-14 text-black\">\n" +
    "                    Manage Sample Types\n" +
    "                </span>\n" +
    "              </a>\n" +
    "              <a class=\"list-group-item fs-18 pad-t-5 pad-b-5\" ui-sref=\"dashboard.reagents\">\n" +
    "                <span class=\"fa-stack fa-lg fs-22 text-blue pad-l-3 col-md-4\">\n" +
    "                  <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                  <i class=\"fa fa-database fa-stack-1x fa-inverse\"></i>\n" +
    "                </span>\n" +
    "                &nbsp;<span class=\"fs-18 text-blue col-md-8\">\n" +
    "                    Reagents\n" +
    "                </span>\n" +
    "                <br>\n" +
    "                <span class=\"margin-l-20 fs-14 text-black\">\n" +
    "                    Manage Reagents\n" +
    "                </span>\n" +
    "              </a>\n" +
    "              <a class=\"list-group-item fs-18 pad-t-5 pad-b-5\" ui-sref=\"dashboard.drugs\">\n" +
    "                <span class=\"fa-stack fa-lg fs-22 text-blue pad-l-3 col-md-4\">\n" +
    "                  <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                  <i class=\"fa fa-medkit fa-stack-1x fa-inverse\"></i>\n" +
    "                </span>\n" +
    "                &nbsp;<span class=\"fs-18 text-blue col-md-8\">\n" +
    "                    Drugs\n" +
    "                </span>\n" +
    "                <br>\n" +
    "                <span class=\"margin-l-20 fs-14 text-black\">\n" +
    "                    Manage Drugs\n" +
    "                </span>\n" +
    "              </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- End of Master data menu -->\n" +
    "    <div class=\"clearfix visible-md visible-lg hidden-sm hidden-xs margin-t-20 margin-b-20\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboard/tpls/lab_dashboard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/tpls/lab_dashboard.tpl.html",
    "<div class=\"content-header\">\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "            <i class=\"fa fa-dashboard\"></i> Dashboard\n" +
    "            <span class=\"pull-right\" title=\"Hide/show advanced search\" sidebar-toogle=\"#search_frm_div\">\n" +
    "                <i class=\"fa fa-chevron-circle-left text-primary menu-toggle-btn\"></i>\n" +
    "            </span>\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"facilities-img col-xs-12 pad-0\">\n" +
    "        <div class=\"bg-overlay col-xs-12 pad-0\">\n" +
    "            <div class=\"col-md-10 col-md-offset-1 text-center margin-t-70\">\n" +
    "                <h1 class=\"text-white fs-40 lato-light\">\n" +
    "                    The Platform that connects Inventors to Investors,\n" +
    "                    <br>\n" +
    "                    looking to invest in the next <span class=\"text-green\">big thing</span>.\n" +
    "                </h1>\n" +
    "                <div class=\"col-xs-12 margin-t-70\">\n" +
    "                    <div class=\"col-md-5\">\n" +
    "                        <div class=\"col-md-6 pad-t-20\">\n" +
    "                            <span class=\"fa-stack fa-lg fs-50 text-white pad-l-3 col-md-12 pull-right\">\n" +
    "                              <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                              <i class=\"fa fa-user fa-stack-1x fa-inverse text-niceblue\"></i>\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6 pad-t-20\">\n" +
    "                            <div class=\"bubble fs-16\">\n" +
    "                                I am an Inventor\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-2 pad-t-20\">\n" +
    "                        <span class=\"col-xs-12 fs-18 text-white\">\n" +
    "                            Connected\n" +
    "                        </span>\n" +
    "                        <span class=\"col-xs-12\">\n" +
    "                            <i class=\"stretch fs-30 text-niceblue fa fa-arrows-h\"></i>\n" +
    "\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-5\">\n" +
    "                        <div class=\"col-md-6 pad-t-20\">\n" +
    "                            <div class=\"bubble bubble--alt fs-18\">\n" +
    "                                I am an Investor\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6 pad-t-20\">\n" +
    "                            <span class=\"fa-stack fa-lg fs-50 text-white pad-l-3 col-md-4\">\n" +
    "                              <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                              <i class=\"fa fa-user-secret fa-stack-1x fa-inverse text-niceblue\"></i>\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-12 margin-t-30\">\n" +
    "                    <a href=\"\" class=\"btn btn-success btn-lg\">\n" +
    "                        Sign In\n" +
    "                    </a>\n" +
    "                    <a href=\"\" class=\"btn btn-default btn-lg\">\n" +
    "                        Sign Up\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 margin-b-50\">\n" +
    "        <div class=\"col-md-12 margin-t-30\">\n" +
    "            <h2 class=\"fs-35 fw-700 text-center\">\n" +
    "                <span class=\"text-dark-green lato-light\">\n" +
    "                    Get Access to Funds\n" +
    "                </span>\n" +
    "                <br>\n" +
    "                <span class=\"fs-30 lato-light fw-600\">\n" +
    "                    Join us now and receive funds for that next big idea.\n" +
    "                </span>\n" +
    "            </h2>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-12\">\n" +
    "            <div class=\"card-container col-xs-12 margin-t-10 pad-l-0 pad-r-0\">\n" +
    "                <div class=\"col-xs-12 pad-l-0 pad-r-0\">\n" +
    "                    <div class=\"col-md-4\">\n" +
    "                        <span class=\"fa-stack fa-lg fs-30 text-niceblue pad-l-3 col-md-6 pull-left\">\n" +
    "                            <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                            <i class=\"fa fa-users fa-stack-1x fa-inverse fs-26\"></i>\n" +
    "                        </span>\n" +
    "                        <span class=\"col-md-10 pad-t-0\">\n" +
    "                            <h4 class=\"lato-ligt fs-22 fw-600 lato-light margin-b-10\">\n" +
    "                                Become a member\n" +
    "                            </h4>\n" +
    "                            <p class=\"lato-light fs-16 margin-t-5\">\n" +
    "                            Sign up inorder to enjoy some of our worthwhile opportunities.\n" +
    "                            </p>\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-4\">\n" +
    "                        <span class=\"fa-stack fa-lg fs-30 text-niceblue pad-l-3 col-md-6 pull-left\">\n" +
    "                            <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                            <i class=\"fa fa-comments fa-stack-1x fa-inverse\"></i>\n" +
    "                        </span>\n" +
    "                        <span class=\"col-md-10 pad-t-0\">\n" +
    "                            <h4 class=\"lato-ligt fs-22 fw-600 lato-light margin-b-10\">\n" +
    "                                Share your Big Idea\n" +
    "                            </h4>\n" +
    "                            <p class=\"lato-light fs-16 margin-t-5\">\n" +
    "                            Login and share your next big idea and showcase your company profile.\n" +
    "                            </p>\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-4\">\n" +
    "                        <span class=\"fa-stack fa-lg fs-30 text-niceblue pad-l-3 col-md-6 pull-left\">\n" +
    "                            <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                            <i class=\"fa fa-link fa-stack-1x fa-inverse fs-26\"></i>\n" +
    "                        </span>\n" +
    "                        <span class=\"col-md-10 pad-t-0\">\n" +
    "                            <h4 class=\"lato-ligt fs-22 fw-600 lato-light margin-b-10\">\n" +
    "                                Link Up with Investors\n" +
    "                            </h4>\n" +
    "                            <p class=\"lato-light fs-16 margin-t-5\">\n" +
    "                            Login and share your next big idea and showcase your company profile.\n" +
    "                            </p>\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 pad-0\">\n" +
    "        <section class=\"parallax parallax-demo\">\n" +
    "          <div class=\"col-xs-12 margin-t-50\">\n" +
    "            <h1 class=\"text-white lato-light fs-30\">Start your own company</h1>\n" +
    "          </div>\n" +
    "        </section>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 margin-t-30 margin-b-20\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "            <div class=\"col-md-7\" style=\"border-right: 1px solid #e0e0e0;\">\n" +
    "                <h4 class=\"lato-light text-dark-green fs-26\">\n" +
    "                    Procedure\n" +
    "                </h4>\n" +
    "                <ul class=\"timeline\">\n" +
    "                    <li>\n" +
    "                      <div class=\"timeline-badge\"><i class=\"fa fa-search\"></i></div>\n" +
    "                      <div class=\"timeline-panel\">\n" +
    "                        <div class=\"timeline-heading\">\n" +
    "                          <h4 class=\"timeline-title\">Name Search</h4>\n" +
    "                          <p><small class=\"text-muted\"><i class=\"fa fa-clock-o\"></i> 1 day affair</small></p>\n" +
    "                        </div>\n" +
    "                        <div class=\"timeline-body\">\n" +
    "                          <p>Write a letter to the registrar reserving your name. If the name is not in use it is accepted by the registrar and reserved for 30 days</p>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </li>\n" +
    "                    <li class=\"timeline-inverted\">\n" +
    "                      <div class=\"timeline-badge warning\"><i class=\"fa fa-file-text\"></i></div>\n" +
    "                      <div class=\"timeline-panel\">\n" +
    "                        <div class=\"timeline-heading\">\n" +
    "                          <h4 class=\"timeline-title\">Prepare Memorandum and Article of Association and Statement of Nominal Capital</h4>\n" +
    "                          <p><small class=\"text-muted\"><i class=\"fa fa-clock-o\"></i> 1 day affair</small></p>\n" +
    "                        </div>\n" +
    "                        <div class=\"timeline-body\">\n" +
    "                          <p>The following documents objectives, rules, stakeholders and authorised share capital of a company. These are prepared by an advocate</p>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </li>\n" +
    "                    <li>\n" +
    "                      <div class=\"timeline-badge info\"><i class=\"fa fa-credit-card\"></i></div>\n" +
    "                      <div class=\"timeline-panel\">\n" +
    "                        <div class=\"timeline-heading\">\n" +
    "                          <h4 class=\"timeline-title\">Pay Stump Duty</h4>\n" +
    "                          <p><small class=\"text-muted\"><i class=\"fa fa-clock-o\"></i> 1 day affair</small></p>\n" +
    "                        </div>\n" +
    "                        <div class=\"timeline-body\">\n" +
    "                          <p>The amount of money that you pay depends on your declared nominal capital, but the minimum is KES. 2,140 based on the minimum nominal capital of KES. 2,000</p>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </li>\n" +
    "                    <li class=\"timeline-inverted\">\n" +
    "                      <div class=\"timeline-badge success\"><i class=\"fa fa-edit\"></i></div>\n" +
    "                      <div class=\"timeline-panel\">\n" +
    "                        <div class=\"timeline-heading\">\n" +
    "                          <h4 class=\"timeline-title\">Situation of Office Form 201</h4>\n" +
    "                        </div>\n" +
    "                        <div class=\"timeline-body\">\n" +
    "                          <p>Fill this form that notes the registered office address of the company, and to be signed by one director or the company secretary</p>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </li>\n" +
    "                    <li>\n" +
    "                      <div class=\"timeline-badge warning\"><i class=\"fa fa-edit\"></i></div>\n" +
    "                      <div class=\"timeline-panel\">\n" +
    "                        <div class=\"timeline-heading\">\n" +
    "                          <h4 class=\"timeline-title\">\n" +
    "                            List of Directors Form 203\n" +
    "                        </h4>\n" +
    "                        </div>\n" +
    "                        <div class=\"timeline-body\">\n" +
    "                          <p>Fill this form that lists the directors and secretary of the company. This is stamped by the company secretary</p>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </li>\n" +
    "                    <li class=\"timeline-inverted\">\n" +
    "                      <div class=\"timeline-badge info\"><i class=\"fa fa-edit\"></i></div>\n" +
    "                      <div class=\"timeline-panel\">\n" +
    "                        <div class=\"timeline-heading\">\n" +
    "                          <h4 class=\"timeline-title\">Declaration of Compliance Form 208</h4>\n" +
    "                        </div>\n" +
    "                        <div class=\"timeline-body\">\n" +
    "                          <p> Get a commissioner of oath must sign this form on your behalf</p>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </li>\n" +
    "                    <li>\n" +
    "                      <div class=\"timeline-badge default\"><i class=\"fa fa-folder-open\"></i></div>\n" +
    "                      <div class=\"timeline-panel\">\n" +
    "                        <div class=\"timeline-heading\">\n" +
    "                          <h4 class=\"timeline-title\">\n" +
    "                            File Documents at Registrars office\n" +
    "                        </h4>\n" +
    "                        <p><small class=\"text-muted\"><i class=\"fa fa-clock-o\"></i> 12 day affair</small></p>\n" +
    "                        </div>\n" +
    "                        <div class=\"timeline-body\">\n" +
    "                          <p>You then need to file your documents at Companies Registry and pay the registration fee.You should receive a certificate of incorporation after a period of about 21 days</p>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </li>\n" +
    "                    <li class=\"timeline-inverted\">\n" +
    "                      <div class=\"timeline-badge warning\"><i class=\"fa fa-certificate\"></i></div>\n" +
    "                      <div class=\"timeline-panel\">\n" +
    "                        <div class=\"timeline-heading\">\n" +
    "                          <h4 class=\"timeline-title\">Get your Company Seal</h4>\n" +
    "                        </div>\n" +
    "                        <p><small class=\"text-muted\"><i class=\"fa fa-clock-o\"></i> 1 day affair</small></p>\n" +
    "                        <div class=\"timeline-body\">\n" +
    "                          <p> This is a device that embosses your company name on documents and is used as a signature of the company.It can be purchased from a stationer.</p>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </li>\n" +
    "                  </ul>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-5\">\n" +
    "                <div class=\"col-xs-12 margin-b-20\">\n" +
    "                    <h4 class=\"lato-light text-dark-green fs-24\">\n" +
    "                        Required Documents\n" +
    "                    </h4>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-12 pad-l-0 pad-r-0 pad-t-10 results-card\">\n" +
    "                    <div class=\"col-md-2 text-center\">\n" +
    "                        <span class=\"fa-stack fa-lg fs-28 text-niceblue pad-l-3 col-md-4\">\n" +
    "                          <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                          <i class=\"fa fa-file-text fa-stack-1x fa-inverse fs-24\"></i>\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-10 pad-l-0\">\n" +
    "                        <h4 class=\"lato-ligt fs-18 fw-600 lato-light margin-b-10\">\n" +
    "                            Memorandum of Association\n" +
    "                        </h4>\n" +
    "                        <p class=\"lato-light fs-15 margin-t-5\">\n" +
    "                        This is document defines the relationship between the company and its stakeholders.\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-12 pad-l-0 pad-r-0 pad-t-10 results-card\">\n" +
    "                    <div class=\"col-md-2 text-center\">\n" +
    "                        <span class=\"fa-stack fa-lg fs-28 text-niceblue pad-l-3 col-md-4\">\n" +
    "                          <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                          <i class=\"fa fa-file-text fa-stack-1x fa-inverse fs-24\"></i>\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-10 pad-l-0\">\n" +
    "                        <h4 class=\"lato-ligt fs-18 fw-600 lato-light margin-b-10\">\n" +
    "                            Article of Association\n" +
    "                        </h4>\n" +
    "                        <p class=\"lato-light fs-15 margin-t-5\">\n" +
    "                        This document that contains the purpose of the company as well as the duties and responsibilities of its members defined and recorded clearly.\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-12 pad-l-0 pad-r-0 pad-t-10 results-card\">\n" +
    "                    <div class=\"col-md-2 text-center\">\n" +
    "                        <span class=\"fa-stack fa-lg fs-28 text-niceblue pad-l-3 col-md-4\">\n" +
    "                          <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                          <i class=\"fa fa-file-text fa-stack-1x fa-inverse fs-24\"></i>\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-10 pad-l-0\">\n" +
    "                        <h4 class=\"lato-ligt fs-18 fw-600 lato-light margin-b-10\">\n" +
    "                            Statement of Nominal Capital\n" +
    "                        </h4>\n" +
    "                        <p class=\"lato-light fs-15 margin-t-5\">\n" +
    "                        This document  indicates the authorised share capital of a company.\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-xs-12 margin-t-30 card-container \">\n" +
    "                    <h4 class=\"lato-light fs-22 fw-600 text-dark-green margin-b-10\">\n" +
    "                        Patent Your Idea\n" +
    "                    </h4>\n" +
    "                    <p class=\"margin-t-10 lato-light fw-500 fs-15\">\n" +
    "                        Before sharing your idea on our platform make sure you have patented it. This ensures that no one else can steal your idea. One can easily patent their ideas in a simple 5 step process:\n" +
    "                    </p>\n" +
    "                    <div class=\"col-xs-12 pad-l-20 margin-t-10\">\n" +
    "                        <ul class=\"fa-ul margin-t-10 lato-light fs-13\">\n" +
    "                          <li><i class=\"fa-li fa fa-arrow-circle-right text-niceblue\"></i>Fill in the Request Form</li>\n" +
    "                          <li><i class=\"fa-li fa fa-arrow-circle-right text-niceblue\"></i>A description of the invention with at least one mode of use in concise and exact terms</li>\n" +
    "                          <li><i class=\"fa-li fa fa-arrow-circle-right text-niceblue\"></i>One or more claims defining the matter for which protection is sought</li>\n" +
    "                          <li><i class=\"fa-li fa fa-arrow-circle-right text-niceblue\"></i>One or more drawings (where applicable)</li>\n" +
    "                          <li><i class=\"fa-li fa fa-arrow-circle-right text-niceblue\"></i>An abstract summarizing the invention’s use. No more than 150 words.</li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboard/tpls/main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/tpls/main.tpl.html",
    "<section class=\"section row\">\n" +
    "  <div ui-view=\"title\"></div>\n" +
    "  <div class=\"content fade-content\" ui-view=\"lab-view\"></div>\n" +
    "  <div ui-view=\"footer\"></div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("events/tpls/events_form.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("events/tpls/events_form.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a ng-if=\"edit_view\" tooltip-placement=\"bottom\" tooltip=\"Delete Test Event\" class=\"action-btn action-btn-md action-btn-default\" ui-sref=\"event.add_event\" ui-sref-opts=\"{reload:true}\">\n" +
    "            <i class=\"fa fa-trash text-danger\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "          <i class=\"fa {{edit_view ? 'fa-edit' : 'fa-plus-circle'}}\"></i> {{edit_view ? 'Edit' : 'Add'}} Test Event\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "</div>\n" +
    "<div class=\"col-xs-12\">\n" +
    "    <div ui-view=\"delete\"></div>\n" +
    "    <div class=\"col-xs-12\">\n" +
    "      <form name=\"event_frm\"  ng-submit=\"save(event_frm)\" novalidate>\n" +
    "        <div class=\"fade-content col-sm-10 col-sm-offset-1 margin-t-20 content-card\">\n" +
    "          <drf-err-msg></drf-err-msg>\n" +
    "            <div class=\"col-sm-12 margin-t-20 margin-b-20\">\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Name<span class=\"text-danger\">&#42;</span></label>\n" +
    "                  <input class=\"form-control\" name=\"name\" ng-model=\"an_event.name\" required placeholder=\"Name\" api-checker/>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label for=\"sample dispatch date\" class=\"control-label\">\n" +
    "                      <span class=\"fs-14\">Sample Dispatch Date <span class=\"text-danger\">&#42;</span>: {{an_event.sample_dispatch_date | date}}</span>\n" +
    "                  </label>\n" +
    "                  <datepicker date-format=\"y-MM-dd\">\n" +
    "                    <input class=\"form-control margin-b-10\" name=\"sample_dispatch_date\" ng-model=\"an_event.sample_dispatch_date\" type=\"text\"  placeholder=\"yy-MM-dd\" required api-checker/>\n" +
    "                  </datepicker>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label for=\"start date\" class=\"control-label\">\n" +
    "                      <span class=\"fs-14\">Start Date <span class=\"text-danger\">&#42;</span>: {{an_event.start_date | date}}</span>\n" +
    "                  </label>\n" +
    "                  <datepicker date-format=\"y-MM-dd\">\n" +
    "                    <input class=\"form-control  margin-b-10\" name=\"start_date\" ng-model=\"an_event.start_date\" type=\"text\"  placeholder=\"yy-MM-dd\" required api-checker/>\n" +
    "                  </datepicker>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label for=\"end date\" class=\"control-label\">\n" +
    "                      <span class=\"fs-14\">End Date <span class=\"text-danger\">&#42;</span>: {{an_event.end_date | date}}</span>\n" +
    "                  </label>\n" +
    "                  <datepicker date-format=\"y-MM-dd\">\n" +
    "                    <input class=\"form-control margin-b-10\" name=\"end_date\" ng-model=\"an_event.end_date\" type=\"text\"  placeholder=\"yy-MM-dd\" required api-checker/>\n" +
    "                  </datepicker>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label for=\"expected report date\" class=\"control-label\">\n" +
    "                      <span class=\"fs-14\">Expected Report Date <span class=\"text-danger\">&#42;</span>: {{an_event.expected_report_date | date}}</span>\n" +
    "                  </label>\n" +
    "                  <datepicker date-format=\"y-MM-dd\">\n" +
    "                    <input class=\"form-control margin-b-10\" name=\"expected_report_date\" ng-model=\"an_event.expected_report_date\" type=\"text\"  placeholder=\"yy-MM-dd\" required api-checker/>\n" +
    "                  </datepicker>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Description</label>\n" +
    "                  <textarea class=\"form-control\" name=\"description\" ng-model=\"an_event.description\" placeholder=\"Description\" rows=\"2\" api-checker></textarea>\n" +
    "              </div>\n" +
    "              <div class=\"form-group checkbox\">\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\" id=\"active\" name=\"active\" ng-model=\"an_event.active\" tooltip=\"Check if Test Event is not retired\" api-checker >\n" +
    "                    Active\n" +
    "                   </label>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"fade-content col-sm-10 col-sm-offset-1 margin-t-20 content-card\">\n" +
    "          <div class=\"col-xs-12 category-title\">\n" +
    "                <h4 class=\"lato-light fw-500 fs-22 margin-b-10\">Programs</h4>\n" +
    "                <div class=\"form-group input-group\">\n" +
    "                    <span class=\"input-group-addon\" id=\"basic-addon1\">\n" +
    "                      <i class=\"fa fa-search\"></i>\n" +
    "                    </span>\n" +
    "                    <input class=\"form-control\" ng-model=\"program.query\" placeholder=\"Search Programs\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "          <div class=\"service-list col-xs-12 pad-0 margin-b-20\">\n" +
    "            <div class=\"service-item col-xs-12 pad-0\" ng-repeat=\"program in programs | filter : program.query\">\n" +
    "              <div class=\"col-md-10 col-xs-8 margin-t-10 margin-b-0\">\n" +
    "                {{program.name}}\n" +
    "              </div>\n" +
    "              <div class=\"col-md-2 col-xs-4 margin-t-0\">\n" +
    "                <div class=\"form-group checkbox\">\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\" id=\"selected\" name=\"selected\" ng-model=\"program.selected\" tooltip-placement=\"bottom\" tooltip=\"Check Program to add to Test Event\" api-checker ng-change=\"manageProgramEvents(program)\">\n" +
    "                    Add\n" +
    "                   </label>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"pull-left col-sm-10 col-sm-offset-1 pad-0 margin-t-10 margin-b-20\">\n" +
    "          <button class=\"btn btn-primary\">Save</button>\n" +
    "          <a class=\"margin-l-10 btn btn-default margin-l-5\" ui-sref=\"dashboard.events\">Cancel</a>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("events/tpls/events_grid.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("events/tpls/events_grid.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a  tooltip-placement=\"bottom\" tooltip=\"New Test Event\" class=\"action-btn action-btn-md action-btn-default\" ui-sref=\"dashboard.events.add_event\">\n" +
    "            <i class=\"fa fa-plus\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "            <i class=\"fa fa-calendar\"></i> Test Events\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12 margin-t-30\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <sil-grid template=\"events/tpls/events_list.tpl.html\" grid-for=\"events\" api-key=\"events\" data=\"events\" filters=\"filters\" error=\"alert\"></sil-grid>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("events/tpls/events_list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("events/tpls/events_list.tpl.html",
    "<div class=\"col-xs-12 content-card\">\n" +
    "    <h4 class=\"lato-light margin-b-10 fs-20\">\n" +
    "        Test Events List\n" +
    "    </h4>\n" +
    "    <table class=\"table table-hover table-condensed fs-14\" id=\"no-more-tables\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th class=\"col-md-2\">Name</th>\n" +
    "                <th class=\"col-md-2\">Sample Dispatch Date</th>\n" +
    "                <th class=\"col-md-2\">Start Date</th>\n" +
    "                <th class=\"col-md-2\">End Date</th>\n" +
    "                <th class=\"col-md-2\">Expected Report Date</th>\n" +
    "                <th class=\"col-md-2\"></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody class=\"fade-content\">\n" +
    "            <tr  ng-repeat=\"event in events\">\n" +
    "                <td class=\"col-md-2 pad-t-15\" data-title=\"Name:\" class=\"pad-t-15\">{{event.name}}</td>\n" +
    "                <td class=\"col-md-2 pad-t-15\" data-title=\"Sample Dispatch Date:\" class=\"pad-t-15\">{{event.sample_dispatch_date | date : 'dd-MM-yyyy'}}</td>\n" +
    "                <td class=\"col-md-2 pad-t-15\" data-title=\"Start Date:\" class=\"pad-t-15\">{{event.start_date | date : 'dd-MM-yyyy'}}</td>\n" +
    "                <td class=\"col-md-2 pad-t-15\" data-title=\"End Date:\" class=\"pad-t-15\">{{event.end_date | date : 'dd-MM-yyyy'}}</td>\n" +
    "                <td class=\"col-md-2 pad-t-15\" data-title=\"Expected Report Date:\" class=\"pad-t-15\">{{event.expected_report_date | date : 'dd-MM-yyyy'}}</td>\n" +
    "                <td data-title=\"Actions:\" class=\"col-md-2 text-right\">\n" +
    "                    <a class=\"action-btn action-btn-grid action-btn-success\" ui-sref=\"dashboard.events.edit_event({event_id: event.id})\" class=\"btn btn-success\">\n" +
    "                        <i class=\"fa fa-pencil\"></i>\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <sil-grid-pagination> </sil-grid-pagination>\n" +
    "</div>\n" +
    "");
}]);

angular.module("events/tpls/main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("events/tpls/main.tpl.html",
    "<section class=\"section row\">\n" +
    "   <div ui-view=\"header\"></div>\n" +
    "    <div class=\"content fade-content\" ui-view=\"grid-view\">\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("lab_instruments/tpls/instruments_form.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("lab_instruments/tpls/instruments_form.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a ng-if=\"edit_view\" tooltip-placement=\"bottom\" tooltip=\"Delete Drug\" class=\"action-btn action-btn-md action-btn-default\" ui-sref=\"lab_instruments.add_instrument\">\n" +
    "            <i class=\"fa fa-trash text-danger\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "          <i class=\"fa {{edit_view ? 'fa-edit' : 'fa-plus-circle'}}\"></i> {{edit_view ? 'Edit' : 'Add'}} Lab Instrument\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12\">\n" +
    "    <div ui-view=\"delete\"></div>\n" +
    "    <div class=\"col-xs-12\">\n" +
    "      <form name=\"instrument_frm\"  ng-submit=\"save(instrument_frm)\" novalidate>\n" +
    "        <div class=\"fade-content col-sm-10 col-sm-offset-1 margin-t-20 content-card\">\n" +
    "          <drf-err-msg></drf-err-msg>\n" +
    "            <div class=\"col-sm-12 margin-t-20 margin-b-20\">\n" +
    "\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"\">\n" +
    "                      Manufacturer<span class=\"text-danger\">&#42;</span>\n" +
    "                  </label>\n" +
    "                    <ui-select theme=\"bootstrap\" ng-model=\"select_values.manufacturer\" required name=\"manufacturer_id\" api-checker register-custom-form-control ng-change=\"manufacturerInstruments(select_values.manufacturer)\">\n" +
    "                        <ui-select-match placeholder=\"Select a manufacturer...\" allow-clear=\"true\">\n" +
    "                            <span>{{$select.selected.manufacturer_name}} {{$select.selected.name}}</span>\n" +
    "                        </ui-select-match>\n" +
    "                        <ui-select-choices position=\"down\" repeat=\"manufacturer.id as manufacturer in manufacturers | filter:$select.search\">\n" +
    "                            <span>{{manufacturer.name}}</span>\n" +
    "                        </ui-select-choices>\n" +
    "                    </ui-select>\n" +
    "              </div>\n" +
    "\n" +
    "              <div class=\"form-group\">\n" +
    "                    <label class=\"\">\n" +
    "                        Instrument<span class=\"text-danger\">&#42;</span>\n" +
    "                    </label>\n" +
    "                    <ui-select theme=\"bootstrap\" ng-model=\"select_values.instrument\" required name=\"instrument_id\" ng-change=\"instrumentModels(select_values.instrument)\" api-checker register-custom-form-control  ng-disabled=\"!select_values.manufacturer\">\n" +
    "                        <ui-select-match placeholder=\"Select an instrument...\" allow-clear=\"true\">\n" +
    "                            <span>{{$select.selected.instrument_name}} {{$select.selected.name}}</span>\n" +
    "                        </ui-select-match>\n" +
    "                        <ui-select-choices position=\"down\" repeat=\"instrument.id as instrument in instruments | filter:$select.search\">\n" +
    "                            <span>{{instrument.name}}</span>\n" +
    "                        </ui-select-choices>\n" +
    "                    </ui-select>\n" +
    "              </div>\n" +
    "\n" +
    "              <div class=\"form-group\">\n" +
    "                    <label class=\"control-label\">Instrument Model<span class=\"text-danger\">&#42;</span></label>\n" +
    "                    <ui-select theme=\"bootstrap\" ng-model=\"select_values.instrument_model\" required name=\"instrument_model\" api-checker register-custom-form-control ng-disabled=\"!instrument\">\n" +
    "                        <ui-select-match placeholder=\"Select an instrument model...\" allow-clear=\"true\">\n" +
    "                            <span>{{$select.selected.instrument_model_name}} {{$select.selected.name}}</span>\n" +
    "                        </ui-select-match>\n" +
    "                        <ui-select-choices position=\"down\" repeat=\"model.id as model in instrument.models | filter:$select.search\">\n" +
    "                            <span>{{model.name}}</span>\n" +
    "                        </ui-select-choices>\n" +
    "                    </ui-select>\n" +
    "              </div>\n" +
    "\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Nickname</label>\n" +
    "                  <input class=\"form-control\" name=\"nickname\" ng-model=\"lab_instrument.nickname\"  placeholder=\"Nickname\" api-checker/>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                  <input type=\"hidden\" name=\"lab\" ng-model=\"lab_instrument.lab\"/>\n" +
    "              </div>\n" +
    "\n" +
    "              <div class=\"form-group checkbox\">\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\" id=\"active\" name=\"active\" ng-model=\"lab_instrument.active\" tooltip=\"Check if Lab Instrument is not retired\" api-checker >\n" +
    "                    In Use\n" +
    "                   </label>\n" +
    "              </div>\n" +
    "              <div class=\"pull-left col-sm-12 pad-0 margin-t-10 margin-b-20\">\n" +
    "                <button class=\"btn btn-primary\">Save</button>\n" +
    "                <a class=\"margin-l-10 btn btn-default margin-l-5\" ui-sref=\"dashboard.samples\">Cancel</a>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("lab_instruments/tpls/instruments_grid.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("lab_instruments/tpls/instruments_grid.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a  tooltip-placement=\"bottom\" tooltip=\"Add Instrument\" class=\"action-btn action-btn-md action-btn-warm\" ui-sref=\"lab_instruments.add_instrument\">\n" +
    "            <i class=\"fa fa-plus\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "            <i class=\"fa fa-sliders\"></i> Lab Instruments\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"col-xs-12 pad-0\">\n" +
    "    <section class=\"parallax parallax-demo-two\">\n" +
    "      <div class=\"col-xs-12 margin-t-50\">\n" +
    "        <h1 class=\"text-white lato-light fs-30\">Checkout our showcases of potential investments opportunities</h1>\n" +
    "      </div>\n" +
    "    </section>\n" +
    "</div>\n" +
    "<div class=\"col-xs-12 margin-t-30 pad-0\">\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"col-xs-12 content-card\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"conrol-label\">Indusry</label>\n" +
    "                <select class=\"form-control\" ng-model=\"lab_program.query\">\n" +
    "                    <option value=\"\" disabled>Select Industry</option>\n" +
    "                    <option ng-repeat=\"program in programs\" ng-selected=\"{{program.id == analyte.program}}\" value=\"{{program.id}}\">{{program.name}}</option>\n" +
    "                </select>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"conrol-label\">Town</label>\n" +
    "                <select class=\"form-control\" ng-model=\"lab_program.query\">\n" +
    "                    <option value=\"\" disabled>Select Town</option>\n" +
    "                    <option ng-repeat=\"program in programs\" ng-selected=\"{{program.id == analyte.program}}\" value=\"{{program.id}}\">{{program.name}}</option>\n" +
    "                </select>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-8\">\n" +
    "        <div class=\"col-xs-12 content-card\">\n" +
    "            <div class=\"col-xs-12\">\n" +
    "                <div class=\"form-group input-group\">\n" +
    "                    <span class=\"white-addon input-group-addon\" id=\"basic-addon1\">\n" +
    "                      <i class=\"fa fa-search\"></i>\n" +
    "                    </span>\n" +
    "                    <input class=\"white-input form-control\" ng-model=\"lab_program.query\" placeholder=\"Search Organizaions\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div ui-view=\"footer\"></div>\n" +
    "");
}]);

angular.module("lab_instruments/tpls/instruments_list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("lab_instruments/tpls/instruments_list.tpl.html",
    "<div class=\"col-xs-12 content-card\">\n" +
    "    <h4 class=\"lato-light margin-b-10 fs-20\">\n" +
    "        Registered Instruments\n" +
    "    </h4>\n" +
    "    <table class=\"table table-hover table-condensed fs-14\" id=\"no-more-tables\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th class=\"col-md-4\">Name</th>\n" +
    "                <th class=\"col-md-3\">Model</th>\n" +
    "                <th class=\"col-md-3\">Nickname</th>\n" +
    "                <th class=\"col-md-1\">In Use</th>\n" +
    "                <th class=\"col-md-1\"></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody class=\"fade-content\">\n" +
    "            <tr  ng-repeat=\"instrument in lab_instruments\">\n" +
    "                <td class=\"col-md-4 pad-t-15\" data-title=\"Name:\" class=\"pad-t-15\">{{instrument.instrument_name}}</td>\n" +
    "                <td class=\"col-md-3 pad-t-15\" data-title=\"Name:\" class=\"pad-t-15\">\n" +
    "                    {{instrument.instrument_model_name}}\n" +
    "                </td>\n" +
    "                <td class=\"col-md-3 pad-t-15\" data-title=\"Name:\" class=\"pad-t-15\">\n" +
    "                    {{instrument.nickname}}\n" +
    "                </td>\n" +
    "                <td class=\"col-md-1 pad-t-15\" data-title=\"Active\">\n" +
    "                    <span ng-if=\"instrument.active\" class=\"fa-stack fa-lg fs-14 text-success\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-check fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"!instrument.active\" class=\"fa-stack fa-lg fs-14 text-danger\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-close fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                </td>\n" +
    "                <td data-title=\"Actions:\" class=\"col-md-1 text-right\">\n" +
    "                    <a class=\"action-btn action-btn-grid action-btn-success\" ui-sref=\"lab_instruments.edit_instruments({instrument_id: instrument.id})\" class=\"btn btn-success\">\n" +
    "                        <i class=\"fa fa-pencil\"></i>\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <sil-grid-pagination> </sil-grid-pagination>\n" +
    "</div>\n" +
    "");
}]);

angular.module("lab_programs/tpls/lab-program-edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("lab_programs/tpls/lab-program-edit.tpl.html",
    "<div class=\"fx-fade-up fx-dur-600 fx-ease-cubic\" ng-show=\"form_present\">\n" +
    "    <div ui-view=\"delete\"></div>\n" +
    "    <div class=\"\">\n" +
    "      <form name=\"unit_frm\"  ng-submit=\"save(unit_frm)\" novalidate>\n" +
    "        <div class=\"col-xs-12 margin-t-20 content-card\">\n" +
    "            <h2 class=\"content-title\">\n" +
    "                 <span class=\"main-title\">\n" +
    "                  <i class=\"fa {{edit_view ? 'fa-edit' : 'fa-plus-circle'}}\"></i> {{edit_view ? 'Edit' : 'Add'}} Analyte\n" +
    "                </span>\n" +
    "            </h2>\n" +
    "          <drf-err-msg2></drf-err-msg2>\n" +
    "            <div class=\"col-sm-12 margin-t-20 margin-b-20\">\n" +
    "              <div class=\"form-group\">\n" +
    "                    <label class=\"control-label\">Analyte<span class=\"text-danger\">&#42;</span></label>\n" +
    "                    <ui-select theme=\"bootstrap\" ng-change=\"getConfigurationsAnalyte(select_values.analyte)\" ng-model=\"select_values.analyte\" required name=\"analyte\" api-checker register-custom-form-control>\n" +
    "                        <ui-select-match placeholder=\"Select a analyte...\" allow-clear=\"true\">\n" +
    "                            <span>{{$select.selected.analyte_name}} {{$select.selected.name}}</span>\n" +
    "                        </ui-select-match>\n" +
    "                        <ui-select-choices position=\"down\" repeat=\"analyte.id as analyte in analytes | filter:$select.search\">\n" +
    "                            <span>{{analyte.name}}</span>\n" +
    "                        </ui-select-choices>\n" +
    "                    </ui-select>\n" +
    "              </div>\n" +
    "               <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Unit<span class=\"text-danger\">&#42;</span></label>\n" +
    "                    <ui-select ng-model=\"select_values.unit\" required name=\"unit\" api-checker register-custom-form-control ng-disabled=\"!select_values.analyte\">\n" +
    "                        <ui-select-match placeholder=\"Select a unit...\" allow-clear=\"true\">\n" +
    "                            <span>{{$select.selected.unit_name}}  {{$select.selected.name}}</span>\n" +
    "                        </ui-select-match>\n" +
    "                        <ui-select-choices position=\"down\" repeat=\"unit.unit as unit in units | filter:$select.search\">\n" +
    "                            <span>{{unit.unit_name}} {{unit.name}}</span>\n" +
    "                        </ui-select-choices>\n" +
    "                    </ui-select>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "              <label class=\"control-label\">Instrument<span class=\"text-danger\">&#42;</span></label>\n" +
    "                    <ui-select ng-model=\"select_values.analyzer\" required name=\"analyzer\" api-checker register-custom-form-control>\n" +
    "                        <ui-select-match placeholder=\"Select an instrument...\" allow-clear=\"true\">\n" +
    "                            <span>{{$select.selected.analyzer_name}} {{$select.selected.instrument_model_name}}</span>\n" +
    "                        </ui-select-match>\n" +
    "                        <ui-select-choices position=\"down\" repeat=\"analyzer.id as analyzer in analyzers | filter:$select.search\">\n" +
    "                            <span>{{analyzer.instrument_model_name}}</span>\n" +
    "                        </ui-select-choices>\n" +
    "                    </ui-select>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "              <label class=\"control-label\">Reagent</label>\n" +
    "                    <ui-select ng-change=\"getConfigurationsAnalyteReagent(select_values.analyte,select_values.reagent)\" ng-model=\"select_values.reagent\" required name=\"reagent\"  ng-disabled=\"!select_values.analyte\">\n" +
    "                        <ui-select-match placeholder=\"Select a reagent...\" allow-clear=\"true\">\n" +
    "                            <span>{{$select.selected.reagent_name}}  {{$select.selected.name}}</span>\n" +
    "                        </ui-select-match>\n" +
    "                        <ui-select-choices position=\"down\" repeat=\"reagent.reagent as reagent in configurations | filter:$select.search\">\n" +
    "                            <span>{{reagent.reagent_name}}</span>\n" +
    "                        </ui-select-choices>\n" +
    "                    </ui-select>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Method<span class=\"text-danger\">&#42;</span></label>\n" +
    "                    <ui-select ng-model=\"select_values.method\" required name=\"method\" api-checker register-custom-form-control  ng-disabled=\"!select_values.analyte || !select_values.reagent\">\n" +
    "                        <ui-select-match placeholder=\"Select a method...\" allow-clear=\"true\">\n" +
    "                            <span>{{$select.selected.method_name}}</span>\n" +
    "                        </ui-select-match>\n" +
    "                        <ui-select-choices position=\"down\" repeat=\"method.id as method in configurations | filter:$select.search\">\n" +
    "                            <span>{{method.method_name}}</span>\n" +
    "                        </ui-select-choices>\n" +
    "                    </ui-select>\n" +
    "              </div>\n" +
    "              <div class=\"form-group checkbox\">\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\" id=\"is_active\" name=\"is_active\" ng-model=\"subscription.is_active\" tooltip=\"Check if subscription is not retired\" api-checker >\n" +
    "                    Active\n" +
    "                   </label>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"pull-left pad-0 margin-t-10 margin-b-20\">\n" +
    "          <button class=\"btn btn-primary\">Save</button>\n" +
    "          <a class=\"margin-l-10 btn btn-default margin-l-5\" ui-sref=\"lab_programs\" ui-sref-opts=\"{reload:true}\">Cancel</a>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("lab_programs/tpls/lab-programs-grid.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("lab_programs/tpls/lab-programs-grid.tpl.html",
    "<div class=\"content-header\">\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\"> Programs</span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"content-body\">\n" +
    "    <ul class=\"col-xs-3 col-lg-2 margin-t-20 pad-0 margin-b-20\">\n" +
    "       <span class=\"list-title\">Programs</span>\n" +
    "        <li class=\"nav-left\" ng-repeat=\"program in lab_programs\" ng-class=\"{'active': css ==  $index}\">\n" +
    "            <a ng-click=\"getSubscriptions(program.id,program.program, $index)\" ng-class=\"{'notch-right active': css ==  $index}\"\n" +
    "             href=\"\">{{program.program_name}}</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "    <div class= \"content-card margin-v-20 min-height-500\" ng-class=\"{'col-xs-9 col-lg-10': !form_present,'col-xs-3 col-lg-2': form_present}\">\n" +
    "        <div class=\"col-xs-12 pad-0\">\n" +
    "            <h4 class=\"fs-16 col-xs-6 pad-0\">{{form_present ? 'Program':'' }} Analytes</h4>\n" +
    "            <button ng-click=\"form_present = !form_present\" class=\"pull-right margin-t-10 action-btn action-btn-grid action-btn-primary\" ui-sref=\"lab_programs.create_subscription({lab_program_id:lab_program,program_id:program})\" tooltip=\"Add Analyte\" tooltip-placement=\"left\">\n" +
    "                <i class=\"fa fa-plus\"></i>\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <table class=\"table table-hover table-condensed\">\n" +
    "                <thead>\n" +
    "                    <tr>\n" +
    "                        <th><span ng-hide=\"form_present\">Analyte</span></th>\n" +
    "                        <th ng-hide=\"form_present\">Instrument</th>\n" +
    "                        <th ng-hide=\"form_present\">Reagent</th>\n" +
    "                        <th ng-hide=\"form_present\">Method</th>\n" +
    "                        <th ng-hide=\"form_present\"></th>\n" +
    "                    </tr>\n" +
    "                </thead>\n" +
    "                <tbody class=\"fade-content\">\n" +
    "                    <tr ng-repeat=\"subscription in subscriptions\" class=\"fx-fade-down fx-dur-600 fx-ease-cubic fx-stagger-50\">\n" +
    "                        <td class=\"pad-t-15\" data-title=\"Analyte:\">{{subscription.analyte_name}}</td>\n" +
    "                        <td ng-hide=\"form_present\" class=\"pad-t-15\" data-title=\"Instrument:\">{{subscription.analyzer_name}}</td>\n" +
    "                        <td ng-hide=\"form_present\" class=\"pad-t-15\" data-title=\"Reagent:\">{{subscription.reagent_name}}</td>\n" +
    "                        <td ng-hide=\"form_present\" class=\"pad-t-15\" data-title=\"Method:\">{{subscription.method_name}}</td>\n" +
    "                        <td ng-hide=\"form_present\" class=\"text-right\">\n" +
    "                            <a ng-click=\"$parent.form_present = !$parent.form_present\" ui-sref=\"lab_programs.edit_subscription({lab_program_id:lab_program, subscription_id:subscription.id, program_id:program})\" class=\"action-btn action-btn-grid action-btn-success\" tooltip=\"Edit\">\n" +
    "                                <i class=\"fa fa-pencil\"></i>\n" +
    "                            </a>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "    <div ui-view=\"form\" ng-class=\"{'col-xs-6 col-lg-8': form_present,'': !form_present}\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("lab_programs/tpls/main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("lab_programs/tpls/main.tpl.html",
    "<div class=\"content-header\">\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\"> Programs</span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "");
}]);

angular.module("labs/tpls/lab-contacts.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("labs/tpls/lab-contacts.tpl.html",
    "<div class=\"col-sm-10 fade-content col-sm-offset-1 col-xs-12\">\n" +
    "\n" +
    "\n" +
    "    <div class=\"col-xs-12\" ng-if=\"lab_contacts.length===0\">\n" +
    "        <div class=\"alert alert-info\" role=\"alert\">\n" +
    "           <span class=\"fs-18\"><i class=\"fa fa-info-circle\"></i> Please add a contact to the lab to proceed.</span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- lab contact form-->\n" +
    "    <div class=\"margin-t-20 col-xs-12\" ng-class=\"{'':multi.show_form,'fx-zoom-normal fx-speed-400':!multi.show_form}\">\n" +
    "        <div class=\"custom-well col-xs-12\">\n" +
    "            <div class=\"col-xs-12 pad-0\">\n" +
    "                <h4 class=\"fw-600 fs-18 col-xs-6 pad-0\">{{edit_contacts?'Edit':'Add'}} Contact</h4>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12\">\n" +
    "                <form name=\"labcontact_frm\" ng-submit=\"saveLabContact(labcontact_frm,edit_contacts)\" novalidate>\n" +
    "                    <div class=\"col-xs-12 pad-0 margin-t-5\">\n" +
    "                        <drf-err-msg></drf-err-msg>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group col-xs-12\">\n" +
    "                        <input type=\"number\" name=\"id\" ng-model=\"lab_contact.id\" hidden>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group col-xs-12\">\n" +
    "                        <input type=\"number\" name=\"lab\" ng-model=\"lab.id\" hidden>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group col-xs-12\">\n" +
    "                        <label for=\"email\" class=\"control-label fs-14\">\n" +
    "                            Email <span class=\"text-danger\">&#42;</span>\n" +
    "                        </label>\n" +
    "                        <input type=\"email\" class=\"form-control margin-b-10\" name=\"email\" ng-model=\"lab_contact.email\" required api-checker />\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group col-xs-12\">\n" +
    "                        <label for=\"phone\" class=\"control-label fs-14\">\n" +
    "                            Phone <span class=\"text-danger\">&#42;</span>\n" +
    "                        </label>\n" +
    "                        <input class=\"form-control margin-b-10\" name=\"phone\" ng-model=\"lab_contact.phone\" required api-checker />\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group col-xs-12\">\n" +
    "                        <label for=\"postal_address\" class=\"control-label fs-14\">\n" +
    "                            Postal Address <span class=\"text-danger\">&#42;</span>\n" +
    "                        </label>\n" +
    "                        <input class=\"form-control margin-b-10\" name=\"postal_address\" ng-model=\"lab_contact.postal_address\" required api-checker />\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group col-xs-12\">\n" +
    "                        <label for=\"postal_code\" class=\"control-label fs-14\">\n" +
    "                            Postal Code <span class=\"text-danger\">&#42;</span>\n" +
    "                        </label>\n" +
    "                        <input class=\"form-control margin-b-10\" name=\"postal_code\" ng-model=\"lab_contact.postal_code\" required api-checker />\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group col-xs-12\">\n" +
    "                        <label for=\"physical_address\" class=\"control-label fs-14\">\n" +
    "                            Physical Address <span class=\"text-danger\">&#42;</span>\n" +
    "                        </label>\n" +
    "                        <input class=\"form-control margin-b-10\" name=\"physical_address\" ng-model=\"lab_contact.physical_address\" required api-checker />\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group col-xs-12\">\n" +
    "                        <label for=\"postal_code\" class=\"control-label fs-14\">\n" +
    "                            Town <span class=\"text-danger\">&#42;</span>\n" +
    "                        </label>\n" +
    "                        <input class=\"form-control margin-b-10\" name=\"town\" ng-model=\"lab_contact.town\" required api-checker />\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group col-xs-12\">\n" +
    "                        <label class=\"fs-14 control-label\">Country<span class=\"text-danger\">&#42;</span></label>\n" +
    "                        <ui-select ng-model=\"multi.select_values.country\" required name=\"country\" api-checker register-custom-form-control>\n" +
    "                            <ui-select-match placeholder=\"Select a country...\">\n" +
    "                                <span>{{$select.selected.name}}</span>\n" +
    "                            </ui-select-match>\n" +
    "                            <ui-select-choices repeat=\"country.name as country in countries | filter:$select.search\">\n" +
    "                                <span>{{country.name}}</span>\n" +
    "                            </ui-select-choices>\n" +
    "                        </ui-select>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group col-xs-12 checkbox margin-t-20\">\n" +
    "                        <label>\n" +
    "                            <input type=\"checkbox\" id=\"active\" name=\"active\" ng-model=\"lab_contact.active\" tooltip=\"Check if Test Event is not retired\" api-checker >\n" +
    "                            Active\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                    <button class=\"btn btn-primary\" wz-previous >Lab Users</button>\n" +
    "                    <button class=\"btn btn-primary pull-right\" type=\"submit\" >Finish</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("labs/tpls/lab-create.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("labs/tpls/lab-create.tpl.html",
    "<div class=\"content-header\">\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\"><i class=\"fa fa-plus-circle\"></i> Add Lab</span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"content-body\">\n" +
    "    <div class=\"col-xs-12 content-card margin-t-20 margin-b-20\">\n" +
    "        <wizard on-finish=\"finishedWizard()\" template=\"labs/tpls/labs-wizard-create.tpl.html\">\n" +
    "            <wz-step title=\"Lab Details\">\n" +
    "                <form>\n" +
    "                    <input class=\"btn btn-primary\" type=\"submit\" wz-next value=\"Lab Programs\" />\n" +
    "                </form>\n" +
    "            </wz-step>\n" +
    "            <wz-step title=\"Lab Programs\">\n" +
    "                <input class=\"btn btn-primary\" type=\"submit\" wz-previous value=\"Lab Details\" />\n" +
    "                <input class=\"btn btn-primary pull-right\" type=\"submit\" wz-next value=\"Lab Users\" />\n" +
    "            </wz-step>\n" +
    "            <wz-step title=\"Lab Users\">\n" +
    "                <input class=\"btn btn-primary\" type=\"submit\" wz-previous value=\"Lab Programs\" />\n" +
    "                <input class=\"btn btn-primary pull-right\" type=\"submit\" wz-next value=\"Lab Contacts\" />\n" +
    "            </wz-step>\n" +
    "            <wz-step title=\"Lab Contacts\">\n" +
    "                <input class=\"btn btn-primary\" type=\"submit\" wz-previous value=\"Lab Users\" />\n" +
    "                <input class=\"btn btn-primary pull-right\" type=\"submit\" wz-next value=\"Finish\" />\n" +
    "            </wz-step>\n" +
    "        </wizard>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("labs/tpls/lab-details.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("labs/tpls/lab-details.tpl.html",
    "<form name=\"lab_frm\" ng-submit=\"saveDetails(lab_frm,edit_lab)\" novalidate >\n" +
    "    <div class=\"fade-content col-sm-10 col-sm-offset-1 col-xs-12\">\n" +
    "        <drf-err-msg></drf-err-msg>\n" +
    "        <div class=\"col-sm-12 margin-b-20\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"control-label\">Name<span class=\"text-danger\">&#42;</span></label>\n" +
    "                <input class=\"form-control\" name=\"name\" ng-model=\"lab.name\" required placeholder=\"Name\" api-checker/>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"control-label\">Description<span class=\"text-danger\">&#42;</span></label>\n" +
    "                <textarea class=\"form-control\" name=\"description\" ng-model=\"lab.description\" placeholder=\"Description\" rows=\"2\" api-checker required></textarea>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"control-label\">Parent Laboratory</label>\n" +
    "                    <ui-select ng-model=\"select_values.parent\" name=\"parent\" api-checker register-custom-form-control>\n" +
    "                        <ui-select-match placeholder=\"Select a parent lab...\">\n" +
    "                            <span>{{$select.selected.name}}</span>\n" +
    "                        </ui-select-match>\n" +
    "                        <ui-select-choices repeat=\"lab.id as lab in labs | filter:$select.search\">\n" +
    "                            <span>{{lab.name}}</span>\n" +
    "                        </ui-select-choices>\n" +
    "                    </ui-select>\n" +
    "            </div>\n" +
    "            <div class=\"form-group checkbox\">\n" +
    "                <label>\n" +
    "                    <input type=\"checkbox\" id=\"active\" name=\"active\" ng-model=\"lab.active\"tooltip=\"Check if Test Event is not retired\" api-checker >\n" +
    "                    Active\n" +
    "                </label>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-12 margin-v-20\">\n" +
    "            <a class=\"btn btn-default\" ui-sref=\"labs\">Cancel</a>\n" +
    "            <button class=\"btn btn-primary pull-right\" type=\"submit\">Lab Programs</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</form>\n" +
    "");
}]);

angular.module("labs/tpls/lab-edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("labs/tpls/lab-edit.tpl.html",
    "<div class=\"content-header\">\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\"><i class=\"fa fa-{{edit_lab ? 'pencil' : 'plus-circle'}}\"></i> {{edit_lab? 'Edit' : 'Add'}} Lab</span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"content-body\">\n" +
    "    <div class=\"col-xs-12 col-sm-10 col-sm-offset-1 content-card margin-t-20 margin-b-20\">\n" +
    "        <wizard edit-mode=\"edit_lab\" template=\"labs/tpls/labs-wizard-create.tpl.html\">\n" +
    "            <wz-step title=\"Lab Details\">\n" +
    "                <ng-include src=\"'labs/tpls/lab-details.tpl.html'\"></ng-include>\n" +
    "            </wz-step>\n" +
    "            <span ng-controller=\"huqas.labs.controllers.lab_programs\">\n" +
    "                <wz-step title=\"Lab Programs\" canexit=\"multi.exitValidation\">\n" +
    "                    <include-tpl src=\"labs/tpls/lab-programs.tpl.html\">\n" +
    "                    </include-tpl>\n" +
    "                </wz-step>\n" +
    "            </span>\n" +
    "            <span ng-controller=\"huqas.labs.controllers.lab_users\">\n" +
    "                <wz-step title=\"Lab Users\" canexit=\"multi.exitValidation\">\n" +
    "                    <include-tpl src=\"labs/tpls/lab-users.tpl.html\">\n" +
    "                    </include-tpl>\n" +
    "                </wz-step>\n" +
    "            </span>\n" +
    "            <span ng-controller=\"huqas.labs.controllers.lab_contacts\">\n" +
    "                <wz-step title=\"Lab Contacts\" canexit=\"multi.exitValidation\">\n" +
    "                    <include-tpl src=\"labs/tpls/lab-contacts.tpl.html\">\n" +
    "                    </include-tpl>\n" +
    "                </wz-step>\n" +
    "            </span>\n" +
    "        </wizard>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("labs/tpls/lab-programs.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("labs/tpls/lab-programs.tpl.html",
    "<div class=\"col-sm-10 fade-content col-sm-offset-1 col-xs-12\">\n" +
    "\n" +
    "    <!-- lab program form-->\n" +
    "    <div class=\"margin-t-20 col-xs-12\" ng-show=\"multi.show_form\" ng-class=\"{'':multi.show_form,'fx-zoom-normal fx-speed-400':!multi.show_form}\">\n" +
    "        <div class=\"custom-well col-xs-12\">\n" +
    "            <div class=\"col-xs-12 pad-0\">\n" +
    "                <h4 class=\"fw-600 fs-18 col-xs-6 pad-0\">{{multi.edit?'Edit':'Add'}} Program</h4>\n" +
    "                <div class=\"col-xs-6\">\n" +
    "                    <button ng-show=\"multi.show_form\" class=\"z100 pull-right btn btn-primary margin-t-10\" ng-click=\"newProg(labprog_frm,multi)\">\n" +
    "                        Hide form\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12\">\n" +
    "                <form name=\"labprog_frm\" ng-submit=\"saveLabProg(labprog_frm,multi.edit)\" novalidate>\n" +
    "                    <div class=\"col-xs-12 pad-0 margin-t-5\">\n" +
    "                        <drf-err-msg></drf-err-msg>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group col-xs-12\">\n" +
    "                        <label class=\"fs-14 control-label\">Program<span class=\"text-danger\">&#42;</span></label>\n" +
    "                        <ui-select ng-model=\"multi.select_values.program\" required name=\"program\" api-checker register-custom-form-control>\n" +
    "                            <ui-select-match placeholder=\"Select a program...\">\n" +
    "                                <span>{{$select.selected.name}}</span>\n" +
    "                            </ui-select-match>\n" +
    "                            <ui-select-choices repeat=\"prog.id as prog in programs | filter:$select.search\">\n" +
    "                                <span>{{prog.name}}</span>\n" +
    "                            </ui-select-choices>\n" +
    "                        </ui-select>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group col-xs-12\">\n" +
    "                        <input type=\"number\" name=\"id\" ng-model=\"lab_program.id\" hidden>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group col-xs-12\">\n" +
    "                        <input type=\"number\" name=\"lab\" ng-model=\"lab.id\" hidden>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group col-xs-12\">\n" +
    "                        <label for=\"notes\" class=\"control-label fs-14\">\n" +
    "                            Notes <span class=\"text-danger\">&#42;</span>: {{lab_program.valid_to | date}}\n" +
    "                        </label>\n" +
    "                        <textarea class=\"form-control margin-b-10\" name=\"notes\" ng-model=\"lab_program.notes\" placeholder=\"Type in notes\" required api-checker>\n" +
    "                        </textarea>\n" +
    "                    </div>\n" +
    "                   <div class=\"form-group col-xs-12\">\n" +
    "                        <label for=\"valid from\" class=\"control-label fs-14\">\n" +
    "                            Valid From <span class=\"text-danger\">&#42;</span>: {{lab_program.valid_from | date}}\n" +
    "                        </label>\n" +
    "                        <datepicker date-format=\"y-MM-dd\">\n" +
    "                            <input class=\"form-control  margin-b-10\" name=\"valid_from\" ng-model=\"lab_program.valid_from\" type=\"text\"  placeholder=\"yy-MM-dd\" required api-checker/>\n" +
    "                        </datepicker>\n" +
    "                    </div>\n" +
    "                   <div class=\"form-group col-xs-12\">\n" +
    "                        <label for=\"valid to\" class=\"control-label fs-14\">\n" +
    "                            Valid To <span class=\"text-danger\">&#42;</span>: {{lab_program.valid_to | date}}\n" +
    "                        </label>\n" +
    "                        <datepicker date-format=\"y-MM-dd\" date-min-limit=\"{{lab_program.valid_from}}\">\n" +
    "                            <input class=\"form-control  margin-b-10\" name=\"valid_to\" ng-model=\"lab_program.valid_to\" type=\"text\"  placeholder=\"yy-MM-dd\" ng-disabled=\"!lab_program.valid_from\" required api-checker/>\n" +
    "                        </datepicker>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group col-xs-12 checkbox margin-t-50\">\n" +
    "                        <label>\n" +
    "                            <input type=\"checkbox\" id=\"is_fully_paid\" name=\"is_fully_paid\" ng-model=\"lab_program.is_fully_paid\" tooltip=\"Check if Test Event is not retired\" api-checker >\n" +
    "                            Is fully paid\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group col-xs-12 checkbox margin-t-50\">\n" +
    "                        <label>\n" +
    "                            <input type=\"checkbox\" id=\"is_report_only\" name=\"is_report_only\" ng-model=\"lab_program.is_report_only\" tooltip=\"Check if Test Event is not retired\" api-checker >\n" +
    "                            Is report only\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group col-xs-12 checkbox margin-t-20\">\n" +
    "                        <label>\n" +
    "                            <input type=\"checkbox\" id=\"active\" name=\"active\" ng-model=\"lab_program.active\" tooltip=\"Check if Test Event is not retired\" api-checker >\n" +
    "                            Active\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                    <button class=\"btn btn-primary btn-sm\" type=\"submit\" >Save Lab Program</button>\n" +
    "                    <button class=\"btn btn-default btn-sm\" ng-click=\"newProg(labprog_frm,multi)\">Cancel</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <!--lab programs -->\n" +
    "    <div id=\"no-more-tables\" class=\"col-xs-12 margin-t-15 fade-content\" ng-if=\"lab_programs.length>0\">\n" +
    "        <div class=\"custom-well\">\n" +
    "            <div class=\"col-xs-12 pad-0\">\n" +
    "                <h4 class=\"fw-600 fs-18 col-xs-6 pad-0\">Lab Programs</h4>\n" +
    "                <button ng-show=\"!multi.show_form\" class=\"pull-right margin-t-10 action-btn action-btn-grid action-btn-primary\" ng-click=\"newProg(labprog_frm,multi)\" tooltip=\"Add Lab Program\" tooltip-placement=\"left\">\n" +
    "                    <i class=\"fa fa-plus\"></i>\n" +
    "                </button>\n" +
    "            </div>\n" +
    "            <table class=\"table table-hover table-condensed fs-14\">\n" +
    "                <thead>\n" +
    "                    <th>Name</th>\n" +
    "                    <th>Valid From</th>\n" +
    "                    <th>Valid To</th>\n" +
    "                    <th>Is Report Only</th>\n" +
    "                    <th>Fully Paid</th>\n" +
    "                    <th>Active</th>\n" +
    "                    <th></th>\n" +
    "                </thead>\n" +
    "                <tbody class=\"example-animate-container\">\n" +
    "                    <tr ng-repeat=\"prog in lab_programs | filter: search.query\">\n" +
    "                        <td data-title=\"Name\" class=\"pad-t-15\">\n" +
    "                            {{prog.program_name | titlecase}}\n" +
    "                        </td>\n" +
    "                        <td data-title=\"Valid From\" class=\"pad-t-15\">\n" +
    "                            {{prog.valid_from | date }}\n" +
    "                        </td>\n" +
    "                        <td data-title=\"Valid From\" class=\"pad-t-15\">\n" +
    "                            {{prog.valid_to | date }}\n" +
    "                        </td>\n" +
    "                        <td data-title=\"Is Report Only\" class=\"pad-t-15\">\n" +
    "                            {{prog.is_report_only | boolFilter }}\n" +
    "                        </td>\n" +
    "                        <td data-title=\"Fully Paid\" class=\"pad-t-15\">\n" +
    "                            {{prog.is_fully_paid | boolFilter }}\n" +
    "                        </td>\n" +
    "                        <td data-title=\"Fully Paid\" class=\"pad-t-15\">\n" +
    "                            {{prog.active | boolFilter }}\n" +
    "                        </td>\n" +
    "                        <td class=\"text-right\">\n" +
    "                            <a ng-click=\"editProg(labprog_frm,prog,multi)\" class=\"action-btn action-btn-grid action-btn-success\" tooltip=\"Edit\">\n" +
    "                                <i class=\"fa fa-pencil\"></i>\n" +
    "                            </a>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12\" ng-if=\"lab_programs.length===0\">\n" +
    "        <div class=\"alert alert-info\" role=\"alert\">\n" +
    "           <span class=\"fs-18\"><i class=\"fa fa-info-circle\"></i> Please add a program to the lab to proceed.</span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!--end of lab programs-->\n" +
    "\n" +
    "\n" +
    "    <div class=\"col-xs-12 margin-v-20\">\n" +
    "        <button class=\"btn btn-default\" wz-previous >Lab Details</button>\n" +
    "        <button class=\"btn btn-primary pull-right\" wz-next=\"multi.exitValidation\">Lab Users</button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("labs/tpls/lab-users.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("labs/tpls/lab-users.tpl.html",
    "<div class=\"col-sm-10 fade-content col-sm-offset-1 col-xs-12\">\n" +
    "\n" +
    "    <!-- lab user form-->\n" +
    "    <div class=\"margin-t-20 col-xs-12\" ng-show=\"multi.show_form\" ng-class=\"{'':multi.show_form,'fx-zoom-normal fx-speed-400':!multi.show_form}\">\n" +
    "        <div class=\"custom-well col-xs-12\">\n" +
    "            <div class=\"col-xs-12 pad-0\">\n" +
    "                <h4 class=\"fw-600 fs-18 col-xs-6 pad-0\">{{multi.edit?'Edit':'Add'}} User</h4>\n" +
    "                <div class=\"col-xs-6\">\n" +
    "                    <button ng-show=\"multi.show_form\" class=\"z100 pull-right btn btn-primary margin-t-10\" ng-click=\"newUser(labuser_frm,multi)\">\n" +
    "                        Hide form\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12\">\n" +
    "                <form name=\"labuser_frm\" ng-submit=\"saveLabUser(labuser_frm,multi.edit)\" novalidate>\n" +
    "                    <div class=\"col-xs-12 pad-0 margin-t-5\">\n" +
    "                        <drf-err-msg></drf-err-msg>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group col-xs-12\">\n" +
    "                        <input type=\"number\" name=\"id\" ng-model=\"lab_user.id\" hidden>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group col-xs-12\">\n" +
    "                        <input type=\"number\" name=\"lab\" ng-model=\"lab.id\" hidden>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group col-xs-12\">\n" +
    "                        <label class=\"fs-14 control-label\">User<span class=\"text-danger\">&#42;</span></label>\n" +
    "                        <ui-select ng-model=\"multi.select_values.user\" required name=\"user\" api-checker register-custom-form-control>\n" +
    "                            <ui-select-match placeholder=\"Select a user...\">\n" +
    "                                <span>{{$select.selected.first_name}} {{$select.selected.last_name}}</span>\n" +
    "                            </ui-select-match>\n" +
    "                            <ui-select-choices repeat=\"user.id as user in users | filter:$select.search\">\n" +
    "                                <span>{{user.first_name}} {{user.last_name}}</span>\n" +
    "                            </ui-select-choices>\n" +
    "                        </ui-select>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group col-xs-12 checkbox margin-t-20\">\n" +
    "                        <label>\n" +
    "                            <input type=\"checkbox\" id=\"active\" name=\"active\" ng-model=\"lab_user.active\" tooltip=\"Check if Test Event is not retired\" api-checker >\n" +
    "                            Active\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                    <button class=\"btn btn-primary btn-sm\" type=\"submit\" >Save Lab User</button>\n" +
    "                    <button class=\"btn btn-default btn-sm\" ng-click=\"newUser(labuser_frm,multi)\">Cancel</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <!--lab users -->\n" +
    "    <div id=\"no-more-tables\" class=\"col-xs-12 margin-t-15 fade-content\" ng-if=\"lab_users.length>0\">\n" +
    "        <div class=\"custom-well\">\n" +
    "            <div class=\"col-xs-12 pad-0\">\n" +
    "                <h4 class=\"fw-600 fs-18 col-xs-6 pad-0\">Lab Users</h4>\n" +
    "                <button ng-show=\"!multi.show_form\" class=\"pull-right margin-t-10 action-btn action-btn-grid action-btn-primary\" ng-click=\"newUser(labuser_frm,multi)\" tooltip=\"Add Lab User\" tooltip-placement=\"left\">\n" +
    "                    <i class=\"fa fa-plus\"></i>\n" +
    "                </button>\n" +
    "            </div>\n" +
    "            <table class=\"table table-hover table-condensed fs-14\">\n" +
    "                <thead>\n" +
    "                    <th>Name</th>\n" +
    "                    <th>Email</th>\n" +
    "                    <th>Billing</th>\n" +
    "                    <th>Admin</th>\n" +
    "                    <th>Active</th>\n" +
    "                    <th></th>\n" +
    "                </thead>\n" +
    "                <tbody class=\"example-animate-container\">\n" +
    "                    <tr ng-repeat=\"user in lab_users | filter: search.query\">\n" +
    "                        <td data-title=\"Name\" class=\"pad-t-15\">\n" +
    "                            {{user.names | titlecase}}\n" +
    "                        </td>\n" +
    "                        <td data-title=\"Email\" class=\"pad-t-15\">\n" +
    "                            {{user.email}}\n" +
    "                        </td>\n" +
    "                        <td data-title=\"Billing\" class=\"pad-t-15\">\n" +
    "                            {{user.is_billing_contact}}\n" +
    "                        </td>\n" +
    "                        <td data-title=\"Admin\" class=\"pad-t-15\">\n" +
    "                            {{user.is_admin_contact}}\n" +
    "                        </td>\n" +
    "                        <td data-title=\"Active\" class=\"pad-t-15\">\n" +
    "                            {{user.active | boolFilter }}\n" +
    "                        </td>\n" +
    "                        <td class=\"text-right\">\n" +
    "                            <a ng-click=\"editUser(labuser_frm,user,multi)\" class=\"action-btn action-btn-grid action-btn-success\" tooltip=\"Edit\">\n" +
    "                                <i class=\"fa fa-pencil\"></i>\n" +
    "                            </a>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12\" ng-if=\"lab_users.length===0\">\n" +
    "        <div class=\"alert alert-info\" role=\"alert\">\n" +
    "           <span class=\"fs-18\"><i class=\"fa fa-info-circle\"></i> Please add a user to the lab to proceed.</span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!--end of lab users-->\n" +
    "\n" +
    "\n" +
    "    <div class=\"col-xs-12 margin-v-20\">\n" +
    "        <button class=\"btn btn-default\" wz-previous >Lab Programs</button>\n" +
    "        <button class=\"btn btn-primary pull-right\" wz-next=\"multi.exitValidation\">Lab Contacts</button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("labs/tpls/labs-grid.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("labs/tpls/labs-grid.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a tooltip-placement=\"bottom\" tooltip=\"Add Lab\" class=\"action-btn action-btn-md action-btn-primary\" ui-sref=\"labs.create\">\n" +
    "            <i class=\"fa fa-plus\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\"><i class=\"fa fa-building-o\"></i> Labs</span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"content-body\">\n" +
    "    <div class=\"col-xs-12 content-card margin-t-20 margin-b-20\">\n" +
    "        <sil-grid template=\"labs/tpls/labs-list.tpl.html\" grid-for=\"labs\" api-key=\"labs\"\n" +
    "            data=\"labs\" filters=\"filters\" error=\"alert\">\n" +
    "        </sil-grid>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("labs/tpls/labs-list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("labs/tpls/labs-list.tpl.html",
    "<div>\n" +
    "    <div id=\"no-more-tables\" class=\"col-xs-12 margin-t-15\">\n" +
    "        <table class=\"table table-hover table-condensed fs-14\">\n" +
    "            <thead>\n" +
    "                <th>Name</th>\n" +
    "                <th>Active</th>\n" +
    "                <th></th>\n" +
    "            </thead>\n" +
    "            <tbody class=\"example-animate-container\">\n" +
    "                <tr class=\"animate-repeat\" ng-repeat=\"lab in labs | filter: search.query\">\n" +
    "                    <td data-title=\"Name\" class=\"pad-t-15\">\n" +
    "                        {{lab.name}}\n" +
    "                    </td>\n" +
    "                    <td data-title=\"Name\" class=\"pad-t-15\">\n" +
    "                        {{lab.active}}\n" +
    "                    </td>\n" +
    "                    <td class=\"text-right\">\n" +
    "                        <a ui-sref=\"labs.edit({lab_id:lab.id})\" class=\"action-btn action-btn-grid action-btn-success\" tooltip=\"Edit\">\n" +
    "                            <i class=\"fa fa-pencil\"></i>\n" +
    "                        </a>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "            <tbody ng-if=\"labs.length===0\">\n" +
    "                <tr><td class=\"text-center\" colspan=\"9\">Sorry, no data is available</td></tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "        <sil-grid-pagination> </sil-grid-pagination>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("labs/tpls/labs-wizard-create.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("labs/tpls/labs-wizard-create.tpl.html",
    "<div class=\"margin-t-10\">\n" +
    "    <ul class=\"steps-indicator steps-{{getEnabledSteps().length}}\" ng-if=\"!hideIndicators\">\n" +
    "      <li ng-class=\"{default: !step.completed && !step.selected, current: step.selected && !step.completed, done: step.completed && !step.selected, editing: step.selected && step.completed}\" ng-repeat=\"step in getEnabledSteps()\">\n" +
    "        <a ng-click=\"goTo(step)\">\n" +
    "            <div class=\"progress-badge\"\n" +
    "                ng-class=\"{'progress-badge-active': (step.selected && !step.completed) || (step.selected && step.completed), 'progress-badge-done' : (step.completed && !step.selected)}\">\n" +
    "                {{$index + 1}}\n" +
    "            </div>\n" +
    "            <p class=\"step-label\" ng-class=\"{'step-label-active':(step.selected && !step.completed) || (step.selected && step.completed),'step-label-done':(step.completed && !step.selected)}\">{{step.title || step.wzTitle}}</p>\n" +
    "        </a>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "    <div class=\"steps\" ng-transclude></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("reports/tpls/main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("reports/tpls/main.tpl.html",
    "<div class=\"content-header\">\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\"> <i class=\"fa fa-clipboard\"></i> Reports</span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "");
}]);

angular.module("results/tpls/confirm_subscription.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("results/tpls/confirm_subscription.tpl.html",
    "<div class=\"col-xs-12\">\n" +
    "    <div class=\"col-xs-12 margin-t-30 content-card\">\n" +
    "        <div class=\"col-xs-12 margin-t-10 pad-l-0\">\n" +
    "            <h4 class=\"lato-light fs-18 text-primary\">\n" +
    "                Please Confirm\n" +
    "            </h4>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-12 margin-t-10 pad-l-0\">\n" +
    "            <ul class=\"defn-text fa-ul\">\n" +
    "                <li>\n" +
    "                    <i class=\"fa-li fa fa-arrow-circle-right text-info\"></i> List of analytes is complete & current\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    <i class=\"fa-li fa fa-arrow-circle-right text-info\"></i> Analyzer, reagents, methods & units indicated are ones used for EQA samples.\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "            <p class=\"lato-light fs-16\">\n" +
    "                To update details select update subscription. If details are satisfactory click confirm subscription to proceed.\n" +
    "            </p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 margin-t-15 content-card pad-0\">\n" +
    "         <table class=\"table table-condensed table-hover table-fixed\" style=\"font-family : 'Lato Light', sans-serif;\">\n" +
    "            <thead class=\"col-xs-12\" style=\"background-color: #7D2678; color: #eeeeee; padding-left: 3px; padding-right: 3px;\">\n" +
    "                <th class=\"col-md-3 col-xs-3 fs-15\">Analyte</th>\n" +
    "                <th class=\"col-md-2 col-xs-2 fs-15\">Nickname</th>\n" +
    "                <th class=\"col-md-4 col-xs-4 fs-15\">Reagent</th>\n" +
    "                <th class=\"col-md-3 col-xs-3 fs-15\">Method</th>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr class=\"col-xs-12 pad-l-0 pad-r-0 bg-white fx-fade-down fx-dur-600 fx-ease-cubic fx-stagger-50\" ng-repeat=\"sub in subscriptions\">\n" +
    "                    <td class=\"col-md-3 col-xs-3 fs-13 fw-600\">\n" +
    "                        {{sub.analyte_name}} ({{sub.unit_name}})\n" +
    "                    </td>\n" +
    "\n" +
    "                    <td class=\"col-md-2 col-xs-2 fs-13 fw-600\">\n" +
    "                        {{sub.analyzer_nickname}}\n" +
    "                    </td>\n" +
    "\n" +
    "                    <td class=\"col-md-4 col-xs-4 fs-13 fw-600\">\n" +
    "                        {{sub.reagent_name}}\n" +
    "                    </td>\n" +
    "\n" +
    "\n" +
    "                    <td class=\"col-md-3 col-xs-3 fs-13 fw-600\">\n" +
    "                        {{sub.method_name}}\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 margin-t-15 margin-b-20 pad-l-0\">\n" +
    "        <button ng-click=\"confirmSubscriptions(subscriptions)\" class=\"btn btn-primary btn-sm\">\n" +
    "            Enroll Program\n" +
    "        </button>\n" +
    "        <button class=\"btn btn-warning btn-sm\">\n" +
    "            Update Subscription\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("results/tpls/main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("results/tpls/main.tpl.html",
    "<div class=\"content-header\">\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\"><i class=\"fa fa-clipboard\"></i> Results</span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12 margin-t-30\">\n" +
    "    <div class=\"fade-content col-md-3 col-xs-12 pad-r-0 margin-t-10 content-card\">\n" +
    "        <div class=\"col-xs-12 category-title\">\n" +
    "            <h4 class=\"lato-light fw-500 fs-20 margin-b-10\">Registered Programs</h4>\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <span class=\"white-addon input-group-addon\" id=\"basic-addon1\">\n" +
    "                  <i class=\"fa fa-search\"></i>\n" +
    "                </span>\n" +
    "                <input class=\"white-input form-control\" ng-model=\"lab_program.query\" placeholder=\"Search Programs\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"program-list col-xs-12 pad-0 margin-b-10\">\n" +
    "            <div class=\"program-item col-xs-12 pad-l-0 pad-r-0 pad-b-5 pad-t-5 fx-fade-down fx-dur-600 fx-ease-cubic fx-stagger-50\" ng-repeat=\"program in lab_programs | filter : lab_program.query\" ui-sref-active=\"active\">\n" +
    "                <a class=\"col-xs-12 pad-l-0 pad-r-0\" ui-sref=\"results.programs({program_id : program.id})\">\n" +
    "                <div class=\"col-md-2 col-xs-2 pad-t-3\">\n" +
    "                    <span class=\"fa-stack fa-lg fs-15 pull-right\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-sitemap fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-10 col-xs-10 margin-t-0 pad-t-3 margin-b-0 fs-15 fw-600 pad-l-0\" style=\"font-family : 'Lato Light', sans-serif;\">\n" +
    "                    <span class=\"pad-l-0 col-md-10 col-xs-10\">\n" +
    "                        {{program.program_name}}\n" +
    "                    </span>\n" +
    "                    <span class=\"col-md-2 col-xs-2 pointer text-purple pad-r-0\">\n" +
    "                        <i class=\"fa fa-chevron-right\"></i>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"fade-content col-md-9 col-xs-12 margin-t-10 pad-0\">\n" +
    "        <div class=\"fx-fade-up fx-speed-500fx-fade-up fx-speed-500 col-xs-12 pad-0 content-card\" style=\"border-left: 1px solid #e0e0e0;\" ui-view=\"side-view\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("results/tpls/nested_content.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("results/tpls/nested_content.tpl.html",
    "<div class=\"col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1 margin-t-50 content-card\" ng-if=\"!$parent.enrolled\">\n" +
    "    <div class=\"col-md-2 col-xs-4\">\n" +
    "    <span class=\"fa-stack fa-lg fs-35 text-primary pull-right margin-t-10\">\n" +
    "          <i class=\"fa fa-circle-o fa-stack-2x\"></i>\n" +
    "          <i class=\"fa fa-info fa-stack-1x text-primary fa-inverse\"></i>\n" +
    "        </span>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-10 col-xs-8 pad-l-0\">\n" +
    "        <div class=\"col-xs-12 margin-t-10\">\n" +
    "            <h4 class=\"lato-light fs-20 text-primary\">\n" +
    "                Confirm Subscription\n" +
    "            </h4>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-12 margin-t-10\">\n" +
    "            <p class=\"lato-light text-black fs-18\">\n" +
    "                You do not have enrollments for this program in the current test event\n" +
    "            </p>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-12 margin-t-15 margin-b-10\">\n" +
    "            <a ui-sref=\"results.programs.subscription\" class=\"btn btn-primary btn-sm\">\n" +
    "                Confirm Subscription\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"col-xs-12 margin-t-20\" ng-if=\"$parent.enrolled\">\n" +
    "    <div class=\"col-xs-12 content-card margin-t-0\">\n" +
    "        <div class=\"col-xs-12 pad-0 margin-t-5 margin-b-5\" style=\"margin-bottom: 5px;\">\n" +
    "            <h4 class=\"lato-light fs-17\">\n" +
    "                <span class=\"margin-t-5\">\n" +
    "                Analyte Results\n" +
    "                </span>\n" +
    "            </h4>\n" +
    "        </div>\n" +
    "        <table class=\"table table-hover\" ng-class=\"{'table-condensed' : !is_quantitative}\">\n" +
    "            <thead>\n" +
    "                <th class=\"col-sm-4 fs-18 fw-500\">\n" +
    "                    <span>\n" +
    "                        Analyte\n" +
    "                    </span>\n" +
    "                </th>\n" +
    "                <th class=\"col-sm-2 fs-18 fw-500\">\n" +
    "                    <span>\n" +
    "                        Unit\n" +
    "                    </span>\n" +
    "                </th>\n" +
    "                <th class=\"col-sm-1 text-center\">\n" +
    "                    <span ng-if=\"!is_quantitative\" class=\"fs-18 fw-600 lato-light\">\n" +
    "                        A\n" +
    "                    </span>\n" +
    "                    <a class=\"action-btn-result action-btn action-btn-primary\" ng-if=\"is_quantitative\" ui-sref=\"results.programs.quantitative_results({sample_id : samples.sample_a})\">\n" +
    "                        A\n" +
    "                    </a>\n" +
    "                </th>\n" +
    "                <th class=\"col-sm-1 text-center\">\n" +
    "                    <span ng-if=\"!is_quantitative\" class=\"fs-18 fw-600 lato-light\">\n" +
    "                        B\n" +
    "                    </span>\n" +
    "                    <a class=\"action-btn-result action-btn action-btn-primary\" ng-if=\"is_quantitative\" ui-sref=\"results.programs.quantitative_results({sample_id : samples.sample_b})\">\n" +
    "                        B\n" +
    "                    </a>\n" +
    "                </th>\n" +
    "                <th class=\"col-sm-1 text-center\">\n" +
    "                    <span ng-if=\"!is_quantitative\" class=\"fs-18 fw-600 lato-light\">\n" +
    "                        C\n" +
    "                    </span>\n" +
    "                    <a class=\"action-btn-result action-btn action-btn-primary\" ng-if=\"is_quantitative\" ui-sref=\"results.programs.quantitative_results({sample_id : samples.sample_c})\">\n" +
    "                        C\n" +
    "                    </a>\n" +
    "                </th>\n" +
    "                <th class=\"col-sm-1 text-center\">\n" +
    "                    <span ng-if=\"!is_quantitative\" class=\"fs-18 fw-600 lato-light\">\n" +
    "                        D\n" +
    "                    </span>\n" +
    "                    <a class=\"action-btn-result action-btn action-btn-primary\" ng-if=\"is_quantitative\" ui-sref=\"results.programs.quantitative_results({sample_id : samples.sample_d})\">\n" +
    "                        D\n" +
    "                    </a>\n" +
    "                </th>\n" +
    "                <th class=\"col-sm-1 text-center\">\n" +
    "                    <span ng-if=\"!is_quantitative\" class=\"fs-18 fw-600 lato-light\">\n" +
    "                        E\n" +
    "                    </span>\n" +
    "                    <a class=\"action-btn-result action-btn action-btn-primary\" ng-if=\"is_quantitative\" ui-sref=\"results.programs.quantitative_results({sample_id : samples.sample_e})\">\n" +
    "                        E\n" +
    "                    </a>\n" +
    "                </th>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr ng-repeat=\"analyte in subscriptions\" class=\"fx-fade-down fx-dur-600 fx-ease-cubic fx-stagger-50\">\n" +
    "                    <td class=\"col-sm-4\">\n" +
    "                        {{analyte.analyte_name}}\n" +
    "                    </td>\n" +
    "                    <td class=\"col-sm-2\">\n" +
    "\n" +
    "                        <span class=\"label label-warning fs-12\" >\n" +
    "                            {{analyte.unit_name}}\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td class=\"col-sm-1 text-center\">\n" +
    "                        <i class=\"fa fa-minus text-danger fs-18\" ng-if=\"is_quantitative\"></i>\n" +
    "                        <span class=\"fa-stack fa-3x fs-16 dashboard-icon-danger\" ng-if=\"!is_quantitative\">\n" +
    "                          <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                          <strong class=\"fa-stack-1x circle-text text-white\">A</strong>\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td class=\"col-sm-1 text-center\">\n" +
    "                        <i class=\"fa fa-minus text-danger fs-18\" ng-if=\"is_quantitative\"></i>\n" +
    "                        <span class=\"fa-stack fa-3x fs-16 dashboard-icon-danger\" ng-if=\"!is_quantitative\">\n" +
    "                          <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                          <strong class=\"fa-stack-1x circle-text text-white\">B</strong>\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td class=\"col-sm-1 text-center\">\n" +
    "\n" +
    "                        <i class=\"fa fa-minus text-danger fs-18\" ng-if=\"is_quantitative\"></i>\n" +
    "                        <span class=\"fa-stack fa-3x fs-16 dashboard-icon-danger\" ng-if=\"!is_quantitative\">\n" +
    "                          <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                          <strong class=\"fa-stack-1x circle-text text-white\">C</strong>\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td class=\"col-sm-1 text-center\">\n" +
    "                        <i class=\"fa fa-minus text-danger fs-18\" ng-if=\"is_quantitative\"></i>\n" +
    "                        <span class=\"fa-stack fa-3x fs-16 dashboard-icon-danger\" ng-if=\"!is_quantitative\">\n" +
    "                          <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                          <strong class=\"fa-stack-1x circle-text text-white\">D</strong>\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td class=\"col-sm-1 text-center\">\n" +
    "                        <i class=\"fa fa-minus text-danger fs-18\" ng-if=\"is_quantitative\"></i>\n" +
    "                        <span class=\"fa-stack fa-3x fs-16 dashboard-icon-danger\" ng-if=\"!is_quantitative\">\n" +
    "                          <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                          <strong class=\"fa-stack-1x circle-text text-white\">E</strong>\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("results/tpls/program_samples.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("results/tpls/program_samples.tpl.html",
    "<div class=\"col-xs-12 margin-t-20\">\n" +
    "    <div class=\"col-xs-12 content-card\" style=\"padding: 0px;\">\n" +
    "        <table class=\"table table-condensed table-hover\">\n" +
    "            <thead class=\"grey-header\">\n" +
    "                <th class=\"col-xs-5\">Sample</th>\n" +
    "                <th class=\"col-xs-5\">Comment</th>\n" +
    "                <th class=\"col-xs-2\">Status</th>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr ng-repeat=\"sample in a_program.samples\">\n" +
    "                    <td class=\"col-xs-5\">\n" +
    "                        <input class=\"form-control\" readonly ng-model=\"sample.sample_name\">\n" +
    "                    </td>\n" +
    "                    <td class=\"col-xs-5\">\n" +
    "                        <textarea class=\"form-control\" rows=\"1\" placeholder=\"Comment on Sample Condition\" ng-model=\"sample.comment\"></textarea>\n" +
    "                    </td>\n" +
    "                    <td class=\"col-xs-2\">\n" +
    "                        <label>\n" +
    "                            <input type=\"checkbox\" id=\"is_ok\" name=\"is_ok\" ng-model=\"sample.is_ok\">\n" +
    "                            Is Ok\n" +
    "                        </label>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 margin-t-5 pad-l-0\">\n" +
    "        <button class=\"btn btn-md btn-primary\" ng-click=\"sampleConditions()\">\n" +
    "            Save Comments\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("results/tpls/programs.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("results/tpls/programs.tpl.html",
    "<div class=\"card-title col-xs-12 pad-t-5 pad-b-5\">\n" +
    "    <h3 class=\"text-purple margin-t-10 lato-light\">\n" +
    "        <span class=\"fa-stack fa-lg fs-17 text-purple pad-l-3 col-md-4\">\n" +
    "          <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "          <i class=\"fa fa-sitemap fa-stack-1x fa-inverse\"></i>\n" +
    "        </span>\n" +
    "        &nbsp;\n" +
    "        <span class=\"fs-20 margin-t-3 col-md-11 pad-r-0\">\n" +
    "            {{lab_program.program_name}}\n" +
    "            <span class=\"pull-right\">\n" +
    "                <a class=\"btn btn-danger btn-sm fs-13 fw-500\" ng-if=\"enrolled\" ui-sref=\"results.programs.reverse_enrollment\">\n" +
    "                    Reverse Enrollment\n" +
    "                </a>\n" +
    "            </span>\n" +
    "        </span>\n" +
    "    </h3>\n" +
    "</div>\n" +
    "<div class=\"fx-fade-up fx-speed-200 col-xs-12\" ui-view=\"delete\"></div>\n" +
    "<div class=\"col-xs-12 margin-t-10\" ng-if=\"errors\">\n" +
    "    <drf-err-msg2></drf-err-msg2>\n" +
    "</div>\n" +
    "<div class=\"fx-fade-up fx-speed-500 side-card col-xs-12 pad-0 bg-gray\" ui-view=\"nested-view\"></div>\n" +
    "<div class=\"col-xs-12\" style=\"bottom: 0; height: 40px;\"></div>\n" +
    "");
}]);

angular.module("results/tpls/quantitative_results.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("results/tpls/quantitative_results.tpl.html",
    "<div class=\"col-xs-12\">\n" +
    "    <div class=\"col-xs-12 margin-t-15 content-card pad-0\">\n" +
    "         <table class=\"table table-condensed table-hover\" style=\"font-family : 'Lato Light', sans-serif;\">\n" +
    "            <thead style=\"background-color: #7D2678; color: #eeeeee;\">\n" +
    "                <th class=\"col-md-3 fs-15\">Analyte</th>\n" +
    "                <th class=\"col-md-1 fs-15\">Unit</th>\n" +
    "                <th class=\"col-md-4 fs-15\">Response</th>\n" +
    "                <th class=\"col-md-4 fs-15\">Result Code</th>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr class=\"bg-white fx-fade-down fx-dur-600 fx-ease-cubic fx-stagger-50\" ng-repeat=\"result in results\">\n" +
    "                    <td class=\"col-md-3 fs-14 pad-t-15 fw-600\">\n" +
    "                        {{result.analyte_name}}\n" +
    "                    </td>\n" +
    "                    <td class=\"col-md-1 pad-t-15\">\n" +
    "                        <span class=\"label label-warning fs-11\">\n" +
    "                            {{result.unit_name}}\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td class=\"col-md-4\">\n" +
    "                        <input class=\"form-control fw-600\" placeholder=\"Enter Response\" ng-model=\"result.response\"/>\n" +
    "                    </td>\n" +
    "                    <td class=\"col-md-4\">\n" +
    "                        <select class=\"form-control fw-600\" name=\"result_code\" ng-model=\"result.result_code\">\n" +
    "                            <option value=\"\" disabled>Select Result Code</option>\n" +
    "                            <option ng-repeat=\"code in result_codes\" ng-selected=\"{{code.id == result.result_code}}\" value=\"{{code.id}}\">{{code.name}}</option>\n" +
    "                        </select>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 pad-0\">\n" +
    "        <button class=\"btn btn-primary\">\n" +
    "            Save\n" +
    "        </button>\n" +
    "        <a ui-sref=\"results.programs\" class=\"btn btn-default\">\n" +
    "            Cancel\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("results/tpls/reverse_enrollment.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("results/tpls/reverse_enrollment.tpl.html",
    "<statemodal>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 fs-35 text-center fade-content\">\n" +
    "            <span class=\"fa-stack fa-lg fs-40 text-danger margin-t-10\">\n" +
    "              <i class=\"fa fa-circle-o fa-stack-2x\"></i>\n" +
    "              <i class=\"fa fa-exclamation text-danger fa-stack-1x fa-inverse\"></i>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-12\">\n" +
    "            <div class=\"col-xs-12\">\n" +
    "                <h4 class=\"fs-18 text-center fw-600\" style=\"font-family: 'Lato Light', sans-serif\">Are you sure ?</h4>\n" +
    "                <p class=\"lato-light fw-600 fs-18 text-center\">You would like to reverse enrollments for <span class=\"fw-600\">{{lab_program.program_name}}</span> &nbsp;.\n" +
    "                <div class=\"col-xs-12 margin-t-20 pad-l-0 margin-b-10\">\n" +
    "                    <a class=\"btn btn-default\" ui-sref=\"results.programs\">Cancel</a>\n" +
    "                    <button class=\"btn btn-danger\" ng-click=\"reverseEnrollment()\">Reverse enrollment</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</statemodal>\n" +
    "");
}]);

angular.module("setup/tpls/analyte/analyte_setup.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/analyte/analyte_setup.tpl.html",
    "<div class=\"content-header\">\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "            <i class=\"fa fa-gears\"></i> Analyte Setup\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12 margin-t-30\">\n" +
    "\n" +
    "    <div class=\"col-md-3 col-xs-6 text-center\">\n" +
    "        <a ui-sref=\"analyte_setup.analytes\">\n" +
    "            <p class=\"margin-b-0\">\n" +
    "                <span class=\"fa-stack fa-lg fs-40 text-blue dashboard-icon\">\n" +
    "                  <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                  <i class=\"fa fa-flask fa-stack-1x fa-inverse\"></i>\n" +
    "                </span>\n" +
    "            </p>\n" +
    "        </a>\n" +
    "        <a ui-sref=\"analyte_setup.analytes\">\n" +
    "            <p class=\"lato-light fw-500 fs-18 dashboard-icon\">\n" +
    "                <span>\n" +
    "                    Analytes\n" +
    "                </span>\n" +
    "            </p>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-3 col-xs-6 text-center\">\n" +
    "        <a ui-sref=\"analyte_setup.manufacturers\">\n" +
    "            <p class=\"margin-b-0\">\n" +
    "                <span class=\"fa-stack fa-lg fs-40 text-blue dashboard-icon\">\n" +
    "                  <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                  <i class=\"fa fa-building fa-stack-1x fa-inverse\"></i>\n" +
    "                </span>\n" +
    "            </p>\n" +
    "        </a>\n" +
    "        <a ui-sref=\"analyte_setup.manufacturers\">\n" +
    "            <p class=\"lato-light fw-500 fs-18 dashboard-icon\">\n" +
    "                <span>\n" +
    "                    Manufacturers\n" +
    "                </span>\n" +
    "            </p>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-3 col-xs-6 text-center\">\n" +
    "        <a ui-sref=\"analyte_setup.reagents\">\n" +
    "            <p class=\"margin-b-0\">\n" +
    "                <span class=\"fa-stack fa-lg fs-40 text-blue dashboard-icon\">\n" +
    "                  <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                  <i class=\"fa fa-database fa-stack-1x fa-inverse\"></i>\n" +
    "                </span>\n" +
    "            </p>\n" +
    "        </a>\n" +
    "        <a ui-sref=\"analyte_setup.reagents\">\n" +
    "            <p class=\"lato-light fw-500 fs-18 dashboard-icon\">\n" +
    "                <span>\n" +
    "                    Reagents\n" +
    "                </span>\n" +
    "            </p>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-3 col-xs-6 text-center\">\n" +
    "        <a ui-sref=\"analyte_setup.methods\">\n" +
    "            <p class=\"margin-b-0\">\n" +
    "                <span class=\"fa-stack fa-lg fs-40 text-blue dashboard-icon\">\n" +
    "                  <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                  <i class=\"fa fa-server fa-stack-1x fa-inverse\"></i>\n" +
    "                </span>\n" +
    "            </p>\n" +
    "        </a>\n" +
    "        <a ui-sref=\"analyte_setup.methods\">\n" +
    "            <p class=\"lato-light fw-500 fs-18 dashboard-icon\">\n" +
    "                <span>\n" +
    "                    Methods\n" +
    "                </span>\n" +
    "            </p>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/analyte/analytes_form.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/analyte/analytes_form.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a ng-if=\"edit_view\" tooltip-placement=\"bottom\" tooltip=\"Delete Category\" class=\"action-btn action-btn-md action-btn-default\" ui-sref=\"dashboard.analytes.add_analyte\">\n" +
    "            <i class=\"fa fa-trash text-danger\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "          <i class=\"fa {{edit_view ? 'fa-edit' : 'fa-plus-circle'}}\"></i> {{edit_view ? 'Edit' : 'Add'}} Analyte\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12\">\n" +
    "    <div ui-view=\"delete\"></div>\n" +
    "    <div class=\"col-xs-12\">\n" +
    "      <form name=\"analyte_frm\"  ng-submit=\"save(analyte_frm)\" novalidate>\n" +
    "        <div class=\"fade-content col-sm-10 col-sm-offset-1 margin-t-20 content-card\">\n" +
    "          <drf-err-msg></drf-err-msg>\n" +
    "            <div class=\"col-sm-12 margin-t-20 margin-b-20\">\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Name<span class=\"text-danger\">&#42;</span></label>\n" +
    "                  <input class=\"form-control\" name=\"name\" ng-model=\"analyte.name\" required placeholder=\"Name\" api-checker/>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"\">\n" +
    "                      Program <span class=\"text-danger\">&#42;</span>\n" +
    "                  </label>\n" +
    "                  <select class=\"form-control\" name=\"program\" ng-model=\"analyte.program\" api-checker required>\n" +
    "                      <option value=\"\" disabled>Select Program</option>\n" +
    "                      <option ng-repeat=\"program in programs\" ng-selected=\"{{program.id == analyte.program}}\" value=\"{{program.id}}\">{{program.name}}</option>\n" +
    "                  </select>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"\">\n" +
    "                      Units <span class=\"text-danger\">&#42;</span>\n" +
    "                  </label>\n" +
    "                  <select class=\"form-control\" name=\"units\" ng-model=\"analyte.unit\" api-checker required>\n" +
    "                      <option value=\"\" disabled>Select Unit</option>\n" +
    "                      <option ng-repeat=\"unit in units\" ng-selected=\"{{unit.id == analyte.unit}}\" value=\"{{unit.id}}\">{{unit.name}}</option>\n" +
    "                  </select>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Coefficient of Variation</label>\n" +
    "                  <input class=\"form-control\" name=\"cv\" ng-model=\"analyte.cv\" placeholder=\"Coefficient of Variation\" api-checker/>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Description</label>\n" +
    "                  <textarea class=\"form-control\" name=\"description\" ng-model=\"analyte.description\" placeholder=\"Description\" rows=\"2\" api-checker></textarea>\n" +
    "              </div>\n" +
    "              <div class=\"form-group checkbox\">\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\" id=\"active\" name=\"active\" ng-model=\"analyte.active\" tooltip=\"Check if analyte is not retired\" api-checker >\n" +
    "                    Active\n" +
    "                   </label>\n" +
    "              </div>\n" +
    "              <div class=\"form-group checkbox\">\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\" id=\"is_quantitative\" name=\"is_quantitative\" ng-model=\"analyte.is_quantitative\" api-checker >\n" +
    "                    Quantitative\n" +
    "                   </label>\n" +
    "              </div>\n" +
    "              <div class=\"form-group checkbox\">\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\" id=\"is_multi_response\" name=\"is_multi_response\" ng-model=\"analyte.is_multi_response\"\n" +
    "                    api-checker >\n" +
    "                    Multiresponse\n" +
    "                   </label>\n" +
    "              </div>\n" +
    "              <div class=\"form-group checkbox\">\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\" id=\"is_parasitology\" name=\"is_parasitology\" ng-model=\"analyte.is_parasitology\" api-checker >\n" +
    "                    Parasitology\n" +
    "                   </label>\n" +
    "              </div>\n" +
    "              <div class=\"form-group checkbox\">\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\" id=\"is_bacteriology\" name=\"is_bacteriology\" ng-model=\"analyte.is_bacteriology\" api-checker >\n" +
    "                    Bacteriology\n" +
    "                   </label>\n" +
    "              </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!-- TODO add sample overide Add multiresponse options depending on multiresponse selection -->\n" +
    "        <div class=\"pull-left col-sm-10 col-sm-offset-1 pad-0 margin-t-10 margin-b-20\">\n" +
    "          <button class=\"btn btn-primary\">Save</button>\n" +
    "          <a class=\"margin-l-10 btn btn-default margin-l-5\" ui-sref=\"dashboard.analytes\">Cancel</a>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/analyte/analytes_grid.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/analyte/analytes_grid.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a  tooltip-placement=\"bottom\" tooltip=\"New Analyte\" class=\"action-btn action-btn-md action-btn-default\" ui-sref=\"dashboard.analytes.add_analyte\">\n" +
    "            <i class=\"fa fa-plus\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "            <i class=\"fa fa-flask\"></i> Analytes\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12 margin-t-30\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <sil-grid template=\"setup/tpls/analyte/analytes_list.tpl.html\" grid-for=\"events\" api-key=\"analytes\" data=\"analytes\" filters=\"filters\" error=\"alert\"></sil-grid>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/analyte/analytes_list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/analyte/analytes_list.tpl.html",
    "<div class=\"col-xs-12 content-card\">\n" +
    "    <h4 class=\"lato-light margin-b-10 fs-20\">\n" +
    "        Analytes List\n" +
    "    </h4>\n" +
    "    <table class=\"table table-hover table-condensed fs-14\" id=\"no-more-tables\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th class=\"col-md-3\">Name</th>\n" +
    "                <th class=\"col-md-3\">Program</th>\n" +
    "                <th class=\"col-md-2\">Unit</th>\n" +
    "                <th class=\"col-md-1 text-center\">Active</th>\n" +
    "                <th class=\"col-md-2 text-center\">Configuration</th>\n" +
    "                <th class=\"col-md-1\"></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody class=\"fade-content\">\n" +
    "            <tr  ng-repeat=\"analyte in analytes\">\n" +
    "                <td class=\"col-md-3 pad-t-15\" data-title=\"Name:\" class=\"pad-t-15\">{{analyte.name}}</td>\n" +
    "                <td class=\"col-md-3 pad-t-15\" data-title=\"Prgoram:\" class=\"pad-t-15\">{{analyte.program_name}}</td>\n" +
    "                <td class=\"col-md-3 pad-t-15\" data-title=\"Name:\" class=\"pad-t-15\">{{analyte.unit_name}}</td>\n" +
    "                <td class=\"col-md-1 pad-t-15 text-center\" data-title=\"Active\">\n" +
    "                    <span ng-if=\"analyte.active\" class=\"fa-stack fa-lg fs-14 text-success\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-check fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"!analyte.active\" class=\"fa-stack fa-lg fs-14 text-danger\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-close fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                </td>\n" +
    "                <td data-title=\"Actions:\" class=\"col-md-2 text-center\">\n" +
    "                    <a class=\"action-btn action-btn-grid action-btn-info\" ui-sref=\"analyte_setup.analyte.edit_analyte({analyte_id: analyte.id})\">\n" +
    "                        <i class=\"fa fa-gears\"></i>\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "                <td data-title=\"Actions:\" class=\"col-md-1 text-right\">\n" +
    "                    <a class=\"action-btn action-btn-grid action-btn-success\" ui-sref=\"dashboard.analytes.edit_analyte({analyte_id: analyte.id})\" class=\"btn btn-success\">\n" +
    "                        <i class=\"fa fa-pencil\"></i>\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <sil-grid-pagination> </sil-grid-pagination>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/analyte/manufacturers_form.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/analyte/manufacturers_form.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a ng-if=\"edit_view\" tooltip-placement=\"bottom\" tooltip=\"Delete Category\" class=\"action-btn action-btn-md action-btn-default\" ui-sref=\"analyte_setup.manufacturer.add_manufacturer\">\n" +
    "            <i class=\"fa fa-trash text-danger\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "          <i class=\"fa {{edit_view ? 'fa-edit' : 'fa-plus-circle'}}\"></i> {{edit_view ? 'Edit' : 'Add'}} Manufacturer\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12\">\n" +
    "    <div ui-view=\"delete\"></div>\n" +
    "    <div class=\"col-xs-12\">\n" +
    "      <form name=\"manufacturer_frm\"  ng-submit=\"save(manufacturer_frm)\" novalidate>\n" +
    "        <div class=\"fade-content col-sm-10 col-sm-offset-1 margin-t-20 content-card\">\n" +
    "          <drf-err-msg></drf-err-msg>\n" +
    "            <div class=\"col-sm-12 margin-t-20 margin-b-20\">\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Name<span class=\"text-danger\">&#42;</span></label>\n" +
    "                  <input class=\"form-control\" name=\"name\" ng-model=\"manufacturer.name\" required placeholder=\"Name\" api-checker/>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Description</label>\n" +
    "                  <textarea class=\"form-control\" name=\"description\" ng-model=\"manufacturer.description\" placeholder=\"Description\" rows=\"2\" api-checker></textarea>\n" +
    "              </div>\n" +
    "              <div class=\"form-group checkbox\">\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\" id=\"active\" name=\"active\" ng-model=\"manufacturer.active\" tooltip=\"Check if method is not retired\" api-checker >\n" +
    "                    Active\n" +
    "                   </label>\n" +
    "              </div>\n" +
    "              <div class=\"pull-left col-sm-12 pad-0 margin-t-10 margin-b-20\">\n" +
    "                <button class=\"btn btn-primary\">Save</button>\n" +
    "                <a class=\"margin-l-10 btn btn-default margin-l-5\" ui-sref=\"dashboard.manufacturers\">Cancel</a>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/analyte/manufacturers_grid.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/analyte/manufacturers_grid.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a  tooltip-placement=\"bottom\" tooltip=\"New Category\" class=\"action-btn action-btn-md action-btn-default\" ui-sref=\"dashboard.manufacturers.add_manufacturer\">\n" +
    "            <i class=\"fa fa-plus\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "            <i class=\"fa fa-building\"></i> Manufacturers\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12 margin-t-30\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <sil-grid template=\"setup/tpls/analyte/manufacturers_list.tpl.html\" grid-for=\"events\" api-key=\"manufacturers\" data=\"manufacturers\" filters=\"filters\" error=\"alert\"></sil-grid>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/analyte/manufacturers_list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/analyte/manufacturers_list.tpl.html",
    "<div class=\"col-xs-12 content-card\">\n" +
    "    <h4 class=\"lato-light margin-b-10 fs-20\">\n" +
    "        Manufacturers List\n" +
    "    </h4>\n" +
    "    <table class=\"table table-hover table-condensed fs-14\" id=\"no-more-tables\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th class=\"col-md-6\">Name</th>\n" +
    "                <th class=\"col-md-4\">Active</th>\n" +
    "                <th class=\"col-md-2\"></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody class=\"fade-content\">\n" +
    "            <tr  ng-repeat=\"manu in manufacturers\">\n" +
    "                <td class=\"col-md-6 pad-t-15\" data-title=\"Name:\" class=\"pad-t-15\">{{manu.name}}</td>\n" +
    "                <td class=\"col-md-4 pad-t-15\" data-title=\"Active\">\n" +
    "                    <span ng-if=\"manu.active\" class=\"fa-stack fa-lg fs-14 text-success\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-check fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"!manu.active\" class=\"fa-stack fa-lg fs-14 text-danger\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-close fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                </td>\n" +
    "                <td data-title=\"Actions:\" class=\"col-md-2 text-right\">\n" +
    "                    <a class=\"action-btn action-btn-grid action-btn-success\" ui-sref=\"dashboard.manufacturers.edit_manufacturer({manu_id: manu.id})\" class=\"btn btn-success\">\n" +
    "                        <i class=\"fa fa-pencil\"></i>\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <sil-grid-pagination> </sil-grid-pagination>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/analyte/methods_form.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/analyte/methods_form.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a ng-if=\"edit_view\" tooltip-placement=\"bottom\" tooltip=\"Delete Category\" class=\"action-btn action-btn-md action-btn-default\" ui-sref=\"analyte_setup.methods.add_method\">\n" +
    "            <i class=\"fa fa-trash text-danger\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "          <i class=\"fa {{edit_view ? 'fa-edit' : 'fa-plus-circle'}}\"></i> {{edit_view ? 'Edit' : 'Add'}} Method\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12\">\n" +
    "    <div ui-view=\"delete\"></div>\n" +
    "    <div class=\"col-xs-12\">\n" +
    "      <form name=\"method_frm\"  ng-submit=\"save(method_frm)\" novalidate>\n" +
    "        <div class=\"fade-content col-sm-10 col-sm-offset-1 margin-t-20 content-card\">\n" +
    "          <drf-err-msg></drf-err-msg>\n" +
    "            <div class=\"col-sm-12 margin-t-20 margin-b-20\">\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Name<span class=\"text-danger\">&#42;</span></label>\n" +
    "                  <input class=\"form-control\" name=\"name\" ng-model=\"method.name\" required placeholder=\"Name\" api-checker/>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Description</label>\n" +
    "                  <textarea class=\"form-control\" name=\"description\" ng-model=\"method.description\" placeholder=\"Description\" rows=\"2\" api-checker></textarea>\n" +
    "              </div>\n" +
    "              <div class=\"form-group checkbox\">\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\" id=\"active\" name=\"active\" ng-model=\"method.active\" tooltip=\"Check if method is not retired\" api-checker >\n" +
    "                    Active\n" +
    "                   </label>\n" +
    "              </div>\n" +
    "              <div class=\"pull-left col-sm-12 pad-0 margin-t-10 margin-b-20\">\n" +
    "                <button class=\"btn btn-primary\">Save</button>\n" +
    "                <a class=\"margin-l-10 btn btn-default margin-l-5\" ui-sref=\"dashboard.methods\">Cancel</a>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/analyte/methods_grid.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/analyte/methods_grid.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a  tooltip-placement=\"bottom\" tooltip=\"New Category\" class=\"action-btn action-btn-md action-btn-default\" ui-sref=\"dashboard.methods.add_method\">\n" +
    "            <i class=\"fa fa-plus\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "            <i class=\"fa fa-tasks\"></i> Methods\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12 margin-t-30\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <sil-grid template=\"setup/tpls/analyte/methods_list.tpl.html\" grid-for=\"events\" api-key=\"methods\" data=\"methods\" filters=\"filters\" error=\"alert\"></sil-grid>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/analyte/methods_list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/analyte/methods_list.tpl.html",
    "<div class=\"col-xs-12 content-card\">\n" +
    "    <h4 class=\"lato-light margin-b-10 fs-20\">\n" +
    "        Methods List\n" +
    "    </h4>\n" +
    "    <table class=\"table table-hover table-condensed fs-14\" id=\"no-more-tables\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th class=\"col-md-6\">Name</th>\n" +
    "                <th class=\"col-md-4\">Active</th>\n" +
    "                <th class=\"col-md-2\"></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody class=\"fade-content\">\n" +
    "            <tr  ng-repeat=\"method in methods\">\n" +
    "                <td class=\"col-md-6 pad-t-15\" data-title=\"Name:\" class=\"pad-t-15\">{{method.name}}</td>\n" +
    "                <td class=\"col-md-4 pad-t-15\" data-title=\"Active\">\n" +
    "                    <span ng-if=\"method.active\" class=\"fa-stack fa-lg fs-14 text-success\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-check fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"!method.active\" class=\"fa-stack fa-lg fs-14 text-danger\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-close fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                </td>\n" +
    "                <td data-title=\"Actions:\" class=\"col-md-2 text-right\">\n" +
    "                    <a class=\"action-btn action-btn-grid action-btn-success\" ui-sref=\"dashboard.methods.edit_method({method_id: method.id})\" class=\"btn btn-success\">\n" +
    "                        <i class=\"fa fa-pencil\"></i>\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <sil-grid-pagination> </sil-grid-pagination>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/analyte/reagents_form.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/analyte/reagents_form.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a ng-if=\"edit_view\" tooltip-placement=\"bottom\" tooltip=\"Delete Reagent\" class=\"action-btn action-btn-md action-btn-default\" ui-sref=\"dashboard.reagents.add_reagent\">\n" +
    "            <i class=\"fa fa-trash text-danger\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "          <i class=\"fa {{edit_view ? 'fa-edit' : 'fa-plus-circle'}}\"></i> {{edit_view ? 'Edit' : 'Add'}} Reagent\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12\">\n" +
    "    <div ui-view=\"delete\"></div>\n" +
    "    <div class=\"col-xs-12\">\n" +
    "      <form name=\"reagent_frm\"  ng-submit=\"save(reagent_frm)\" novalidate>\n" +
    "        <div class=\"fade-content col-sm-10 col-sm-offset-1 margin-t-20 content-card\">\n" +
    "          <drf-err-msg></drf-err-msg>\n" +
    "            <div class=\"col-sm-12 margin-t-20 margin-b-20\">\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Name<span class=\"text-danger\">&#42;</span></label>\n" +
    "                  <input class=\"form-control\" name=\"name\" ng-model=\"reagent.name\" required placeholder=\"Name\" api-checker/>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"\">\n" +
    "                      Manufacturer <span class=\"text-danger\">&#42;</span>\n" +
    "                  </label>\n" +
    "                  <select class=\"form-control\" name=\"manufacturer\" ng-model=\"reagent.manufacturer\" api-checker required>\n" +
    "                      <option value=\"\" disabled>Select Manufacturer</option>\n" +
    "                      <option ng-repeat=\"manu in manufacturers\" ng-selected=\"{{manu.id == reagent.manufacturer}}\" value=\"{{manu.id}}\">{{manu.name}}</option>\n" +
    "                  </select>\n" +
    "              </div>\n" +
    "              <div class=\"form-group checkbox\">\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\" id=\"active\" name=\"active\" ng-model=\"reagent.active\" tooltip=\"Check if reagent is not retired\" api-checker >\n" +
    "                    Active\n" +
    "                   </label>\n" +
    "              </div>\n" +
    "              <div class=\"pull-left col-sm-12 pad-0 margin-t-10 margin-b-20\">\n" +
    "                <button class=\"btn btn-primary\">Save</button>\n" +
    "                <a class=\"margin-l-10 btn btn-default margin-l-5\" ui-sref=\"dashboard.reagents\">Cancel</a>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/analyte/reagents_grid.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/analyte/reagents_grid.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a  tooltip-placement=\"bottom\" tooltip=\"New Reagent\" class=\"action-btn action-btn-md action-btn-default\" ui-sref=\"dashboard.reagents.add_reagent\">\n" +
    "            <i class=\"fa fa-plus\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "            <i class=\"fa fa-database\"></i> Reagents\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12 margin-t-30\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <sil-grid template=\"setup/tpls/analyte/reagents_list.tpl.html\" grid-for=\"events\" api-key=\"reagents\" data=\"reagents\" filters=\"filters\" error=\"alert\"></sil-grid>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/analyte/reagents_list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/analyte/reagents_list.tpl.html",
    "<div class=\"col-xs-12 content-card\">\n" +
    "    <h4 class=\"lato-light margin-b-10 fs-20\">\n" +
    "        Reagents List\n" +
    "    </h4>\n" +
    "    <table class=\"table table-hover table-condensed fs-14\" id=\"no-more-tables\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th class=\"col-md-4\">Name</th>\n" +
    "                <th class=\"col-md-4\">Manufacturer</th>\n" +
    "                <th class=\"col-md-2\">Active</th>\n" +
    "                <th class=\"col-md-2\"></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody class=\"fade-content\">\n" +
    "            <tr  ng-repeat=\"reagent in reagents\">\n" +
    "                <td class=\"col-md-4 pad-t-15\" data-title=\"Name:\" class=\"pad-t-15\">{{reagent.name}}</td>\n" +
    "                <td class=\"col-md-4 pad-t-15\" data-title=\"Name:\" class=\"pad-t-15\">{{reagent.manufacturer_name}}</td>\n" +
    "                <td class=\"col-md-2 pad-t-15\" data-title=\"Active\">\n" +
    "                    <span ng-if=\"reagent.active\" class=\"fa-stack fa-lg fs-14 text-success\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-check fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"!reagent.active\" class=\"fa-stack fa-lg fs-14 text-danger\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-close fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                </td>\n" +
    "                <td data-title=\"Actions:\" class=\"col-md-2 text-right\">\n" +
    "                    <a class=\"action-btn action-btn-grid action-btn-success\" ui-sref=\"dashboard.reagents.edit_reagent({reagent_id: reagent.id})\" class=\"btn btn-success\">\n" +
    "                        <i class=\"fa fa-pencil\"></i>\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <sil-grid-pagination> </sil-grid-pagination>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/categories/categories_form.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/categories/categories_form.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a ng-if=\"edit_view\" tooltip-placement=\"bottom\" tooltip=\"Delete Category\" class=\"action-btn action-btn-md action-btn-default\" ui-sref=\"dashboard.category.add_category\">\n" +
    "            <i class=\"fa fa-trash text-danger\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "          <i class=\"fa {{edit_view ? 'fa-edit' : 'fa-plus-circle'}}\"></i> {{edit_view ? 'Edit' : 'Add'}} Category\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12\">\n" +
    "    <div ui-view=\"delete\"></div>\n" +
    "    <div class=\"col-xs-12\">\n" +
    "      <form name=\"cat_frm\"  ng-submit=\"save(cat_frm)\" novalidate>\n" +
    "        <div class=\"fade-content col-sm-10 col-sm-offset-1 margin-t-20 content-card\">\n" +
    "          <drf-err-msg></drf-err-msg>\n" +
    "            <div class=\"col-sm-12 margin-t-20 margin-b-20\">\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Name<span class=\"text-danger\">&#42;</span></label>\n" +
    "                  <input class=\"form-control\" name=\"name\" ng-model=\"category.name\" required placeholder=\"Name\" api-checker/>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Description</label>\n" +
    "                  <textarea class=\"form-control\" name=\"description\" ng-model=\"category.description\" placeholder=\"Description\" rows=\"2\" api-checker></textarea>\n" +
    "              </div>\n" +
    "              <div class=\"form-group checkbox\">\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\" id=\"active\" name=\"active\" ng-model=\"category.active\" tooltip=\"Check if category is not retired\" api-checker >\n" +
    "                    Active\n" +
    "                   </label>\n" +
    "              </div>\n" +
    "              <div class=\"pull-left col-sm-12 pad-0 margin-t-10 margin-b-20\">\n" +
    "                <button class=\"btn btn-primary\">Save</button>\n" +
    "                <a class=\"margin-l-10 btn btn-default margin-l-5\" ui-sref=\"dashboard.categories\">Cancel</a>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "      <!-- Listing category programs -->\n" +
    "      <div class=\"col-xs-12 margin-b-10 margin-t-10 pad-0\" ng-if=\"edit_view\">\n" +
    "        <div class=\"col-sm-10 col-sm-offset-1 fade-content margin-t-20 pad-0\">\n" +
    "            <sil-grid template=\"setup/tpls/categories/program_categories.tpl.html\" grid-for=\"events\" api-key=\"programs\"\n" +
    "                data=\"programs\" filters=\"filters\" error=\"alert\">\n" +
    "            </sil-grid>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/categories/categories_grid.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/categories/categories_grid.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a  tooltip-placement=\"bottom\" tooltip=\"New Category\" class=\"action-btn action-btn-md action-btn-default\" ui-sref=\"dashboard.categories.add_category\">\n" +
    "            <i class=\"fa fa-plus\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "            <i class=\"fa fa-book\"></i> Categories\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12 margin-t-30\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <sil-grid template=\"setup/tpls/categories/categories_list.tpl.html\" grid-for=\"events\" api-key=\"categories\" data=\"categories\" filters=\"filters\" error=\"alert\"></sil-grid>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/categories/categories_list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/categories/categories_list.tpl.html",
    "<div class=\"col-xs-12 content-card\">\n" +
    "    <h4 class=\"lato-light margin-b-10 fs-20\">\n" +
    "        Categories List\n" +
    "    </h4>\n" +
    "    <table class=\"table table-hover table-condensed fs-14\" id=\"no-more-tables\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th class=\"col-md-6\">Name</th>\n" +
    "                <th class=\"col-md-4\">Active</th>\n" +
    "                <th class=\"col-md-2\"></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody class=\"fade-content\">\n" +
    "            <tr  ng-repeat=\"cat in categories\">\n" +
    "                <td class=\"col-md-6 pad-t-15\" data-title=\"Name:\" class=\"pad-t-15\">{{cat.name}}</td>\n" +
    "                <td class=\"col-md-4 pad-t-15\" data-title=\"Active\">\n" +
    "                    <span ng-if=\"cat.active\" class=\"fa-stack fa-lg fs-14 text-success\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-check fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"!cat.active\" class=\"fa-stack fa-lg fs-14 text-danger\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-close fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                </td>\n" +
    "                <td data-title=\"Actions:\" class=\"col-md-2 text-right\">\n" +
    "                    <a class=\"action-btn action-btn-grid action-btn-success\" ui-sref=\"dashboard.categories.edit_category({cat_id: cat.id})\" class=\"btn btn-success\">\n" +
    "                        <i class=\"fa fa-pencil\"></i>\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <sil-grid-pagination> </sil-grid-pagination>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/categories/program_categories.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/categories/program_categories.tpl.html",
    "<div class=\"col-xs-12 content-card\">\n" +
    "    <h4 class=\"lato-light margin-b-10 fs-18\">\n" +
    "        Programs in Category\n" +
    "    </h4>\n" +
    "    <table class=\"table table-hover table-condensed table-fixed fs-14\" id=\"no-more-tables\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th class=\"col-md-3\">Code</th>\n" +
    "                <th class=\"col-md-6\">Name</th>\n" +
    "                <th class=\"col-md-3\">Active</th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody class=\"fade-content\">\n" +
    "            <tr  ng-repeat=\"program in programs\">\n" +
    "                <td class=\"col-md-3 pad-t-15\" data-title=\"Name:\" class=\"pad-t-15\">{{program.code}}</td>\n" +
    "                <td class=\"col-md-6 pad-t-15\" data-title=\"Name:\" class=\"pad-t-15\">{{program.name}}</td>\n" +
    "                <td class=\"col-md-3 pad-t-15\" data-title=\"Active\">\n" +
    "                    <span ng-if=\"program.active\" class=\"fa-stack fa-lg fs-14 text-success\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-check fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"!program.active\" class=\"fa-stack fa-lg fs-14 text-danger\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-close fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr ng-if=\"programs.length === 0\">\n" +
    "                <td colspan=\"3\" class=\"fs-16 lato-light fw-500 bg-grey col-xs-12\">\n" +
    "                    <i class=\"fa fa-info-circle\"></i> Category has no related Programs currently\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <sil-grid-pagination> </sil-grid-pagination>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/coa/coa_grid.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/coa/coa_grid.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a tooltip-placement=\"bottom\" tooltip=\"Add COA\" class=\"action-btn action-btn-md action-btn-primary\" ui-sref=\"coa.create\">\n" +
    "            <i class=\"fa fa-plus\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\"> Certificate of Analysis</span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"content-body\">\n" +
    "    <ul class=\"col-xs-3 col-lg-2 margin-t-20 pad-0 margin-b-20\">\n" +
    "        <li class=\"nav-left\" ng-repeat=\"event in events\" ng-class=\"{'active': css ==  $index}\">\n" +
    "            <a ng-click=\"getCoa(event.id, $index)\" ng-class=\"{'notch-right active': css ==  $index}\"\n" +
    "             href=\"\">{{event.name}}</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "    <div class= \"col-xs-9 col-lg-10 content-card margin-t-20 margin-b-20\">\n" +
    "        <table class=\"table table-hover table-condensed\">\n" +
    "                <thead>\n" +
    "                    <tr>\n" +
    "                        <th>Analyte</th>\n" +
    "                        <th>Sample</th>\n" +
    "                        <th>Response</th>\n" +
    "                    </tr>\n" +
    "                </thead>\n" +
    "                <tbody class=\"fade-content\">\n" +
    "                    <tr>\n" +
    "                       <td>Qualitative</td>\n" +
    "                    </tr>\n" +
    "                    <tr ng-repeat=\"coa in coa_qualitative\">\n" +
    "                        <td class=\"col-md-2 pad-t-15\" data-title=\"Analyte:\">{{coa.analyte_name}}</td>\n" +
    "                        <td class=\"col-md-2 pad-t-15\" data-title=\"Sample:\">{{coa.sample_name}}</td>\n" +
    "                        <td class=\"col-md-2 pad-t-15\" data-title=\"Response:\">{{coa.response}}</td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "                <tbody class=\"fade-content\">\n" +
    "                    <tr>\n" +
    "                       <td>Quantitative</td>\n" +
    "                    </tr>\n" +
    "                    <tr ng-repeat=\"coa in coa_quantitative\">\n" +
    "                        <td class=\"col-md-2 pad-t-15\" data-title=\"Analyte:\">{{coa.analyte_name}}</td>\n" +
    "                        <td class=\"col-md-2 pad-t-15\" data-title=\"Sample:\">{{coa.sample_name}}</td>\n" +
    "                        <td class=\"col-md-2 pad-t-15\" data-title=\"Response:\">{{coa.response}}</td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "                <tbody class=\"fade-content\">\n" +
    "                    <tr>\n" +
    "                       <td>Semi </td>\n" +
    "                    </tr>\n" +
    "                    <tr ng-repeat=\"coa in coa_semi\">\n" +
    "                        <td class=\"col-md-2 pad-t-15\" data-title=\"Analyte:\">{{coa.analyte_name}}</td>\n" +
    "                        <td class=\"col-md-2 pad-t-15\" data-title=\"Sample:\">{{coa.sample_name}}</td>\n" +
    "                        <td class=\"col-md-2 pad-t-15\" data-title=\"Response:\">{{coa.response}}</td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "                <tbody class=\"fade-content\">\n" +
    "                    <tr>\n" +
    "                       <td>Drugs</td>\n" +
    "                    </tr>\n" +
    "                    <tr ng-repeat=\"coa in coa_drugs\">\n" +
    "                        <td class=\"col-md-2 pad-t-15\" data-title=\"Analyte:\">{{coa.analyte_name}}</td>\n" +
    "                        <td class=\"col-md-2 pad-t-15\" data-title=\"Sample:\">{{coa.sample_name}}</td>\n" +
    "                        <td class=\"col-md-2 pad-t-15\" data-title=\"Response:\">{{coa.response}}</td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/drugs/drugs_form.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/drugs/drugs_form.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a ng-if=\"edit_view\" tooltip-placement=\"bottom\" tooltip=\"Delete Drug\" class=\"action-btn action-btn-md action-btn-default\" ui-sref=\"dashboard.drugs.add_drug\">\n" +
    "            <i class=\"fa fa-trash text-danger\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "          <i class=\"fa {{edit_view ? 'fa-edit' : 'fa-plus-circle'}}\"></i> {{edit_view ? 'Edit' : 'Add'}} Drug\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12\">\n" +
    "    <div ui-view=\"delete\"></div>\n" +
    "    <div class=\"col-xs-12\">\n" +
    "      <form name=\"drug_frm\"  ng-submit=\"save(drug_frm)\" novalidate>\n" +
    "        <div class=\"fade-content col-sm-10 col-sm-offset-1 margin-t-20 content-card\">\n" +
    "          <drf-err-msg></drf-err-msg>\n" +
    "            <div class=\"col-sm-12 margin-t-20 margin-b-20\">\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Name<span class=\"text-danger\">&#42;</span></label>\n" +
    "                  <input class=\"form-control\" name=\"name\" ng-model=\"drug.name\" required placeholder=\"Name\" api-checker/>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"\">\n" +
    "                      Classification\n" +
    "                  </label>\n" +
    "                  <select class=\"form-control\" name=\"classification\" ng-model=\"drug.classification\" api-checker>\n" +
    "                      <option value=\"\" disabled>Select Classification</option>\n" +
    "                      <option ng-repeat=\"classification in classifications\" ng-selected=\"{{classification.value == drug.classification}}\" value=\"{{classification.value}}\">{{classification.\n" +
    "                      display_value}}</option>\n" +
    "                  </select>\n" +
    "              </div>\n" +
    "              <div class=\"form-group checkbox\">\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\" id=\"is_antibiotic\" name=\"is_antibiotic\" ng-model=\"drug.is_antibiotic\" api-checker >\n" +
    "                    For Bacteriology\n" +
    "                   </label>\n" +
    "              </div>\n" +
    "              <div class=\"form-group checkbox\">\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\" id=\"is_antiparasitic\" name=\"is_antiparasitic\" ng-model=\"drug.is_antiparasitic\"\n" +
    "                    api-checker >\n" +
    "                    For Parasitology\n" +
    "                   </label>\n" +
    "              </div>\n" +
    "              <div class=\"form-group checkbox\">\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\" id=\"active\" name=\"active\" ng-model=\"drug.active\" tooltip=\"Check if drug is not retired\" api-checker >\n" +
    "                    Active\n" +
    "                   </label>\n" +
    "              </div>\n" +
    "              <div class=\"pull-left col-sm-12 pad-0 margin-t-10 margin-b-20\">\n" +
    "                <button class=\"btn btn-primary\">Save</button>\n" +
    "                <a class=\"margin-l-10 btn btn-default margin-l-5\" ui-sref=\"dashboard.samples\">Cancel</a>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/drugs/drugs_grid.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/drugs/drugs_grid.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a  tooltip-placement=\"bottom\" tooltip=\"Add Drug\" class=\"action-btn action-btn-md action-btn-default\" ui-sref=\"dashboard.drugs.add_drug\">\n" +
    "            <i class=\"fa fa-plus\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "            <i class=\"fa fa-medkit\"></i> Drugs\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12 margin-t-30\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <sil-grid template=\"setup/tpls/drugs/drugs_list.tpl.html\" grid-for=\"events\" api-key=\"drugs\" data=\"drugs\" filters=\"filters\" error=\"alert\"></sil-grid>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/drugs/drugs_list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/drugs/drugs_list.tpl.html",
    "<div class=\"col-xs-12 content-card\">\n" +
    "    <h4 class=\"lato-light margin-b-10 fs-20\">\n" +
    "        Drugs List\n" +
    "    </h4>\n" +
    "    <table class=\"table table-hover table-condensed fs-14\" id=\"no-more-tables\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th class=\"col-md-3\">Name</th>\n" +
    "                <th class=\"col-md-3\">Classification</th>\n" +
    "                <th class=\"col-md-2\">For Bacteriology</th>\n" +
    "                <th class=\"col-md-2\">For Parasitology</th>\n" +
    "                <th class=\"col-md-1\">Active</th>\n" +
    "                <th class=\"col-md-1\"></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody class=\"fade-content\">\n" +
    "            <tr  ng-repeat=\"drug in drugs\">\n" +
    "                <td class=\"col-md-3 pad-t-15\" data-title=\"Name:\" class=\"pad-t-15\">{{drug.name}}</td>\n" +
    "                <td class=\"col-md-3 pad-t-15\" data-title=\"Name:\" class=\"pad-t-15\">\n" +
    "                    {{drug.classification}}\n" +
    "                    <span ng-if=\"!drug.classification\" class=\"fs-16 text-black\">\n" +
    "                        <i class=\"fa fa-minus\"></i>\n" +
    "                    </span>\n" +
    "                </td>\n" +
    "                <td class=\"col-md-2 pad-t-15\" data-title=\"Active\">\n" +
    "                    <span ng-if=\"drug.is_antibiotic\" class=\"fa-stack fa-lg fs-14 text-success\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-check fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"!drug.is_antibiotic\" class=\"fa-stack fa-lg fs-14 text-danger\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-close fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                </td>\n" +
    "                <td class=\"col-md-2 pad-t-15\" data-title=\"Active\">\n" +
    "                    <span ng-if=\"drug.is_antiparasitic\" class=\"fa-stack fa-lg fs-14 text-success\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-check fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"!drug.is_antiparasitic\" class=\"fa-stack fa-lg fs-14 text-danger\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-close fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                </td>\n" +
    "                <td class=\"col-md-1 pad-t-15\" data-title=\"Active\">\n" +
    "                    <span ng-if=\"drug.active\" class=\"fa-stack fa-lg fs-14 text-success\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-check fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"!drug.active\" class=\"fa-stack fa-lg fs-14 text-danger\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-close fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                </td>\n" +
    "                <td data-title=\"Actions:\" class=\"col-md-2 text-right\">\n" +
    "                    <a class=\"action-btn action-btn-grid action-btn-success\" ui-sref=\"dashboard.drugs.edit_drug({drug_id: drug.id})\" class=\"btn btn-success\">\n" +
    "                        <i class=\"fa fa-pencil\"></i>\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <sil-grid-pagination> </sil-grid-pagination>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/evaluation_criteria/evaluation_criteria_form.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/evaluation_criteria/evaluation_criteria_form.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a ng-if=\"edit_view\" tooltip-placement=\"bottom\" tooltip=\"Delete Evaluation Criteria\" class=\"action-btn action-btn-md action-btn-default\" ui-sref=\"evaluation_criteria.add_evaluation_criterion\">\n" +
    "            <i class=\"fa fa-trash text-danger\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "          <i class=\"fa {{edit_view ? 'fa-edit' : 'fa-plus-circle'}}\"></i> {{edit_view ? 'Edit' : 'Add'}} Evaluation Criteria\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12\">\n" +
    "    <div ui-view=\"delete\"></div>\n" +
    "    <div class=\"col-xs-12\">\n" +
    "      <form name=\"eval_frm\"  ng-submit=\"save(eval_frm)\" novalidate>\n" +
    "        <div class=\"fade-content col-sm-10 col-sm-offset-1 margin-t-20 content-card\">\n" +
    "          <drf-err-msg></drf-err-msg>\n" +
    "            <div class=\"col-sm-12 margin-t-20 margin-b-20\">\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"\">\n" +
    "                      Analyte<span class=\"text-danger\">&#42;</span>\n" +
    "                  </label>\n" +
    "                  <select class=\"form-control\" name=\"analyte\" ng-model=\"criterion.analyte\" api-checker>\n" +
    "                      <option value=\"\" disabled>Select Analyte</option>\n" +
    "                      <option ng-repeat=\"analyte in analytes\" ng-selected=\"{{analyte.id == criterion.analyte}}\" value=\"{{analyte.id}}\">{{analyte.name}}</option>\n" +
    "                  </select>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"\">\n" +
    "                      Limit<span class=\"text-danger\">&#42;</span>\n" +
    "                  </label>\n" +
    "                  <select class=\"form-control\" name=\"limit\" ng-model=\"criterion.limit\" ng-change=\"limitChecker(criterion.limit)\"\n" +
    "                  api-checker>\n" +
    "                      <option value=\"\" disabled>Select Limit</option>\n" +
    "                      <option ng-repeat=\"limit in limits\" ng-selected=\"{{limit.value == criterion.limit}}\" value=\"{{limit.value}}\">{{limit.display_value}}</option>\n" +
    "                  </select>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\" ng-if=\"is_sd\">\n" +
    "                  <label class=\"control-label\">SD Value<span class=\"text-danger\">&#42;</span></label>\n" +
    "                  <input class=\"form-control\" name=\"sd\" ng-model=\"criterion.sd\" ng-required=\"criterion.limit === 'SD'\" placeholder=\"SD Value\" api-checker/>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\" ng-if=\"is_pc\">\n" +
    "                  <label class=\"control-label\">Percentage Value<span class=\"text-danger\">&#42;</span></label>\n" +
    "                  <input class=\"form-control\" name=\"percent\" ng-model=\"criterion.percent\" ng-required=\"criterion.limit === 'PC'\" placeholder=\"Percentage Value\" api-checker/>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\" ng-if=\"is_fv\">\n" +
    "                  <label class=\"control-label\">Absolute Value<span class=\"text-danger\">&#42;</span></label>\n" +
    "                  <input class=\"form-control\" name=\"absolute\" ng-model=\"criterion.absolute\" ng-required=\"criterion.limit === 'FV'\" placeholder=\"Absolute Value\" api-checker/>\n" +
    "              </div>\n" +
    "              <div class=\"form-group checkbox\">\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\" id=\"active\" name=\"active\" ng-model=\"criterion.active\" tooltip=\"Check if evalution criterion is not retired\" api-checker >\n" +
    "                    Active\n" +
    "                   </label>\n" +
    "              </div>\n" +
    "              <div class=\"pull-left col-sm-12 pad-0 margin-t-10 margin-b-20\">\n" +
    "                <button class=\"btn btn-primary\">Save</button>\n" +
    "                <a class=\"margin-l-10 btn btn-default margin-l-5\" ui-sref=\"dashboard.evaluation_criteria\">Cancel</a>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/evaluation_criteria/evaluation_criteria_grid.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/evaluation_criteria/evaluation_criteria_grid.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a  tooltip-placement=\"bottom\" tooltip=\"Add Drug\" class=\"action-btn action-btn-md action-btn-default\" ui-sref=\"dashboard.evaluation_criteria.add_evaluation_criterion\">\n" +
    "            <i class=\"fa fa-plus\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "            <i class=\"fa fa-th-list\"></i> Evaluation Criteria\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12 margin-t-30\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <sil-grid template=\"setup/tpls/evaluation_criteria/evaluation_criteria_list.tpl.html\" grid-for=\"events\" api-key=\"evaluation_criteria\" data=\"evaluation_criteria\" filters=\"filters\" error=\"alert\"></sil-grid>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/evaluation_criteria/evaluation_criteria_list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/evaluation_criteria/evaluation_criteria_list.tpl.html",
    "<div class=\"col-xs-12 content-card\">\n" +
    "    <h4 class=\"lato-light margin-b-10 fs-20\">\n" +
    "        Evaluation Criteria List {{limits}}\n" +
    "    </h4>\n" +
    "    <table class=\"table table-hover table-condensed fs-14\" id=\"no-more-tables\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th class=\"col-md-2\">Analyte</th>\n" +
    "                <th class=\"col-md-2\">Limit</th>\n" +
    "                <th class=\"col-md-2\">Absolute Value</th>\n" +
    "                <th class=\"col-md-2\">SD Value</th>\n" +
    "                <th class=\"col-md-2\">Percentage Value</th>\n" +
    "                <th class=\"col-md-1\">Active</th>\n" +
    "                <th class=\"col-md-1\"></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody class=\"fade-content\">\n" +
    "            <tr  ng-repeat=\"criterion in evaluation_criteria\">\n" +
    "                <td class=\"col-md-2 pad-t-15\" data-title=\"Name:\" class=\"pad-t-15\">\n" +
    "                    {{criterion.analyte_name}}\n" +
    "                </td>\n" +
    "                <td class=\"col-md-2 pad-t-15\" data-title=\"Name:\" class=\"pad-t-15\">\n" +
    "                    <span ng-if=\"criterion.limit === 'SD'\">\n" +
    "                        SD Value\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"criterion.limit === 'PC'\">\n" +
    "                        Percentage of Target\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"criterion.limit === 'FV'\">\n" +
    "                        Fixed Value\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"criterion.limit === 'CM'\">\n" +
    "                        Combination Max Limit\n" +
    "                    </span>\n" +
    "                </td>\n" +
    "                <td class=\"col-md-2 pad-t-15\" data-title=\"Name:\" class=\"pad-t-15\">\n" +
    "                    {{criterion.absolute}}\n" +
    "                    <i class=\"fa fa-minus fs-16\" ng-if=\"!criterion.absolute\"></i>\n" +
    "                </td>\n" +
    "                <td class=\"col-md-2 pad-t-15\" data-title=\"Name:\" class=\"pad-t-15\">\n" +
    "                    {{criterion.sd}}\n" +
    "                    <i class=\"fa fa-minus fs-16\" ng-if=\"!criterion.sd\"></i>\n" +
    "                </td>\n" +
    "                <td class=\"col-md-2 pad-t-15\" data-title=\"Name:\" class=\"pad-t-15\">\n" +
    "                    {{criterion.percent}}\n" +
    "                    <i class=\"fa fa-minus fs-16\" ng-if=\"!criterion.percent\"></i>\n" +
    "                </td>\n" +
    "                <td class=\"col-md-1 pad-t-15\" data-title=\"Active\">\n" +
    "                    <span ng-if=\"criterion.active\" class=\"fa-stack fa-lg fs-14 text-success\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-check fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"!criterion.active\" class=\"fa-stack fa-lg fs-14 text-danger\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-close fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                </td>\n" +
    "                <td data-title=\"Actions:\" class=\"col-md-2 text-right\">\n" +
    "                    <a class=\"action-btn action-btn-grid action-btn-success\" ui-sref=\"dashboard.evaluation_criteria.edit_evaluation_criterion({criterion_id: criterion.id})\" class=\"btn btn-success\">\n" +
    "                        <i class=\"fa fa-pencil\"></i>\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <sil-grid-pagination> </sil-grid-pagination>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/instruments/instruments_form.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/instruments/instruments_form.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a ng-if=\"edit_view\" tooltip-placement=\"bottom\" tooltip=\"Delete Unit\" class=\"action-btn action-btn-md action-btn-default\" ui-sref=\"instruments.add_instrument\">\n" +
    "            <i class=\"fa fa-trash text-danger\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "          <i class=\"fa {{edit_view ? 'fa-edit' : 'fa-plus-circle'}}\"></i> {{edit_view ? 'Edit' : 'Add'}} Instrument\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12\">\n" +
    "    <div ui-view=\"delete\"></div>\n" +
    "    <div class=\"col-xs-12\">\n" +
    "      <form name=\"unit_frm\"  ng-submit=\"save(unit_frm)\" novalidate>\n" +
    "        <div class=\"fade-content col-sm-10 col-sm-offset-1 margin-t-20 content-card\">\n" +
    "          <drf-err-msg></drf-err-msg>\n" +
    "            <div class=\"col-sm-12 margin-t-20 margin-b-20\">\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Name<span class=\"text-danger\">&#42;</span></label>\n" +
    "                  <input class=\"form-control\" name=\"name\" ng-model=\"instrument.name\" required placeholder=\"Name\" api-checker/>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "              <label class=\"control-label\">Manufacturer<span class=\"text-danger\">&#42;</span></label>\n" +
    "                <select class=\"form-control\" name=\"manufacturer\" ng-model=\"instrument.manufacturer\">\n" +
    "                  <option value=\"\" disabled>Select Manufacturer</option>\n" +
    "                  <option ng-repeat=\"manufacturer in manufacturers\" ng-selected=\"{{manufacturer.id == instrument.manufacturer}}\" value=\"{{manufacturer.id}}\">{{manufacturer.name}}</option>\n" +
    "                </select>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Description</label>\n" +
    "                  <textarea class=\"form-control\" name=\"description\" ng-model=\"instrument.description\" placeholder=\"Description\" rows=\"2\" api-checker></textarea>\n" +
    "              </div>\n" +
    "              <div class=\"form-group checkbox\">\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\" id=\"active\" name=\"active\" ng-model=\"instrument.active\" tooltip=\"Check if unit is not retired\" api-checker >\n" +
    "                    Active\n" +
    "                   </label>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"fade-content col-sm-10 col-sm-offset-1 margin-t-20 content-card\" style=\"padding: 0px;\">\n" +
    "            <table class=\"table table-hover table-condensed col-xs-12\">\n" +
    "              <thead class=\"grey-header\">\n" +
    "                  <th class=\"col-xs-4\">Name&#42;</th>\n" +
    "                  <th class=\"col-xs-4\">Description&#42;</th>\n" +
    "                  <th class=\"col-xs-3 text-center\">Active&#42;</th>\n" +
    "                  <th class=\"col-xs-1 text-center\"></th>\n" +
    "              </thead>\n" +
    "              <tbody>\n" +
    "                  <tr ng-repeat=\"model in instrument_models\">\n" +
    "                      <td class=\"col-xs-4\">\n" +
    "                        <div class=\"form-group grid-inputs\">\n" +
    "                          <input class=\"form-control\" name=\"name\" ng-model=\"model.name\" placeholder=\"Model Name\" api-checker/>\n" +
    "                        </div>\n" +
    "                      </td>\n" +
    "                      <td class=\"col-xs-4\">\n" +
    "                        <div class=\"form-group grid-inputs\">\n" +
    "                            <textarea class=\"form-control\" name=\"description\" ng-model=\"instrument.description\" placeholder=\"Model Description\" rows=\"1\" api-checker></textarea>\n" +
    "                        </div>\n" +
    "                      </td>\n" +
    "                      <td class=\"col-xs-3 text-center\">\n" +
    "                          <div class=\"form-group checkbox\">\n" +
    "                            <label>\n" +
    "                              <input type=\"checkbox\" id=\"selected\" name=\"selected\" ng-model=\"model.active\" tooltip-placement=\"bottom\" api-checker >\n" +
    "                              Active\n" +
    "                             </label>\n" +
    "                          </div>\n" +
    "                      </td>\n" +
    "                      <td class=\"col-xs-1 text-center\">\n" +
    "                          <a ng-click=\"removeModel(model)\" style=\"cursor: pointer;\">\n" +
    "                              <i class=\"fa fa-times-circle fa-2x grid-inputs text-danger\"></i>\n" +
    "                          </a>\n" +
    "                      </td>\n" +
    "                  </tr>\n" +
    "                  <tr ng-if=\"option_group.options.length < 1\" class=\"\">\n" +
    "                      <td colspan=\"3\">\n" +
    "                          <i class=\"fa fa-info-circle\"></i> No Instrument Model added to Instrument\n" +
    "                      </td>\n" +
    "                  </tr>\n" +
    "              </tbody>\n" +
    "          </table>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-10 col-sm-offset-1 pad-0 text-right margin-t-10 margin-b-10\">\n" +
    "            <a class=\"btn btn-primary pull-right\" ng-click=\"addModel()\" >\n" +
    "                <i class=\"fa fa-plus-square-o\"></i> Add\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div class=\"pull-left col-sm-10 col-sm-offset-1 pad-0 margin-t-10 margin-b-20\">\n" +
    "          <button class=\"btn btn-primary\">Save</button>\n" +
    "          <a class=\"margin-l-10 btn btn-default margin-l-5\" ui-sref=\"dashboard.instruments\">Cancel</a>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/instruments/instruments_grid.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/instruments/instruments_grid.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a  tooltip-placement=\"bottom\" tooltip=\"Add Instrument\" class=\"action-btn action-btn-md action-btn-default\" ui-sref=\"dashboard.instruments.add_instrument\">\n" +
    "            <i class=\"fa fa-plus\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "            <i class=\"fa fa-sliders\"></i> Instruments\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12 margin-t-30\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <sil-grid template=\"setup/tpls/instruments/instruments_list.tpl.html\" grid-for=\"events\" api-key=\"instruments\" data=\"instruments\" filters=\"filters\" error=\"alert\"></sil-grid>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/instruments/instruments_list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/instruments/instruments_list.tpl.html",
    "<div class=\"col-xs-12 content-card\">\n" +
    "    <h4 class=\"lato-light margin-b-10 fs-20\">\n" +
    "        Instruments List\n" +
    "    </h4>\n" +
    "    <table class=\"table table-hover table-condensed fs-14\" id=\"no-more-tables\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th class=\"col-md-4\">Name</th>\n" +
    "                <th class=\"col-md-4\">Manufacturer</th>\n" +
    "                <th class=\"col-md-2\">Active</th>\n" +
    "                <th class=\"col-md-2\"></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody class=\"fade-content\">\n" +
    "            <tr  ng-repeat=\"instrument in instruments\">\n" +
    "                <td class=\"col-md-4 pad-t-15\" data-title=\"Name:\" class=\"pad-t-15\">{{instrument.name}}</td>\n" +
    "                <td class=\"col-md-4 pad-t-15\" data-title=\"Name:\" class=\"pad-t-15\">\n" +
    "                    {{instrument.manufacturer_name}}\n" +
    "                    <span ng-if=\"!instrument.manufacturer\" class=\"fs-16 text-black\">\n" +
    "                        <i class=\"fa fa-minus\"></i>\n" +
    "                    </span>\n" +
    "                </td>\n" +
    "                <td class=\"col-md-2 pad-t-15\" data-title=\"Active\">\n" +
    "                    <span ng-if=\"instrument.active\" class=\"fa-stack fa-lg fs-14 text-success\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-check fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"!instrument.active\" class=\"fa-stack fa-lg fs-14 text-danger\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-close fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                </td>\n" +
    "                <td data-title=\"Actions:\" class=\"col-md-2 text-right\">\n" +
    "                    <a class=\"action-btn action-btn-grid action-btn-success\" ui-sref=\"dashboard.instruments.edit_instrument({instrument_id: instrument.id})\" class=\"btn btn-success\">\n" +
    "                        <i class=\"fa fa-pencil\"></i>\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <sil-grid-pagination> </sil-grid-pagination>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/programs/programs_form.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/programs/programs_form.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a ng-if=\"edit_view\" tooltip-placement=\"bottom\" tooltip=\"Delete Category\" class=\"action-btn action-btn-md action-btn-default\" ui-sref=\"dashboard.programs.add_program\" ui-sref-opts=\"{reload:true}\">\n" +
    "            <i class=\"fa fa-trash text-danger\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "          <i class=\"fa {{edit_view ? 'fa-edit' : 'fa-plus-circle'}}\"></i> {{edit_view ? 'Edit' : 'Add'}} Program\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12\">\n" +
    "    <div ui-view=\"delete\"></div>\n" +
    "    <div class=\"col-xs-12\">\n" +
    "      <form name=\"program_frm\"  ng-submit=\"save(program_frm)\" novalidate>\n" +
    "        <div class=\"fade-content col-sm-10 col-sm-offset-1 margin-t-20 content-card\">\n" +
    "          <drf-err-msg></drf-err-msg>\n" +
    "            <div class=\"col-sm-12 margin-t-20 margin-b-20\">\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Code<span class=\"text-danger\">&#42;</span></label>\n" +
    "                  <input class=\"form-control\" name=\"code\" ng-model=\"program.code\" required placeholder=\"Code\" api-checker/>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Name<span class=\"text-danger\">&#42;</span></label>\n" +
    "                  <input class=\"form-control\" name=\"name\" ng-model=\"program.name\" required placeholder=\"Name\" api-checker/>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"\">\n" +
    "                      Category <span class=\"text-danger\">&#42;</span>\n" +
    "                  </label>\n" +
    "                  <select class=\"form-control\" name=\"category\" ng-model=\"program.category\" api-checker required>\n" +
    "                      <option value=\"\" disabled>Select Category</option>\n" +
    "                      <option ng-repeat=\"cat in categories\" ng-selected=\"{{cat.id == program.category}}\" value=\"{{cat.id}}\">{{cat.name}}</option>\n" +
    "                  </select>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Number of Shipments per year<span class=\"text-danger\">&#42;</span></label>\n" +
    "                  <input type=\"number\" class=\"form-control\" name=\"number_of_shipments_per_year\" ng-model=\"program.number_of_shipments_per_year\" required placeholder=\"Number of shipments per year\" api-checker/>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Size of Shipment<span class=\"text-danger\">&#42;</span></label>\n" +
    "                  <input class=\"form-control\" name=\"size_of_shipment\" ng-model=\"program.size_of_shipment\" required placeholder=\"Size of shipment\" api-checker/>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"\">\n" +
    "                      Shipment Unit <span class=\"text-danger\">&#42;</span>\n" +
    "                  </label>\n" +
    "                  <select class=\"form-control\" name=\"shipment_unit\" ng-model=\"program.shipment_unit\" api-checker required>\n" +
    "                      <option value=\"\" disabled>Select Shipment Unit</option>\n" +
    "                      <option ng-repeat=\"unit in units\" ng-selected=\"{{unit.id == program.shipment_unit}}\" value=\"{{unit.id}}\">{{unit.name}}</option>\n" +
    "                  </select>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Price<span class=\"text-danger\">&#42;</span></label>\n" +
    "                  <input class=\"form-control\" name=\"price\" ng-model=\"program.price\" required placeholder=\"Price\" api-checker/>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"\">\n" +
    "                      Sample Type\n" +
    "                  </label>\n" +
    "                  <select class=\"form-control\" name=\"sample_type\" ng-model=\"program.sample_type\" api-checker>\n" +
    "                      <option value=\"\" disabled>Select Sample Type</option>\n" +
    "                      <option ng-repeat=\"sample_type in sample_types\" ng-selected=\"{{sample_type.id == program.sample_type}}\" value=\"{{sample_type.id}}\">{{sample_type.name}}</option>\n" +
    "                  </select>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Description</label>\n" +
    "                  <textarea class=\"form-control\" name=\"description\" ng-model=\"program.description\" placeholder=\"Description\" rows=\"2\" api-checker></textarea>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Compatibility Information</label>\n" +
    "                  <textarea class=\"form-control\" name=\"compatibility_information\" ng-model=\"program.compatibility_information\" placeholder=\"Compatibility Information\" rows=\"2\" api-checker></textarea>\n" +
    "              </div>\n" +
    "              <div class=\"form-group checkbox\">\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\" id=\"active\" name=\"active\" ng-model=\"program.active\" tooltip=\"Check if Program is not retired\" api-checker >\n" +
    "                    Active\n" +
    "                   </label>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"fade-content col-sm-10 col-sm-offset-1 margin-t-20 content-card\" style=\"padding: 0px;\">\n" +
    "            <table class=\"table table-hover table-condensed col-xs-12\">\n" +
    "              <thead class=\"grey-header\">\n" +
    "                  <th class=\"col-md-8\">Sample&#42;</th>\n" +
    "                  <th class=\"col-md-4 text-center\">Active</th>\n" +
    "              </thead>\n" +
    "              <tbody>\n" +
    "                  <tr ng-repeat=\"prog_sample in program.samples\">\n" +
    "                      <td class=\"col-xs-4\">\n" +
    "                        <div class=\"form-group grid-inputs\">\n" +
    "                          <select class=\"form-control\" name=\"sample{{$index}}\" ng-model=\"prog_sample.sample\" api-checker>\n" +
    "                            <option value=\"\" disabled>Select Sample</option>\n" +
    "                            <option ng-repeat=\"a_sample in samples\" ng-selected=\"{{a_sample.id == prog_sample.sample}}\" value=\"{{a_sample.id}}\">{{a_sample.name}}</option>\n" +
    "                        </select>\n" +
    "                        </div>\n" +
    "                      </td>\n" +
    "                      <td class=\"col-xs-3 text-center\">\n" +
    "                          <div class=\"form-group checkbox\" ng-if=\"prog_sample.id\">\n" +
    "                            <label>\n" +
    "                              <input type=\"checkbox\" id=\"active_sample{{prog_sample}}\" name=\"active_sample{{prog_sample}}\" ng-model=\"prog_sample.active\" tooltip-placement=\"bottom\" api-checker>\n" +
    "                              Active\n" +
    "                             </label>\n" +
    "                          </div>\n" +
    "                          <a ng-show=\"!prog_sample.id\" ng-click=\"removeSample(sample)\" style=\"cursor: pointer;\">\n" +
    "                              <i class=\"fa fa-times-circle fa-2x grid-inputs text-danger\"></i>\n" +
    "                          </a>\n" +
    "                      </td>\n" +
    "                  </tr>\n" +
    "                  <tr ng-if=\"option_group.options.length < 1\" class=\"\">\n" +
    "                      <td colspan=\"3\">\n" +
    "                          <i class=\"fa fa-info-circle\"></i> No Instrument Model added to Instrument\n" +
    "                      </td>\n" +
    "                  </tr>\n" +
    "              </tbody>\n" +
    "          </table>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-10 col-sm-offset-1 pad-0 text-right margin-t-10 margin-b-10\">\n" +
    "            <a class=\"btn btn-primary pull-right\" ng-click=\"addSample()\" >\n" +
    "                <i class=\"fa fa-plus-square-o\"></i> Add\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div class=\"pull-left col-md-10 col-md-offset-1 pad-0 margin-t-10 margin-b-20\">\n" +
    "          <button class=\"btn btn-primary\">Save</button>\n" +
    "          <a class=\"margin-l-10 btn btn-default margin-l-5\" ui-sref=\"dashboard.programs\">Cancel</a>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/programs/programs_grid.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/programs/programs_grid.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a  tooltip-placement=\"bottom\" tooltip=\"New Program\" class=\"action-btn action-btn-md action-btn-default\" ui-sref=\"dashboard.programs.add_program\">\n" +
    "            <i class=\"fa fa-plus\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "            <i class=\"fa fa-sitemap\"></i> Programs\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12 margin-t-30\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <sil-grid template=\"setup/tpls/programs/programs_list.tpl.html\" grid-for=\"events\" api-key=\"programs\" data=\"programs\" filters=\"filters\" error=\"alert\"></sil-grid>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/programs/programs_list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/programs/programs_list.tpl.html",
    "<div class=\"col-xs-12 content-card\">\n" +
    "    <h4 class=\"lato-light margin-b-10 fs-20\">\n" +
    "        Programs List\n" +
    "    </h4>\n" +
    "    <table class=\"table table-hover table-condensed fs-14\" id=\"no-more-tables\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th class=\"col-md-3\">Code</th>\n" +
    "                <th class=\"col-md-4\">Name</th>\n" +
    "                <th class=\"col-md-3\">Sample Type</th>\n" +
    "                <th class=\"col-md-1\">Active</th>\n" +
    "                <th class=\"col-md-1\"></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody class=\"fade-content\">\n" +
    "            <tr  ng-repeat=\"program in programs\">\n" +
    "                <td class=\"col-md-6 pad-t-15\" data-title=\"Code:\" class=\"pad-t-15\">{{program.code}}</td>\n" +
    "                <td class=\"col-md-6 pad-t-15\" data-title=\"Name:\" class=\"pad-t-15\">{{program.name}}</td>\n" +
    "                <td class=\"col-md-6 pad-t-15\" data-title=\"Sample Type:\" class=\"pad-t-15\">\n" +
    "                    {{program.sample_type_name}}\n" +
    "                    <span ng-if=\"!program.sample_type_name\">\n" +
    "                        <i class=\"fa fa-minus fs-14 text-balck\"></i>\n" +
    "                    </span>\n" +
    "                </td>\n" +
    "                <td class=\"col-md-4 pad-t-15\" data-title=\"Active\">\n" +
    "                    <span ng-if=\"program.active\" class=\"fa-stack fa-lg fs-14 text-success\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-check fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"!program.active\" class=\"fa-stack fa-lg fs-14 text-danger\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-close fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                </td>\n" +
    "                <td data-title=\"Actions:\" class=\"col-md-2 text-right\">\n" +
    "                    <a class=\"action-btn action-btn-grid action-btn-success\" ui-sref=\"dashboard.programs.edit_program({program_id: program.id})\" class=\"btn btn-success\">\n" +
    "                        <i class=\"fa fa-pencil\"></i>\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <sil-grid-pagination> </sil-grid-pagination>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/result_codes/result_codes_form.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/result_codes/result_codes_form.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a ng-if=\"edit_view\" tooltip-placement=\"bottom\" tooltip=\"Delete Category\" class=\"action-btn action-btn-md action-btn-default\" ui-sref=\"result_codes.add_result_code\" ui-sref-opts=\"{reload:true}\">\n" +
    "            <i class=\"fa fa-trash text-danger\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "          <i class=\"fa {{edit_view ? 'fa-edit' : 'fa-plus-circle'}}\"></i> {{edit_view ? 'Edit' : 'Add'}} Result Code\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12\">\n" +
    "    <div ui-view=\"delete\"></div>\n" +
    "    <div class=\"col-xs-12\">\n" +
    "      <form name=\"result_code_frm\"  ng-submit=\"save(result_code_frm)\" novalidate>\n" +
    "        <div class=\"fade-content col-sm-10 col-sm-offset-1 margin-t-20 content-card\">\n" +
    "          <drf-err-msg></drf-err-msg>\n" +
    "            <div class=\"col-sm-12 margin-t-20 margin-b-20\">\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Name<span class=\"text-danger\">&#42;</span></label>\n" +
    "                  <input class=\"form-control\" name=\"name\"\n" +
    "                  ng-model=\"result_code.name\" required placeholder=\"Name\" api-checker/>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Description</label>\n" +
    "                  <textarea class=\"form-control\" name=\"description\" ng-model=\"result_code.description\" placeholder=\"Description\" rows=\"2\" api-checker></textarea>\n" +
    "              </div>\n" +
    "              <div class=\"form-group checkbox\">\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\" id=\"active\" name=\"active\" ng-model=\"result_code.active\" tooltip=\"Check if result code is not retired\" api-checker >\n" +
    "                    Active\n" +
    "                   </label>\n" +
    "              </div>\n" +
    "              <div class=\"form-group checkbox\">\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\" id=\"is_error_code\" name=\"is_error_code\" ng-model=\"result_code.is_error_code\" api-checker >\n" +
    "                    Error Code\n" +
    "                   </label>\n" +
    "              </div>\n" +
    "              <div class=\"form-group checkbox\">\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\" id=\"is_valid_for_qualitative_analyte\" name=\"is_valid_for_qualitative_analyte\" ng-model=\"result_code.is_valid_for_qualitative_analyte\" api-checker >\n" +
    "                    Valid for Qualitative Analyte\n" +
    "                   </label>\n" +
    "              </div>\n" +
    "              <div class=\"pull-left col-sm-12 pad-0 margin-t-10 margin-b-20\">\n" +
    "                <button class=\"btn btn-primary\">Save</button>\n" +
    "                <a class=\"margin-l-10 btn btn-default margin-l-5\" ui-sref=\"dashboard.result_codes\">Cancel</a>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/result_codes/result_codes_grid.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/result_codes/result_codes_grid.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a  tooltip-placement=\"bottom\" tooltip=\"New Category\" class=\"action-btn action-btn-md action-btn-default\" ui-sref=\"dashboard.result_codes.add_result_code\">\n" +
    "            <i class=\"fa fa-plus\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "            <i class=\"fa fa-barcode\"></i> Result Codes\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12 margin-t-30\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <sil-grid template=\"setup/tpls/result_codes/result_codes_list.tpl.html\" grid-for=\"events\" api-key=\"result_codes\" data=\"result_codes\" filters=\"filters\" error=\"alert\"></sil-grid>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/result_codes/result_codes_list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/result_codes/result_codes_list.tpl.html",
    "<div class=\"col-xs-12 content-card\">\n" +
    "    <h4 class=\"lato-light margin-b-10 fs-20\">\n" +
    "        Result Codes List\n" +
    "    </h4>\n" +
    "    <table class=\"table table-hover table-condensed fs-14\" id=\"no-more-tables\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th class=\"col-md-3\">Name</th>\n" +
    "                <th class=\"col-md-2 text-center\">Active</th>\n" +
    "                <th class=\"col-md-2 text-center\">Error Code</th>\n" +
    "                <th class=\"col-md-3 text-center\">Valid for Qualitative Programs</th>\n" +
    "                <th class=\"col-md-2\"></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody class=\"fade-content\">\n" +
    "            <tr  ng-repeat=\"code in result_codes\">\n" +
    "                <td class=\"col-md-6 pad-t-15\" data-title=\"Name:\" class=\"pad-t-15\">{{code.name}}</td>\n" +
    "                <td class=\"col-md-4 pad-t-15 text-center\" data-title=\"Active\">\n" +
    "                    <span ng-if=\"code.active\" class=\"fa-stack fa-lg fs-14 text-success\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-check fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"!code.active\" class=\"fa-stack fa-lg fs-14 text-danger\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-close fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                </td>\n" +
    "                <td class=\"col-md-4 pad-t-15 text-center\" data-title=\"Active\">\n" +
    "                    <span ng-if=\"code.is_error_code\" class=\"fa-stack fa-lg fs-14 text-success\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-check fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"!code.is_error_code\" class=\"fa-stack fa-lg fs-14 text-danger\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-close fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                </td>\n" +
    "                <td class=\"col-md-4 pad-t-15 text-center\" data-title=\"Active\">\n" +
    "                    <span ng-if=\"code.is_valid_for_qualitative_analyte\" class=\"fa-stack fa-lg fs-14 text-success\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-check fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"!code.is_valid_for_qualitative_analyte\" class=\"fa-stack fa-lg fs-14 text-danger\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-close fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                </td>\n" +
    "                <td data-title=\"Actions:\" class=\"col-md-2 text-right\">\n" +
    "                    <a class=\"action-btn action-btn-grid action-btn-success\" ui-sref=\"dashboard.result_codes.edit_result_code({code_id: code.id})\" class=\"btn btn-success\">\n" +
    "                        <i class=\"fa fa-pencil\"></i>\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <sil-grid-pagination> </sil-grid-pagination>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/sample/sample_setup.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/sample/sample_setup.tpl.html",
    "<div class=\"content-header\">\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "            <i class=\"fa fa-eyedropper\"></i> Sample Setup\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-md-10 col-md-offset-1 col-xs-12 margin-t-30\">\n" +
    "\n" +
    "    <div class=\"col-md-6 col-xs-6 text-center\">\n" +
    "        <a ui-sref=\"sample_setup.samples\">\n" +
    "            <p class=\"margin-b-0\">\n" +
    "                <span class=\"fa-stack fa-lg fs-55 text-blue dashboard-icon\">\n" +
    "                  <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                  <i class=\"fa fa-eyedropper fa-stack-1x fa-inverse\"></i>\n" +
    "                </span>\n" +
    "            </p>\n" +
    "        </a>\n" +
    "        <a ui-sref=\"sample_setup.samples\">\n" +
    "            <p class=\"lato-light fw-500 fs-20 dashboard-icon\">\n" +
    "                <span>\n" +
    "                    Samples\n" +
    "                </span>\n" +
    "            </p>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-6 col-xs-6 text-center\">\n" +
    "        <a ui-sref=\"sample_setup.sample_types\">\n" +
    "            <p class=\"margin-b-0\">\n" +
    "                <span class=\"fa-stack fa-lg fs-55 text-blue dashboard-icon\">\n" +
    "                  <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                  <i class=\"fa fa-archive fa-stack-1x fa-inverse\"></i>\n" +
    "                </span>\n" +
    "            </p>\n" +
    "        </a>\n" +
    "        <a ui-sref=\"sample_setup.sample_types\">\n" +
    "            <p class=\"lato-light fw-500 fs-20 dashboard-icon\">\n" +
    "                <span>\n" +
    "                    Sample Types\n" +
    "                </span>\n" +
    "            </p>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/sample/sample_types_form.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/sample/sample_types_form.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a ng-if=\"edit_view\" tooltip-placement=\"bottom\" tooltip=\"Delete Sample Type\" class=\"action-btn action-btn-md action-btn-default\" ui-sref=\"dashboard.sample_types.add_sample_type\">\n" +
    "            <i class=\"fa fa-trash text-danger\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "          <i class=\"fa {{edit_view ? 'fa-edit' : 'fa-plus-circle'}}\"></i> {{edit_view ? 'Edit' : 'Add'}} Sample Type\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12\">\n" +
    "    <div ui-view=\"delete\"></div>\n" +
    "    <div class=\"col-xs-12\">\n" +
    "      <form name=\"sample_type_frm\"  ng-submit=\"save(sample_type_frm)\" novalidate>\n" +
    "        <div class=\"fade-content col-sm-10 col-sm-offset-1 margin-t-20 content-card\">\n" +
    "          <drf-err-msg></drf-err-msg>\n" +
    "            <div class=\"col-sm-12 margin-t-20 margin-b-20\">\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Name<span class=\"text-danger\">&#42;</span></label>\n" +
    "                  <input class=\"form-control\" name=\"name\" ng-model=\"sample_type.name\" required placeholder=\"Name\" api-checker/>\n" +
    "              </div>\n" +
    "              <div class=\"form-group checkbox\">\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\" id=\"active\" name=\"active\" ng-model=\"sample_type.active\" tooltip=\"Check if sample type is not retired\" api-checker >\n" +
    "                    Active\n" +
    "                   </label>\n" +
    "              </div>\n" +
    "              <div class=\"pull-left col-sm-12 pad-0 margin-t-10 margin-b-20\">\n" +
    "                <button class=\"btn btn-primary\">Save</button>\n" +
    "                <a class=\"margin-l-10 btn btn-default margin-l-5\" ui-sref=\"dashboard.sample_types\">Cancel</a>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/sample/sample_types_grid.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/sample/sample_types_grid.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a  tooltip-placement=\"bottom\" tooltip=\"New Sample Type\" class=\"action-btn action-btn-md action-btn-default\" ui-sref=\"dashboard.sample_types.add_sample_type\">\n" +
    "            <i class=\"fa fa-plus\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "            <i class=\"fa fa-pie-chart\"></i> Sample Types\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12 margin-t-30\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <sil-grid template=\"setup/tpls/sample/sample_types_list.tpl.html\" grid-for=\"events\" api-key=\"sample_types\" data=\"sample_types\" filters=\"filters\" error=\"alert\"></sil-grid>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/sample/sample_types_list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/sample/sample_types_list.tpl.html",
    "<div class=\"col-xs-12 content-card\">\n" +
    "    <h4 class=\"lato-light margin-b-10 fs-20\">\n" +
    "        Sample Types List\n" +
    "    </h4>\n" +
    "    <table class=\"table table-hover table-condensed fs-14\" id=\"no-more-tables\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th class=\"col-md-6\">Name</th>\n" +
    "                <th class=\"col-md-4\">Active</th>\n" +
    "                <th class=\"col-md-2\"></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody class=\"fade-content\">\n" +
    "            <tr  ng-repeat=\"sample_type in sample_types\">\n" +
    "                <td class=\"col-md-6 pad-t-15\" data-title=\"Name:\" class=\"pad-t-15\">{{sample_type.name}}</td>\n" +
    "                <td class=\"col-md-4 pad-t-15\" data-title=\"Active\">\n" +
    "                    <span ng-if=\"sample_type.active\" class=\"fa-stack fa-lg fs-14 text-success\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-check fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"!sample_type.active\" class=\"fa-stack fa-lg fs-14 text-danger\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-close fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                </td>\n" +
    "                <td data-title=\"Actions:\" class=\"col-md-2 text-right\">\n" +
    "                    <a class=\"action-btn action-btn-grid action-btn-success\"\n" +
    "                    ui-sref=\"dashboard.sample_types.edit_sample_type({sample_type_id: sample_type.id})\" class=\"btn btn-success\">\n" +
    "                        <i class=\"fa fa-pencil\"></i>\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <sil-grid-pagination> </sil-grid-pagination>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/sample/samples_form.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/sample/samples_form.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a ng-if=\"edit_view\" tooltip-placement=\"bottom\" tooltip=\"Delete Samples\" class=\"action-btn action-btn-md action-btn-default\" ui-sref=\"dashboard.samples.add_sample\">\n" +
    "            <i class=\"fa fa-trash text-danger\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "          <i class=\"fa {{edit_view ? 'fa-edit' : 'fa-plus-circle'}}\"></i> {{edit_view ? 'Edit' : 'Add'}} Sample\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12\">\n" +
    "    <div ui-view=\"delete\"></div>\n" +
    "    <div class=\"col-xs-12\">\n" +
    "      <form name=\"sample_frm\"  ng-submit=\"save(sample_frm)\" novalidate>\n" +
    "        <div class=\"fade-content col-sm-10 col-sm-offset-1 margin-t-20 content-card\">\n" +
    "          <drf-err-msg></drf-err-msg>\n" +
    "            <div class=\"col-sm-12 margin-t-20 margin-b-20\">\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Name<span class=\"text-danger\">&#42;</span></label>\n" +
    "                  <input class=\"form-control\" name=\"name\" ng-model=\"sample.name\" required placeholder=\"Name\" api-checker/>\n" +
    "              </div>\n" +
    "              <div class=\"form-group checkbox\">\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\" id=\"active\" name=\"active\" ng-model=\"sample.active\" tooltip=\"Check if sample is not retired\" api-checker >\n" +
    "                    Active\n" +
    "                   </label>\n" +
    "              </div>\n" +
    "              <div class=\"pull-left col-sm-12 pad-0 margin-t-10 margin-b-20\">\n" +
    "                <button class=\"btn btn-primary\">Save</button>\n" +
    "                <a class=\"margin-l-10 btn btn-default margin-l-5\" ui-sref=\"dashboard.samples\">Cancel</a>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/sample/samples_grid.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/sample/samples_grid.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a  tooltip-placement=\"bottom\" tooltip=\"New Sample\" class=\"action-btn action-btn-md action-btn-default\" ui-sref=\"dashboard.samples.add_sample\">\n" +
    "            <i class=\"fa fa-plus\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "            <i class=\"fa fa-eyedropper\"></i> Samples\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12 margin-t-30\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <sil-grid template=\"setup/tpls/sample/samples_list.tpl.html\" grid-for=\"events\" api-key=\"samples\" data=\"samples\" filters=\"filters\" error=\"alert\"></sil-grid>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/sample/samples_list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/sample/samples_list.tpl.html",
    "<div class=\"col-xs-12 content-card\">\n" +
    "    <h4 class=\"lato-light margin-b-10 fs-20\">\n" +
    "        Samples List\n" +
    "    </h4>\n" +
    "    <table class=\"table table-hover table-condensed fs-14\" id=\"no-more-tables\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th class=\"col-md-6\">Name</th>\n" +
    "                <th class=\"col-md-4\">Active</th>\n" +
    "                <th class=\"col-md-2\"></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody class=\"fade-content\">\n" +
    "            <tr  ng-repeat=\"sample in samples\">\n" +
    "                <td class=\"col-md-6 pad-t-15\" data-title=\"Name:\" class=\"pad-t-15\">{{sample.name}}</td>\n" +
    "                <td class=\"col-md-4 pad-t-15\" data-title=\"Active\">\n" +
    "                    <span ng-if=\"sample.active\" class=\"fa-stack fa-lg fs-14 text-success\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-check fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"!sample.active\" class=\"fa-stack fa-lg fs-14 text-danger\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-close fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                </td>\n" +
    "                <td data-title=\"Actions:\" class=\"col-md-2 text-right\">\n" +
    "                    <a class=\"action-btn action-btn-grid action-btn-success\" ui-sref=\"dashboard.samples.edit_sample({sample_id: sample.id})\" class=\"btn btn-success\">\n" +
    "                        <i class=\"fa fa-pencil\"></i>\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <sil-grid-pagination> </sil-grid-pagination>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/units/units_form.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/units/units_form.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a ng-if=\"edit_view\" tooltip-placement=\"bottom\" tooltip=\"Delete Unit\" class=\"action-btn action-btn-md action-btn-default\" ui-sref=\"units.add_unit\">\n" +
    "            <i class=\"fa fa-trash text-danger\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "          <i class=\"fa {{edit_view ? 'fa-edit' : 'fa-plus-circle'}}\"></i> {{edit_view ? 'Edit' : 'Add'}} Unit\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12\">\n" +
    "    <div ui-view=\"delete\"></div>\n" +
    "    <div class=\"col-xs-12\">\n" +
    "      <form name=\"unit_frm\"  ng-submit=\"save(unit_frm)\" novalidate>\n" +
    "        <div class=\"fade-content col-sm-10 col-sm-offset-1 margin-t-20 content-card\">\n" +
    "          <drf-err-msg></drf-err-msg>\n" +
    "            <div class=\"col-sm-12 margin-t-20 margin-b-20\">\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Name<span class=\"text-danger\">&#42;</span></label>\n" +
    "                  <input class=\"form-control\" name=\"name\" ng-model=\"unit.name\" required placeholder=\"Name\" api-checker/>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">Symbol<span class=\"text-danger\">&#42;</span></label>\n" +
    "                  <input class=\"form-control\" name=\"symbol\" ng-model=\"unit.symbol\" required placeholder=\"Symbol\" api-checker/>\n" +
    "              </div>\n" +
    "              <div class=\"form-group checkbox\">\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\" id=\"active\" name=\"active\" ng-model=\"unit.active\" tooltip=\"Check if unit is not retired\" api-checker >\n" +
    "                    Active\n" +
    "                   </label>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"fade-content col-sm-10 col-sm-offset-1 margin-t-20 content-card\" style=\"padding: 0px;\">\n" +
    "            <table class=\"table table-hover table-condensed col-xs-12\">\n" +
    "              <thead class=\"grey-header\">\n" +
    "                  <th class=\"col-xs-4\">Analyte&#42;</th>\n" +
    "                  <th class=\"col-xs-4\">Multiplier Factor&#42;</th>\n" +
    "                  <th class=\"col-xs-3 text-center\">Active&#42;</th>\n" +
    "                  <th class=\"col-xs-1 text-center\"></th>\n" +
    "              </thead>\n" +
    "              <tbody>\n" +
    "                  <tr ng-repeat=\"unit_con in unit_conversions\">\n" +
    "                      <td class=\"col-xs-4\">\n" +
    "                        <div class=\"form-group grid-inputs\">\n" +
    "                          <select class=\"form-control\" name=\"analyte\" ng-model=\"unit_con.analyte\">\n" +
    "                            <option value=\"\" disabled>Select Analyte</option>\n" +
    "                            <option ng-repeat=\"analyte in analytes\" ng-selected=\"{{analyte.id == unit_con.analyte}}\" value=\"{{analyte.id}}\">{{analyte.name}}</option>\n" +
    "                          </select>\n" +
    "                        </div>\n" +
    "                      </td>\n" +
    "                      <td class=\"col-xs-4\">\n" +
    "                        <div class=\"form-group grid-inputs\">\n" +
    "                            <input class=\"form-control\" name=\"multiplier_factor\" ng-model=\"unit_con.multiplier_factor\" placeholder=\"Multiplier Factor\" required />\n" +
    "                        </div>\n" +
    "                      </td>\n" +
    "                      <td class=\"col-xs-3 text-center\">\n" +
    "                          <div class=\"form-group checkbox\">\n" +
    "                            <label>\n" +
    "                              <input type=\"checkbox\" id=\"selected\" name=\"selected\" ng-model=\"unit_con.active\" tooltip-placement=\"bottom\" tooltip=\"Check Program to add to unit conversion\" api-checker >\n" +
    "                              Active\n" +
    "                             </label>\n" +
    "                          </div>\n" +
    "                      </td>\n" +
    "                      <td class=\"col-xs-1 text-center\">\n" +
    "                          <a ng-click=\"removeConversion(unit_con)\" style=\"cursor: pointer;\">\n" +
    "                              <i class=\"fa fa-times-circle fa-2x grid-inputs text-danger\"></i>\n" +
    "                          </a>\n" +
    "                      </td>\n" +
    "                  </tr>\n" +
    "                  <tr ng-if=\"option_group.options.length < 1\" class=\"\">\n" +
    "                      <td colspan=\"3\">\n" +
    "                          <i class=\"fa fa-info-circle\"></i> No Unit Conversion added to Unit\n" +
    "                      </td>\n" +
    "                  </tr>\n" +
    "              </tbody>\n" +
    "          </table>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-10 col-sm-offset-1 pad-0 text-right margin-t-10 margin-b-10\">\n" +
    "            <a class=\"btn btn-primary pull-right\" ng-click=\"addConversion()\" >\n" +
    "                <i class=\"fa fa-plus-square-o\"></i> Add\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div class=\"pull-left col-sm-10 col-sm-offset-1 pad-0 margin-t-10 margin-b-20\">\n" +
    "          <button class=\"btn btn-primary\">Save</button>\n" +
    "          <a class=\"margin-l-10 btn btn-default margin-l-5\" ui-sref=\"dashboard.units\">Cancel</a>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/units/units_grid.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/units/units_grid.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a  tooltip-placement=\"bottom\" tooltip=\"Add Unit\" class=\"action-btn action-btn-md action-btn-default\" ui-sref=\"dashboard.units.add_unit\">\n" +
    "            <i class=\"fa fa-plus\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "            <i class=\"fa fa-superscript\"></i> Units\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12 margin-t-30\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <sil-grid template=\"setup/tpls/units/units_list.tpl.html\" grid-for=\"events\" api-key=\"units\" data=\"units\" filters=\"filters\" error=\"alert\"></sil-grid>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("setup/tpls/units/units_list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setup/tpls/units/units_list.tpl.html",
    "<div class=\"col-xs-12 content-card\">\n" +
    "    <h4 class=\"lato-light margin-b-10 fs-20\">\n" +
    "        Units List\n" +
    "    </h4>\n" +
    "    <table class=\"table table-hover table-condensed fs-14\" id=\"no-more-tables\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th class=\"col-md-4\">Name</th>\n" +
    "                <th class=\"col-md-4\">Symbol</th>\n" +
    "                <th class=\"col-md-2\">Active</th>\n" +
    "                <th class=\"col-md-2\"></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody class=\"fade-content\">\n" +
    "            <tr  ng-repeat=\"unit in units\">\n" +
    "                <td class=\"col-md-4 pad-t-15\" data-title=\"Name:\" class=\"pad-t-15\">{{unit.name}}</td>\n" +
    "                <td class=\"col-md-4 pad-t-15\" data-title=\"Name:\" class=\"pad-t-15\">\n" +
    "                    {{unit.symbol}}\n" +
    "                    <span ng-if=\"!unit.symbol\" class=\"fs-16 text-black\">\n" +
    "                        <i class=\"fa fa-minus\"></i>\n" +
    "                    </span>\n" +
    "                </td>\n" +
    "                <td class=\"col-md-2 pad-t-15\" data-title=\"Active\">\n" +
    "                    <span ng-if=\"unit.active\" class=\"fa-stack fa-lg fs-14 text-success\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-check fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"!unit.active\" class=\"fa-stack fa-lg fs-14 text-danger\">\n" +
    "                      <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                      <i class=\"fa fa-close fa-stack-1x fa-inverse\"></i>\n" +
    "                    </span>\n" +
    "                </td>\n" +
    "                <td data-title=\"Actions:\" class=\"col-md-2 text-right\">\n" +
    "                    <a class=\"action-btn action-btn-grid action-btn-success\" ui-sref=\"dashboard.units.edit_unit({unit_id: unit.id})\" class=\"btn btn-success\">\n" +
    "                        <i class=\"fa fa-pencil\"></i>\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <sil-grid-pagination> </sil-grid-pagination>\n" +
    "</div>\n" +
    "");
}]);

angular.module("users/tpls/main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("users/tpls/main.tpl.html",
    "<div class=\"content-header\">\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\"> Users</span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "");
}]);

angular.module("users/tpls/user-edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("users/tpls/user-edit.tpl.html",
    "<div class=\"content-header\">\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\">\n" +
    "          <i class=\"fa {{edit_view ? 'fa-edit' : 'fa-plus-circle'}}\"></i> {{edit_view ? 'Edit' : 'Add'}} User\n" +
    "        </span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "<div class=\"col-xs-12\">\n" +
    "    <div ui-view=\"delete\"></div>\n" +
    "    <div class=\"col-xs-12\">\n" +
    "      <form name=\"unit_frm\"  ng-submit=\"save(unit_frm)\" novalidate>\n" +
    "        <div class=\"fade-content col-sm-10 col-sm-offset-1 margin-t-20 content-card\">\n" +
    "          <drf-err-msg></drf-err-msg>\n" +
    "            <div class=\"col-sm-12 margin-t-20 margin-b-20\">\n" +
    "              <div class=\"form-group\">\n" +
    "                  <label class=\"control-label\">First Name<span class=\"text-danger\">&#42;</span></label>\n" +
    "                  <input class=\"form-control\" name=\"first_name\" ng-model=\"user.first_name\" required placeholder=\"First Name\" api-checker/>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "              <label class=\"control-label\">Last Name<span class=\"text-danger\">&#42;</span></label>\n" +
    "                  <input class=\"form-control\" name=\"last_name\" ng-model=\"user.last_name\" required placeholder=\"Last Name\" api-checker/>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "              <label class=\"control-label\">Email<span class=\"text-danger\">&#42;</span></label>\n" +
    "                  <input type=\"email\" class=\"form-control\" name=\"email\" ng-model=\"user.email\" required placeholder=\"Email\" api-checker/>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\" ng-if=\"!edit_view\">\n" +
    "              <label class=\"control-label\">Password<span class=\"text-danger\">&#42;</span></label>\n" +
    "                  <input type=\"password\" class=\"form-control\" name=\"password\" ng-model=\"user.password\" required placeholder=\"Password\" api-checker/>\n" +
    "              </div>\n" +
    "              <div class=\"form-group checkbox\" ng-if=\"loggedin_user.is_staff\">\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\" id=\"is_staff\" name=\"is_staff\" ng-model=\"user.is_staff\" tooltip=\"Check if user is a staff\" api-checker>\n" +
    "                    Is staff\n" +
    "                   </label>\n" +
    "              </div>\n" +
    "              <div class=\"form-group checkbox\">\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\" id=\"is_admin_contact\" name=\"is_admin_contact\" ng-model=\"user.is_admin_contact\" tooltip=\"Check if user is a admin contact\" api-checker >\n" +
    "                    Is admin contact\n" +
    "                   </label>\n" +
    "              </div>\n" +
    "              <div class=\"form-group checkbox\">\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\" id=\"is_billing_contact\" name=\"is_billing_contact\" ng-model=\"user.is_billing_contact\" tooltip=\"Check if user is a billing contact\" api-checker >\n" +
    "                    Is billing contact\n" +
    "                   </label>\n" +
    "              </div>\n" +
    "              <div class=\"form-group checkbox\">\n" +
    "                  <label>\n" +
    "                    <input type=\"checkbox\" id=\"is_active\" name=\"is_active\" ng-model=\"user.is_active\" tooltip=\"Check if user is not retired\" api-checker >\n" +
    "                    Active\n" +
    "                   </label>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"pull-left col-sm-10 col-sm-offset-1 pad-0 margin-t-10 margin-b-20\">\n" +
    "          <button class=\"btn btn-primary\">Save</button>\n" +
    "          <a class=\"margin-l-10 btn btn-default margin-l-5\" ui-sref=\"users\">Cancel</a>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("users/tpls/users-grid.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("users/tpls/users-grid.tpl.html",
    "<div class=\"content-header\">\n" +
    "    <div class=\"action-container content-header-extra pad-r-20\">\n" +
    "        <a tooltip-placement=\"bottom\" tooltip=\"Add User\" class=\"action-btn action-btn-md action-btn-primary\" ui-sref=\"users.create\">\n" +
    "            <i class=\"fa fa-plus\"></i>\n" +
    "        </a>\n" +
    "   </div>\n" +
    "   <h2 class=\"content-title\">\n" +
    "        <span class=\"main-title\"> Users</span>\n" +
    "   </h2>\n" +
    "</div>\n" +
    "<div class=\"content-control\">\n" +
    "    <!--breadcrumb-->\n" +
    "    <div ncy-breadcrumb></div>\n" +
    "    <!--/breadcrumb-->\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"content-body\">\n" +
    "    <div class=\"col-xs-12 content-card margin-t-20 margin-b-20\">\n" +
    "        <sil-grid template=\"users/tpls/users-list.tpl.html\" grid-for=\"labs\" api-key=\"users\"\n" +
    "            data=\"users\" filters=\"filters\" error=\"alert\">\n" +
    "        </sil-grid>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("users/tpls/users-list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("users/tpls/users-list.tpl.html",
    "<div>\n" +
    "    <div id=\"no-more-tables\" class=\"col-xs-12 margin-t-15\">\n" +
    "        <table class=\"table table-hover table-condensed fs-14\">\n" +
    "            <thead>\n" +
    "                <th>Name</th>\n" +
    "                <th>Email</th>\n" +
    "                <th>Billing</th>\n" +
    "                <th>Admin</th>\n" +
    "                <th>Active</th>\n" +
    "                <th></th>\n" +
    "            </thead>\n" +
    "            <tbody class=\"example-animate-container\">\n" +
    "                <tr class=\"animate-repeat\" ng-repeat=\"user in users | filter: search.query\">\n" +
    "                    <td data-title=\"Name\" class=\"pad-t-15\">\n" +
    "                        {{user.full_name}}\n" +
    "                    </td>\n" +
    "                    <td data-title=\"Email\" class=\"pad-t-15\">\n" +
    "                        {{user.email}}\n" +
    "                    </td>\n" +
    "                    <td data-title=\"Billing\" class=\"pad-t-15\">\n" +
    "                        <span ng-if=\"user.is_billing_contact\" class=\"fa-stack fa-lg fs-14 text-success\">\n" +
    "                          <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                          <i class=\"fa fa-check fa-stack-1x fa-inverse\"></i>\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"!user.is_billing_contact\" class=\"fa-stack fa-lg fs-14 text-danger\">\n" +
    "                          <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                          <i class=\"fa fa-close fa-stack-1x fa-inverse\"></i>\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td data-title=\"Admin\" class=\"pad-t-15\">\n" +
    "                        <span ng-if=\"user.is_admin_contact\" class=\"fa-stack fa-lg fs-14 text-success\">\n" +
    "                          <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                          <i class=\"fa fa-check fa-stack-1x fa-inverse\"></i>\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"!user.is_admin_contact\" class=\"fa-stack fa-lg fs-14 text-danger\">\n" +
    "                          <i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "                          <i class=\"fa fa-close fa-stack-1x fa-inverse\"></i>\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td data-title=\"Active\" class=\"pad-t-15\">\n" +
    "                        {{user.is_active | boolFilter}}\n" +
    "                    </td>\n" +
    "                    <td class=\"text-right\">\n" +
    "                        <a ui-sref=\"users.edit({user_id:user.id})\" class=\"action-btn action-btn-grid action-btn-success\" tooltip=\"Edit\">\n" +
    "                            <i class=\"fa fa-pencil\"></i>\n" +
    "                        </a>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "            <tbody ng-if=\"users.length===0\">\n" +
    "                <tr><td class=\"text-center\" colspan=\"9\">Sorry, no data is available</td></tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "        <sil-grid-pagination> </sil-grid-pagination>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
