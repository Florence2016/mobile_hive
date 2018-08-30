define(['dart_sdk', 'packages/mobile_hive/src/app_manage.template'], function(dart_sdk, app_manage) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__app_manage$46template = app_manage.src__app_manage$46template;
  const _root = Object.create(null);
  const src__app_manage_service$46template = Object.create(_root);
  dart.defineLazy(src__app_manage_service$46template, {
    /*src__app_manage_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__app_manage_service$46template.initReflector = function() {
    if (dart.test(src__app_manage_service$46template._visited)) {
      return;
    }
    src__app_manage_service$46template._visited = true;
    src__app_manage$46template.initReflector();
  };
  dart.trackLibraries("packages/mobile_hive/src/app_manage_service.template.ddc", {
    "package:mobile_hive/src/app_manage_service.template.dart": src__app_manage_service$46template
  }, '{"version":3,"sourceRoot":"","sources":["app_manage_service.template.dart"],"names":[],"mappings":";;;;;;;;;MAaI,2CAAQ;YAAG;;;;;AAEb,kBAAI,2CAAQ,GAAE;AACZ;;AAEF,kDAAW;AAEX,IAAM,wCAAa;EACrB","file":"app_manage_service.template.ddc.js"}');
  // Exports:
  return {
    src__app_manage_service$46template: src__app_manage_service$46template
  };
});

//# sourceMappingURL=app_manage_service.template.ddc.js.map
