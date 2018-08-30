define(['dart_sdk', 'packages/mobile_hive/app_component.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/mobile_hive/src/mh_header/header_component', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/angular_router/src/constants', 'packages/angular_router/angular_router.template', 'packages/mobile_hive/src/route/route_paths', 'packages/mobile_hive/app_component', 'packages/angular_components/utils/browser/window/module', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/utils/disposer/disposer', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/utils/browser/dom_service/angular_2', 'packages/angular_components/utils/angular/imperative_view/imperative_view', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular_components/utils/angular/managed_zone/angular_2', 'packages/angular_components/laminate/overlay/module', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/quiver/time', 'packages/http/src/base_client', 'packages/mobile_hive/src/mobile_service', 'packages/mobile_hive/src/app_manage_service', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/angular/angular.template', 'packages/angular_components/angular_components.template', 'packages/mobile_hive/src/app_manage_service.template', 'packages/mobile_hive/src/mobile_service.template', 'packages/mobile_hive/src/route/route_paths.template', 'packages/mobile_hive/mh_app_assessment/app_assess_component.template', 'packages/mobile_hive/mh_app_category/app_category_component.template', 'packages/mobile_hive/mh_app_management/app_manage_component.template', 'packages/mobile_hive/mh_apps_list_component/app_list_component.template', 'packages/mobile_hive/mh_dashboard_component/dashboard_component.template', 'packages/mobile_hive/src/mobile_component.template'], function(dart_sdk, app_component$46css, view_type, change_detection, modules, header_component, router_outlet_directive, constants, angular_router, route_paths, app_component, module, dom_service, disposer, ng_zone, angular_2, imperative_view, dom_ruler, angular_2$, module$, overlay_ref, zindexer, alignment, dom_popup_source, time, base_client, mobile_service, app_manage_service, managed_zone, angular, angular_components, app_manage_service$, mobile_service$, route_paths$, app_assess_component, app_category_component, app_manage_component, app_list_component, dashboard_component, mobile_component) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app_component$46css$46shim = app_component$46css.app_component$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__linker__component_loader = modules.src__core__linker__component_loader;
  const src__mh_header__header_component = header_component.src__mh_header__header_component;
  const src__route__routes = header_component.src__route__routes;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__location__location = router_outlet_directive.src__location__location;
  const src__router__router_outlet_token = router_outlet_directive.src__router__router_outlet_token;
  const src__router_hook = router_outlet_directive.src__router_hook;
  const src__directives__router_outlet_directive = router_outlet_directive.src__directives__router_outlet_directive;
  const src__directives__router_link_directive = constants.src__directives__router_link_directive;
  const src__directives__router_link_active_directive = constants.src__directives__router_link_active_directive;
  const src__directives__router_link_directive$46template = angular_router.src__directives__router_link_directive$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const src__route__route_paths = route_paths.src__route__route_paths;
  const app_component$ = app_component.app_component;
  const utils__browser__window__module = module.utils__browser__window__module;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const utils__browser__dom_service__angular_2 = angular_2.utils__browser__dom_service__angular_2;
  const utils__angular__imperative_view__imperative_view = imperative_view.utils__angular__imperative_view__imperative_view;
  const laminate__ruler__dom_ruler = dom_ruler.laminate__ruler__dom_ruler;
  const utils__angular__managed_zone__angular_2 = angular_2$.utils__angular__managed_zone__angular_2;
  const laminate__overlay__module = module$.laminate__overlay__module;
  const src__laminate__overlay__render__overlay_style_config = overlay_ref.src__laminate__overlay__render__overlay_style_config;
  const src__laminate__overlay__render__overlay_dom_render_service = overlay_ref.src__laminate__overlay__render__overlay_dom_render_service;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const time$ = time.time;
  const src__client = base_client.src__client;
  const src__mobile_service = mobile_service.src__mobile_service;
  const src__app_manage_service = app_manage_service.src__app_manage_service;
  const src__utils__angular__managed_zone__managed_zone = managed_zone.src__utils__angular__managed_zone__managed_zone;
  const angular$46template = angular.angular$46template;
  const angular_components$46template = angular_components.angular_components$46template;
  const src__app_manage_service$46template = app_manage_service$.src__app_manage_service$46template;
  const src__mobile_service$46template = mobile_service$.src__mobile_service$46template;
  const src__route__route_paths$46template = route_paths$.src__route__route_paths$46template;
  const mh_app_assessment__app_assess_component$46template = app_assess_component.mh_app_assessment__app_assess_component$46template;
  const mh_app_category__app_category_component$46template = app_category_component.mh_app_category__app_category_component$46template;
  const mh_app_management__app_manage_component$46template = app_manage_component.mh_app_management__app_manage_component$46template;
  const mh_apps_list_component__app_list_component$46template = app_list_component.mh_apps_list_component__app_list_component$46template;
  const mh_dashboard_component__dashboard_component$46template = dashboard_component.mh_dashboard_component__dashboard_component$46template;
  const src__mobile_component$46template = mobile_component.src__mobile_component$46template;
  const _root = Object.create(null);
  const app_component$46template = Object.create(_root);
  const src__mh_header__header_component$46template = Object.create(_root);
  const src__route__routes$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfRouterLink = () => (JSArrayOfRouterLink = dart.constFn(_interceptors.JSArray$(src__directives__router_link_directive.RouterLink)))();
  let ComponentRefOfAppComponent = () => (ComponentRefOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let AppViewOfAppComponent = () => (AppViewOfAppComponent = dart.constFn(src__core__linker__app_view.AppView$(app_component$.AppComponent)))();
  let AppViewAndintToAppViewOfAppComponent = () => (AppViewAndintToAppViewOfAppComponent = dart.constFn(dart.fnType(AppViewOfAppComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfAppComponent = () => (ComponentFactoryOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(app_component$.AppComponent)))();
  let ComponentRefOfHeaderComponent = () => (ComponentRefOfHeaderComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__mh_header__header_component.HeaderComponent)))();
  let AppViewOfHeaderComponent = () => (AppViewOfHeaderComponent = dart.constFn(src__core__linker__app_view.AppView$(src__mh_header__header_component.HeaderComponent)))();
  let AppViewAndintToAppViewOfHeaderComponent = () => (AppViewAndintToAppViewOfHeaderComponent = dart.constFn(dart.fnType(AppViewOfHeaderComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfHeaderComponent = () => (ComponentFactoryOfHeaderComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__mh_header__header_component.HeaderComponent)))();
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponent*/get styles$AppComponent() {
      return [app_component$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _HeaderComponent_0_5 = Symbol('_HeaderComponent_0_5');
  const _el_1 = Symbol('_el_1');
  const _el_2 = Symbol('_el_2');
  const _el_3 = Symbol('_el_3');
  const _el_4 = Symbol('_el_4');
  const _el_5 = Symbol('_el_5');
  const _el_6 = Symbol('_el_6');
  const _el_7 = Symbol('_el_7');
  const _el_9 = Symbol('_el_9');
  const _el_10 = Symbol('_el_10');
  const _el_12 = Symbol('_el_12');
  const _el_13 = Symbol('_el_13');
  const _el_15 = Symbol('_el_15');
  const _el_16 = Symbol('_el_16');
  const _RouterLink_16_5 = Symbol('_RouterLink_16_5');
  const _RouterLinkActive_16_6 = Symbol('_RouterLinkActive_16_6');
  const _el_17 = Symbol('_el_17');
  const _el_19 = Symbol('_el_19');
  const _el_21 = Symbol('_el_21');
  const _el_22 = Symbol('_el_22');
  const _RouterLink_22_5 = Symbol('_RouterLink_22_5');
  const _RouterLinkActive_22_6 = Symbol('_RouterLinkActive_22_6');
  const _el_23 = Symbol('_el_23');
  const _el_25 = Symbol('_el_25');
  const _el_27 = Symbol('_el_27');
  const _el_28 = Symbol('_el_28');
  const _RouterLink_28_5 = Symbol('_RouterLink_28_5');
  const _RouterLinkActive_28_6 = Symbol('_RouterLinkActive_28_6');
  const _el_29 = Symbol('_el_29');
  const _el_31 = Symbol('_el_31');
  const _el_33 = Symbol('_el_33');
  const _el_34 = Symbol('_el_34');
  const _RouterLink_34_5 = Symbol('_RouterLink_34_5');
  const _RouterLinkActive_34_6 = Symbol('_RouterLinkActive_34_6');
  const _el_35 = Symbol('_el_35');
  const _el_37 = Symbol('_el_37');
  const _el_39 = Symbol('_el_39');
  const _el_40 = Symbol('_el_40');
  const _RouterLink_40_5 = Symbol('_RouterLink_40_5');
  const _RouterLinkActive_40_6 = Symbol('_RouterLinkActive_40_6');
  const _el_41 = Symbol('_el_41');
  const _el_43 = Symbol('_el_43');
  const _el_45 = Symbol('_el_45');
  const _el_46 = Symbol('_el_46');
  const _text_47 = Symbol('_text_47');
  const _el_48 = Symbol('_el_48');
  const _appEl_48 = Symbol('_appEl_48');
  const _RouterOutlet_48_8 = Symbol('_RouterOutlet_48_8');
  const _expr_0 = Symbol('_expr_0');
  const _expr_2 = Symbol('_expr_2');
  const _expr_4 = Symbol('_expr_4');
  const _expr_6 = Symbol('_expr_6');
  const _expr_8 = Symbol('_expr_8');
  let const$;
  app_component$46template.ViewAppComponent0 = class ViewAppComponent0 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new src__mh_header__header_component$46template.ViewHeaderComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      parentRenderNode[$append](this[_el_0]);
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_HeaderComponent_0_5] = new src__mh_header__header_component.HeaderComponent.new();
      this[_compView_0].create(this[_HeaderComponent_0_5], []);
      let doc = html.document;
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, "aside", parentRenderNode);
      this[_el_1].className = "main-sidebar";
      this.addShimE(this[_el_1]);
      this[_el_2] = src__core__linker__app_view.createAndAppend(doc, "section", this[_el_1]);
      this[_el_2].className = "sidebar";
      this.addShimE(this[_el_2]);
      this[_el_3] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_2]);
      this[_el_3].className = "user-panel";
      this.addShimC(this[_el_3]);
      this[_el_4] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_3]);
      this[_el_4].className = "pull-left image";
      this.addShimC(this[_el_4]);
      this[_el_5] = src__core__linker__app_view.createAndAppend(doc, "img", this[_el_4]);
      this.createAttr(this[_el_5], "alt", "User Image");
      this[_el_5].className = "img-circle";
      this.createAttr(this[_el_5], "src", "dist/img/user2-160x160.jpg");
      this.addShimE(this[_el_5]);
      this[_el_6] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_3]);
      this[_el_6].className = "pull-left info";
      this.addShimC(this[_el_6]);
      this[_el_7] = src__core__linker__app_view.createAndAppend(doc, "p", this[_el_6]);
      this.addShimE(this[_el_7]);
      let _text_8 = html.Text.new("Alexander Pierce");
      this[_el_7][$append](_text_8);
      this[_el_9] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, "a", this[_el_6]));
      this.createAttr(this[_el_9], "href", "#");
      this.addShimC(this[_el_9]);
      this[_el_10] = src__core__linker__app_view.createAndAppend(doc, "i", this[_el_9]);
      this[_el_10].className = "fa fa-circle text-success";
      this.addShimE(this[_el_10]);
      let _text_11 = html.Text.new(" Online");
      this[_el_9][$append](_text_11);
      this[_el_12] = html.UListElement._check(src__core__linker__app_view.createAndAppend(doc, "ul", this[_el_2]));
      this[_el_12].className = "sidebar-menu";
      this.createAttr(this[_el_12], "data-widget", "tree");
      this.addShimC(this[_el_12]);
      this[_el_13] = src__core__linker__app_view.createAndAppend(doc, "li", this[_el_12]);
      this[_el_13].className = "header";
      this.addShimE(this[_el_13]);
      let _text_14 = html.Text.new("MAIN NAVIGATION");
      this[_el_13][$append](_text_14);
      this[_el_15] = src__core__linker__app_view.createAndAppend(doc, "li", this[_el_12]);
      this[_el_15].className = "treeview";
      this.addShimE(this[_el_15]);
      this[_el_16] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, "a", this[_el_15]));
      this.addShimC(this[_el_16]);
      this[_RouterLink_16_5] = new src__directives__router_link_directive$46template.RouterLinkNgCd.new(new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__location__location.Location._check(this.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.viewData.parentIndex)), null, this[_el_16]));
      this[_RouterLinkActive_16_6] = new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_16], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)));
      this[_el_17] = src__core__linker__app_view.createAndAppend(doc, "i", this[_el_16]);
      this[_el_17].className = "fa fa-dashboard";
      this.addShimE(this[_el_17]);
      let _text_18 = html.Text.new(" ");
      this[_el_16][$append](_text_18);
      this[_el_19] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_16]);
      this[_el_19].className = "sidenavtext";
      this.addShimE(this[_el_19]);
      let _text_20 = html.Text.new("Dashboard");
      this[_el_19][$append](_text_20);
      this[_RouterLinkActive_16_6].links = JSArrayOfRouterLink().of([this[_RouterLink_16_5].instance]);
      this[_el_21] = src__core__linker__app_view.createAndAppend(doc, "li", this[_el_12]);
      this[_el_21].className = "treeview";
      this.addShimE(this[_el_21]);
      this[_el_22] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, "a", this[_el_21]));
      this.addShimC(this[_el_22]);
      this[_RouterLink_22_5] = new src__directives__router_link_directive$46template.RouterLinkNgCd.new(new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__location__location.Location._check(this.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.viewData.parentIndex)), null, this[_el_22]));
      this[_RouterLinkActive_22_6] = new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_22], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)));
      this[_el_23] = src__core__linker__app_view.createAndAppend(doc, "i", this[_el_22]);
      this[_el_23].className = "fa fa-th";
      this.addShimE(this[_el_23]);
      let _text_24 = html.Text.new(" ");
      this[_el_22][$append](_text_24);
      this[_el_25] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_22]);
      this[_el_25].className = "sidenavtext";
      this.addShimE(this[_el_25]);
      let _text_26 = html.Text.new("Mobile Applications");
      this[_el_25][$append](_text_26);
      this[_RouterLinkActive_22_6].links = JSArrayOfRouterLink().of([this[_RouterLink_22_5].instance]);
      this[_el_27] = src__core__linker__app_view.createAndAppend(doc, "li", this[_el_12]);
      this[_el_27].className = "treeview";
      this.addShimE(this[_el_27]);
      this[_el_28] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, "a", this[_el_27]));
      this.addShimC(this[_el_28]);
      this[_RouterLink_28_5] = new src__directives__router_link_directive$46template.RouterLinkNgCd.new(new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__location__location.Location._check(this.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.viewData.parentIndex)), null, this[_el_28]));
      this[_RouterLinkActive_28_6] = new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_28], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)));
      this[_el_29] = src__core__linker__app_view.createAndAppend(doc, "i", this[_el_28]);
      this[_el_29].className = "fa fa-th";
      this.addShimE(this[_el_29]);
      let _text_30 = html.Text.new(" ");
      this[_el_28][$append](_text_30);
      this[_el_31] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_28]);
      this[_el_31].className = "sidenavtext";
      this.addShimE(this[_el_31]);
      let _text_32 = html.Text.new("App Management");
      this[_el_31][$append](_text_32);
      this[_RouterLinkActive_28_6].links = JSArrayOfRouterLink().of([this[_RouterLink_28_5].instance]);
      this[_el_33] = src__core__linker__app_view.createAndAppend(doc, "li", this[_el_12]);
      this[_el_33].className = "treeview";
      this.addShimE(this[_el_33]);
      this[_el_34] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, "a", this[_el_33]));
      this.addShimC(this[_el_34]);
      this[_RouterLink_34_5] = new src__directives__router_link_directive$46template.RouterLinkNgCd.new(new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__location__location.Location._check(this.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.viewData.parentIndex)), null, this[_el_34]));
      this[_RouterLinkActive_34_6] = new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_34], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)));
      this[_el_35] = src__core__linker__app_view.createAndAppend(doc, "i", this[_el_34]);
      this[_el_35].className = "fa fa-th";
      this.addShimE(this[_el_35]);
      let _text_36 = html.Text.new(" ");
      this[_el_34][$append](_text_36);
      this[_el_37] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_34]);
      this[_el_37].className = "sidenavtext";
      this.addShimE(this[_el_37]);
      let _text_38 = html.Text.new("App Assessment");
      this[_el_37][$append](_text_38);
      this[_RouterLinkActive_34_6].links = JSArrayOfRouterLink().of([this[_RouterLink_34_5].instance]);
      this[_el_39] = src__core__linker__app_view.createAndAppend(doc, "li", this[_el_12]);
      this[_el_39].className = "treeview";
      this.addShimE(this[_el_39]);
      this[_el_40] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, "a", this[_el_39]));
      this.addShimC(this[_el_40]);
      this[_RouterLink_40_5] = new src__directives__router_link_directive$46template.RouterLinkNgCd.new(new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__location__location.Location._check(this.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.viewData.parentIndex)), null, this[_el_40]));
      this[_RouterLinkActive_40_6] = new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_40], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)));
      this[_el_41] = src__core__linker__app_view.createAndAppend(doc, "i", this[_el_40]);
      this[_el_41].className = "fa fa-th";
      this.addShimE(this[_el_41]);
      let _text_42 = html.Text.new(" ");
      this[_el_40][$append](_text_42);
      this[_el_43] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_40]);
      this[_el_43].className = "sidenavtext";
      this.addShimE(this[_el_43]);
      let _text_44 = html.Text.new("App Category");
      this[_el_43][$append](_text_44);
      this[_RouterLinkActive_40_6].links = JSArrayOfRouterLink().of([this[_RouterLink_40_5].instance]);
      this[_el_45] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_45].className = "main";
      this.addShimC(this[_el_45]);
      this[_el_46] = src__core__linker__app_view.createAndAppend(doc, "h1", this[_el_45]);
      this.addShimE(this[_el_46]);
      this[_text_47] = html.Text.new(this.ctx.title != null ? this.ctx.title : "");
      this[_el_46][$append](this[_text_47]);
      this[_el_48] = src__core__linker__app_view.createAndAppend(doc, "router-outlet", this[_el_45]);
      this.addShimE(this[_el_48]);
      this[_appEl_48] = new src__core__linker__view_container.ViewContainer.new(48, 45, this, this[_el_48]);
      this[_RouterOutlet_48_8] = new src__directives__router_outlet_directive.RouterOutlet.new(src__router__router_outlet_token.RouterOutletToken._check(this.parentView.injectorGet(dart.wrapType(src__router__router_outlet_token.RouterOutletToken), this.viewData.parentIndex, null)), this[_appEl_48], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__router_hook.RouterHook._check(this.parentView.injectorGet(dart.wrapType(src__router_hook.RouterHook), this.viewData.parentIndex, null)));
      this[_el_16][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_16_5].instance, 'onClick')));
      this[_el_22][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_22_5].instance, 'onClick')));
      this[_el_28][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_28_5].instance, 'onClick')));
      this[_el_34][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_34_5].instance, 'onClick')));
      this[_el_40][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_40_5].instance, 'onClick')));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      let currVal_0 = src__route__route_paths.RoutePaths.dashboard.toUrl();
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_RouterLink_16_5].instance.routerLink = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (firstCheck) {
        this[_RouterLinkActive_16_6].routerLinkActive = "active";
      }
      let currVal_2 = src__route__route_paths.RoutePaths.applications.toUrl();
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_RouterLink_22_5].instance.routerLink = currVal_2;
        this[_expr_2] = currVal_2;
      }
      if (firstCheck) {
        this[_RouterLinkActive_22_6].routerLinkActive = "active";
      }
      let currVal_4 = src__route__route_paths.RoutePaths.management.toUrl();
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_RouterLink_28_5].instance.routerLink = currVal_4;
        this[_expr_4] = currVal_4;
      }
      if (firstCheck) {
        this[_RouterLinkActive_28_6].routerLinkActive = "active";
      }
      let currVal_6 = src__route__route_paths.RoutePaths.assessment.toUrl();
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_RouterLink_34_5].instance.routerLink = currVal_6;
        this[_expr_6] = currVal_6;
      }
      if (firstCheck) {
        this[_RouterLinkActive_34_6].routerLinkActive = "active";
      }
      let currVal_8 = src__route__route_paths.RoutePaths.category.toUrl();
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_RouterLink_40_5].instance.routerLink = currVal_8;
        this[_expr_8] = currVal_8;
      }
      if (firstCheck) {
        this[_RouterLinkActive_40_6].routerLinkActive = "active";
        if (!(src__route__routes.Routes.all == null)) {
          this[_RouterOutlet_48_8].routes = src__route__routes.Routes.all;
        }
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_RouterOutlet_48_8].ngOnInit();
      }
      this[_appEl_48].detectChangesInNestedViews();
      this[_RouterLink_16_5].detectHostChanges(this, this[_el_16]);
      this[_RouterLink_22_5].detectHostChanges(this, this[_el_22]);
      this[_RouterLink_28_5].detectHostChanges(this, this[_el_28]);
      this[_RouterLink_34_5].detectHostChanges(this, this[_el_34]);
      this[_RouterLink_40_5].detectHostChanges(this, this[_el_40]);
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_RouterLinkActive_16_6].ngAfterViewInit();
          this[_RouterLinkActive_22_6].ngAfterViewInit();
          this[_RouterLinkActive_28_6].ngAfterViewInit();
          this[_RouterLinkActive_34_6].ngAfterViewInit();
          this[_RouterLinkActive_40_6].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      let t = this[_appEl_48];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_0];
      t$ == null ? null : t$.destroy();
      this[_RouterLink_16_5].instance.ngOnDestroy();
      this[_RouterLinkActive_16_6].ngOnDestroy();
      this[_RouterLink_22_5].instance.ngOnDestroy();
      this[_RouterLinkActive_22_6].ngOnDestroy();
      this[_RouterLink_28_5].instance.ngOnDestroy();
      this[_RouterLinkActive_28_6].ngOnDestroy();
      this[_RouterLink_34_5].instance.ngOnDestroy();
      this[_RouterLinkActive_34_6].ngOnDestroy();
      this[_RouterLink_40_5].instance.ngOnDestroy();
      this[_RouterLinkActive_40_6].ngOnDestroy();
      this[_RouterOutlet_48_8].ngOnDestroy();
    }
  };
  (app_component$46template.ViewAppComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_HeaderComponent_0_5] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    this[_el_3] = null;
    this[_el_4] = null;
    this[_el_5] = null;
    this[_el_6] = null;
    this[_el_7] = null;
    this[_el_9] = null;
    this[_el_10] = null;
    this[_el_12] = null;
    this[_el_13] = null;
    this[_el_15] = null;
    this[_el_16] = null;
    this[_RouterLink_16_5] = null;
    this[_RouterLinkActive_16_6] = null;
    this[_el_17] = null;
    this[_el_19] = null;
    this[_el_21] = null;
    this[_el_22] = null;
    this[_RouterLink_22_5] = null;
    this[_RouterLinkActive_22_6] = null;
    this[_el_23] = null;
    this[_el_25] = null;
    this[_el_27] = null;
    this[_el_28] = null;
    this[_RouterLink_28_5] = null;
    this[_RouterLinkActive_28_6] = null;
    this[_el_29] = null;
    this[_el_31] = null;
    this[_el_33] = null;
    this[_el_34] = null;
    this[_RouterLink_34_5] = null;
    this[_RouterLinkActive_34_6] = null;
    this[_el_35] = null;
    this[_el_37] = null;
    this[_el_39] = null;
    this[_el_40] = null;
    this[_RouterLink_40_5] = null;
    this[_RouterLinkActive_40_6] = null;
    this[_el_41] = null;
    this[_el_43] = null;
    this[_el_45] = null;
    this[_el_46] = null;
    this[_text_47] = null;
    this[_el_48] = null;
    this[_appEl_48] = null;
    this[_RouterOutlet_48_8] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_expr_4] = null;
    this[_expr_6] = null;
    this[_expr_8] = null;
    app_component$46template.ViewAppComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("my-app"));
    let t = app_component$46template.ViewAppComponent0._renderType;
    t == null ? app_component$46template.ViewAppComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:mobile_hive/lib/app_component.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, app_component$46template.styles$AppComponent) : t;
    this.setupComponentType(app_component$46template.ViewAppComponent0._renderType);
  }).prototype = app_component$46template.ViewAppComponent0.prototype;
  dart.addTypeTests(app_component$46template.ViewAppComponent0);
  dart.setMethodSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getMethods(app_component$46template.ViewAppComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getFields(app_component$46template.ViewAppComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(src__mh_header__header_component$46template.ViewHeaderComponent0),
    [_HeaderComponent_0_5]: dart.fieldType(src__mh_header__header_component.HeaderComponent),
    [_el_1]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.Element),
    [_el_3]: dart.fieldType(html.DivElement),
    [_el_4]: dart.fieldType(html.DivElement),
    [_el_5]: dart.fieldType(html.Element),
    [_el_6]: dart.fieldType(html.DivElement),
    [_el_7]: dart.fieldType(html.Element),
    [_el_9]: dart.fieldType(html.AnchorElement),
    [_el_10]: dart.fieldType(html.Element),
    [_el_12]: dart.fieldType(html.UListElement),
    [_el_13]: dart.fieldType(html.Element),
    [_el_15]: dart.fieldType(html.Element),
    [_el_16]: dart.fieldType(html.AnchorElement),
    [_RouterLink_16_5]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd),
    [_RouterLinkActive_16_6]: dart.fieldType(src__directives__router_link_active_directive.RouterLinkActive),
    [_el_17]: dart.fieldType(html.Element),
    [_el_19]: dart.fieldType(html.Element),
    [_el_21]: dart.fieldType(html.Element),
    [_el_22]: dart.fieldType(html.AnchorElement),
    [_RouterLink_22_5]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd),
    [_RouterLinkActive_22_6]: dart.fieldType(src__directives__router_link_active_directive.RouterLinkActive),
    [_el_23]: dart.fieldType(html.Element),
    [_el_25]: dart.fieldType(html.Element),
    [_el_27]: dart.fieldType(html.Element),
    [_el_28]: dart.fieldType(html.AnchorElement),
    [_RouterLink_28_5]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd),
    [_RouterLinkActive_28_6]: dart.fieldType(src__directives__router_link_active_directive.RouterLinkActive),
    [_el_29]: dart.fieldType(html.Element),
    [_el_31]: dart.fieldType(html.Element),
    [_el_33]: dart.fieldType(html.Element),
    [_el_34]: dart.fieldType(html.AnchorElement),
    [_RouterLink_34_5]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd),
    [_RouterLinkActive_34_6]: dart.fieldType(src__directives__router_link_active_directive.RouterLinkActive),
    [_el_35]: dart.fieldType(html.Element),
    [_el_37]: dart.fieldType(html.Element),
    [_el_39]: dart.fieldType(html.Element),
    [_el_40]: dart.fieldType(html.AnchorElement),
    [_RouterLink_40_5]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd),
    [_RouterLinkActive_40_6]: dart.fieldType(src__directives__router_link_active_directive.RouterLinkActive),
    [_el_41]: dart.fieldType(html.Element),
    [_el_43]: dart.fieldType(html.Element),
    [_el_45]: dart.fieldType(html.DivElement),
    [_el_46]: dart.fieldType(html.Element),
    [_text_47]: dart.fieldType(html.Text),
    [_el_48]: dart.fieldType(html.Element),
    [_appEl_48]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_RouterOutlet_48_8]: dart.fieldType(src__directives__router_outlet_directive.RouterOutlet),
    [_expr_0]: dart.fieldType(core.String),
    [_expr_2]: dart.fieldType(core.String),
    [_expr_4]: dart.fieldType(core.String),
    [_expr_6]: dart.fieldType(core.String),
    [_expr_8]: dart.fieldType(core.String)
  }));
  dart.defineLazy(app_component$46template.ViewAppComponent0, {
    /*app_component$46template.ViewAppComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  app_component$46template.viewFactory_AppComponent0 = function(parentView, parentIndex) {
    return new app_component$46template.ViewAppComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponentHost*/get styles$AppComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _AppComponent_0_5 = Symbol('_AppComponent_0_5');
  const __Document_0_6 = Symbol('__Document_0_6');
  const __Window_0_7 = Symbol('__Window_0_7');
  const __DomService_0_8 = Symbol('__DomService_0_8');
  const __AcxImperativeViewUtils_0_9 = Symbol('__AcxImperativeViewUtils_0_9');
  const __DomRuler_0_10 = Symbol('__DomRuler_0_10');
  const __ManagedZone_0_11 = Symbol('__ManagedZone_0_11');
  const __overlayContainerName_0_12 = Symbol('__overlayContainerName_0_12');
  const __overlayContainerParent_0_13 = Symbol('__overlayContainerParent_0_13');
  const __overlayContainer_0_14 = Symbol('__overlayContainer_0_14');
  const __overlaySyncDom_0_15 = Symbol('__overlaySyncDom_0_15');
  const __overlayRepositionLoop_0_16 = Symbol('__overlayRepositionLoop_0_16');
  const __OverlayStyleConfig_0_17 = Symbol('__OverlayStyleConfig_0_17');
  const __ZIndexer_0_18 = Symbol('__ZIndexer_0_18');
  const __OverlayDomRenderService_0_19 = Symbol('__OverlayDomRenderService_0_19');
  const __OverlayService_0_20 = Symbol('__OverlayService_0_20');
  const __defaultPopupPositions_0_21 = Symbol('__defaultPopupPositions_0_21');
  const __DomPopupSourceFactory_0_22 = Symbol('__DomPopupSourceFactory_0_22');
  const __Clock_0_23 = Symbol('__Clock_0_23');
  const __MobileService_0_25 = Symbol('__MobileService_0_25');
  const __ManageService_0_26 = Symbol('__ManageService_0_26');
  const _Document_0_6 = Symbol('_Document_0_6');
  const _Window_0_7 = Symbol('_Window_0_7');
  const _DomService_0_8 = Symbol('_DomService_0_8');
  const _AcxImperativeViewUtils_0_9 = Symbol('_AcxImperativeViewUtils_0_9');
  const _DomRuler_0_10 = Symbol('_DomRuler_0_10');
  const _ManagedZone_0_11 = Symbol('_ManagedZone_0_11');
  let const$0;
  const _overlayContainerName_0_12 = Symbol('_overlayContainerName_0_12');
  let const$1;
  const _overlayContainerParent_0_13 = Symbol('_overlayContainerParent_0_13');
  let const$2;
  const _overlayContainer_0_14 = Symbol('_overlayContainer_0_14');
  const _overlaySyncDom_0_15 = Symbol('_overlaySyncDom_0_15');
  const _overlayRepositionLoop_0_16 = Symbol('_overlayRepositionLoop_0_16');
  const _OverlayStyleConfig_0_17 = Symbol('_OverlayStyleConfig_0_17');
  const _ZIndexer_0_18 = Symbol('_ZIndexer_0_18');
  const _OverlayDomRenderService_0_19 = Symbol('_OverlayDomRenderService_0_19');
  const _OverlayService_0_20 = Symbol('_OverlayService_0_20');
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  const _defaultPopupPositions_0_21 = Symbol('_defaultPopupPositions_0_21');
  const _DomPopupSourceFactory_0_22 = Symbol('_DomPopupSourceFactory_0_22');
  let const$17;
  const _Clock_0_23 = Symbol('_Clock_0_23');
  const _MobileService_0_25 = Symbol('_MobileService_0_25');
  const _ManageService_0_26 = Symbol('_ManageService_0_26');
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  app_component$46template._ViewAppComponentHost0 = class _ViewAppComponentHost0 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    get [_Document_0_6]() {
      if (this[__Document_0_6] == null) {
        this[__Document_0_6] = utils__browser__window__module.getDocument();
      }
      return this[__Document_0_6];
    }
    get [_Window_0_7]() {
      if (this[__Window_0_7] == null) {
        this[__Window_0_7] = utils__browser__window__module.getWindow();
      }
      return this[__Window_0_7];
    }
    get [_DomService_0_8]() {
      if (this[__DomService_0_8] == null) {
        this[__DomService_0_8] = utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)), src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), html.Window._check(this[_Window_0_7]));
      }
      return this[__DomService_0_8];
    }
    get [_AcxImperativeViewUtils_0_9]() {
      if (this[__AcxImperativeViewUtils_0_9] == null) {
        this[__AcxImperativeViewUtils_0_9] = new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8]));
      }
      return this[__AcxImperativeViewUtils_0_9];
    }
    get [_DomRuler_0_10]() {
      if (this[__DomRuler_0_10] == null) {
        this[__DomRuler_0_10] = laminate__ruler__dom_ruler.DomRuler.new(html.Document._check(this[_Document_0_6]), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8]));
      }
      return this[__DomRuler_0_10];
    }
    get [_ManagedZone_0_11]() {
      if (this[__ManagedZone_0_11] == null) {
        this[__ManagedZone_0_11] = new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      }
      return this[__ManagedZone_0_11];
    }
    get [_overlayContainerName_0_12]() {
      if (this[__overlayContainerName_0_12] == null) {
        this[__overlayContainerName_0_12] = laminate__overlay__module.getDefaultContainerName(this.injectorGet(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerName_0_12];
    }
    get [_overlayContainerParent_0_13]() {
      if (this[__overlayContainerParent_0_13] == null) {
        this[__overlayContainerParent_0_13] = laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_0_6]), this.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerParent_0_13];
    }
    get [_overlayContainer_0_14]() {
      if (this[__overlayContainer_0_14] == null) {
        this[__overlayContainer_0_14] = laminate__overlay__module.getDefaultContainer(core.String._check(this[_overlayContainerName_0_12]), html.HtmlElement._check(this[_overlayContainerParent_0_13]), this.injectorGet(const$2 || (const$2 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainer_0_14];
    }
    get [_overlaySyncDom_0_15]() {
      if (this[__overlaySyncDom_0_15] == null) {
        this[__overlaySyncDom_0_15] = true;
      }
      return this[__overlaySyncDom_0_15];
    }
    get [_overlayRepositionLoop_0_16]() {
      if (this[__overlayRepositionLoop_0_16] == null) {
        this[__overlayRepositionLoop_0_16] = true;
      }
      return this[__overlayRepositionLoop_0_16];
    }
    get [_OverlayStyleConfig_0_17]() {
      if (this[__OverlayStyleConfig_0_17] == null) {
        this[__OverlayStyleConfig_0_17] = new src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.new(html.Document._check(this[_Document_0_6]));
      }
      return this[__OverlayStyleConfig_0_17];
    }
    get [_ZIndexer_0_18]() {
      if (this[__ZIndexer_0_18] == null) {
        this[__ZIndexer_0_18] = laminate__overlay__zindexer.ZIndexer.new();
      }
      return this[__ZIndexer_0_18];
    }
    get [_OverlayDomRenderService_0_19]() {
      if (this[__OverlayDomRenderService_0_19] == null) {
        this[__OverlayDomRenderService_0_19] = new src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.new(this[_OverlayStyleConfig_0_17], html.HtmlElement._check(this[_overlayContainer_0_14]), core.String._check(this[_overlayContainerName_0_12]), this[_DomRuler_0_10], utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8]), this[_AcxImperativeViewUtils_0_9], this[_overlaySyncDom_0_15], this[_overlayRepositionLoop_0_16], this[_ZIndexer_0_18]);
      }
      return this[__OverlayDomRenderService_0_19];
    }
    get [_OverlayService_0_20]() {
      if (this[__OverlayService_0_20] == null) {
        this[__OverlayService_0_20] = new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_overlaySyncDom_0_15], this[_OverlayDomRenderService_0_19], src__laminate__overlay__overlay_service.OverlayService._check(this.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex, null)));
      }
      return this[__OverlayService_0_20];
    }
    get [_defaultPopupPositions_0_21]() {
      if (this[__defaultPopupPositions_0_21] == null) {
        this[__defaultPopupPositions_0_21] = const$16 || (const$16 = dart.constList([const$3 || (const$3 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "top center"}))), const$5 || (const$5 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "top right", originX: const$4 || (const$4 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))}))), const$7 || (const$7 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "top left", originX: const$6 || (const$6 = dart.const(new laminate__enums__alignment.Alignment.new("Start", "flex-start")))}))), const$9 || (const$9 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "bottom center", originY: const$8 || (const$8 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))}))), const$12 || (const$12 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "bottom right", originX: const$10 || (const$10 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end"))), originY: const$11 || (const$11 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))}))), const$15 || (const$15 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "bottom left", originX: const$13 || (const$13 = dart.const(new laminate__enums__alignment.Alignment.new("Start", "flex-start"))), originY: const$14 || (const$14 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))})))], laminate__enums__alignment.RelativePosition));
      }
      return this[__defaultPopupPositions_0_21];
    }
    get [_DomPopupSourceFactory_0_22]() {
      if (this[__DomPopupSourceFactory_0_22] == null) {
        this[__DomPopupSourceFactory_0_22] = new src__laminate__popup__dom_popup_source.DomPopupSourceFactory.new(this[_DomRuler_0_10]);
      }
      return this[__DomPopupSourceFactory_0_22];
    }
    get [_Clock_0_23]() {
      if (this[__Clock_0_23] == null) {
        this[__Clock_0_23] = const$17 || (const$17 = dart.const(new time$.Clock.new()));
      }
      return this[__Clock_0_23];
    }
    get [_MobileService_0_25]() {
      if (this[__MobileService_0_25] == null) {
        this[__MobileService_0_25] = new src__mobile_service.MobileService.new(src__client.Client._check(this.injectorGet(dart.wrapType(src__client.Client), this.viewData.parentIndex)));
      }
      return this[__MobileService_0_25];
    }
    get [_ManageService_0_26]() {
      if (this[__ManageService_0_26] == null) {
        this[__ManageService_0_26] = new src__app_manage_service.ManageService.new(src__client.Client._check(this.injectorGet(dart.wrapType(src__client.Client), this.viewData.parentIndex)));
      }
      return this[__ManageService_0_26];
    }
    build() {
      this[_compView_0] = new app_component$46template.ViewAppComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_AppComponent_0_5] = new app_component$.AppComponent.new();
      this[_compView_0].create(this[_AppComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfAppComponent()).new(0, this, this.rootEl, this[_AppComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(html.Document) && 0 === nodeIndex) {
        return this[_Document_0_6];
      }
      if (token === dart.wrapType(html.Window) && 0 === nodeIndex) {
        return this[_Window_0_7];
      }
      if (token === dart.wrapType(utils__browser__dom_service__dom_service.DomService) && 0 === nodeIndex) {
        return this[_DomService_0_8];
      }
      if (token === dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils) && 0 === nodeIndex) {
        return this[_AcxImperativeViewUtils_0_9];
      }
      if (token === dart.wrapType(laminate__ruler__dom_ruler.DomRuler) && 0 === nodeIndex) {
        return this[_DomRuler_0_10];
      }
      if (token === dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone) && 0 === nodeIndex) {
        return this[_ManagedZone_0_11];
      }
      if (token === (const$18 || (const$18 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName")))) && 0 === nodeIndex) {
        return this[_overlayContainerName_0_12];
      }
      if (token === (const$19 || (const$19 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent")))) && 0 === nodeIndex) {
        return this[_overlayContainerParent_0_13];
      }
      if (token === (const$20 || (const$20 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer")))) && 0 === nodeIndex) {
        return this[_overlayContainer_0_14];
      }
      if (token === (const$21 || (const$21 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlaySyncDom")))) && 0 === nodeIndex) {
        return this[_overlaySyncDom_0_15];
      }
      if (token === (const$22 || (const$22 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop")))) && 0 === nodeIndex) {
        return this[_overlayRepositionLoop_0_16];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig) && 0 === nodeIndex) {
        return this[_OverlayStyleConfig_0_17];
      }
      if (token === dart.wrapType(laminate__overlay__zindexer.ZIndexer) && 0 === nodeIndex) {
        return this[_ZIndexer_0_18];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService) && 0 === nodeIndex) {
        return this[_OverlayDomRenderService_0_19];
      }
      if (token === dart.wrapType(src__laminate__overlay__overlay_service.OverlayService) && 0 === nodeIndex) {
        return this[_OverlayService_0_20];
      }
      if (token === (const$23 || (const$23 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions")))) && 0 === nodeIndex) {
        return this[_defaultPopupPositions_0_21];
      }
      if (token === dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory) && 0 === nodeIndex) {
        return this[_DomPopupSourceFactory_0_22];
      }
      if ((token === dart.wrapType(time$.Clock) || token === (const$24 || (const$24 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("third_party.dart_src.acx.material_datepicker.datepickerClock"))))) && 0 === nodeIndex) {
        return this[_Clock_0_23];
      }
      if (token === dart.wrapType(src__mobile_service.MobileService) && 0 === nodeIndex) {
        return this[_MobileService_0_25];
      }
      if (token === dart.wrapType(src__app_manage_service.ManageService) && 0 === nodeIndex) {
        return this[_ManageService_0_26];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (app_component$46template._ViewAppComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AppComponent_0_5] = null;
    this[__Document_0_6] = null;
    this[__Window_0_7] = null;
    this[__DomService_0_8] = null;
    this[__AcxImperativeViewUtils_0_9] = null;
    this[__DomRuler_0_10] = null;
    this[__ManagedZone_0_11] = null;
    this[__overlayContainerName_0_12] = null;
    this[__overlayContainerParent_0_13] = null;
    this[__overlayContainer_0_14] = null;
    this[__overlaySyncDom_0_15] = null;
    this[__overlayRepositionLoop_0_16] = null;
    this[__OverlayStyleConfig_0_17] = null;
    this[__ZIndexer_0_18] = null;
    this[__OverlayDomRenderService_0_19] = null;
    this[__OverlayService_0_20] = null;
    this[__defaultPopupPositions_0_21] = null;
    this[__DomPopupSourceFactory_0_22] = null;
    this[__Clock_0_23] = null;
    this[__MobileService_0_25] = null;
    this[__ManageService_0_26] = null;
    app_component$46template._ViewAppComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = app_component$46template._ViewAppComponentHost0.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponentHost0);
  dart.setMethodSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getGetters(app_component$46template._ViewAppComponentHost0.__proto__),
    [_Document_0_6]: dart.dynamic,
    [_Window_0_7]: dart.dynamic,
    [_DomService_0_8]: dart.dynamic,
    [_AcxImperativeViewUtils_0_9]: utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils,
    [_DomRuler_0_10]: laminate__ruler__dom_ruler.DomRuler,
    [_ManagedZone_0_11]: utils__angular__managed_zone__angular_2.Angular2ManagedZone,
    [_overlayContainerName_0_12]: dart.dynamic,
    [_overlayContainerParent_0_13]: dart.dynamic,
    [_overlayContainer_0_14]: dart.dynamic,
    [_overlaySyncDom_0_15]: core.bool,
    [_overlayRepositionLoop_0_16]: core.bool,
    [_OverlayStyleConfig_0_17]: src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig,
    [_ZIndexer_0_18]: laminate__overlay__zindexer.ZIndexer,
    [_OverlayDomRenderService_0_19]: src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService,
    [_OverlayService_0_20]: src__laminate__overlay__overlay_service.OverlayService,
    [_defaultPopupPositions_0_21]: core.List$(laminate__enums__alignment.RelativePosition),
    [_DomPopupSourceFactory_0_22]: src__laminate__popup__dom_popup_source.DomPopupSourceFactory,
    [_Clock_0_23]: time$.Clock,
    [_MobileService_0_25]: src__mobile_service.MobileService,
    [_ManageService_0_26]: src__app_manage_service.ManageService
  }));
  dart.setFieldSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(app_component$46template.ViewAppComponent0),
    [_AppComponent_0_5]: dart.fieldType(app_component$.AppComponent),
    [__Document_0_6]: dart.fieldType(dart.dynamic),
    [__Window_0_7]: dart.fieldType(dart.dynamic),
    [__DomService_0_8]: dart.fieldType(dart.dynamic),
    [__AcxImperativeViewUtils_0_9]: dart.fieldType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils),
    [__DomRuler_0_10]: dart.fieldType(laminate__ruler__dom_ruler.DomRuler),
    [__ManagedZone_0_11]: dart.fieldType(utils__angular__managed_zone__angular_2.Angular2ManagedZone),
    [__overlayContainerName_0_12]: dart.fieldType(dart.dynamic),
    [__overlayContainerParent_0_13]: dart.fieldType(dart.dynamic),
    [__overlayContainer_0_14]: dart.fieldType(dart.dynamic),
    [__overlaySyncDom_0_15]: dart.fieldType(core.bool),
    [__overlayRepositionLoop_0_16]: dart.fieldType(core.bool),
    [__OverlayStyleConfig_0_17]: dart.fieldType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig),
    [__ZIndexer_0_18]: dart.fieldType(laminate__overlay__zindexer.ZIndexer),
    [__OverlayDomRenderService_0_19]: dart.fieldType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService),
    [__OverlayService_0_20]: dart.fieldType(src__laminate__overlay__overlay_service.OverlayService),
    [__defaultPopupPositions_0_21]: dart.fieldType(ListOfRelativePosition()),
    [__DomPopupSourceFactory_0_22]: dart.fieldType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory),
    [__Clock_0_23]: dart.fieldType(time$.Clock),
    [__MobileService_0_25]: dart.fieldType(src__mobile_service.MobileService),
    [__ManageService_0_26]: dart.fieldType(src__app_manage_service.ManageService)
  }));
  app_component$46template.viewFactory_AppComponentHost0 = function(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(app_component$46template, {
    /*app_component$46template._AppComponentNgFactory*/get _AppComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfAppComponent()).new("my-app", dart.fn(app_component$46template.viewFactory_AppComponentHost0, AppViewAndintToAppViewOfAppComponent())));
    }
  });
  dart.copyProperties(app_component$46template, {
    get AppComponentNgFactory() {
      return app_component$46template._AppComponentNgFactory;
    }
  });
  dart.defineLazy(app_component$46template, {
    /*app_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  app_component$46template.initReflector = function() {
    if (dart.test(app_component$46template._visited)) {
      return;
    }
    app_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(app_component$.AppComponent), app_component$46template.AppComponentNgFactory);
    angular$46template.initReflector();
    angular_components$46template.initReflector();
    angular_router$46template.initReflector();
    src__app_manage_service$46template.initReflector();
    src__mh_header__header_component$46template.initReflector();
    src__mobile_service$46template.initReflector();
    src__route__route_paths$46template.initReflector();
    src__route__routes$46template.initReflector();
  };
  dart.defineLazy(src__mh_header__header_component$46template, {
    /*src__mh_header__header_component$46template.styles$HeaderComponent*/get styles$HeaderComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0$ = Symbol('_el_0');
  const _el_3$ = Symbol('_el_3');
  const _el_6$ = Symbol('_el_6');
  const _el_7$ = Symbol('_el_7');
  const _el_10$ = Symbol('_el_10');
  const _el_11 = Symbol('_el_11');
  const _el_12$ = Symbol('_el_12');
  let const$25;
  src__mh_header__header_component$46template.ViewHeaderComponent0 = class ViewHeaderComponent0 extends src__core__linker__app_view.AppView$(src__mh_header__header_component.HeaderComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0$] = src__core__linker__app_view.createAndAppend(doc, "header", parentRenderNode);
      this[_el_0$].className = "main-header";
      let _text_1 = html.Text.new(" ");
      this[_el_0$][$append](_text_1);
      let _text_2 = html.Text.new(" ");
      this[_el_0$][$append](_text_2);
      this[_el_3$] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, "a", this[_el_0$]));
      this[_el_3$].className = "logo";
      this.createAttr(this[_el_3$], "href", "index2.html");
      let _text_4 = html.Text.new(" ");
      this[_el_3$][$append](_text_4);
      let _text_5 = html.Text.new(" ");
      this[_el_3$][$append](_text_5);
      this[_el_6$] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_3$]);
      this[_el_6$].className = "logo-lg";
      this[_el_7$] = src__core__linker__app_view.createAndAppend(doc, "b", this[_el_6$]);
      let _text_8 = html.Text.new("Mobile");
      this[_el_7$][$append](_text_8);
      let _text_9 = html.Text.new("HIVE");
      this[_el_6$][$append](_text_9);
      this[_el_10$] = src__core__linker__app_view.createAndAppend(doc, "nav", this[_el_0$]);
      this[_el_10$].className = "navbar navbar-static-top";
      this[_el_11] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, "a", this[_el_10$]));
      this[_el_11].className = "sidebar-toggle";
      this.createAttr(this[_el_11], "data-toggle", "push-menu");
      this.createAttr(this[_el_11], "href", "#");
      this.createAttr(this[_el_11], "role", "button");
      this[_el_12$] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_11]);
      this[_el_12$].className = "sr-only";
      let _text_13 = html.Text.new("Toggle navigation");
      this[_el_12$][$append](_text_13);
      this.init(const$25 || (const$25 = dart.constList([], dart.dynamic)), null);
      return null;
    }
  };
  (src__mh_header__header_component$46template.ViewHeaderComponent0.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_el_3$] = null;
    this[_el_6$] = null;
    this[_el_7$] = null;
    this[_el_10$] = null;
    this[_el_11] = null;
    this[_el_12$] = null;
    src__mh_header__header_component$46template.ViewHeaderComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("my-header"));
    let t = src__mh_header__header_component$46template.ViewHeaderComponent0._renderType;
    t == null ? src__mh_header__header_component$46template.ViewHeaderComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:mobile_hive/lib/src/mh_header/header_component.dart" : null, src__core__metadata__view.ViewEncapsulation.None, src__mh_header__header_component$46template.styles$HeaderComponent) : t;
    this.setupComponentType(src__mh_header__header_component$46template.ViewHeaderComponent0._renderType);
  }).prototype = src__mh_header__header_component$46template.ViewHeaderComponent0.prototype;
  dart.addTypeTests(src__mh_header__header_component$46template.ViewHeaderComponent0);
  dart.setMethodSignature(src__mh_header__header_component$46template.ViewHeaderComponent0, () => ({
    __proto__: dart.getMethods(src__mh_header__header_component$46template.ViewHeaderComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__mh_header__header_component.HeaderComponent), [])
  }));
  dart.setFieldSignature(src__mh_header__header_component$46template.ViewHeaderComponent0, () => ({
    __proto__: dart.getFields(src__mh_header__header_component$46template.ViewHeaderComponent0.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_el_3$]: dart.fieldType(html.AnchorElement),
    [_el_6$]: dart.fieldType(html.Element),
    [_el_7$]: dart.fieldType(html.Element),
    [_el_10$]: dart.fieldType(html.Element),
    [_el_11]: dart.fieldType(html.AnchorElement),
    [_el_12$]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(src__mh_header__header_component$46template.ViewHeaderComponent0, {
    /*src__mh_header__header_component$46template.ViewHeaderComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__mh_header__header_component$46template.viewFactory_HeaderComponent0 = function(parentView, parentIndex) {
    return new src__mh_header__header_component$46template.ViewHeaderComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__mh_header__header_component$46template, {
    /*src__mh_header__header_component$46template.styles$HeaderComponentHost*/get styles$HeaderComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$ = Symbol('_compView_0');
  const _HeaderComponent_0_5$ = Symbol('_HeaderComponent_0_5');
  src__mh_header__header_component$46template._ViewHeaderComponentHost0 = class _ViewHeaderComponentHost0 extends src__core__linker__app_view.AppView$(src__mh_header__header_component.HeaderComponent) {
    build() {
      this[_compView_0$] = new src__mh_header__header_component$46template.ViewHeaderComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_HeaderComponent_0_5$] = new src__mh_header__header_component.HeaderComponent.new();
      this[_compView_0$].create(this[_HeaderComponent_0_5$], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfHeaderComponent()).new(0, this, this.rootEl, this[_HeaderComponent_0_5$]);
    }
    detectChangesInternal() {
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$];
      t == null ? null : t.destroy();
    }
  };
  (src__mh_header__header_component$46template._ViewHeaderComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_HeaderComponent_0_5$] = null;
    src__mh_header__header_component$46template._ViewHeaderComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__mh_header__header_component$46template._ViewHeaderComponentHost0.prototype;
  dart.addTypeTests(src__mh_header__header_component$46template._ViewHeaderComponentHost0);
  dart.setMethodSignature(src__mh_header__header_component$46template._ViewHeaderComponentHost0, () => ({
    __proto__: dart.getMethods(src__mh_header__header_component$46template._ViewHeaderComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__mh_header__header_component.HeaderComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__mh_header__header_component$46template._ViewHeaderComponentHost0, () => ({
    __proto__: dart.getFields(src__mh_header__header_component$46template._ViewHeaderComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(src__mh_header__header_component$46template.ViewHeaderComponent0),
    [_HeaderComponent_0_5$]: dart.fieldType(src__mh_header__header_component.HeaderComponent)
  }));
  src__mh_header__header_component$46template.viewFactory_HeaderComponentHost0 = function(parentView, parentIndex) {
    return new src__mh_header__header_component$46template._ViewHeaderComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__mh_header__header_component$46template, {
    /*src__mh_header__header_component$46template._HeaderComponentNgFactory*/get _HeaderComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfHeaderComponent()).new("my-header", dart.fn(src__mh_header__header_component$46template.viewFactory_HeaderComponentHost0, AppViewAndintToAppViewOfHeaderComponent())));
    }
  });
  dart.copyProperties(src__mh_header__header_component$46template, {
    get HeaderComponentNgFactory() {
      return src__mh_header__header_component$46template._HeaderComponentNgFactory;
    }
  });
  dart.defineLazy(src__mh_header__header_component$46template, {
    /*src__mh_header__header_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__mh_header__header_component$46template.initReflector = function() {
    if (dart.test(src__mh_header__header_component$46template._visited)) {
      return;
    }
    src__mh_header__header_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__mh_header__header_component.HeaderComponent), src__mh_header__header_component$46template.HeaderComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.defineLazy(src__route__routes$46template, {
    /*src__route__routes$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__route__routes$46template.initReflector = function() {
    if (dart.test(src__route__routes$46template._visited)) {
      return;
    }
    src__route__routes$46template._visited = true;
    angular_router$46template.initReflector();
    mh_app_assessment__app_assess_component$46template.initReflector();
    mh_app_category__app_category_component$46template.initReflector();
    mh_app_management__app_manage_component$46template.initReflector();
    mh_apps_list_component__app_list_component$46template.initReflector();
    mh_dashboard_component__dashboard_component$46template.initReflector();
    src__mobile_component$46template.initReflector();
    src__route__route_paths$46template.initReflector();
    src__route__route_paths$46template.initReflector();
  };
  dart.trackLibraries("packages/mobile_hive/app_component.template.ddc", {
    "package:mobile_hive/app_component.template.dart": app_component$46template,
    "package:mobile_hive/src/mh_header/header_component.template.dart": src__mh_header__header_component$46template,
    "package:mobile_hive/src/route/routes.template.dart": src__route__routes$46template
  }, '{"version":3,"sourceRoot":"","sources":["app_component.template.dart","src/mh_header/header_component.template.dart","src/route/routes.template.dart"],"names":[],"mappings":"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","file":"app_component.template.ddc.js"}');
  // Exports:
  return {
    app_component$46template: app_component$46template,
    src__mh_header__header_component$46template: src__mh_header__header_component$46template,
    src__route__routes$46template: src__route__routes$46template
  };
});

//# sourceMappingURL=app_component.template.ddc.js.map
