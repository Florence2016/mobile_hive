define(['dart_sdk', 'packages/angular_router/src/directives/router_outlet_directive'], function(dart_sdk, router_outlet_directive) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__route_path = router_outlet_directive.src__route_path;
  const _root = Object.create(null);
  const src__route__route_paths = Object.create(_root);
  const $_get = dartx._get;
  dart.defineLazy(src__route__route_paths, {
    /*src__route__route_paths.idParam*/get idParam() {
      return "id";
    }
  });
  src__route__route_paths.RoutePaths = class RoutePaths extends core.Object {};
  (src__route__route_paths.RoutePaths.new = function() {
  }).prototype = src__route__route_paths.RoutePaths.prototype;
  dart.addTypeTests(src__route__route_paths.RoutePaths);
  dart.defineLazy(src__route__route_paths.RoutePaths, {
    /*src__route__route_paths.RoutePaths.category*/get category() {
      return new src__route_path.RoutePath.new({path: "category"});
    },
    /*src__route__route_paths.RoutePaths.assessment*/get assessment() {
      return new src__route_path.RoutePath.new({path: "assessment"});
    },
    /*src__route__route_paths.RoutePaths.management*/get management() {
      return new src__route_path.RoutePath.new({path: "management"});
    },
    /*src__route__route_paths.RoutePaths.applications*/get applications() {
      return new src__route_path.RoutePath.new({path: "applications"});
    },
    /*src__route__route_paths.RoutePaths.dashboard*/get dashboard() {
      return new src__route_path.RoutePath.new({path: "dashboard"});
    },
    /*src__route__route_paths.RoutePaths.app*/get app() {
      return new src__route_path.RoutePath.new({path: dart.str(src__route__route_paths.RoutePaths.applications.path) + "/:" + "id"});
    }
  });
  src__route__route_paths.getId = function(parameters) {
    let id = parameters[$_get]("id");
    return id == null ? null : core.int.tryParse(id);
  };
  dart.trackLibraries("packages/mobile_hive/src/route/route_paths.ddc", {
    "package:mobile_hive/src/route/route_paths.dart": src__route__route_paths
  }, '{"version":3,"sourceRoot":"","sources":["route_paths.dart"],"names":[],"mappings":";;;;;;;;;;MAGM,+BAAO;YAAG;;;;;EAShB;;;MANe,2CAAQ;iBAAG,6BAAS,QAAO;;MAC3B,6CAAU;iBAAG,6BAAS,QAAO;;MAC7B,6CAAU;iBAAG,6BAAS,QAAO;;MAC7B,+CAAY;iBAAG,6BAAS,QAAO;;MAC/B,4CAAS;iBAAG,6BAAS,QAAO;;MAC5B,sCAAG;iBAAG,6BAAS,QAAO,SAAG,+CAAY,KAAK,WAAI,IAAO;;;2CAG1D,UAA8B;AACtC,QAAM,KAAK,UAAU,QAAC,IAAO;AAC7B,UAAO,GAAE,IAAI,OAAO,OAAO,QAAG,SAAS,CAAC,EAAE;EAC5C","file":"route_paths.ddc.js"}');
  // Exports:
  return {
    src__route__route_paths: src__route__route_paths
  };
});

//# sourceMappingURL=route_paths.ddc.js.map
