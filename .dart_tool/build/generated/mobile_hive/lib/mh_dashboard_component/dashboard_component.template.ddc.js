define(['dart_sdk', 'packages/mobile_hive/mh_dashboard_component/dashboard_component.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/mobile_hive/mh_dashboard_component/dashboard_component', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/angular_router/src/constants', 'packages/angular_router/angular_router.template', 'packages/mobile_hive/src/app', 'packages/mobile_hive/src/mobile_service', 'packages/angular/angular.template', 'packages/mobile_hive/src/app.template', 'packages/mobile_hive/src/mobile_service.template', 'packages/mobile_hive/src/route/route_paths.template'], function(dart_sdk, dashboard_component$46css, view_type, change_detection, modules, dashboard_component, router_outlet_directive, constants, angular_router, app, mobile_service, angular, app$, mobile_service$, route_paths) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const mh_dashboard_component__dashboard_component$46css$46shim = dashboard_component$46css.mh_dashboard_component__dashboard_component$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const mh_dashboard_component__dashboard_component = dashboard_component.mh_dashboard_component__dashboard_component;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__location__location = router_outlet_directive.src__location__location;
  const src__directives__router_link_directive = constants.src__directives__router_link_directive;
  const src__directives__router_link_directive$46template = angular_router.src__directives__router_link_directive$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const src__app = app.src__app;
  const src__mobile_service = mobile_service.src__mobile_service;
  const angular$46template = angular.angular$46template;
  const src__app$46template = app$.src__app$46template;
  const src__mobile_service$46template = mobile_service$.src__mobile_service$46template;
  const src__route__route_paths$46template = route_paths.src__route__route_paths$46template;
  const _root = Object.create(null);
  const mh_dashboard_component__dashboard_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfDashboardComponent = () => (AppViewOfDashboardComponent = dart.constFn(src__core__linker__app_view.AppView$(mh_dashboard_component__dashboard_component.DashboardComponent)))();
  let AppViewAndintToAppViewOfDashboardComponent = () => (AppViewAndintToAppViewOfDashboardComponent = dart.constFn(dart.fnType(AppViewOfDashboardComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfDashboardComponent = () => (ComponentRefOfDashboardComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(mh_dashboard_component__dashboard_component.DashboardComponent)))();
  let ComponentFactoryOfDashboardComponent = () => (ComponentFactoryOfDashboardComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(mh_dashboard_component__dashboard_component.DashboardComponent)))();
  dart.defineLazy(mh_dashboard_component__dashboard_component$46template, {
    /*mh_dashboard_component__dashboard_component$46template.styles$DashboardComponent*/get styles$DashboardComponent() {
      return [mh_dashboard_component__dashboard_component$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_2 = Symbol('_el_2');
  const _appEl_3 = Symbol('_appEl_3');
  const _NgFor_3_9 = Symbol('_NgFor_3_9');
  const _expr_0 = Symbol('_expr_0');
  let const$;
  mh_dashboard_component__dashboard_component$46template.ViewDashboardComponent0 = class ViewDashboardComponent0 extends src__core__linker__app_view.AppView$(mh_dashboard_component__dashboard_component.DashboardComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, "h3", parentRenderNode);
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new("Top Apps");
      this[_el_0][$append](_text_1);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_2].className = "grid grid-pad";
      this.addShimC(this[_el_2]);
      let _anchor_3 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_2][$append](_anchor_3);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 2, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], dart.fn(mh_dashboard_component__dashboard_component$46template.viewFactory_DashboardComponent1, AppViewAndintToAppViewOfDashboardComponent()));
      this[_NgFor_3_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_3], _TemplateRef_3_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.appsList;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_NgFor_3_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_3_9].ngDoCheck();
      }
      this[_appEl_3].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_3];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (mh_dashboard_component__dashboard_component$46template.ViewDashboardComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_appEl_3] = null;
    this[_NgFor_3_9] = null;
    this[_expr_0] = null;
    mh_dashboard_component__dashboard_component$46template.ViewDashboardComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("my-dashboard"));
    let t = mh_dashboard_component__dashboard_component$46template.ViewDashboardComponent0._renderType;
    t == null ? mh_dashboard_component__dashboard_component$46template.ViewDashboardComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:mobile_hive/lib/mh_dashboard_component/dashboard_component.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, mh_dashboard_component__dashboard_component$46template.styles$DashboardComponent) : t;
    this.setupComponentType(mh_dashboard_component__dashboard_component$46template.ViewDashboardComponent0._renderType);
  }).prototype = mh_dashboard_component__dashboard_component$46template.ViewDashboardComponent0.prototype;
  dart.addTypeTests(mh_dashboard_component__dashboard_component$46template.ViewDashboardComponent0);
  dart.setMethodSignature(mh_dashboard_component__dashboard_component$46template.ViewDashboardComponent0, () => ({
    __proto__: dart.getMethods(mh_dashboard_component__dashboard_component$46template.ViewDashboardComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(mh_dashboard_component__dashboard_component.DashboardComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(mh_dashboard_component__dashboard_component$46template.ViewDashboardComponent0, () => ({
    __proto__: dart.getFields(mh_dashboard_component__dashboard_component$46template.ViewDashboardComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.DivElement),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_3_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(mh_dashboard_component__dashboard_component$46template.ViewDashboardComponent0, {
    /*mh_dashboard_component__dashboard_component$46template.ViewDashboardComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  mh_dashboard_component__dashboard_component$46template.viewFactory_DashboardComponent0 = function(parentView, parentIndex) {
    return new mh_dashboard_component__dashboard_component$46template.ViewDashboardComponent0.new(parentView, parentIndex);
  };
  const _RouterLink_0_5 = Symbol('_RouterLink_0_5');
  const _el_1 = Symbol('_el_1');
  const _text_3 = Symbol('_text_3');
  const _expr_1 = Symbol('_expr_1');
  mh_dashboard_component__dashboard_component$46template._ViewDashboardComponent1 = class _ViewDashboardComponent1 extends src__core__linker__app_view.AppView$(mh_dashboard_component__dashboard_component.DashboardComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.AnchorElement._check(doc[$createElement]("a"));
      this[_el_0].className = "col-1-4";
      this.addShimC(this[_el_0]);
      this[_RouterLink_0_5] = new src__directives__router_link_directive$46template.RouterLinkNgCd.new(new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.parentView.viewData.parentIndex)), src__location__location.Location._check(this.parentView.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.parentView.viewData.parentIndex)), null, this[_el_0]));
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_1].className = "module app";
      this.addShimC(this[_el_1]);
      this[_el_2] = src__core__linker__app_view.createAndAppend(doc, "h4", this[_el_1]);
      this.addShimE(this[_el_2]);
      this[_text_3] = html.Text.new("");
      this[_el_2][$append](this[_text_3]);
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_0_5].instance, 'onClick')));
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_app = src__app.App._check(this.locals[$_get]("$implicit"));
      let currVal_0 = _ctx.appUrl(local_app.id);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_RouterLink_0_5].instance.routerLink = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_RouterLink_0_5].detectHostChanges(this, this[_el_0]);
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_app.name);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_text_3][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    destroyInternal() {
      this[_RouterLink_0_5].instance.ngOnDestroy();
    }
  };
  (mh_dashboard_component__dashboard_component$46template._ViewDashboardComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_RouterLink_0_5] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    this[_text_3] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    mh_dashboard_component__dashboard_component$46template._ViewDashboardComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = mh_dashboard_component__dashboard_component$46template.ViewDashboardComponent0._renderType;
  }).prototype = mh_dashboard_component__dashboard_component$46template._ViewDashboardComponent1.prototype;
  dart.addTypeTests(mh_dashboard_component__dashboard_component$46template._ViewDashboardComponent1);
  dart.setMethodSignature(mh_dashboard_component__dashboard_component$46template._ViewDashboardComponent1, () => ({
    __proto__: dart.getMethods(mh_dashboard_component__dashboard_component$46template._ViewDashboardComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(mh_dashboard_component__dashboard_component.DashboardComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(mh_dashboard_component__dashboard_component$46template._ViewDashboardComponent1, () => ({
    __proto__: dart.getFields(mh_dashboard_component__dashboard_component$46template._ViewDashboardComponent1.__proto__),
    [_el_0]: dart.fieldType(html.AnchorElement),
    [_RouterLink_0_5]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd),
    [_el_1]: dart.fieldType(html.DivElement),
    [_el_2]: dart.fieldType(html.Element),
    [_text_3]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.String),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  mh_dashboard_component__dashboard_component$46template.viewFactory_DashboardComponent1 = function(parentView, parentIndex) {
    return new mh_dashboard_component__dashboard_component$46template._ViewDashboardComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(mh_dashboard_component__dashboard_component$46template, {
    /*mh_dashboard_component__dashboard_component$46template.styles$DashboardComponentHost*/get styles$DashboardComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _DashboardComponent_0_5 = Symbol('_DashboardComponent_0_5');
  mh_dashboard_component__dashboard_component$46template._ViewDashboardComponentHost0 = class _ViewDashboardComponentHost0 extends src__core__linker__app_view.AppView$(mh_dashboard_component__dashboard_component.DashboardComponent) {
    build() {
      this[_compView_0] = new mh_dashboard_component__dashboard_component$46template.ViewDashboardComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_DashboardComponent_0_5] = new mh_dashboard_component__dashboard_component.DashboardComponent.new(src__mobile_service.MobileService._check(this.injectorGet(dart.wrapType(src__mobile_service.MobileService), this.viewData.parentIndex)));
      this[_compView_0].create(this[_DashboardComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfDashboardComponent()).new(0, this, this.rootEl, this[_DashboardComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_DashboardComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (mh_dashboard_component__dashboard_component$46template._ViewDashboardComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_DashboardComponent_0_5] = null;
    mh_dashboard_component__dashboard_component$46template._ViewDashboardComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = mh_dashboard_component__dashboard_component$46template._ViewDashboardComponentHost0.prototype;
  dart.addTypeTests(mh_dashboard_component__dashboard_component$46template._ViewDashboardComponentHost0);
  dart.setMethodSignature(mh_dashboard_component__dashboard_component$46template._ViewDashboardComponentHost0, () => ({
    __proto__: dart.getMethods(mh_dashboard_component__dashboard_component$46template._ViewDashboardComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(mh_dashboard_component__dashboard_component.DashboardComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(mh_dashboard_component__dashboard_component$46template._ViewDashboardComponentHost0, () => ({
    __proto__: dart.getFields(mh_dashboard_component__dashboard_component$46template._ViewDashboardComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(mh_dashboard_component__dashboard_component$46template.ViewDashboardComponent0),
    [_DashboardComponent_0_5]: dart.fieldType(mh_dashboard_component__dashboard_component.DashboardComponent)
  }));
  mh_dashboard_component__dashboard_component$46template.viewFactory_DashboardComponentHost0 = function(parentView, parentIndex) {
    return new mh_dashboard_component__dashboard_component$46template._ViewDashboardComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(mh_dashboard_component__dashboard_component$46template, {
    /*mh_dashboard_component__dashboard_component$46template._DashboardComponentNgFactory*/get _DashboardComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfDashboardComponent()).new("my-dashboard", dart.fn(mh_dashboard_component__dashboard_component$46template.viewFactory_DashboardComponentHost0, AppViewAndintToAppViewOfDashboardComponent())));
    }
  });
  dart.copyProperties(mh_dashboard_component__dashboard_component$46template, {
    get DashboardComponentNgFactory() {
      return mh_dashboard_component__dashboard_component$46template._DashboardComponentNgFactory;
    }
  });
  dart.defineLazy(mh_dashboard_component__dashboard_component$46template, {
    /*mh_dashboard_component__dashboard_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  mh_dashboard_component__dashboard_component$46template.initReflector = function() {
    if (dart.test(mh_dashboard_component__dashboard_component$46template._visited)) {
      return;
    }
    mh_dashboard_component__dashboard_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(mh_dashboard_component__dashboard_component.DashboardComponent), mh_dashboard_component__dashboard_component$46template.DashboardComponentNgFactory);
    angular$46template.initReflector();
    angular_router$46template.initReflector();
    src__app$46template.initReflector();
    src__mobile_service$46template.initReflector();
    src__route__route_paths$46template.initReflector();
  };
  dart.trackLibraries("packages/mobile_hive/mh_dashboard_component/dashboard_component.template.ddc", {
    "package:mobile_hive/mh_dashboard_component/dashboard_component.template.dart": mh_dashboard_component__dashboard_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["dashboard_component.template.dart"],"names":[],"mappings":"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","file":"dashboard_component.template.ddc.js"}');
  // Exports:
  return {
    mh_dashboard_component__dashboard_component$46template: mh_dashboard_component__dashboard_component$46template
  };
});

//# sourceMappingURL=dashboard_component.template.ddc.js.map
