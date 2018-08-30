import 'package:angular_router/angular_router.dart';
import 'route_paths.dart';
import 'package:mobile_hive/mh_apps_list_component/app_list_component.template.dart' as app_list_template;
import 'package:mobile_hive/src/mobile_component.template.dart' as mobile_template;
import 'package:mobile_hive/mh_dashboard_component/dashboard_component.template.dart' as dashboard_template;
import 'package:mobile_hive/mh_app_management/app_manage_component.template.dart' as app_management_template;
import 'package:mobile_hive/mh_app_assessment/app_assess_component.template.dart' as app_assessment_template;
import 'package:mobile_hive/mh_app_category/app_category_component.template.dart' as app_category_template;
export 'route_paths.dart';

class Routes {
  static final category = RouteDefinition(
    routePath: RoutePaths.category,
    component: app_category_template.AppCategoryComponentNgFactory,
  );

  static final assessment = RouteDefinition(
    routePath: RoutePaths.assessment,
    component: app_assessment_template.AppAssessmentComponentNgFactory,
  );

  static final management = RouteDefinition(
    routePath: RoutePaths.management,
    component: app_management_template.AppManagementComponentNgFactory,
  );

  static final applications = RouteDefinition(
    routePath: RoutePaths.applications,
    component: app_list_template.AppListComponentNgFactory,
  );

  static final app = RouteDefinition(
    routePath: RoutePaths.app,
    component: mobile_template.MobileAppComponentNgFactory,
  );

  static final dashboard = RouteDefinition(
    routePath: RoutePaths.dashboard,
    component: dashboard_template.DashboardComponentNgFactory,
  );

  static final all = <RouteDefinition>[
    category,
    assessment,
    management,
    applications,
    app,
    dashboard,

    RouteDefinition.redirect(
      path: '',
      redirectTo: RoutePaths.dashboard.toUrl(),
    ),
  ];
}