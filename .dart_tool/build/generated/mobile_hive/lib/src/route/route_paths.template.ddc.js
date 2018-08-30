define(['dart_sdk', 'packages/angular_router/angular_router.template'], function(dart_sdk, angular_router) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular_router$46template = angular_router.angular_router$46template;
  const _root = Object.create(null);
  const src__route__route_paths$46template = Object.create(_root);
  dart.defineLazy(src__route__route_paths$46template, {
    /*src__route__route_paths$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__route__route_paths$46template.initReflector = function() {
    if (dart.test(src__route__route_paths$46template._visited)) {
      return;
    }
    src__route__route_paths$46template._visited = true;
    angular_router$46template.initReflector();
  };
  dart.trackLibraries("packages/mobile_hive/src/route/route_paths.template.ddc", {
    "package:mobile_hive/src/route/route_paths.template.dart": src__route__route_paths$46template
  }, '{"version":3,"sourceRoot":"","sources":["route_paths.template.dart"],"names":[],"mappings":";;;;;;;;;MAUI,2CAAQ;YAAG;;;;;AAEb,kBAAI,2CAAQ,GAAE;AACZ;;AAEF,kDAAW;AAEX,IAAM,uCAAa;EACrB","file":"route_paths.template.ddc.js"}');
  // Exports:
  return {
    src__route__route_paths$46template: src__route__route_paths$46template
  };
});

//# sourceMappingURL=route_paths.template.ddc.js.map
