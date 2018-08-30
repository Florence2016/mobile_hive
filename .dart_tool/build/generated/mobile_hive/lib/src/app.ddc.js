define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__app = Object.create(_root);
  const $_get = dartx._get;
  src__app.App = class App extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
    static fromJson(app) {
      return new src__app.App.new(src__app._toInt(app[$_get]("id")), core.String._check(app[$_get]("name")));
    }
    toJson() {
      return new _js_helper.LinkedMap.from(["id", this.id, "name", this.name]);
    }
  };
  (src__app.App.new = function(id, name) {
    this[id$] = id;
    this[name$] = name;
  }).prototype = src__app.App.prototype;
  dart.addTypeTests(src__app.App);
  const id$ = Symbol("App.id");
  const name$ = Symbol("App.name");
  dart.setMethodSignature(src__app.App, () => ({
    __proto__: dart.getMethods(src__app.App.__proto__),
    toJson: dart.fnType(core.Map, [])
  }));
  dart.setFieldSignature(src__app.App, () => ({
    __proto__: dart.getFields(src__app.App.__proto__),
    id: dart.finalFieldType(core.int),
    name: dart.fieldType(core.String)
  }));
  src__app._toInt = function(id) {
    return core.int.is(id) ? id : core.int.parse(core.String._check(id));
  };
  dart.trackLibraries("packages/mobile_hive/src/app.ddc", {
    "package:mobile_hive/src/app.dart": src__app
  }, '{"version":3,"sourceRoot":"","sources":["app.dart"],"names":[],"mappings":";;;;;;;;;;IACY;;;;;;IACH;;;;;;oBAIc,GAAwB;AAAE,iBAC3C,gBAAG,CAAC,eAAM,CAAC,GAAG,QAAC,2BAAQ,GAAG,QAAC;IAAQ;;YAEvB,gCAAC,MAAO,OAAE,EAAE,QAAQ,SAAI;IAAC;;+BALrC,EAAO,EAAE,IAAS;IAAb,SAAE,GAAF,EAAE;IAAO,WAAI,GAAJ,IAAI;EAAC;;;;;;;;;;;;;6BAOd,EAAE;uBAAK,EAAE,IAAU,EAAE,GAAG,QAAG,MAAM,oBAAC,EAAE;EAAC","file":"app.ddc.js"}');
  // Exports:
  return {
    src__app: src__app
  };
});

//# sourceMappingURL=app.ddc.js.map
