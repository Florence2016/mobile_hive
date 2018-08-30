define(['dart_sdk', 'packages/mobile_hive/src/route/route_paths', 'packages/mobile_hive/mh_app_category/app_category_component.template', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/mobile_hive/mh_app_assessment/app_assess_component.template', 'packages/mobile_hive/mh_app_management/app_manage_component.template', 'packages/mobile_hive/mh_apps_list_component/app_list_component.template', 'packages/mobile_hive/src/mobile_component.template', 'packages/mobile_hive/mh_dashboard_component/dashboard_component.template'], function(dart_sdk, route_paths, app_category_component, router_outlet_directive, app_assess_component, app_manage_component, app_list_component, mobile_component, dashboard_component) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__route__route_paths = route_paths.src__route__route_paths;
  const mh_app_category__app_category_component$46template = app_category_component.mh_app_category__app_category_component$46template;
  const src__route_definition = router_outlet_directive.src__route_definition;
  const mh_app_assessment__app_assess_component$46template = app_assess_component.mh_app_assessment__app_assess_component$46template;
  const mh_app_management__app_manage_component$46template = app_manage_component.mh_app_management__app_manage_component$46template;
  const mh_apps_list_component__app_list_component$46template = app_list_component.mh_apps_list_component__app_list_component$46template;
  const src__mobile_component$46template = mobile_component.src__mobile_component$46template;
  const mh_dashboard_component__dashboard_component$46template = dashboard_component.mh_dashboard_component__dashboard_component$46template;
  const _root = Object.create(null);
  const src__mh_header__header_component = Object.create(_root);
  const src__route__routes = Object.create(_root);
  let JSArrayOfRouteDefinition = () => (JSArrayOfRouteDefinition = dart.constFn(_interceptors.JSArray$(src__route_definition.RouteDefinition)))();
  src__mh_header__header_component.HeaderComponent = class HeaderComponent extends core.Object {};
  (src__mh_header__header_component.HeaderComponent.new = function() {
  }).prototype = src__mh_header__header_component.HeaderComponent.prototype;
  dart.addTypeTests(src__mh_header__header_component.HeaderComponent);
  src__route__routes.Routes = class Routes extends core.Object {};
  (src__route__routes.Routes.new = function() {
  }).prototype = src__route__routes.Routes.prototype;
  dart.addTypeTests(src__route__routes.Routes);
  dart.defineLazy(src__route__routes.Routes, {
    /*src__route__routes.Routes.category*/get category() {
      return src__route_definition.RouteDefinition.new({routePath: src__route__route_paths.RoutePaths.category, component: mh_app_category__app_category_component$46template.AppCategoryComponentNgFactory});
    },
    /*src__route__routes.Routes.assessment*/get assessment() {
      return src__route_definition.RouteDefinition.new({routePath: src__route__route_paths.RoutePaths.assessment, component: mh_app_assessment__app_assess_component$46template.AppAssessmentComponentNgFactory});
    },
    /*src__route__routes.Routes.management*/get management() {
      return src__route_definition.RouteDefinition.new({routePath: src__route__route_paths.RoutePaths.management, component: mh_app_management__app_manage_component$46template.AppManagementComponentNgFactory});
    },
    /*src__route__routes.Routes.applications*/get applications() {
      return src__route_definition.RouteDefinition.new({routePath: src__route__route_paths.RoutePaths.applications, component: mh_apps_list_component__app_list_component$46template.AppListComponentNgFactory});
    },
    /*src__route__routes.Routes.app*/get app() {
      return src__route_definition.RouteDefinition.new({routePath: src__route__route_paths.RoutePaths.app, component: src__mobile_component$46template.MobileAppComponentNgFactory});
    },
    /*src__route__routes.Routes.dashboard*/get dashboard() {
      return src__route_definition.RouteDefinition.new({routePath: src__route__route_paths.RoutePaths.dashboard, component: mh_dashboard_component__dashboard_component$46template.DashboardComponentNgFactory});
    },
    /*src__route__routes.Routes.all*/get all() {
      return JSArrayOfRouteDefinition().of([src__route__routes.Routes.category, src__route__routes.Routes.assessment, src__route__routes.Routes.management, src__route__routes.Routes.applications, src__route__routes.Routes.app, src__route__routes.Routes.dashboard, src__route_definition.RouteDefinition.redirect({path: "", redirectTo: src__route__route_paths.RoutePaths.dashboard.toUrl()})]);
    }
  });
  dart.trackLibraries("packages/mobile_hive/src/mh_header/header_component.ddc", {
    "package:mobile_hive/src/mh_header/header_component.dart": src__mh_header__header_component,
    "package:mobile_hive/src/route/routes.dart": src__route__routes
  }, '{"version":3,"sourceRoot":"","sources":["header_component.dart","../route/routes.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;EAWA;;;;EC2CA;;;MA3Ce,kCAAQ;YAAG,0CAAe,aAC1B,kCAAU,SAAS,aACG,gFAA6B;;MAGnD,oCAAU;YAAG,0CAAe,aAC5B,kCAAU,WAAW,aACG,kFAA+B;;MAGvD,oCAAU;YAAG,0CAAe,aAC5B,kCAAU,WAAW,aACG,kFAA+B;;MAGvD,sCAAY;YAAG,0CAAe,aAC9B,kCAAU,aAAa,aACL,+EAAyB;;MAG3C,6BAAG;YAAG,0CAAe,aACrB,kCAAU,IAAI,aACE,4DAA2B;;MAG3C,mCAAS;YAAG,0CAAe,aAC3B,kCAAU,UAAU,aACD,kFAA2B;;MAG9C,6BAAG;YAAG,gCACjB,kCAAQ,EACR,oCAAU,EACV,oCAAU,EACV,sCAAY,EACZ,6BAAG,EACH,mCAAS,EAET,8CAAwB,QAChB,gBACM,kCAAU,UAAU,MAAM","file":"header_component.ddc.js"}');
  // Exports:
  return {
    src__mh_header__header_component: src__mh_header__header_component,
    src__route__routes: src__route__routes
  };
});

//# sourceMappingURL=header_component.ddc.js.map
