define(['dart_sdk', 'packages/mobile_hive/mh_apps_list_component/app_list_component.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/mobile_hive/mh_apps_list_component/app_list_component', 'packages/angular_components/material_list/material_list.template', 'packages/angular_components/material_list/material_list', 'packages/mobile_hive/src/mobile_component.template', 'packages/mobile_hive/src/mobile_service', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/mobile_hive/src/mobile_component', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/mobile_hive/src/app', 'packages/angular/angular.template', 'packages/angular_router/angular_router.template', 'packages/mobile_hive/src/app.template', 'packages/mobile_hive/src/mobile_service.template', 'packages/mobile_hive/src/route/route_paths.template'], function(dart_sdk, app_list_component$46css, view_type, change_detection, modules, app_list_component, material_list, material_list$, mobile_component, mobile_service, router_outlet_directive, mobile_component$, material_icon, material_icon$, app, angular, angular_router, app$, mobile_service$, route_paths) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const mh_apps_list_component__app_list_component$46css$46shim = app_list_component$46css.mh_apps_list_component__app_list_component$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const mh_apps_list_component__app_list_component = app_list_component.mh_apps_list_component__app_list_component;
  const material_list__material_list$46template = material_list.material_list__material_list$46template;
  const material_list__material_list = material_list$.material_list__material_list;
  const src__mobile_component$46template = mobile_component.src__mobile_component$46template;
  const src__mobile_service = mobile_service.src__mobile_service;
  const src__location__location = router_outlet_directive.src__location__location;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__mobile_component = mobile_component$.src__mobile_component;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const src__app = app.src__app;
  const angular$46template = angular.angular$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const src__app$46template = app$.src__app$46template;
  const src__mobile_service$46template = mobile_service$.src__mobile_service$46template;
  const src__route__route_paths$46template = route_paths.src__route__route_paths$46template;
  const _root = Object.create(null);
  const mh_apps_list_component__app_list_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $text = dartx.text;
  const $_get = dartx._get;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfAppListComponent = () => (AppViewOfAppListComponent = dart.constFn(src__core__linker__app_view.AppView$(mh_apps_list_component__app_list_component.AppListComponent)))();
  let AppViewAndintToAppViewOfAppListComponent = () => (AppViewAndintToAppViewOfAppListComponent = dart.constFn(dart.fnType(AppViewOfAppListComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfTableElement = () => (JSArrayOfTableElement = dart.constFn(_interceptors.JSArray$(html.TableElement)))();
  let ComponentRefOfAppListComponent = () => (ComponentRefOfAppListComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(mh_apps_list_component__app_list_component.AppListComponent)))();
  let ComponentFactoryOfAppListComponent = () => (ComponentFactoryOfAppListComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(mh_apps_list_component__app_list_component.AppListComponent)))();
  dart.defineLazy(mh_apps_list_component__app_list_component$46template, {
    /*mh_apps_list_component__app_list_component$46template.styles$AppListComponent*/get styles$AppListComponent() {
      return [mh_apps_list_component__app_list_component$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _text_1 = Symbol('_text_1');
  const _el_2 = Symbol('_el_2');
  const _el_3 = Symbol('_el_3');
  const _el_6 = Symbol('_el_6');
  const _el_8 = Symbol('_el_8');
  const _appEl_10 = Symbol('_appEl_10');
  const _NgIf_10_9 = Symbol('_NgIf_10_9');
  const _el_11 = Symbol('_el_11');
  const _compView_11 = Symbol('_compView_11');
  const _MaterialListComponent_11_5 = Symbol('_MaterialListComponent_11_5');
  const _el_12 = Symbol('_el_12');
  const _el_13 = Symbol('_el_13');
  const _el_14 = Symbol('_el_14');
  const _el_15 = Symbol('_el_15');
  const _el_17 = Symbol('_el_17');
  const _el_19 = Symbol('_el_19');
  const _el_21 = Symbol('_el_21');
  const _appEl_22 = Symbol('_appEl_22');
  const _NgFor_22_9 = Symbol('_NgFor_22_9');
  const _el_23 = Symbol('_el_23');
  const _compView_23 = Symbol('_compView_23');
  const _MobileAppComponent_23_5 = Symbol('_MobileAppComponent_23_5');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _handle_click_8_0 = Symbol('_handle_click_8_0');
  let const$;
  mh_apps_list_component__app_list_component$46template.ViewAppListComponent0 = class ViewAppListComponent0 extends src__core__linker__app_view.AppView$(mh_apps_list_component__app_list_component.AppListComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, "h1", parentRenderNode);
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new(this.ctx.title != null ? this.ctx.title : "");
      this[_el_0][$append](this[_text_1]);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.addShimC(this[_el_2]);
      this[_el_3] = src__core__linker__app_view.createAndAppend(doc, "label", this[_el_2]);
      this.addShimE(this[_el_3]);
      let _text_4 = html.Text.new("App name:");
      this[_el_3][$append](_text_4);
      let _text_5 = html.Text.new(" ");
      this[_el_2][$append](_text_5);
      this[_el_6] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, "input", this[_el_2]));
      this.addShimC(this[_el_6]);
      let _text_7 = html.Text.new(" ");
      this[_el_2][$append](_text_7);
      this[_el_8] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, "button", this[_el_2]));
      this.addShimC(this[_el_8]);
      let _text_9 = html.Text.new("Add");
      this[_el_8][$append](_text_9);
      let _anchor_10 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_10);
      this[_appEl_10] = new src__core__linker__view_container.ViewContainer.new(10, null, this, _anchor_10);
      let _TemplateRef_10_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_10], dart.fn(mh_apps_list_component__app_list_component$46template.viewFactory_AppListComponent1, AppViewAndintToAppViewOfAppListComponent()));
      this[_NgIf_10_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_10], _TemplateRef_10_8);
      this[_compView_11] = new material_list__material_list$46template.ViewMaterialListComponent0.new(this, 11);
      this[_el_11] = this[_compView_11].rootEl;
      parentRenderNode[$append](this[_el_11]);
      this.addShimC(html.HtmlElement._check(this[_el_11]));
      this[_MaterialListComponent_11_5] = new material_list__material_list.MaterialListComponent.new();
      this[_el_12] = html.TableElement._check(doc[$createElement]("table"));
      this.addShimC(this[_el_12]);
      this[_el_13] = src__core__linker__app_view.createAndAppend(doc, "thead", this[_el_12]);
      this.addShimE(this[_el_13]);
      this[_el_14] = src__core__linker__app_view.createAndAppend(doc, "tr", this[_el_13]);
      this.addShimE(this[_el_14]);
      this[_el_15] = src__core__linker__app_view.createAndAppend(doc, "th", this[_el_14]);
      this.addShimE(this[_el_15]);
      let _text_16 = html.Text.new("App ID");
      this[_el_15][$append](_text_16);
      this[_el_17] = src__core__linker__app_view.createAndAppend(doc, "th", this[_el_14]);
      this.addShimE(this[_el_17]);
      let _text_18 = html.Text.new("App Name");
      this[_el_17][$append](_text_18);
      this[_el_19] = src__core__linker__app_view.createAndAppend(doc, "th", this[_el_14]);
      this.addShimE(this[_el_19]);
      let _text_20 = html.Text.new("Action");
      this[_el_19][$append](_text_20);
      this[_el_21] = src__core__linker__app_view.createAndAppend(doc, "tbody", this[_el_12]);
      this[_el_21].className = "appsList";
      this.addShimE(this[_el_21]);
      let _anchor_22 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_21][$append](_anchor_22);
      this[_appEl_22] = new src__core__linker__view_container.ViewContainer.new(22, 21, this, _anchor_22);
      let _TemplateRef_22_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_22], dart.fn(mh_apps_list_component__app_list_component$46template.viewFactory_AppListComponent2, AppViewAndintToAppViewOfAppListComponent()));
      this[_NgFor_22_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_22], _TemplateRef_22_8);
      this[_compView_11].create(this[_MaterialListComponent_11_5], [JSArrayOfTableElement().of([this[_el_12]])]);
      this[_compView_23] = new src__mobile_component$46template.ViewMobileAppComponent0.new(this, 23);
      this[_el_23] = this[_compView_23].rootEl;
      parentRenderNode[$append](this[_el_23]);
      this.addShimC(html.HtmlElement._check(this[_el_23]));
      this[_MobileAppComponent_23_5] = new src__mobile_component.MobileAppComponent.new(src__mobile_service.MobileService._check(this.parentView.injectorGet(dart.wrapType(src__mobile_service.MobileService), this.viewData.parentIndex)), src__location__location.Location._check(this.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.viewData.parentIndex)));
      this[_compView_23].create(this[_MobileAppComponent_23_5], []);
      this[_el_8][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_8_0)));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      this[_NgIf_10_9].ngIf = _ctx.selected != null;
      changed = false;
      if (changed) {
        this[_compView_11].markAsCheckOnce();
      }
      let currVal_1 = _ctx.appsList;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_NgFor_22_9].ngForOf = currVal_1;
        this[_expr_1] = currVal_1;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_22_9].ngDoCheck();
      }
      this[_appEl_10].detectChangesInNestedViews();
      this[_appEl_22].detectChangesInNestedViews();
      this[_compView_11].detectHostChanges(firstCheck);
      let currVal_2 = _ctx.selected;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this.setProp(this[_el_23], "app", currVal_2);
        this[_expr_2] = currVal_2;
      }
      this[_compView_11].detectChanges();
      this[_compView_23].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_10];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_22];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_compView_11];
      t$0 == null ? null : t$0.destroy();
      let t$1 = this[_compView_23];
      t$1 == null ? null : t$1.destroy();
    }
    [_handle_click_8_0]($event) {
      let local_appName = this[_el_6];
      this.ctx.add(local_appName.value);
      local_appName.value = "";
    }
  };
  (mh_apps_list_component__app_list_component$46template.ViewAppListComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_el_2] = null;
    this[_el_3] = null;
    this[_el_6] = null;
    this[_el_8] = null;
    this[_appEl_10] = null;
    this[_NgIf_10_9] = null;
    this[_el_11] = null;
    this[_compView_11] = null;
    this[_MaterialListComponent_11_5] = null;
    this[_el_12] = null;
    this[_el_13] = null;
    this[_el_14] = null;
    this[_el_15] = null;
    this[_el_17] = null;
    this[_el_19] = null;
    this[_el_21] = null;
    this[_appEl_22] = null;
    this[_NgFor_22_9] = null;
    this[_el_23] = null;
    this[_compView_23] = null;
    this[_MobileAppComponent_23_5] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    mh_apps_list_component__app_list_component$46template.ViewAppListComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("my-app-list"));
    let t = mh_apps_list_component__app_list_component$46template.ViewAppListComponent0._renderType;
    t == null ? mh_apps_list_component__app_list_component$46template.ViewAppListComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:mobile_hive/lib/mh_apps_list_component/app_list_component.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, mh_apps_list_component__app_list_component$46template.styles$AppListComponent) : t;
    this.setupComponentType(mh_apps_list_component__app_list_component$46template.ViewAppListComponent0._renderType);
  }).prototype = mh_apps_list_component__app_list_component$46template.ViewAppListComponent0.prototype;
  dart.addTypeTests(mh_apps_list_component__app_list_component$46template.ViewAppListComponent0);
  dart.setMethodSignature(mh_apps_list_component__app_list_component$46template.ViewAppListComponent0, () => ({
    __proto__: dart.getMethods(mh_apps_list_component__app_list_component$46template.ViewAppListComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(mh_apps_list_component__app_list_component.AppListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_click_8_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(mh_apps_list_component__app_list_component$46template.ViewAppListComponent0, () => ({
    __proto__: dart.getFields(mh_apps_list_component__app_list_component$46template.ViewAppListComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_el_2]: dart.fieldType(html.DivElement),
    [_el_3]: dart.fieldType(html.Element),
    [_el_6]: dart.fieldType(html.InputElement),
    [_el_8]: dart.fieldType(html.ButtonElement),
    [_appEl_10]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_10_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_11]: dart.fieldType(html.Element),
    [_compView_11]: dart.fieldType(material_list__material_list$46template.ViewMaterialListComponent0),
    [_MaterialListComponent_11_5]: dart.fieldType(material_list__material_list.MaterialListComponent),
    [_el_12]: dart.fieldType(html.TableElement),
    [_el_13]: dart.fieldType(html.Element),
    [_el_14]: dart.fieldType(html.Element),
    [_el_15]: dart.fieldType(html.Element),
    [_el_17]: dart.fieldType(html.Element),
    [_el_19]: dart.fieldType(html.Element),
    [_el_21]: dart.fieldType(html.Element),
    [_appEl_22]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_22_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_23]: dart.fieldType(html.Element),
    [_compView_23]: dart.fieldType(src__mobile_component$46template.ViewMobileAppComponent0),
    [_MobileAppComponent_23_5]: dart.fieldType(src__mobile_component.MobileAppComponent),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(mh_apps_list_component__app_list_component$46template.ViewAppListComponent0, {
    /*mh_apps_list_component__app_list_component$46template.ViewAppListComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  mh_apps_list_component__app_list_component$46template.viewFactory_AppListComponent0 = function(parentView, parentIndex) {
    return new mh_apps_list_component__app_list_component$46template.ViewAppListComponent0.new(parentView, parentIndex);
  };
  const _el_1 = Symbol('_el_1');
  const _text_2 = Symbol('_text_2');
  const _expr_0 = Symbol('_expr_0');
  mh_apps_list_component__app_list_component$46template._ViewAppListComponent1 = class _ViewAppListComponent1 extends src__core__linker__app_view.AppView$(mh_apps_list_component__app_list_component.AppListComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, "h2", this[_el_0]);
      this.addShimE(this[_el_1]);
      this[_text_2] = html.Text.new("");
      this[_el_1][$append](this[_text_2]);
      let _text_3 = html.Text.new(" app");
      this[_el_1][$append](_text_3);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.selected.name);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_2][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (mh_apps_list_component__app_list_component$46template._ViewAppListComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_expr_0] = null;
    mh_apps_list_component__app_list_component$46template._ViewAppListComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = mh_apps_list_component__app_list_component$46template.ViewAppListComponent0._renderType;
  }).prototype = mh_apps_list_component__app_list_component$46template._ViewAppListComponent1.prototype;
  dart.addTypeTests(mh_apps_list_component__app_list_component$46template._ViewAppListComponent1);
  dart.setMethodSignature(mh_apps_list_component__app_list_component$46template._ViewAppListComponent1, () => ({
    __proto__: dart.getMethods(mh_apps_list_component__app_list_component$46template._ViewAppListComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(mh_apps_list_component__app_list_component.AppListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(mh_apps_list_component__app_list_component$46template._ViewAppListComponent1, () => ({
    __proto__: dart.getFields(mh_apps_list_component__app_list_component$46template._ViewAppListComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  mh_apps_list_component__app_list_component$46template.viewFactory_AppListComponent1 = function(parentView, parentIndex) {
    return new mh_apps_list_component__app_list_component$46template._ViewAppListComponent1.new(parentView, parentIndex);
  };
  const _text_4 = Symbol('_text_4');
  const _el_5 = Symbol('_el_5');
  const _compView_6 = Symbol('_compView_6');
  const _MaterialIconComponent_6_5 = Symbol('_MaterialIconComponent_6_5');
  const _el_7 = Symbol('_el_7');
  const _compView_7 = Symbol('_compView_7');
  const _MaterialIconComponent_7_5 = Symbol('_MaterialIconComponent_7_5');
  const _handle_click_0_0 = Symbol('_handle_click_0_0');
  const _handle_click_7_0 = Symbol('_handle_click_7_0');
  mh_apps_list_component__app_list_component$46template._ViewAppListComponent2 = class _ViewAppListComponent2 extends src__core__linker__app_view.AppView$(mh_apps_list_component__app_list_component.AppListComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("tr");
      this.addShimE(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, "td", this[_el_0]);
      this.addShimE(this[_el_1]);
      this[_text_2] = html.Text.new("");
      this[_el_1][$append](this[_text_2]);
      this[_el_3] = src__core__linker__app_view.createAndAppend(doc, "td", this[_el_0]);
      this.addShimE(this[_el_3]);
      this[_text_4] = html.Text.new("");
      this[_el_3][$append](this[_text_4]);
      this[_el_5] = src__core__linker__app_view.createAndAppend(doc, "td", this[_el_0]);
      this.addShimE(this[_el_5]);
      this[_compView_6] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 6);
      this[_el_6] = this[_compView_6].rootEl;
      this[_el_5][$append](this[_el_6]);
      this[_el_6].className = "edit";
      this.createAttr(this[_el_6], "icon", "create");
      this.addShimC(html.HtmlElement._check(this[_el_6]));
      this[_MaterialIconComponent_6_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_6]));
      this[_compView_6].create(this[_MaterialIconComponent_6_5], []);
      this[_compView_7] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 7);
      this[_el_7] = this[_compView_7].rootEl;
      this[_el_5][$append](this[_el_7]);
      this[_el_7].className = "delete";
      this.createAttr(this[_el_7], "icon", "delete");
      this.addShimC(html.HtmlElement._check(this[_el_7]));
      this[_MaterialIconComponent_7_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_7]));
      this[_compView_7].create(this[_MaterialIconComponent_7_5], []);
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_0)));
      this[_el_6][$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(this.ctx, 'gotoDetail')));
      this[_el_7][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_7_0)));
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_app = src__app.App._check(this.locals[$_get]("$implicit"));
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_6_5].icon = "create";
        changed = true;
      }
      if (changed) {
        this[_compView_6].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_7_5].icon = "delete";
        changed = true;
      }
      if (changed) {
        this[_compView_7].markAsCheckOnce();
      }
      let currVal_0 = local_app == _ctx.selected;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateClass(html.HtmlElement._check(this[_el_0]), "selected", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_app.id);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_text_2][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(local_app.name);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_text_4][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
      this[_compView_6].detectChanges();
      this[_compView_7].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_6];
      t == null ? null : t.destroy();
      let t$ = this[_compView_7];
      t$ == null ? null : t$.destroy();
    }
    [_handle_click_0_0]($event) {
      let local_app = src__app.App._check(this.locals[$_get]("$implicit"));
      this.ctx.onSelect(local_app);
    }
    [_handle_click_7_0]($event) {
      let local_app = src__app.App._check(this.locals[$_get]("$implicit"));
      this.ctx.delete(local_app);
      dart.dsend($event, 'stopPropagation', []);
    }
  };
  (mh_apps_list_component__app_list_component$46template._ViewAppListComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_el_3] = null;
    this[_text_4] = null;
    this[_el_5] = null;
    this[_el_6] = null;
    this[_compView_6] = null;
    this[_MaterialIconComponent_6_5] = null;
    this[_el_7] = null;
    this[_compView_7] = null;
    this[_MaterialIconComponent_7_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    mh_apps_list_component__app_list_component$46template._ViewAppListComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = mh_apps_list_component__app_list_component$46template.ViewAppListComponent0._renderType;
  }).prototype = mh_apps_list_component__app_list_component$46template._ViewAppListComponent2.prototype;
  dart.addTypeTests(mh_apps_list_component__app_list_component$46template._ViewAppListComponent2);
  dart.setMethodSignature(mh_apps_list_component__app_list_component$46template._ViewAppListComponent2, () => ({
    __proto__: dart.getMethods(mh_apps_list_component__app_list_component$46template._ViewAppListComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(mh_apps_list_component__app_list_component.AppListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_click_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_click_7_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(mh_apps_list_component__app_list_component$46template._ViewAppListComponent2, () => ({
    __proto__: dart.getFields(mh_apps_list_component__app_list_component$46template._ViewAppListComponent2.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_el_3]: dart.fieldType(html.Element),
    [_text_4]: dart.fieldType(html.Text),
    [_el_5]: dart.fieldType(html.Element),
    [_el_6]: dart.fieldType(html.Element),
    [_compView_6]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_6_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_el_7]: dart.fieldType(html.Element),
    [_compView_7]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_7_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  mh_apps_list_component__app_list_component$46template.viewFactory_AppListComponent2 = function(parentView, parentIndex) {
    return new mh_apps_list_component__app_list_component$46template._ViewAppListComponent2.new(parentView, parentIndex);
  };
  dart.defineLazy(mh_apps_list_component__app_list_component$46template, {
    /*mh_apps_list_component__app_list_component$46template.styles$AppListComponentHost*/get styles$AppListComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _AppListComponent_0_5 = Symbol('_AppListComponent_0_5');
  mh_apps_list_component__app_list_component$46template._ViewAppListComponentHost0 = class _ViewAppListComponentHost0 extends src__core__linker__app_view.AppView$(mh_apps_list_component__app_list_component.AppListComponent) {
    build() {
      this[_compView_0] = new mh_apps_list_component__app_list_component$46template.ViewAppListComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_AppListComponent_0_5] = new mh_apps_list_component__app_list_component.AppListComponent.new(src__mobile_service.MobileService._check(this.injectorGet(dart.wrapType(src__mobile_service.MobileService), this.viewData.parentIndex)), src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)));
      this[_compView_0].create(this[_AppListComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfAppListComponent()).new(0, this, this.rootEl, this[_AppListComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_AppListComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (mh_apps_list_component__app_list_component$46template._ViewAppListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AppListComponent_0_5] = null;
    mh_apps_list_component__app_list_component$46template._ViewAppListComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = mh_apps_list_component__app_list_component$46template._ViewAppListComponentHost0.prototype;
  dart.addTypeTests(mh_apps_list_component__app_list_component$46template._ViewAppListComponentHost0);
  dart.setMethodSignature(mh_apps_list_component__app_list_component$46template._ViewAppListComponentHost0, () => ({
    __proto__: dart.getMethods(mh_apps_list_component__app_list_component$46template._ViewAppListComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(mh_apps_list_component__app_list_component.AppListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(mh_apps_list_component__app_list_component$46template._ViewAppListComponentHost0, () => ({
    __proto__: dart.getFields(mh_apps_list_component__app_list_component$46template._ViewAppListComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(mh_apps_list_component__app_list_component$46template.ViewAppListComponent0),
    [_AppListComponent_0_5]: dart.fieldType(mh_apps_list_component__app_list_component.AppListComponent)
  }));
  mh_apps_list_component__app_list_component$46template.viewFactory_AppListComponentHost0 = function(parentView, parentIndex) {
    return new mh_apps_list_component__app_list_component$46template._ViewAppListComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(mh_apps_list_component__app_list_component$46template, {
    /*mh_apps_list_component__app_list_component$46template._AppListComponentNgFactory*/get _AppListComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfAppListComponent()).new("my-app-list", dart.fn(mh_apps_list_component__app_list_component$46template.viewFactory_AppListComponentHost0, AppViewAndintToAppViewOfAppListComponent())));
    }
  });
  dart.copyProperties(mh_apps_list_component__app_list_component$46template, {
    get AppListComponentNgFactory() {
      return mh_apps_list_component__app_list_component$46template._AppListComponentNgFactory;
    }
  });
  dart.defineLazy(mh_apps_list_component__app_list_component$46template, {
    /*mh_apps_list_component__app_list_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  mh_apps_list_component__app_list_component$46template.initReflector = function() {
    if (dart.test(mh_apps_list_component__app_list_component$46template._visited)) {
      return;
    }
    mh_apps_list_component__app_list_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(mh_apps_list_component__app_list_component.AppListComponent), mh_apps_list_component__app_list_component$46template.AppListComponentNgFactory);
    angular$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    material_list__material_list$46template.initReflector();
    angular_router$46template.initReflector();
    src__app$46template.initReflector();
    src__mobile_component$46template.initReflector();
    src__mobile_service$46template.initReflector();
    src__route__route_paths$46template.initReflector();
  };
  dart.trackLibraries("packages/mobile_hive/mh_apps_list_component/app_list_component.template.ddc", {
    "package:mobile_hive/mh_apps_list_component/app_list_component.template.dart": mh_apps_list_component__app_list_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["app_list_component.template.dart"],"names":[],"mappings":"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","file":"app_list_component.template.ddc.js"}');
  // Exports:
  return {
    mh_apps_list_component__app_list_component$46template: mh_apps_list_component__app_list_component$46template
  };
});

//# sourceMappingURL=app_list_component.template.ddc.js.map
