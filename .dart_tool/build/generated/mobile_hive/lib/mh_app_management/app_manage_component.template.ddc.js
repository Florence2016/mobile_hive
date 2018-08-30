define(['dart_sdk', 'packages/mobile_hive/mh_app_management/app_manage_component.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/mobile_hive/mh_app_management/app_manage_component', 'packages/angular_components/material_expansionpanel/material_expansionpanel_set', 'packages/angular_components/material_expansionpanel/material_expansionpanel.template', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/material_expansionpanel/material_expansionpanel', 'packages/angular_components/material_expansionpanel/material_expansionpanel_auto_dismiss', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/interfaces/has_disabled', 'packages/mobile_hive/src/app_manage', 'packages/angular_forms/src/directives', 'packages/angular_components/utils/browser/window/module', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/utils/browser/dom_service/angular_2', 'packages/angular_components/utils/angular/imperative_view/imperative_view', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular_components/utils/angular/managed_zone/angular_2', 'packages/angular_components/laminate/overlay/module', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/http/src/base_client', 'packages/mobile_hive/src/app_manage_service', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/laminate/components/modal/modal.template', 'packages/angular_components/laminate/overlay/module.template', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/material_dialog/material_dialog.template', 'packages/angular_components/material_expansionpanel/material_expansionpanel_auto_dismiss.template', 'packages/angular_components/material_expansionpanel/material_expansionpanel_set.template', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_yes_no_buttons/material_yes_no_buttons.template', 'packages/angular_forms/angular_forms.template', 'packages/angular_router/angular_router.template', 'packages/mobile_hive/src/app_manage.template', 'packages/mobile_hive/src/app_manage_service.template'], function(dart_sdk, app_manage_component$46css, view_type, change_detection, modules, app_manage_component, material_expansionpanel_set, material_expansionpanel, ng_zone, dom_service, material_expansionpanel$, material_expansionpanel_auto_dismiss, deferred_content_aware, has_disabled, app_manage, directives, module, disposer, angular_2, imperative_view, dom_ruler, angular_2$, module$, overlay_ref, zindexer, base_client, app_manage_service, managed_zone, angular, focus, modal, module$0, material_button, material_dialog, material_expansionpanel_auto_dismiss$, material_expansionpanel_set$, material_icon, material_input, material_yes_no_buttons, angular_forms, angular_router, app_manage$, app_manage_service$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const mh_app_management__app_manage_component$46css$46shim = app_manage_component$46css.mh_app_management__app_manage_component$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__component_loader = modules.src__core__linker__component_loader;
  const mh_app_management__app_manage_component = app_manage_component.mh_app_management__app_manage_component;
  const material_expansionpanel__material_expansionpanel_set = material_expansionpanel_set.material_expansionpanel__material_expansionpanel_set;
  const material_expansionpanel__material_expansionpanel$46template = material_expansionpanel.material_expansionpanel__material_expansionpanel$46template;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const material_expansionpanel__material_expansionpanel = material_expansionpanel$.material_expansionpanel__material_expansionpanel;
  const material_expansionpanel__material_expansionpanel_auto_dismiss = material_expansionpanel_auto_dismiss.material_expansionpanel__material_expansionpanel_auto_dismiss;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const src__app_manage = app_manage.src__app_manage;
  const src__directives__default_value_accessor = directives.src__directives__default_value_accessor;
  const src__directives__control_value_accessor = directives.src__directives__control_value_accessor;
  const src__directives__ng_model = directives.src__directives__ng_model;
  const src__directives__ng_control = directives.src__directives__ng_control;
  const utils__browser__window__module = module.utils__browser__window__module;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const utils__browser__dom_service__angular_2 = angular_2.utils__browser__dom_service__angular_2;
  const utils__angular__imperative_view__imperative_view = imperative_view.utils__angular__imperative_view__imperative_view;
  const laminate__ruler__dom_ruler = dom_ruler.laminate__ruler__dom_ruler;
  const utils__angular__managed_zone__angular_2 = angular_2$.utils__angular__managed_zone__angular_2;
  const laminate__overlay__module = module$.laminate__overlay__module;
  const src__laminate__overlay__render__overlay_style_config = overlay_ref.src__laminate__overlay__render__overlay_style_config;
  const src__laminate__overlay__render__overlay_dom_render_service = overlay_ref.src__laminate__overlay__render__overlay_dom_render_service;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const src__client = base_client.src__client;
  const src__app_manage_service = app_manage_service.src__app_manage_service;
  const src__utils__angular__managed_zone__managed_zone = managed_zone.src__utils__angular__managed_zone__managed_zone;
  const angular$46template = angular.angular$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const laminate__components__modal__modal$46template = modal.laminate__components__modal__modal$46template;
  const laminate__overlay__module$46template = module$0.laminate__overlay__module$46template;
  const material_button__material_button$46template = material_button.material_button__material_button$46template;
  const material_dialog__material_dialog$46template = material_dialog.material_dialog__material_dialog$46template;
  const material_expansionpanel__material_expansionpanel_auto_dismiss$46template = material_expansionpanel_auto_dismiss$.material_expansionpanel__material_expansionpanel_auto_dismiss$46template;
  const material_expansionpanel__material_expansionpanel_set$46template = material_expansionpanel_set$.material_expansionpanel__material_expansionpanel_set$46template;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_input__material_input$46template = material_input.material_input__material_input$46template;
  const material_yes_no_buttons__material_yes_no_buttons$46template = material_yes_no_buttons.material_yes_no_buttons__material_yes_no_buttons$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const src__app_manage$46template = app_manage$.src__app_manage$46template;
  const src__app_manage_service$46template = app_manage_service$.src__app_manage_service$46template;
  const _root = Object.create(null);
  const mh_app_management__app_manage_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfAppManagementComponent = () => (AppViewOfAppManagementComponent = dart.constFn(src__core__linker__app_view.AppView$(mh_app_management__app_manage_component.AppManagementComponent)))();
  let AppViewAndintToAppViewOfAppManagementComponent = () => (AppViewAndintToAppViewOfAppManagementComponent = dart.constFn(dart.fnType(AppViewOfAppManagementComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let JSArrayOfNode = () => (JSArrayOfNode = dart.constFn(_interceptors.JSArray$(html.Node)))();
  let JSArrayOfMaterialExpansionPanel = () => (JSArrayOfMaterialExpansionPanel = dart.constFn(_interceptors.JSArray$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel)))();
  let JSArrayOfControlValueAccessor = () => (JSArrayOfControlValueAccessor = dart.constFn(_interceptors.JSArray$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let MultiTokenOfControlValueAccessor = () => (MultiTokenOfControlValueAccessor = dart.constFn(src__core__di__opaque_token.MultiToken$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let ListOfControlValueAccessor = () => (ListOfControlValueAccessor = dart.constFn(core.List$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let ComponentRefOfAppManagementComponent = () => (ComponentRefOfAppManagementComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(mh_app_management__app_manage_component.AppManagementComponent)))();
  let ComponentFactoryOfAppManagementComponent = () => (ComponentFactoryOfAppManagementComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(mh_app_management__app_manage_component.AppManagementComponent)))();
  dart.defineLazy(mh_app_management__app_manage_component$46template, {
    /*mh_app_management__app_manage_component$46template.styles$AppManagementComponent*/get styles$AppManagementComponent() {
      return [mh_app_management__app_manage_component$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_3 = Symbol('_el_3');
  const _appEl_5 = Symbol('_appEl_5');
  const _NgFor_5_9 = Symbol('_NgFor_5_9');
  const _expr_0 = Symbol('_expr_0');
  let const$;
  mh_app_management__app_manage_component$46template.ViewAppManagementComponent0 = class ViewAppManagementComponent0 extends src__core__linker__app_view.AppView$(mh_app_management__app_manage_component.AppManagementComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, "h1", parentRenderNode);
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new("Management");
      this[_el_0][$append](_text_1);
      let _text_2 = html.Text.new("\r\n\r\n");
      parentRenderNode[$append](_text_2);
      this[_el_3] = html.UListElement._check(src__core__linker__app_view.createAndAppend(doc, "ul", parentRenderNode));
      this[_el_3].className = "manageAppList";
      this.addShimC(this[_el_3]);
      let _text_4 = html.Text.new("\r\n    ");
      this[_el_3][$append](_text_4);
      let _anchor_5 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_3][$append](_anchor_5);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 3, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], dart.fn(mh_app_management__app_manage_component$46template.viewFactory_AppManagementComponent1, AppViewAndintToAppViewOfAppManagementComponent()));
      this[_NgFor_5_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_5], _TemplateRef_5_8);
      let _text_6 = html.Text.new("\r\n");
      this[_el_3][$append](_text_6);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.manageAppList;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_NgFor_5_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_5_9].ngDoCheck();
      }
      this[_appEl_5].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_5];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (mh_app_management__app_manage_component$46template.ViewAppManagementComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_3] = null;
    this[_appEl_5] = null;
    this[_NgFor_5_9] = null;
    this[_expr_0] = null;
    mh_app_management__app_manage_component$46template.ViewAppManagementComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("my-app-manage"));
    let t = mh_app_management__app_manage_component$46template.ViewAppManagementComponent0._renderType;
    t == null ? mh_app_management__app_manage_component$46template.ViewAppManagementComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:mobile_hive/lib/mh_app_management/app_manage_component.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, mh_app_management__app_manage_component$46template.styles$AppManagementComponent) : t;
    this.setupComponentType(mh_app_management__app_manage_component$46template.ViewAppManagementComponent0._renderType);
  }).prototype = mh_app_management__app_manage_component$46template.ViewAppManagementComponent0.prototype;
  dart.addTypeTests(mh_app_management__app_manage_component$46template.ViewAppManagementComponent0);
  dart.setMethodSignature(mh_app_management__app_manage_component$46template.ViewAppManagementComponent0, () => ({
    __proto__: dart.getMethods(mh_app_management__app_manage_component$46template.ViewAppManagementComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(mh_app_management__app_manage_component.AppManagementComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(mh_app_management__app_manage_component$46template.ViewAppManagementComponent0, () => ({
    __proto__: dart.getFields(mh_app_management__app_manage_component$46template.ViewAppManagementComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_3]: dart.fieldType(html.UListElement),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_5_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(mh_app_management__app_manage_component$46template.ViewAppManagementComponent0, {
    /*mh_app_management__app_manage_component$46template.ViewAppManagementComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  mh_app_management__app_manage_component$46template.viewFactory_AppManagementComponent0 = function(parentView, parentIndex) {
    return new mh_app_management__app_manage_component$46template.ViewAppManagementComponent0.new(parentView, parentIndex);
  };
  const _el_2 = Symbol('_el_2');
  const _el_4 = Symbol('_el_4');
  const _MaterialExpansionPanelSet_4_5 = Symbol('_MaterialExpansionPanelSet_4_5');
  const _el_6 = Symbol('_el_6');
  const _compView_6 = Symbol('_compView_6');
  const _MaterialExpansionPanel_6_5 = Symbol('_MaterialExpansionPanel_6_5');
  const _MaterialExpansionPanelAutoDismiss_6_6 = Symbol('_MaterialExpansionPanelAutoDismiss_6_6');
  const _el_8 = Symbol('_el_8');
  const _text_9 = Symbol('_text_9');
  const _el_11 = Symbol('_el_11');
  const _el_13 = Symbol('_el_13');
  const _appEl_16 = Symbol('_appEl_16');
  const _NgIf_16_9 = Symbol('_NgIf_16_9');
  const _expr_3 = Symbol('_expr_3');
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  const _handle_click_0_0 = Symbol('_handle_click_0_0');
  mh_app_management__app_manage_component$46template._ViewAppManagementComponent1 = class _ViewAppManagementComponent1 extends src__core__linker__app_view.AppView$(mh_app_management__app_manage_component.AppManagementComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("li");
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new("\r\n");
      this[_el_0][$append](_text_1);
      this[_el_2] = src__core__linker__app_view.createAndAppend(doc, "section", this[_el_0]);
      this.addShimE(this[_el_2]);
      let _text_3 = html.Text.new("\r\n    ");
      this[_el_2][$append](_text_3);
      this[_el_4] = src__core__linker__app_view.createAndAppend(doc, "material-expansionpanel-set", this[_el_2]);
      this.addShimE(this[_el_4]);
      this[_MaterialExpansionPanelSet_4_5] = new material_expansionpanel__material_expansionpanel_set.MaterialExpansionPanelSet.new();
      let _text_5 = html.Text.new("\r\n        ");
      this[_el_4][$append](_text_5);
      this[_compView_6] = new material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0.new(this, 6);
      this[_el_6] = this[_compView_6].rootEl;
      this[_el_4][$append](this[_el_6]);
      this.createAttr(this[_el_6], "autoDismissable", "");
      this.createAttr(this[_el_6], "expandIcon", "edit");
      this.createAttr(this[_el_6], "name", "BeeStripe App");
      this.addShimC(html.HtmlElement._check(this[_el_6]));
      this[_MaterialExpansionPanel_6_5] = new material_expansionpanel__material_expansionpanel.MaterialExpansionPanel.new(src__core__zone__ng_zone.NgZone._check(this.parentView.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.parentView.viewData.parentIndex)), this[_compView_6].ref, utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)), null);
      this[_MaterialExpansionPanelAutoDismiss_6_6] = new material_expansionpanel__material_expansionpanel_auto_dismiss.MaterialExpansionPanelAutoDismiss.new(this[_MaterialExpansionPanel_6_5], html.Element._check(this.parentView.parentView.injectorGet(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), this.parentView.viewData.parentIndex, null)), html.HtmlElement._check(this[_el_6]));
      let _text_7 = html.Text.new("\r\n            ");
      this[_el_8] = doc[$createElement]("span");
      this.createAttr(this[_el_8], "value", "");
      this.addShimE(this[_el_8]);
      this[_text_9] = html.Text.new("");
      this[_el_8][$append](this[_text_9]);
      let _text_10 = html.Text.new("\r\n\r\n            ");
      this[_el_11] = html.DivElement._check(doc[$createElement]("div"));
      this.addShimC(this[_el_11]);
      let _text_12 = html.Text.new("\r\n                ");
      this[_el_11][$append](_text_12);
      this[_el_13] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_11]);
      this.addShimE(this[_el_13]);
      let _text_14 = html.Text.new("Mobile Info:");
      this[_el_13][$append](_text_14);
      let _text_15 = html.Text.new("\r\n                ");
      this[_el_11][$append](_text_15);
      let _anchor_16 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_11][$append](_anchor_16);
      this[_appEl_16] = new src__core__linker__view_container.ViewContainer.new(16, 11, this, _anchor_16);
      let _TemplateRef_16_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_16], dart.fn(mh_app_management__app_manage_component$46template.viewFactory_AppManagementComponent2, AppViewAndintToAppViewOfAppManagementComponent()));
      this[_NgIf_16_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_16], _TemplateRef_16_8);
      let _text_17 = html.Text.new("\r\n            ");
      this[_el_11][$append](_text_17);
      let _text_18 = html.Text.new("\r\n        ");
      this[_compView_6].create(this[_MaterialExpansionPanel_6_5], [const$1 || (const$1 = dart.constList([], dart.dynamic)), JSArrayOfElement().of([this[_el_8]]), const$2 || (const$2 = dart.constList([], dart.dynamic)), JSArrayOfNode().of([_text_7, _text_10, this[_el_11], _text_18]), const$3 || (const$3 = dart.constList([], dart.dynamic))]);
      let _text_19 = html.Text.new("\r\n    ");
      this[_el_4][$append](_text_19);
      this[_MaterialExpansionPanelSet_4_5].panels = JSArrayOfMaterialExpansionPanel().of([this[_MaterialExpansionPanel_6_5]]);
      let _text_20 = html.Text.new("\r\n");
      this[_el_2][$append](_text_20);
      let _text_21 = html.Text.new("\r\n    ");
      this[_el_0][$append](_text_21);
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_0)));
      let subscription_0 = this[_MaterialExpansionPanel_6_5].isExpandedChange.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this[_MaterialExpansionPanelAutoDismiss_6_6], 'onExpandedChanged')));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 6 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 18) {
        return this[_MaterialExpansionPanel_6_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_manage = src__app_manage.Manage._check(this.locals[$_get]("$implicit"));
      changed = false;
      if (firstCheck) {
        this[_MaterialExpansionPanel_6_5].name = "BeeStripe App";
        changed = true;
        this[_MaterialExpansionPanel_6_5].expandIcon = "edit";
        changed = true;
      }
      if (changed) {
        this[_compView_6].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialExpansionPanel_6_5].ngOnInit();
      }
      this[_NgIf_16_9].ngIf = _ctx.selected != null;
      this[_appEl_16].detectChangesInNestedViews();
      let currVal_0 = local_manage == _ctx.selected;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.updateClass(html.HtmlElement._check(this[_el_0]), "selected", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_3 = src__core__linker__app_view_utils.interpolate0(local_manage.ma_name);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_text_9][$text] = core.String._check(currVal_3);
        this[_expr_3] = currVal_3;
      }
      this[_compView_6].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_16];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_6];
      t$ == null ? null : t$.destroy();
      this[_MaterialExpansionPanel_6_5].ngOnDestroy();
      this[_MaterialExpansionPanelAutoDismiss_6_6].ngOnDestroy();
      this[_MaterialExpansionPanelSet_4_5].ngOnDestroy();
    }
    [_handle_click_0_0]($event) {
      let local_manage = src__app_manage.Manage._check(this.locals[$_get]("$implicit"));
      this.ctx.onSelect(local_manage);
    }
  };
  (mh_app_management__app_manage_component$46template._ViewAppManagementComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_el_4] = null;
    this[_MaterialExpansionPanelSet_4_5] = null;
    this[_el_6] = null;
    this[_compView_6] = null;
    this[_MaterialExpansionPanel_6_5] = null;
    this[_MaterialExpansionPanelAutoDismiss_6_6] = null;
    this[_el_8] = null;
    this[_text_9] = null;
    this[_el_11] = null;
    this[_el_13] = null;
    this[_appEl_16] = null;
    this[_NgIf_16_9] = null;
    this[_expr_0] = null;
    this[_expr_3] = null;
    mh_app_management__app_manage_component$46template._ViewAppManagementComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = mh_app_management__app_manage_component$46template.ViewAppManagementComponent0._renderType;
  }).prototype = mh_app_management__app_manage_component$46template._ViewAppManagementComponent1.prototype;
  dart.addTypeTests(mh_app_management__app_manage_component$46template._ViewAppManagementComponent1);
  dart.setMethodSignature(mh_app_management__app_manage_component$46template._ViewAppManagementComponent1, () => ({
    __proto__: dart.getMethods(mh_app_management__app_manage_component$46template._ViewAppManagementComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(mh_app_management__app_manage_component.AppManagementComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_click_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(mh_app_management__app_manage_component$46template._ViewAppManagementComponent1, () => ({
    __proto__: dart.getFields(mh_app_management__app_manage_component$46template._ViewAppManagementComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.Element),
    [_el_4]: dart.fieldType(html.Element),
    [_MaterialExpansionPanelSet_4_5]: dart.fieldType(material_expansionpanel__material_expansionpanel_set.MaterialExpansionPanelSet),
    [_el_6]: dart.fieldType(html.Element),
    [_compView_6]: dart.fieldType(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0),
    [_MaterialExpansionPanel_6_5]: dart.fieldType(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel),
    [_MaterialExpansionPanelAutoDismiss_6_6]: dart.fieldType(material_expansionpanel__material_expansionpanel_auto_dismiss.MaterialExpansionPanelAutoDismiss),
    [_el_8]: dart.fieldType(html.Element),
    [_text_9]: dart.fieldType(html.Text),
    [_el_11]: dart.fieldType(html.DivElement),
    [_el_13]: dart.fieldType(html.Element),
    [_appEl_16]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_16_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(dart.dynamic)
  }));
  mh_app_management__app_manage_component$46template.viewFactory_AppManagementComponent1 = function(parentView, parentIndex) {
    return new mh_app_management__app_manage_component$46template._ViewAppManagementComponent1.new(parentView, parentIndex);
  };
  const _text_5 = Symbol('_text_5');
  const _el_7 = Symbol('_el_7');
  const _el_9 = Symbol('_el_9');
  const _el_12 = Symbol('_el_12');
  const _DefaultValueAccessor_12_5 = Symbol('_DefaultValueAccessor_12_5');
  const _NgValueAccessor_12_6 = Symbol('_NgValueAccessor_12_6');
  const _NgModel_12_7 = Symbol('_NgModel_12_7');
  const _handle_input_12_2 = Symbol('_handle_input_12_2');
  const _handle_ngModelChange_12_0 = Symbol('_handle_ngModelChange_12_0');
  let const$4;
  mh_app_management__app_manage_component$46template._ViewAppManagementComponent2 = class _ViewAppManagementComponent2 extends src__core__linker__app_view.AppView$(mh_app_management__app_manage_component.AppManagementComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this.addShimC(this[_el_0]);
      let _text_1 = html.Text.new("\r\n                    ");
      this[_el_0][$append](_text_1);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this.addShimC(this[_el_2]);
      this[_el_3] = src__core__linker__app_view.createAndAppend(doc, "label", this[_el_2]);
      this.addShimE(this[_el_3]);
      let _text_4 = html.Text.new("id: ");
      this[_el_3][$append](_text_4);
      this[_text_5] = html.Text.new("");
      this[_el_2][$append](this[_text_5]);
      let _text_6 = html.Text.new("\r\n                    ");
      this[_el_0][$append](_text_6);
      this[_el_7] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this.addShimC(this[_el_7]);
      let _text_8 = html.Text.new("\r\n                        ");
      this[_el_7][$append](_text_8);
      this[_el_9] = src__core__linker__app_view.createAndAppend(doc, "label", this[_el_7]);
      this.addShimE(this[_el_9]);
      let _text_10 = html.Text.new("name: ");
      this[_el_9][$append](_text_10);
      let _text_11 = html.Text.new("\r\n                        ");
      this[_el_7][$append](_text_11);
      this[_el_12] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, "input", this[_el_7]));
      this.createAttr(this[_el_12], "placeholder", "ma_name");
      this.addShimC(this[_el_12]);
      this[_DefaultValueAccessor_12_5] = new src__directives__default_value_accessor.DefaultValueAccessor.new(this[_el_12]);
      this[_NgValueAccessor_12_6] = JSArrayOfControlValueAccessor().of([this[_DefaultValueAccessor_12_5]]);
      this[_NgModel_12_7] = new src__directives__ng_model.NgModel.new(null, this[_NgValueAccessor_12_6]);
      let _text_13 = html.Text.new("\r\n                    ");
      this[_el_7][$append](_text_13);
      let _text_14 = html.Text.new("\r\n                ");
      this[_el_0][$append](_text_14);
      this[_el_12][$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(this[_DefaultValueAccessor_12_5], 'touchHandler')));
      this[_el_12][$addEventListener]("input", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_input_12_2)));
      let subscription_0 = this[_NgModel_12_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_12_0)));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === (const$4 || (const$4 = dart.const(new (MultiTokenOfControlValueAccessor()).new("NgValueAccessor")))) && 12 === nodeIndex) {
        return this[_NgValueAccessor_12_6];
      }
      if ((token === dart.wrapType(src__directives__ng_model.NgModel) || token === dart.wrapType(src__directives__ng_control.NgControl)) && 12 === nodeIndex) {
        return this[_NgModel_12_7];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      this[_NgModel_12_7].model = _ctx.selected.ma_name;
      this[_NgModel_12_7].ngAfterChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_NgModel_12_7].ngOnInit();
      }
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.selected.ma_id);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_5][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    [_handle_ngModelChange_12_0]($event) {
      this.ctx.selected.ma_name = core.String._check($event);
    }
    [_handle_input_12_2]($event) {
      this[_DefaultValueAccessor_12_5].handleChange(core.String._check(dart.dload(dart.dload($event, 'target'), 'value')));
    }
  };
  (mh_app_management__app_manage_component$46template._ViewAppManagementComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_el_3] = null;
    this[_text_5] = null;
    this[_el_7] = null;
    this[_el_9] = null;
    this[_el_12] = null;
    this[_DefaultValueAccessor_12_5] = null;
    this[_NgValueAccessor_12_6] = null;
    this[_NgModel_12_7] = null;
    this[_expr_0] = null;
    mh_app_management__app_manage_component$46template._ViewAppManagementComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = mh_app_management__app_manage_component$46template.ViewAppManagementComponent0._renderType;
  }).prototype = mh_app_management__app_manage_component$46template._ViewAppManagementComponent2.prototype;
  dart.addTypeTests(mh_app_management__app_manage_component$46template._ViewAppManagementComponent2);
  dart.setMethodSignature(mh_app_management__app_manage_component$46template._ViewAppManagementComponent2, () => ({
    __proto__: dart.getMethods(mh_app_management__app_manage_component$46template._ViewAppManagementComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(mh_app_management__app_manage_component.AppManagementComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    [_handle_ngModelChange_12_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_input_12_2]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(mh_app_management__app_manage_component$46template._ViewAppManagementComponent2, () => ({
    __proto__: dart.getFields(mh_app_management__app_manage_component$46template._ViewAppManagementComponent2.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_2]: dart.fieldType(html.DivElement),
    [_el_3]: dart.fieldType(html.Element),
    [_text_5]: dart.fieldType(html.Text),
    [_el_7]: dart.fieldType(html.DivElement),
    [_el_9]: dart.fieldType(html.Element),
    [_el_12]: dart.fieldType(html.InputElement),
    [_DefaultValueAccessor_12_5]: dart.fieldType(src__directives__default_value_accessor.DefaultValueAccessor),
    [_NgValueAccessor_12_6]: dart.fieldType(ListOfControlValueAccessor()),
    [_NgModel_12_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  mh_app_management__app_manage_component$46template.viewFactory_AppManagementComponent2 = function(parentView, parentIndex) {
    return new mh_app_management__app_manage_component$46template._ViewAppManagementComponent2.new(parentView, parentIndex);
  };
  dart.defineLazy(mh_app_management__app_manage_component$46template, {
    /*mh_app_management__app_manage_component$46template.styles$AppManagementComponentHost*/get styles$AppManagementComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _ManageService_0_5 = Symbol('_ManageService_0_5');
  const _AppManagementComponent_0_6 = Symbol('_AppManagementComponent_0_6');
  const __Document_0_7 = Symbol('__Document_0_7');
  const __Window_0_8 = Symbol('__Window_0_8');
  const __DomService_0_9 = Symbol('__DomService_0_9');
  const __AcxImperativeViewUtils_0_10 = Symbol('__AcxImperativeViewUtils_0_10');
  const __DomRuler_0_11 = Symbol('__DomRuler_0_11');
  const __ManagedZone_0_12 = Symbol('__ManagedZone_0_12');
  const __overlayContainerName_0_13 = Symbol('__overlayContainerName_0_13');
  const __overlayContainerParent_0_14 = Symbol('__overlayContainerParent_0_14');
  const __overlayContainer_0_15 = Symbol('__overlayContainer_0_15');
  const __overlaySyncDom_0_16 = Symbol('__overlaySyncDom_0_16');
  const __overlayRepositionLoop_0_17 = Symbol('__overlayRepositionLoop_0_17');
  const __OverlayStyleConfig_0_18 = Symbol('__OverlayStyleConfig_0_18');
  const __ZIndexer_0_19 = Symbol('__ZIndexer_0_19');
  const __OverlayDomRenderService_0_20 = Symbol('__OverlayDomRenderService_0_20');
  const __OverlayService_0_21 = Symbol('__OverlayService_0_21');
  const _Document_0_7 = Symbol('_Document_0_7');
  const _Window_0_8 = Symbol('_Window_0_8');
  const _DomService_0_9 = Symbol('_DomService_0_9');
  const _AcxImperativeViewUtils_0_10 = Symbol('_AcxImperativeViewUtils_0_10');
  const _DomRuler_0_11 = Symbol('_DomRuler_0_11');
  const _ManagedZone_0_12 = Symbol('_ManagedZone_0_12');
  let const$5;
  const _overlayContainerName_0_13 = Symbol('_overlayContainerName_0_13');
  let const$6;
  const _overlayContainerParent_0_14 = Symbol('_overlayContainerParent_0_14');
  let const$7;
  const _overlayContainer_0_15 = Symbol('_overlayContainer_0_15');
  const _overlaySyncDom_0_16 = Symbol('_overlaySyncDom_0_16');
  const _overlayRepositionLoop_0_17 = Symbol('_overlayRepositionLoop_0_17');
  const _OverlayStyleConfig_0_18 = Symbol('_OverlayStyleConfig_0_18');
  const _ZIndexer_0_19 = Symbol('_ZIndexer_0_19');
  const _OverlayDomRenderService_0_20 = Symbol('_OverlayDomRenderService_0_20');
  const _OverlayService_0_21 = Symbol('_OverlayService_0_21');
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  mh_app_management__app_manage_component$46template._ViewAppManagementComponentHost0 = class _ViewAppManagementComponentHost0 extends src__core__linker__app_view.AppView$(mh_app_management__app_manage_component.AppManagementComponent) {
    get [_Document_0_7]() {
      if (this[__Document_0_7] == null) {
        this[__Document_0_7] = utils__browser__window__module.getDocument();
      }
      return this[__Document_0_7];
    }
    get [_Window_0_8]() {
      if (this[__Window_0_8] == null) {
        this[__Window_0_8] = utils__browser__window__module.getWindow();
      }
      return this[__Window_0_8];
    }
    get [_DomService_0_9]() {
      if (this[__DomService_0_9] == null) {
        this[__DomService_0_9] = utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)), src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), html.Window._check(this[_Window_0_8]));
      }
      return this[__DomService_0_9];
    }
    get [_AcxImperativeViewUtils_0_10]() {
      if (this[__AcxImperativeViewUtils_0_10] == null) {
        this[__AcxImperativeViewUtils_0_10] = new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_9]));
      }
      return this[__AcxImperativeViewUtils_0_10];
    }
    get [_DomRuler_0_11]() {
      if (this[__DomRuler_0_11] == null) {
        this[__DomRuler_0_11] = laminate__ruler__dom_ruler.DomRuler.new(html.Document._check(this[_Document_0_7]), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_9]));
      }
      return this[__DomRuler_0_11];
    }
    get [_ManagedZone_0_12]() {
      if (this[__ManagedZone_0_12] == null) {
        this[__ManagedZone_0_12] = new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      }
      return this[__ManagedZone_0_12];
    }
    get [_overlayContainerName_0_13]() {
      if (this[__overlayContainerName_0_13] == null) {
        this[__overlayContainerName_0_13] = laminate__overlay__module.getDefaultContainerName(this.injectorGet(const$5 || (const$5 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerName_0_13];
    }
    get [_overlayContainerParent_0_14]() {
      if (this[__overlayContainerParent_0_14] == null) {
        this[__overlayContainerParent_0_14] = laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_0_7]), this.injectorGet(const$6 || (const$6 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerParent_0_14];
    }
    get [_overlayContainer_0_15]() {
      if (this[__overlayContainer_0_15] == null) {
        this[__overlayContainer_0_15] = laminate__overlay__module.getDefaultContainer(core.String._check(this[_overlayContainerName_0_13]), html.HtmlElement._check(this[_overlayContainerParent_0_14]), this.injectorGet(const$7 || (const$7 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainer_0_15];
    }
    get [_overlaySyncDom_0_16]() {
      if (this[__overlaySyncDom_0_16] == null) {
        this[__overlaySyncDom_0_16] = true;
      }
      return this[__overlaySyncDom_0_16];
    }
    get [_overlayRepositionLoop_0_17]() {
      if (this[__overlayRepositionLoop_0_17] == null) {
        this[__overlayRepositionLoop_0_17] = true;
      }
      return this[__overlayRepositionLoop_0_17];
    }
    get [_OverlayStyleConfig_0_18]() {
      if (this[__OverlayStyleConfig_0_18] == null) {
        this[__OverlayStyleConfig_0_18] = new src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.new(html.Document._check(this[_Document_0_7]));
      }
      return this[__OverlayStyleConfig_0_18];
    }
    get [_ZIndexer_0_19]() {
      if (this[__ZIndexer_0_19] == null) {
        this[__ZIndexer_0_19] = laminate__overlay__zindexer.ZIndexer.new();
      }
      return this[__ZIndexer_0_19];
    }
    get [_OverlayDomRenderService_0_20]() {
      if (this[__OverlayDomRenderService_0_20] == null) {
        this[__OverlayDomRenderService_0_20] = new src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.new(this[_OverlayStyleConfig_0_18], html.HtmlElement._check(this[_overlayContainer_0_15]), core.String._check(this[_overlayContainerName_0_13]), this[_DomRuler_0_11], utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_9]), this[_AcxImperativeViewUtils_0_10], this[_overlaySyncDom_0_16], this[_overlayRepositionLoop_0_17], this[_ZIndexer_0_19]);
      }
      return this[__OverlayDomRenderService_0_20];
    }
    get [_OverlayService_0_21]() {
      if (this[__OverlayService_0_21] == null) {
        this[__OverlayService_0_21] = new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_overlaySyncDom_0_16], this[_OverlayDomRenderService_0_20], src__laminate__overlay__overlay_service.OverlayService._check(this.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex, null)));
      }
      return this[__OverlayService_0_21];
    }
    build() {
      this[_compView_0] = new mh_app_management__app_manage_component$46template.ViewAppManagementComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_ManageService_0_5] = new src__app_manage_service.ManageService.new(src__client.Client._check(this.injectorGet(dart.wrapType(src__client.Client), this.viewData.parentIndex)));
      this[_AppManagementComponent_0_6] = new mh_app_management__app_manage_component.AppManagementComponent.new(this[_ManageService_0_5]);
      this[_compView_0].create(this[_AppManagementComponent_0_6], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfAppManagementComponent()).new(0, this, this.rootEl, this[_AppManagementComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__app_manage_service.ManageService) && 0 === nodeIndex) {
        return this[_ManageService_0_5];
      }
      if (token === dart.wrapType(html.Document) && 0 === nodeIndex) {
        return this[_Document_0_7];
      }
      if (token === dart.wrapType(html.Window) && 0 === nodeIndex) {
        return this[_Window_0_8];
      }
      if (token === dart.wrapType(utils__browser__dom_service__dom_service.DomService) && 0 === nodeIndex) {
        return this[_DomService_0_9];
      }
      if (token === dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils) && 0 === nodeIndex) {
        return this[_AcxImperativeViewUtils_0_10];
      }
      if (token === dart.wrapType(laminate__ruler__dom_ruler.DomRuler) && 0 === nodeIndex) {
        return this[_DomRuler_0_11];
      }
      if (token === dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone) && 0 === nodeIndex) {
        return this[_ManagedZone_0_12];
      }
      if (token === (const$8 || (const$8 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName")))) && 0 === nodeIndex) {
        return this[_overlayContainerName_0_13];
      }
      if (token === (const$9 || (const$9 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent")))) && 0 === nodeIndex) {
        return this[_overlayContainerParent_0_14];
      }
      if (token === (const$10 || (const$10 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer")))) && 0 === nodeIndex) {
        return this[_overlayContainer_0_15];
      }
      if (token === (const$11 || (const$11 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlaySyncDom")))) && 0 === nodeIndex) {
        return this[_overlaySyncDom_0_16];
      }
      if (token === (const$12 || (const$12 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop")))) && 0 === nodeIndex) {
        return this[_overlayRepositionLoop_0_17];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig) && 0 === nodeIndex) {
        return this[_OverlayStyleConfig_0_18];
      }
      if (token === dart.wrapType(laminate__overlay__zindexer.ZIndexer) && 0 === nodeIndex) {
        return this[_ZIndexer_0_19];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService) && 0 === nodeIndex) {
        return this[_OverlayDomRenderService_0_20];
      }
      if (token === dart.wrapType(src__laminate__overlay__overlay_service.OverlayService) && 0 === nodeIndex) {
        return this[_OverlayService_0_21];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_AppManagementComponent_0_6].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (mh_app_management__app_manage_component$46template._ViewAppManagementComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ManageService_0_5] = null;
    this[_AppManagementComponent_0_6] = null;
    this[__Document_0_7] = null;
    this[__Window_0_8] = null;
    this[__DomService_0_9] = null;
    this[__AcxImperativeViewUtils_0_10] = null;
    this[__DomRuler_0_11] = null;
    this[__ManagedZone_0_12] = null;
    this[__overlayContainerName_0_13] = null;
    this[__overlayContainerParent_0_14] = null;
    this[__overlayContainer_0_15] = null;
    this[__overlaySyncDom_0_16] = null;
    this[__overlayRepositionLoop_0_17] = null;
    this[__OverlayStyleConfig_0_18] = null;
    this[__ZIndexer_0_19] = null;
    this[__OverlayDomRenderService_0_20] = null;
    this[__OverlayService_0_21] = null;
    mh_app_management__app_manage_component$46template._ViewAppManagementComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = mh_app_management__app_manage_component$46template._ViewAppManagementComponentHost0.prototype;
  dart.addTypeTests(mh_app_management__app_manage_component$46template._ViewAppManagementComponentHost0);
  dart.setMethodSignature(mh_app_management__app_manage_component$46template._ViewAppManagementComponentHost0, () => ({
    __proto__: dart.getMethods(mh_app_management__app_manage_component$46template._ViewAppManagementComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(mh_app_management__app_manage_component.AppManagementComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(mh_app_management__app_manage_component$46template._ViewAppManagementComponentHost0, () => ({
    __proto__: dart.getGetters(mh_app_management__app_manage_component$46template._ViewAppManagementComponentHost0.__proto__),
    [_Document_0_7]: dart.dynamic,
    [_Window_0_8]: dart.dynamic,
    [_DomService_0_9]: dart.dynamic,
    [_AcxImperativeViewUtils_0_10]: utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils,
    [_DomRuler_0_11]: laminate__ruler__dom_ruler.DomRuler,
    [_ManagedZone_0_12]: utils__angular__managed_zone__angular_2.Angular2ManagedZone,
    [_overlayContainerName_0_13]: dart.dynamic,
    [_overlayContainerParent_0_14]: dart.dynamic,
    [_overlayContainer_0_15]: dart.dynamic,
    [_overlaySyncDom_0_16]: core.bool,
    [_overlayRepositionLoop_0_17]: core.bool,
    [_OverlayStyleConfig_0_18]: src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig,
    [_ZIndexer_0_19]: laminate__overlay__zindexer.ZIndexer,
    [_OverlayDomRenderService_0_20]: src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService,
    [_OverlayService_0_21]: src__laminate__overlay__overlay_service.OverlayService
  }));
  dart.setFieldSignature(mh_app_management__app_manage_component$46template._ViewAppManagementComponentHost0, () => ({
    __proto__: dart.getFields(mh_app_management__app_manage_component$46template._ViewAppManagementComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(mh_app_management__app_manage_component$46template.ViewAppManagementComponent0),
    [_ManageService_0_5]: dart.fieldType(src__app_manage_service.ManageService),
    [_AppManagementComponent_0_6]: dart.fieldType(mh_app_management__app_manage_component.AppManagementComponent),
    [__Document_0_7]: dart.fieldType(dart.dynamic),
    [__Window_0_8]: dart.fieldType(dart.dynamic),
    [__DomService_0_9]: dart.fieldType(dart.dynamic),
    [__AcxImperativeViewUtils_0_10]: dart.fieldType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils),
    [__DomRuler_0_11]: dart.fieldType(laminate__ruler__dom_ruler.DomRuler),
    [__ManagedZone_0_12]: dart.fieldType(utils__angular__managed_zone__angular_2.Angular2ManagedZone),
    [__overlayContainerName_0_13]: dart.fieldType(dart.dynamic),
    [__overlayContainerParent_0_14]: dart.fieldType(dart.dynamic),
    [__overlayContainer_0_15]: dart.fieldType(dart.dynamic),
    [__overlaySyncDom_0_16]: dart.fieldType(core.bool),
    [__overlayRepositionLoop_0_17]: dart.fieldType(core.bool),
    [__OverlayStyleConfig_0_18]: dart.fieldType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig),
    [__ZIndexer_0_19]: dart.fieldType(laminate__overlay__zindexer.ZIndexer),
    [__OverlayDomRenderService_0_20]: dart.fieldType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService),
    [__OverlayService_0_21]: dart.fieldType(src__laminate__overlay__overlay_service.OverlayService)
  }));
  mh_app_management__app_manage_component$46template.viewFactory_AppManagementComponentHost0 = function(parentView, parentIndex) {
    return new mh_app_management__app_manage_component$46template._ViewAppManagementComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(mh_app_management__app_manage_component$46template, {
    /*mh_app_management__app_manage_component$46template._AppManagementComponentNgFactory*/get _AppManagementComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfAppManagementComponent()).new("my-app-manage", dart.fn(mh_app_management__app_manage_component$46template.viewFactory_AppManagementComponentHost0, AppViewAndintToAppViewOfAppManagementComponent())));
    }
  });
  dart.copyProperties(mh_app_management__app_manage_component$46template, {
    get AppManagementComponentNgFactory() {
      return mh_app_management__app_manage_component$46template._AppManagementComponentNgFactory;
    }
  });
  dart.defineLazy(mh_app_management__app_manage_component$46template, {
    /*mh_app_management__app_manage_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  mh_app_management__app_manage_component$46template.initReflector = function() {
    if (dart.test(mh_app_management__app_manage_component$46template._visited)) {
      return;
    }
    mh_app_management__app_manage_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(mh_app_management__app_manage_component.AppManagementComponent), mh_app_management__app_manage_component$46template.AppManagementComponentNgFactory);
    angular$46template.initReflector();
    focus__focus$46template.initReflector();
    laminate__components__modal__modal$46template.initReflector();
    laminate__overlay__module$46template.initReflector();
    material_button__material_button$46template.initReflector();
    material_dialog__material_dialog$46template.initReflector();
    material_expansionpanel__material_expansionpanel$46template.initReflector();
    material_expansionpanel__material_expansionpanel_auto_dismiss$46template.initReflector();
    material_expansionpanel__material_expansionpanel_set$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    material_input__material_input$46template.initReflector();
    material_yes_no_buttons__material_yes_no_buttons$46template.initReflector();
    angular_forms$46template.initReflector();
    angular_router$46template.initReflector();
    src__app_manage$46template.initReflector();
    src__app_manage_service$46template.initReflector();
  };
  dart.trackLibraries("packages/mobile_hive/mh_app_management/app_manage_component.template.ddc", {
    "package:mobile_hive/mh_app_management/app_manage_component.template.dart": mh_app_management__app_manage_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["app_manage_component.template.dart"],"names":[],"mappings":"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","file":"app_manage_component.template.ddc.js"}');
  // Exports:
  return {
    mh_app_management__app_manage_component$46template: mh_app_management__app_manage_component$46template
  };
});

//# sourceMappingURL=app_manage_component.template.ddc.js.map
