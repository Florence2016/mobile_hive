define(['dart_sdk', 'packages/mobile_hive/src/route/route_paths', 'packages/angular/src/core/change_detection/change_detection', 'packages/mobile_hive/src/app', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/mobile_hive/src/mobile_service'], function(dart_sdk, route_paths, change_detection, app, router_outlet_directive, mobile_service) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__route__route_paths = route_paths.src__route__route_paths;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__app = app.src__app;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__mobile_service = mobile_service.src__mobile_service;
  const _root = Object.create(null);
  const mh_apps_list_component__app_list_component = Object.create(_root);
  const $trim = dartx.trim;
  const $isEmpty = dartx.isEmpty;
  const $add = dartx.add;
  const $remove = dartx.remove;
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let ListOfApp = () => (ListOfApp = dart.constFn(core.List$(src__app.App)))();
  const _mobileService = Symbol('_mobileService');
  const _router = Symbol('_router');
  const _getAppList = Symbol('_getAppList');
  const _appsUrl = Symbol('_appsUrl');
  mh_apps_list_component__app_list_component.AppListComponent = class AppListComponent extends core.Object {
    get title() {
      return this[title];
    }
    set title(value) {
      super.title = value;
    }
    get appsList() {
      return this[appsList];
    }
    set appsList(value) {
      this[appsList] = value;
    }
    get selected() {
      return this[selected];
    }
    set selected(value) {
      this[selected] = value;
    }
    [_getAppList]() {
      return async.async(dart.void, (function* _getAppList() {
        this.appsList = (yield this[_mobileService].getAll());
      }).bind(this));
    }
    add(name) {
      return async.async(dart.void, (function* add() {
        name = name[$trim]();
        if (name[$isEmpty]) return null;
        this.appsList[$add](yield this[_mobileService].create(name));
        this.selected = null;
      }).bind(this));
    }
    delete(app) {
      return async.async(dart.void, (function* delete$() {
        yield this[_mobileService].delete(app.id);
        this.appsList[$remove](app);
        if (dart.equals(this.selected, app)) this.selected = null;
      }).bind(this));
    }
    [_appsUrl](id) {
      return src__route__route_paths.RoutePaths.app.toUrl({parameters: new (IdentityMapOfString$String()).from(["id", dart.str(id)])});
    }
    gotoDetail() {
      return this[_router].navigate(this[_appsUrl](this.selected.id));
    }
    ngOnInit() {
      return this[_getAppList]();
    }
    onSelect(app) {
      return this.selected = app;
    }
  };
  (mh_apps_list_component__app_list_component.AppListComponent.new = function(mobileService, router) {
    this[title] = "Mobile Apps";
    this[appsList] = null;
    this[selected] = null;
    this[_mobileService] = mobileService;
    this[_router] = router;
  }).prototype = mh_apps_list_component__app_list_component.AppListComponent.prototype;
  dart.addTypeTests(mh_apps_list_component__app_list_component.AppListComponent);
  const title = Symbol("AppListComponent.title");
  const appsList = Symbol("AppListComponent.appsList");
  const selected = Symbol("AppListComponent.selected");
  mh_apps_list_component__app_list_component.AppListComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(mh_apps_list_component__app_list_component.AppListComponent, () => ({
    __proto__: dart.getMethods(mh_apps_list_component__app_list_component.AppListComponent.__proto__),
    [_getAppList]: dart.fnType(async.Future$(dart.void), []),
    add: dart.fnType(async.Future$(dart.void), [core.String]),
    delete: dart.fnType(async.Future$(dart.void), [src__app.App]),
    [_appsUrl]: dart.fnType(core.String, [core.int]),
    gotoDetail: dart.fnType(async.Future$(src__router__router.NavigationResult), []),
    ngOnInit: dart.fnType(dart.void, []),
    onSelect: dart.fnType(dart.void, [src__app.App])
  }));
  dart.setFieldSignature(mh_apps_list_component__app_list_component.AppListComponent, () => ({
    __proto__: dart.getFields(mh_apps_list_component__app_list_component.AppListComponent.__proto__),
    title: dart.finalFieldType(core.String),
    [_mobileService]: dart.finalFieldType(src__mobile_service.MobileService),
    [_router]: dart.finalFieldType(src__router__router.Router),
    appsList: dart.fieldType(ListOfApp()),
    selected: dart.fieldType(src__app.App)
  }));
  dart.trackLibraries("packages/mobile_hive/mh_apps_list_component/app_list_component.ddc", {
    "package:mobile_hive/mh_apps_list_component/app_list_component.dart": mh_apps_list_component__app_list_component
  }, '{"version":3,"sourceRoot":"","sources":["app_list_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;IAoBQ;;;;;;IAGI;;;;;;IACN;;;;;;;AAGwB;AAC1B,qBAAQ,IAAG,MAAM,oBAAc,OAAO;MACxC;;QAEiB,IAAW;AAAE;AAC5B,YAAI,GAAG,IAAI,OAAK;AAChB,YAAI,IAAI,UAAQ,EAAE,MAAO;AACzB,qBAAQ,MAAI,CAAC,MAAM,oBAAc,OAAO,CAAC,IAAI;AAC7C,qBAAQ,GAAG;MACb;;WAEoB,GAAO;AAAE;AAC3B,cAAM,oBAAc,OAAO,CAAC,GAAG,GAAG;AAClC,qBAAQ,SAAO,CAAC,GAAG;AACnB,wBAAI,aAAQ,EAAI,GAAG,GAAE,aAAQ,GAAG;MAClC;;eACgB,EAAM;YAClB,mCAAU,IAAI,MAAM,cAAa,yCAAC,IAAO,EAAE,SAAE,EAAE;IAAG;;YAGlD,cAAO,SAAS,CAAC,cAAQ,CAAC,aAAQ,GAAG;IAAE;;YAGxB,kBAAW;IAAE;aAClB,GAAO;YAAK,cAAQ,GAAG,GAAG;;;;IA/BlC,WAAK,GAAG;IAGJ,cAAQ;IACd,cAAQ;IACU,oBAAc;IAAO,aAAO;EAAC","file":"app_list_component.ddc.js"}');
  // Exports:
  return {
    mh_apps_list_component__app_list_component: mh_apps_list_component__app_list_component
  };
});

//# sourceMappingURL=app_list_component.ddc.js.map
