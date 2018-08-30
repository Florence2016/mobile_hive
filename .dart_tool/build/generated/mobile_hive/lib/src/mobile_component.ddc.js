define(['dart_sdk', 'packages/mobile_hive/src/route/route_paths', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/mobile_hive/src/mobile_service', 'packages/mobile_hive/src/app'], function(dart_sdk, route_paths, router_outlet_directive, mobile_service, app) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__route__route_paths = route_paths.src__route__route_paths;
  const src__lifecycle = router_outlet_directive.src__lifecycle;
  const src__router__router_state = router_outlet_directive.src__router__router_state;
  const src__location__location = router_outlet_directive.src__location__location;
  const src__mobile_service = mobile_service.src__mobile_service;
  const src__app = app.src__app;
  const _root = Object.create(null);
  const src__mobile_component = Object.create(_root);
  const _mobileService = Symbol('_mobileService');
  const _location = Symbol('_location');
  src__mobile_component.MobileAppComponent = class MobileAppComponent extends core.Object {
    get app() {
      return this[app$];
    }
    set app(value) {
      this[app$] = value;
    }
    onActivate(_, current) {
      return async.async(dart.dynamic, (function* onActivate() {
        let id = src__route__route_paths.getId(current.parameters);
        if (id != null) this.app = (yield this[_mobileService].get(id));
      }).bind(this));
    }
    save() {
      return async.async(dart.void, (function* save() {
        yield this[_mobileService].save(this.app);
        this.goBack();
      }).bind(this));
    }
    goBack() {
      return this[_location].back();
    }
  };
  (src__mobile_component.MobileAppComponent.new = function(mobileService, location) {
    this[app$] = null;
    this[_mobileService] = mobileService;
    this[_location] = location;
  }).prototype = src__mobile_component.MobileAppComponent.prototype;
  dart.addTypeTests(src__mobile_component.MobileAppComponent);
  const app$ = Symbol("MobileAppComponent.app");
  src__mobile_component.MobileAppComponent[dart.implements] = () => [src__lifecycle.OnActivate];
  dart.setMethodSignature(src__mobile_component.MobileAppComponent, () => ({
    __proto__: dart.getMethods(src__mobile_component.MobileAppComponent.__proto__),
    onActivate: dart.fnType(dart.void, [src__router__router_state.RouterState, src__router__router_state.RouterState]),
    save: dart.fnType(async.Future$(dart.void), []),
    goBack: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__mobile_component.MobileAppComponent, () => ({
    __proto__: dart.getFields(src__mobile_component.MobileAppComponent.__proto__),
    [_mobileService]: dart.finalFieldType(src__mobile_service.MobileService),
    [_location]: dart.finalFieldType(src__location__location.Location),
    app: dart.fieldType(src__app.App)
  }));
  dart.trackLibraries("packages/mobile_hive/src/mobile_component.ddc", {
    "package:mobile_hive/src/mobile_component.dart": src__mobile_component
  }, '{"version":3,"sourceRoot":"","sources":["mobile_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;IAoBM;;;;;;eAKY,CAAC,EAAE,OAAmB;AAAE;AACtC,YAAM,KAAK,6BAAK,CAAC,OAAO,WAAW;AACnC,YAAI,EAAE,IAAI,MAAM,QAAG,IAAG,MAAO,oBAAc,IAAI,CAAC,EAAE;MACpD;;;AAEoB;AAClB,cAAM,oBAAc,KAAK,CAAC,QAAG;AAC7B,mBAAM;MACR;;;YACiB,gBAAS,KAAK;IAAE;;;IAd7B,UAAG;IAEiB,oBAAc;IAAO,eAAS;EAAC","file":"mobile_component.ddc.js"}');
  // Exports:
  return {
    src__mobile_component: src__mobile_component
  };
});

//# sourceMappingURL=mobile_component.ddc.js.map
