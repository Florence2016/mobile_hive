define(['dart_sdk', 'packages/mobile_hive/src/route/route_paths', 'packages/angular/src/core/change_detection/change_detection', 'packages/mobile_hive/src/app', 'packages/mobile_hive/src/mobile_service'], function(dart_sdk, route_paths, change_detection, app, mobile_service) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__route__route_paths = route_paths.src__route__route_paths;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__app = app.src__app;
  const src__mobile_service = mobile_service.src__mobile_service;
  const _root = Object.create(null);
  const mh_dashboard_component__dashboard_component = Object.create(_root);
  const $toList = dartx.toList;
  const $take = dartx.take;
  const $skip = dartx.skip;
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let ListOfApp = () => (ListOfApp = dart.constFn(core.List$(src__app.App)))();
  const _mobileService = Symbol('_mobileService');
  mh_dashboard_component__dashboard_component.DashboardComponent = class DashboardComponent extends core.Object {
    get appsList() {
      return this[appsList];
    }
    set appsList(value) {
      this[appsList] = value;
    }
    appUrl(id) {
      return src__route__route_paths.RoutePaths.app.toUrl({parameters: new (IdentityMapOfString$String()).from(["id", dart.str(id)])});
    }
    ngOnInit() {
      return async.async(dart.dynamic, (function* ngOnInit() {
        this.appsList = (yield this[_mobileService].getAll())[$skip](1)[$take](4)[$toList]();
      }).bind(this));
    }
  };
  (mh_dashboard_component__dashboard_component.DashboardComponent.new = function(mobileService) {
    this[appsList] = null;
    this[_mobileService] = mobileService;
  }).prototype = mh_dashboard_component__dashboard_component.DashboardComponent.prototype;
  dart.addTypeTests(mh_dashboard_component__dashboard_component.DashboardComponent);
  const appsList = Symbol("DashboardComponent.appsList");
  mh_dashboard_component__dashboard_component.DashboardComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(mh_dashboard_component__dashboard_component.DashboardComponent, () => ({
    __proto__: dart.getMethods(mh_dashboard_component__dashboard_component.DashboardComponent.__proto__),
    appUrl: dart.fnType(core.String, [core.int]),
    ngOnInit: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(mh_dashboard_component__dashboard_component.DashboardComponent, () => ({
    __proto__: dart.getFields(mh_dashboard_component__dashboard_component.DashboardComponent.__proto__),
    appsList: dart.fieldType(ListOfApp()),
    [_mobileService]: dart.finalFieldType(src__mobile_service.MobileService)
  }));
  dart.trackLibraries("packages/mobile_hive/mh_dashboard_component/dashboard_component.ddc", {
    "package:mobile_hive/mh_dashboard_component/dashboard_component.dart": mh_dashboard_component__dashboard_component
  }, '{"version":3,"sourceRoot":"","sources":["dashboard_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;IAeY;;;;;;WAMI,EAAM;YAAK,mCAAU,IAAI,MAAM,cAAa,yCAAC,IAAO,EAAE,SAAE,EAAE;IAAG;;AAG3D;AACd,qBAAQ,GAAG,CAAC,MAAM,oBAAc,OAAO,UAAQ,CAAC,SAAO,CAAC,WAAS;MACnE;;;;IAXU,cAAQ;IAIM,oBAAc;EAAC","file":"dashboard_component.ddc.js"}');
  // Exports:
  return {
    mh_dashboard_component__dashboard_component: mh_dashboard_component__dashboard_component
  };
});

//# sourceMappingURL=dashboard_component.ddc.js.map
