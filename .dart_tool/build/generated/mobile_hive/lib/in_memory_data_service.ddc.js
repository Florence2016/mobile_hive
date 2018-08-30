define(['dart_sdk', 'packages/http/src/base_client', 'packages/mobile_hive/src/app', 'packages/http/testing'], function(dart_sdk, base_client, app, testing) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__response = base_client.src__response;
  const src__request = base_client.src__request;
  const src__app = app.src__app;
  const src__mock_client = testing.src__mock_client;
  const _root = Object.create(null);
  const in_memory_data_service = Object.create(_root);
  const $last = dartx.last;
  const $firstWhere = dartx.firstWhere;
  const $_get = dartx._get;
  const $toList = dartx.toList;
  const $contains = dartx.contains;
  const $where = dartx.where;
  const $add = dartx.add;
  const $removeWhere = dartx.removeWhere;
  const $map = dartx.map;
  const $fold = dartx.fold;
  let FutureOfResponse = () => (FutureOfResponse = dart.constFn(async.Future$(src__response.Response)))();
  let RequestToFutureOfResponse = () => (RequestToFutureOfResponse = dart.constFn(dart.fnType(FutureOfResponse(), [src__request.Request])))();
  let AppTobool = () => (AppTobool = dart.constFn(dart.fnType(core.bool, [src__app.App])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let MapOfString$Object = () => (MapOfString$Object = dart.constFn(core.Map$(core.String, core.Object)))();
  let MapOfString$ObjectToApp = () => (MapOfString$ObjectToApp = dart.constFn(dart.fnType(src__app.App, [MapOfString$Object()])))();
  let TAndTToT = () => (TAndTToT = dart.constFn(dart.gFnType(T => [T, [T, T]], T => [core.num])))();
  let AppToint = () => (AppToint = dart.constFn(dart.fnType(core.int, [src__app.App])))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let JSArrayOfMapOfString$Object = () => (JSArrayOfMapOfString$Object = dart.constFn(_interceptors.JSArray$(MapOfString$Object())))();
  in_memory_data_service.InMemoryDataService = class InMemoryDataService extends src__mock_client.MockClient {
    static _handler(request) {
      return async.async(src__response.Response, function* _handler() {
        if (in_memory_data_service.InMemoryDataService._applicationDb == null) in_memory_data_service.InMemoryDataService.resetDb();
        let data = null;
        switch (request.method) {
          case "GET":
          {
            let id = core.int.tryParse(request.url.pathSegments[$last]);
            if (id != null) {
              data = in_memory_data_service.InMemoryDataService._applicationDb[$firstWhere](dart.fn(app => app.id == id, AppTobool()));
            } else {
              let l = request.url.queryParameters[$_get]("name");
              let prefix = l != null ? l : "";
              let regExp = core.RegExp.new(prefix, {caseSensitive: false});
              data = in_memory_data_service.InMemoryDataService._applicationDb[$where](dart.fn(app => app.name[$contains](regExp), AppTobool()))[$toList]();
            }
            break;
          }
          case "POST":
          {
            let name = dart.dindex(convert.json.decode(request.body), "name");
            let newApp = new src__app.App.new((() => {
              let x = in_memory_data_service.InMemoryDataService._nextId;
              in_memory_data_service.InMemoryDataService._nextId = dart.notNull(x) + 1;
              return x;
            })(), core.String._check(name));
            in_memory_data_service.InMemoryDataService._applicationDb[$add](newApp);
            data = newApp;
            break;
          }
          case "PUT":
          {
            let appChanges = src__app.App.fromJson(MapOfString$dynamic()._check(convert.json.decode(request.body)));
            let targetApp = in_memory_data_service.InMemoryDataService._applicationDb[$firstWhere](dart.fn(h => h.id == appChanges.id, AppTobool()));
            targetApp.name = appChanges.name;
            data = targetApp;
            break;
          }
          case "DELETE":
          {
            let id = core.int.parse(request.url.pathSegments[$last]);
            in_memory_data_service.InMemoryDataService._applicationDb[$removeWhere](dart.fn(app => app.id == id, AppTobool()));
            break;
          }
          default:
          {
            dart.throw("Unimplemented HTTP method " + dart.str(request.method));
          }
        }
        return new src__response.Response.new(convert.json.encode(new (IdentityMapOfString$dynamic()).from(["data", data])), 200, {headers: new (IdentityMapOfString$String()).from(["content-type", "application/json"])});
      });
    }
    static resetDb() {
      in_memory_data_service.InMemoryDataService._applicationDb = in_memory_data_service.InMemoryDataService._initialApplication[$map](src__app.App, dart.fn(json => src__app.App.fromJson(json), MapOfString$ObjectToApp()))[$toList]();
      in_memory_data_service.InMemoryDataService._nextId = dart.notNull(in_memory_data_service.InMemoryDataService._applicationDb[$map](core.int, dart.fn(app => app.id, AppToint()))[$fold](core.int, 0, dart.gbind(dart.fn(math.max, TAndTToT()), core.int))) + 1;
    }
    static lookUpName(id) {
      let t = in_memory_data_service.InMemoryDataService._applicationDb[$firstWhere](dart.fn(app => app.id == id, AppTobool()), {orElse: null});
      return t == null ? null : t.name;
    }
  };
  (in_memory_data_service.InMemoryDataService.new = function() {
    in_memory_data_service.InMemoryDataService.__proto__.new.call(this, dart.fn(in_memory_data_service.InMemoryDataService._handler, RequestToFutureOfResponse()));
  }).prototype = in_memory_data_service.InMemoryDataService.prototype;
  dart.addTypeTests(in_memory_data_service.InMemoryDataService);
  dart.defineLazy(in_memory_data_service.InMemoryDataService, {
    /*in_memory_data_service.InMemoryDataService._initialApplication*/get _initialApplication() {
      return JSArrayOfMapOfString$Object().of([new (IdentityMapOfString$Object()).from(["id", 11, "name", "Better Cleaner"]), new (IdentityMapOfString$Object()).from(["id", 12, "name", "Super Cleaner"]), new (IdentityMapOfString$Object()).from(["id", 13, "name", "Clean Master"]), new (IdentityMapOfString$Object()).from(["id", 14, "name", "Fast Ram Cleaner"]), new (IdentityMapOfString$Object()).from(["id", 15, "name", "Speed Junk Secure Cleaner"]), new (IdentityMapOfString$Object()).from(["id", 16, "name", "Space Booster Cleaner"]), new (IdentityMapOfString$Object()).from(["id", 17, "name", "Rocket Junk Cleaner"]), new (IdentityMapOfString$Object()).from(["id", 18, "name", "Phone Booster Junk Cleaner"]), new (IdentityMapOfString$Object()).from(["id", 19, "name", "Antivirus Cleaner"]), new (IdentityMapOfString$Object()).from(["id", 20, "name", "Halo Cleaner"])]);
    },
    /*in_memory_data_service.InMemoryDataService._applicationDb*/get _applicationDb() {
      return null;
    },
    set _applicationDb(_) {},
    /*in_memory_data_service.InMemoryDataService._nextId*/get _nextId() {
      return null;
    },
    set _nextId(_) {}
  });
  dart.trackLibraries("packages/mobile_hive/in_memory_data_service.ddc", {
    "package:mobile_hive/in_memory_data_service.dart": in_memory_data_service
  }, '{"version":3,"sourceRoot":"","sources":["in_memory_data_service.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oBA0BmC,OAAe;AAAE;AAChD,YAAI,yDAAc,IAAI,MAAM,kDAAO;AACnC,YAAI;AACJ,gBAAQ,OAAO,OAAO;cACf;;AACH,gBAAM,KAAK,QAAG,SAAS,CAAC,OAAO,IAAI,aAAa,OAAK;AACrD,gBAAI,EAAE,IAAI,MAAM;AACd,kBAAI,GAAG,yDAAc,aAAW,CAAC,QAAC,GAAG,IAAK,GAAG,GAAG,IAAI,EAAE;mBACjD;AACL,sBAAgB,OAAO,IAAI,gBAAgB,QAAC;kBAArC,yBAAgD;AACvD,kBAAM,SAAS,eAAM,CAAC,MAAM,kBAAiB;AAC7C,kBAAI,GAAG,yDAAc,QAAM,CAAC,QAAC,GAAG,IAAK,GAAG,KAAK,WAAS,CAAC,MAAM,yBAAS;;AAExE;;cACG;;AACH,gBAAI,mBAAO,YAAI,OAAO,CAAC,OAAO,KAAK,GAAE;AACrC,gBAAI,aAAS,gBAAG;sBAAC,kDAAO;cAAP,kDAAO,qBA1ChC;;qCA0CoC,IAAI;AAChC,qEAAc,MAAI,CAAC,MAAM;AACzB,gBAAI,GAAG,MAAM;AACb;;cACG;;AACH,gBAAI,aAAa,qBAAY,8BAAC,YAAI,OAAO,CAAC,OAAO,KAAK;AACtD,gBAAI,YAAY,yDAAc,aAAW,CAAC,QAAC,CAAC,IAAK,CAAC,GAAG,IAAI,UAAU,GAAG;AACtE,qBAAS,KAAK,GAAG,UAAU,KAAK;AAChC,gBAAI,GAAG,SAAS;AAChB;;cACG;;AACH,gBAAI,KAAK,QAAG,MAAM,CAAC,OAAO,IAAI,aAAa,OAAK;AAChD,qEAAc,cAAY,CAAC,QAAC,GAAG,IAAK,GAAG,GAAG,IAAI,EAAE;AAEhD;;;;AAEA,uBAAM,wCAA6B,OAAO,OAAO;;;AAGrD,mBAAO,0BAAQ,CAAC,YAAI,OAAO,CAAC,0CAAC,QAAQ,IAAI,KAAI,eAAc,yCAAC,gBAAgB;MAE9E;;;AAGE,+DAAc,GAAG,8DAAmB,MAAI,eAAC,QAAC,IAAI,IAAK,qBAAY,CAAC,IAAI,uCAAS;AAC7E,wDAAO,GAAoD,aAAjD,yDAAc,MAAI,WAAC,QAAC,GAAG,IAAK,GAAG,GAAG,qBAAM,WAAC,cAAG,6BAAG,gBAAI;IAC/D;sBAEyB,EAAM;cAC3B,yDAAc,aAAW,CAAC,QAAC,GAAG,IAAK,GAAG,GAAG,IAAI,EAAE,yBAAU;;IAAW;;;AAEhD,wEAAM,yFAAQ;EAAE;;;MA9D3B,8DAAmB;YAAG,mCACjC,yCAAC,MAAM,IAAI,QAAQ,oBACnB,yCAAC,MAAM,IAAI,QAAQ,mBACnB,yCAAC,MAAM,IAAI,QAAQ,kBACnB,yCAAC,MAAM,IAAI,QAAQ,sBACnB,yCAAC,MAAM,IAAI,QAAQ,+BACnB,yCAAC,MAAM,IAAI,QAAQ,2BACnB,yCAAC,MAAM,IAAI,QAAQ,yBACnB,yCAAC,MAAM,IAAI,QAAQ,gCACnB,yCAAC,MAAM,IAAI,QAAQ,uBACnB,yCAAC,MAAM,IAAI,QAAQ;;MAEJ,yDAAc;;;;MACpB,kDAAO","file":"in_memory_data_service.ddc.js"}');
  // Exports:
  return {
    in_memory_data_service: in_memory_data_service
  };
});

//# sourceMappingURL=in_memory_data_service.ddc.js.map
