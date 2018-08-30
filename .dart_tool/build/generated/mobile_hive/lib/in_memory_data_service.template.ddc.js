define(['dart_sdk', 'packages/mobile_hive/src/app.template'], function(dart_sdk, app) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__app$46template = app.src__app$46template;
  const _root = Object.create(null);
  const in_memory_data_service$46template = Object.create(_root);
  dart.defineLazy(in_memory_data_service$46template, {
    /*in_memory_data_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  in_memory_data_service$46template.initReflector = function() {
    if (dart.test(in_memory_data_service$46template._visited)) {
      return;
    }
    in_memory_data_service$46template._visited = true;
    src__app$46template.initReflector();
  };
  dart.trackLibraries("packages/mobile_hive/in_memory_data_service.template.ddc", {
    "package:mobile_hive/in_memory_data_service.template.dart": in_memory_data_service$46template
  }, '{"version":3,"sourceRoot":"","sources":["in_memory_data_service.template.dart"],"names":[],"mappings":";;;;;;;;;MAeI,0CAAQ;YAAG;;;;;AAEb,kBAAI,0CAAQ,GAAE;AACZ;;AAEF,iDAAW;AAEX,IAAM,iCAAa;EACrB","file":"in_memory_data_service.template.ddc.js"}');
  // Exports:
  return {
    in_memory_data_service$46template: in_memory_data_service$46template
  };
});

//# sourceMappingURL=in_memory_data_service.template.ddc.js.map
