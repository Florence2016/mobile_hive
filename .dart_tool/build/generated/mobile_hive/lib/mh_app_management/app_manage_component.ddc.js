define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/mobile_hive/src/app_manage', 'packages/mobile_hive/src/app_manage_service'], function(dart_sdk, change_detection, app_manage, app_manage_service) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__app_manage = app_manage.src__app_manage;
  const src__app_manage_service = app_manage_service.src__app_manage_service;
  const _root = Object.create(null);
  const mh_app_management__app_manage_component = Object.create(_root);
  let ListOfManage = () => (ListOfManage = dart.constFn(core.List$(src__app_manage.Manage)))();
  const _manageService = Symbol('_manageService');
  const _getManageApp = Symbol('_getManageApp');
  mh_app_management__app_manage_component.AppManagementComponent = class AppManagementComponent extends core.Object {
    get manageAppList() {
      return this[manageAppList];
    }
    set manageAppList(value) {
      this[manageAppList] = value;
    }
    get selected() {
      return this[selected];
    }
    set selected(value) {
      this[selected] = value;
    }
    [_getManageApp]() {
      return async.async(dart.void, (function* _getManageApp() {
        this.manageAppList = (yield this[_manageService].getAll());
      }).bind(this));
    }
    ngOnInit() {
      return this[_getManageApp]();
    }
    onSelect(manage) {
      return this.selected = manage;
    }
  };
  (mh_app_management__app_manage_component.AppManagementComponent.new = function(manageService) {
    this[manageAppList] = null;
    this[selected] = null;
    this[_manageService] = manageService;
  }).prototype = mh_app_management__app_manage_component.AppManagementComponent.prototype;
  dart.addTypeTests(mh_app_management__app_manage_component.AppManagementComponent);
  const manageAppList = Symbol("AppManagementComponent.manageAppList");
  const selected = Symbol("AppManagementComponent.selected");
  mh_app_management__app_manage_component.AppManagementComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(mh_app_management__app_manage_component.AppManagementComponent, () => ({
    __proto__: dart.getMethods(mh_app_management__app_manage_component.AppManagementComponent.__proto__),
    [_getManageApp]: dart.fnType(async.Future$(dart.void), []),
    ngOnInit: dart.fnType(dart.void, []),
    onSelect: dart.fnType(dart.void, [src__app_manage.Manage])
  }));
  dart.setFieldSignature(mh_app_management__app_manage_component.AppManagementComponent, () => ({
    __proto__: dart.getFields(mh_app_management__app_manage_component.AppManagementComponent.__proto__),
    [_manageService]: dart.finalFieldType(src__app_manage_service.ManageService),
    manageAppList: dart.fieldType(ListOfManage()),
    selected: dart.fieldType(src__app_manage.Manage)
  }));
  dart.trackLibraries("packages/mobile_hive/mh_app_management/app_manage_component.ddc", {
    "package:mobile_hive/mh_app_management/app_manage_component.dart": mh_app_management__app_manage_component
  }, '{"version":3,"sourceRoot":"","sources":["app_manage_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;IA6Ce;;;;;;IACN;;;;;;;AAGwB;AAC5B,0BAAa,IAAI,MAAM,oBAAc,OAAO;MAC/C;;;YAEmB,oBAAa;IAAE;aACpB,MAAa;YAAK,cAAQ,GAAG,MAAM;;;;IATpC,mBAAa;IACnB,cAAQ;IAHa,oBAAc;EAAC","file":"app_manage_component.ddc.js"}');
  // Exports:
  return {
    mh_app_management__app_manage_component: mh_app_management__app_manage_component
  };
});

//# sourceMappingURL=app_manage_component.ddc.js.map
