define(['dart_sdk', 'packages/mobile_hive/src/app', 'packages/http/src/base_client'], function(dart_sdk, app, base_client) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__app = app.src__app;
  const src__response = base_client.src__response;
  const src__client = base_client.src__client;
  const _root = Object.create(null);
  const src__mobile_service = Object.create(_root);
  const $toList = dartx.toList;
  const $map = dartx.map;
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let dynamicToApp = () => (dynamicToApp = dart.constFn(dart.fnType(src__app.App, [dart.dynamic])))();
  let ListOfApp = () => (ListOfApp = dart.constFn(core.List$(src__app.App)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  const _http = Symbol('_http');
  const _extractData = Symbol('_extractData');
  const _handleError = Symbol('_handleError');
  src__mobile_service.MobileService = class MobileService extends core.Object {
    getAll() {
      return async.async(ListOfApp(), (function* getAll() {
        try {
          let response = (yield this[_http].get("api/application"));
          let application = core.List.as(this[_extractData](response))[$map](src__app.App, dart.fn(json => src__app.App.fromJson(MapOfString$dynamic()._check(json)), dynamicToApp()))[$toList]();
          return application;
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
    get(id) {
      return async.async(src__app.App, (function* get() {
        try {
          let response = (yield this[_http].get("api/application" + "/" + dart.str(id)));
          return src__app.App.fromJson(MapOfString$dynamic()._check(this[_extractData](response)));
        } catch (e) {
          dart.throw(this[_handleError](e));
        }
      }).bind(this));
    }
    create(name) {
      return async.async(src__app.App, (function* create() {
        try {
          let response = (yield this[_http].post("api/application", {headers: src__mobile_service.MobileService._headers, body: convert.json.encode(new (IdentityMapOfString$String()).from(["name", name]))}));
          return src__app.App.fromJson(MapOfString$dynamic()._check(this[_extractData](response)));
        } catch (e) {
          dart.throw(this[_handleError](e));
        }
      }).bind(this));
    }
    save(app) {
      return async.async(src__app.App, (function* save() {
        try {
          let url = "api/application" + "/" + dart.str(app.id);
          let response = (yield this[_http].put(url, {headers: src__mobile_service.MobileService._headers, body: convert.json.encode(app)}));
          return src__app.App.fromJson(MapOfString$dynamic()._check(this[_extractData](response)));
        } catch (e) {
          dart.throw(this[_handleError](e));
        }
      }).bind(this));
    }
    delete(id) {
      return async.async(dart.void, (function* delete$() {
        try {
          let url = "api/application" + "/" + dart.str(id);
          yield this[_http].delete(url, {headers: src__mobile_service.MobileService._headers});
        } catch (e) {
          dart.throw(this[_handleError](e));
        }
      }).bind(this));
    }
  };
  (src__mobile_service.MobileService.new = function(http) {
    this[_http] = http;
  }).prototype = src__mobile_service.MobileService.prototype;
  dart.addTypeTests(src__mobile_service.MobileService);
  dart.setMethodSignature(src__mobile_service.MobileService, () => ({
    __proto__: dart.getMethods(src__mobile_service.MobileService.__proto__),
    getAll: dart.fnType(async.Future$(core.List$(src__app.App)), []),
    [_extractData]: dart.fnType(dart.dynamic, [src__response.Response]),
    [_handleError]: dart.fnType(core.Exception, [dart.dynamic]),
    get: dart.fnType(async.Future$(src__app.App), [core.int]),
    create: dart.fnType(async.Future$(src__app.App), [core.String]),
    save: dart.fnType(async.Future$(src__app.App), [src__app.App]),
    delete: dart.fnType(async.Future$(dart.void), [core.int])
  }));
  dart.setFieldSignature(src__mobile_service.MobileService, () => ({
    __proto__: dart.getFields(src__mobile_service.MobileService.__proto__),
    [_http]: dart.finalFieldType(src__client.Client)
  }));
  dart.defineLazy(src__mobile_service.MobileService, {
    /*src__mobile_service.MobileService._applicationUrl*/get _applicationUrl() {
      return "api/application";
    },
    /*src__mobile_service.MobileService._headers*/get _headers() {
      return new (IdentityMapOfString$String()).from(["Content-Type", "application/json"]);
    }
  });
  dart.trackLibraries("packages/mobile_hive/src/mobile_service.ddc", {
    "package:mobile_hive/src/mobile_service.dart": src__mobile_service
  }, '{"version":3,"sourceRoot":"","sources":["mobile_service.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;AAc6B;AAC1B,YAAI;AACF,cAAM,YAAW,MAAM,WAAK,IAAI,CAAC,iBAAe;AAChD,cAAM,cAAc,aAAC,kBAAY,CAAC,QAAQ,QAClC,eAAC,QAAC,IAAI,IAAK,qBAAY,8BAAC,IAAI,6BAAS;AAC7C,gBAAO,YAAW;iBAEd;AAAE,AACN,qBAAM,kBAAY,CAAC,CAAC;;MAExB;;mBACqB,IAAa;yBAAK,YAAI,OAAO,CAAC,IAAI,KAAK,GAAE;IAAO;mBAE9C,CAAS;AAC9B,gBAAK,CAAC,CAAC;AACP,YAAO,mBAAS,CAAC,mCAAuB,CAAC;IAC3C;QAEgB,EAAM;AAAE;AACtB,YAAI;AACF,cAAM,YAAW,MAAM,WAAK,IAAI,CAAC,AAAE,iBAAe,kBAAE,EAAE;AACtD,gBAAO,sBAAY,8BAAC,kBAAY,CAAC,QAAQ;iBAClC;AAAG,AACV,qBAAM,kBAAY,CAAC,CAAC;;MAExB;;WACoB,IAAW;AAAE;AAC9B,YAAI;AACF,cAAM,YAAW,MAAM,WAAK,KAAK,CAAC,iBAAe,YACpC,0CAAQ,QAAQ,YAAI,OAAO,CAAC,yCAAC,QAAQ,IAAI;AACtD,gBAAO,sBAAY,8BAAC,kBAAY,CAAC,QAAQ;iBAClC;AAAG,AACV,qBAAM,kBAAY,CAAC,CAAC;;MAExB;;SAGiB,GAAO;AAAE;AACxB,YAAI;AACF,cAAM,MAAM,AAAE,iBAAe,kBAAG,GAAG,GAAG;AACtC,cAAM,YACN,MAAM,WAAK,IAAI,CAAC,GAAG,YAAW,0CAAQ,QAAQ,YAAI,OAAO,CAAC,GAAG;AAC7D,gBAAO,sBAAY,8BAAC,kBAAY,CAAC,QAAQ;iBAClC;AAAG,AACV,qBAAM,kBAAY,CAAC,CAAC;;MAExB;;WAEoB,EAAM;AAAE;AAC1B,YAAI;AACF,cAAM,MAAM,AAAE,iBAAe,kBAAE,EAAE;AACjC,gBAAM,WAAK,OAAO,CAAC,GAAG,YAAW,0CAAQ;iBAClC;AAAG,AACV,qBAAM,kBAAY,CAAC,CAAC;;MAExB;;;;IAzDmB,WAAK;EAAC;;;;;;;;;;;;;;;;;MAJZ,iDAAe;YAAG;;MAClB,0CAAQ;YAAG,0CAAC,gBAAgB","file":"mobile_service.ddc.js"}');
  // Exports:
  return {
    src__mobile_service: src__mobile_service
  };
});

//# sourceMappingURL=mobile_service.ddc.js.map
