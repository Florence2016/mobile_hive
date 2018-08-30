define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection'], function(dart_sdk, change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const _root = Object.create(null);
  const mh_app_category__app_category_component = Object.create(_root);
  mh_app_category__app_category_component.AppCategoryComponent = class AppCategoryComponent extends core.Object {
    ngOnInit() {}
  };
  (mh_app_category__app_category_component.AppCategoryComponent.new = function() {
  }).prototype = mh_app_category__app_category_component.AppCategoryComponent.prototype;
  dart.addTypeTests(mh_app_category__app_category_component.AppCategoryComponent);
  mh_app_category__app_category_component.AppCategoryComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(mh_app_category__app_category_component.AppCategoryComponent, () => ({
    __proto__: dart.getMethods(mh_app_category__app_category_component.AppCategoryComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, [])
  }));
  dart.trackLibraries("packages/mobile_hive/mh_app_category/app_category_component.ddc", {
    "package:mobile_hive/mh_app_category/app_category_component.dart": mh_app_category__app_category_component
  }, '{"version":3,"sourceRoot":"","sources":["app_category_component.dart"],"names":[],"mappings":";;;;;;;;;gBAkBE;;;EAEF","file":"app_category_component.ddc.js"}');
  // Exports:
  return {
    mh_app_category__app_category_component: mh_app_category__app_category_component
  };
});

//# sourceMappingURL=app_category_component.ddc.js.map
