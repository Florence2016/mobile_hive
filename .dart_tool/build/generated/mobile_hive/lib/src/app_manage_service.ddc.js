define(['dart_sdk', 'packages/mobile_hive/src/app_manage', 'packages/http/src/base_client'], function(dart_sdk, app_manage, base_client) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__app_manage = app_manage.src__app_manage;
  const src__response = base_client.src__response;
  const src__client = base_client.src__client;
  const _root = Object.create(null);
  const src__app_manage_service = Object.create(_root);
  const $toList = dartx.toList;
  const $map = dartx.map;
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let dynamicToManage = () => (dynamicToManage = dart.constFn(dart.fnType(src__app_manage.Manage, [dart.dynamic])))();
  let ListOfManage = () => (ListOfManage = dart.constFn(core.List$(src__app_manage.Manage)))();
  const _http = Symbol('_http');
  const _extractData = Symbol('_extractData');
  const _handleError = Symbol('_handleError');
  src__app_manage_service.ManageService = class ManageService extends core.Object {
    getAll() {
      return async.async(ListOfManage(), (function* getAll() {
        try {
          let response = (yield this[_http].get("api/application"));
          let manages = core.List.as(this[_extractData](response))[$map](src__app_manage.Manage, dart.fn(json => src__app_manage.Manage.fromJson(MapOfString$dynamic()._check(json)), dynamicToManage()))[$toList]();
          return manages;
        } catch (e) {
          dart.throw(this[_handleError](e));
        }
      }).bind(this));
    }
    [_extractData](resp) {
      return dart.dindex(convert.json.decode(resp.body), "data");
    }
    [_handleError](e) {
      core.print(e);
      return core.Exception.new("Server error; cause: " + dart.str(e));
    }
  };
  (src__app_manage_service.ManageService.new = function(http) {
    this[_http] = http;
  }).prototype = src__app_manage_service.ManageService.prototype;
  dart.addTypeTests(src__app_manage_service.ManageService);
  dart.setMethodSignature(src__app_manage_service.ManageService, () => ({
    __proto__: dart.getMethods(src__app_manage_service.ManageService.__proto__),
    getAll: dart.fnType(async.Future$(core.List$(src__app_manage.Manage)), []),
    [_extractData]: dart.fnType(dart.dynamic, [src__response.Response]),
    [_handleError]: dart.fnType(core.Exception, [dart.dynamic])
  }));
  dart.setFieldSignature(src__app_manage_service.ManageService, () => ({
    __proto__: dart.getFields(src__app_manage_service.ManageService.__proto__),
    [_http]: dart.finalFieldType(src__client.Client)
  }));
  dart.defineLazy(src__app_manage_service.ManageService, {
    /*src__app_manage_service.ManageService._managesUrl*/get _managesUrl() {
      return "api/application";
    }
  });
  dart.trackLibraries("packages/mobile_hive/src/app_manage_service.ddc", {
    "package:mobile_hive/src/app_manage_service.dart": src__app_manage_service
  }, '{"version":3,"sourceRoot":"","sources":["app_manage_service.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;AAgBiC;AAC7B,YAAG;AACD,cAAM,YAAW,MAAM,WAAK,IAAI,CAAC,iBAAW;AAC5C,cAAM,UAAU,aAAC,kBAAY,CAAC,QAAQ,QAAc,yBAAC,QAAC,IAAI,IAAK,+BAAe,8BAAC,IAAI,gCAAS;AAE5F,gBAAO,QAAO;iBAEV;AAAE,AACN,qBAAM,kBAAY,CAAC,CAAC;;MAExB;;mBACqB,IAAa;yBAAK,YAAI,OAAO,CAAC,IAAI,KAAK,GAAE;IAAO;mBAE9C,CAAS;AAC9B,gBAAK,CAAC,CAAC;AACP,YAAO,mBAAS,CAAE,mCAAuB,CAAC;IAC5C;;;IAlBmB,WAAK;EAAC;;;;;;;;;;;;;MAJZ,iDAAW;YAAG","file":"app_manage_service.ddc.js"}');
  // Exports:
  return {
    src__app_manage_service: src__app_manage_service
  };
});

//# sourceMappingURL=app_manage_service.ddc.js.map
