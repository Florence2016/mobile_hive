define(['dart_sdk', 'packages/mobile_hive/src/app.template'], function(dart_sdk, app) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__app$46template = app.src__app$46template;
  const _root = Object.create(null);
  const src__mobile_service$46template = Object.create(_root);
  dart.defineLazy(src__mobile_service$46template, {
    /*src__mobile_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__mobile_service$46template.initReflector = function() {
    if (dart.test(src__mobile_service$46template._visited)) {
      return;
    }
    src__mobile_service$46template._visited = true;
    src__app$46template.initReflector();
  };
  dart.trackLibraries("packages/mobile_hive/src/mobile_service.template.ddc", {
    "package:mobile_hive/src/mobile_service.template.dart": src__mobile_service$46template
  }, '{"version":3,"sourceRoot":"","sources":["mobile_service.template.dart"],"names":[],"mappings":";;;;;;;;;MAaI,uCAAQ;YAAG;;;;;AAEb,kBAAI,uCAAQ,GAAE;AACZ;;AAEF,8CAAW;AAEX,IAAM,iCAAa;EACrB","file":"mobile_service.template.ddc.js"}');
  // Exports:
  return {
    src__mobile_service$46template: src__mobile_service$46template
  };
});

//# sourceMappingURL=mobile_service.template.ddc.js.map
