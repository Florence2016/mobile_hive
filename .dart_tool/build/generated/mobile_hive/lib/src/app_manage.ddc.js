define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__app_manage = Object.create(_root);
  const $_get = dartx._get;
  src__app_manage.Manage = class Manage extends core.Object {
    get ma_id() {
      return this[ma_id$];
    }
    set ma_id(value) {
      super.ma_id = value;
    }
    get ma_name() {
      return this[ma_name$];
    }
    set ma_name(value) {
      this[ma_name$] = value;
    }
    static fromJson(manage) {
      return new src__app_manage.Manage.new(src__app_manage._toInt(manage[$_get]("ma_id")), core.String._check(manage[$_get]("ma_name")));
    }
    toJson() {
      return new _js_helper.LinkedMap.from(["ma_id", this.ma_id, "ma_name", this.ma_name]);
    }
  };
  (src__app_manage.Manage.new = function(ma_id, ma_name) {
    this[ma_id$] = ma_id;
    this[ma_name$] = ma_name;
  }).prototype = src__app_manage.Manage.prototype;
  dart.addTypeTests(src__app_manage.Manage);
  const ma_id$ = Symbol("Manage.ma_id");
  const ma_name$ = Symbol("Manage.ma_name");
  dart.setMethodSignature(src__app_manage.Manage, () => ({
    __proto__: dart.getMethods(src__app_manage.Manage.__proto__),
    toJson: dart.fnType(core.Map, [])
  }));
  dart.setFieldSignature(src__app_manage.Manage, () => ({
    __proto__: dart.getFields(src__app_manage.Manage.__proto__),
    ma_id: dart.finalFieldType(core.int),
    ma_name: dart.fieldType(core.String)
  }));
  src__app_manage._toInt = function(ma_id) {
    return core.int.is(ma_id) ? ma_id : core.int.parse(core.String._check(ma_id));
  };
  dart.trackLibraries("packages/mobile_hive/src/app_manage.ddc", {
    "package:mobile_hive/src/app_manage.dart": src__app_manage
  }, '{"version":3,"sourceRoot":"","sources":["app_manage.dart"],"names":[],"mappings":";;;;;;;;;;IACY;;;;;;IACH;;;;;;oBAEiB,MAA2B;AAAE,iBACjD,0BAAM,CAAC,sBAAM,CAAC,MAAM,QAAC,8BAAW,MAAM,QAAC;IAAW;;YACtC,gCAAC,SAAS,UAAK,EAAE,WAAW,YAAO;IAAC;;yCAH7C,KAAU,EAAE,OAAY;IAAnB,YAAK,GAAL,KAAK;IAAO,cAAO,GAAP,OAAO;EAAC;;;;;;;;;;;;;oCAKvB,KAAK;uBAAK,KAAK,IAAU,KAAK,GAAG,QAAG,MAAM,oBAAC,KAAK;EAAC","file":"app_manage.ddc.js"}');
  // Exports:
  return {
    src__app_manage: src__app_manage
  };
});

//# sourceMappingURL=app_manage.ddc.js.map
