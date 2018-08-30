// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'app_manage_component.dart';
export 'app_manage_component.dart';
import 'dart:async';
import 'package:mobile_hive/src/app_manage_service.dart';
import 'package:mobile_hive/src/app_manage.dart';
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/laminate/overlay/module.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_dialog/material_dialog.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel_auto_dismiss.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel_set.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/material_yes_no_buttons/material_yes_no_buttons.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus.template.dart' as _ref1;
import 'package:angular_components/laminate/components/modal/modal.template.dart' as _ref2;
import 'package:angular_components/laminate/overlay/module.template.dart' as _ref3;
import 'package:angular_components/material_button/material_button.template.dart' as _ref4;
import 'package:angular_components/material_dialog/material_dialog.template.dart' as _ref5;
import 'package:angular_components/material_expansionpanel/material_expansionpanel.template.dart' as _ref6;
import 'package:angular_components/material_expansionpanel/material_expansionpanel_auto_dismiss.template.dart' as _ref7;
import 'package:angular_components/material_expansionpanel/material_expansionpanel_set.template.dart' as _ref8;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref9;
import 'package:angular_components/material_input/material_input.template.dart' as _ref10;
import 'package:angular_components/material_yes_no_buttons/material_yes_no_buttons.template.dart' as _ref11;
import 'package:angular_forms/angular_forms.template.dart' as _ref12;
import 'package:angular_router/angular_router.template.dart' as _ref13;
import 'package:mobile_hive/src/app_manage.template.dart' as _ref14;
import 'package:mobile_hive/src/app_manage_service.template.dart' as _ref15;
import 'package:mobile_hive/mh_app_management/app_manage_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_manage_component.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import5;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel_set.dart' as import13;
import 'package:angular_components/material_expansionpanel/material_expansionpanel.template.dart' as import14;
import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart' as import15;
import 'package:angular_components/material_expansionpanel/material_expansionpanel_auto_dismiss.dart' as import16;
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/zone/ng_zone.dart' as import18;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import19;
import 'package:angular/src/core/di/opaque_token.dart' as import20;
import 'package:angular_components/content/deferred_content_aware.dart' as import21;
import 'package:angular_components/interfaces/has_disabled.dart' as import22;
import '../src/app_manage.dart' as import23;
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import24;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import25;
import 'package:angular_forms/src/directives/ng_model.dart' as import26;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import27;
import 'package:angular_forms/src/directives/ng_control.dart' as import28;
import '../src/app_manage_service.dart' as import29;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import30;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import31;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import32;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import33;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import34;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import35;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import36;
import 'package:angular_components/utils/browser/window/module.dart' as import37;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import38;
import 'package:angular_components/utils/disposer/disposer.dart' as import39;
import 'package:angular/src/core/linker/component_loader.dart' as import40;
import 'package:angular_components/laminate/overlay/module.dart' as import41;
import 'package:http/src/client.dart' as import42;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import43;

final List<dynamic> styles$AppManagementComponent = [import0.styles];

class ViewAppManagementComponent0 extends AppView<import2.AppManagementComponent> {
  import3.Element _el_0;
  import3.UListElement _el_3;
  ViewContainer _appEl_5;
  import5.NgFor _NgFor_5_9;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewAppManagementComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('my-app-manage');
    _renderType ??= import9.appViewUtils.createRenderType((import10.isDevMode ? 'asset:mobile_hive/lib/mh_app_management/app_manage_component.dart' : null), ViewEncapsulation.Emulated, styles$AppManagementComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.AppManagementComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'h1', parentRenderNode);
    addShimE(_el_0);
    import3.Text _text_1 = import3.Text('Management');
    _el_0.append(_text_1);
    import3.Text _text_2 = import3.Text('\r\n\r\n');
    parentRenderNode.append(_text_2);
    _el_3 = createAndAppend(doc, 'ul', parentRenderNode);
    _el_3.className = 'manageAppList';
    addShimC(_el_3);
    import3.Text _text_4 = import3.Text('\r\n    ');
    _el_3.append(_text_4);
    final _anchor_5 = createViewContainerAnchor();
    _el_3.append(_anchor_5);
    _appEl_5 = ViewContainer(5, 3, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(_appEl_5, viewFactory_AppManagementComponent1);
    _NgFor_5_9 = import5.NgFor(_appEl_5, _TemplateRef_5_8);
    import3.Text _text_6 = import3.Text('\r\n');
    _el_3.append(_text_6);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.AppManagementComponent _ctx = ctx;
    final currVal_0 = _ctx.manageAppList;
    if (import9.checkBinding(_expr_0, currVal_0)) {
      _NgFor_5_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if (!import9.AppViewUtils.throwOnChanges) {
      _NgFor_5_9.ngDoCheck();
    }
    _appEl_5.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_5?.destroyNestedViews();
  }
}

AppView<import2.AppManagementComponent> viewFactory_AppManagementComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewAppManagementComponent0(parentView, parentIndex);
}

class _ViewAppManagementComponent1 extends AppView<import2.AppManagementComponent> {
  import3.Element _el_0;
  import3.Element _el_2;
  import3.Element _el_4;
  import13.MaterialExpansionPanelSet _MaterialExpansionPanelSet_4_5;
  import3.Element _el_6;
  import14.ViewMaterialExpansionPanel0 _compView_6;
  import15.MaterialExpansionPanel _MaterialExpansionPanel_6_5;
  import16.MaterialExpansionPanelAutoDismiss _MaterialExpansionPanelAutoDismiss_6_6;
  import3.Element _el_8;
  import3.Text _text_9;
  import3.DivElement _el_11;
  import3.Element _el_13;
  ViewContainer _appEl_16;
  NgIf _NgIf_16_9;
  bool _expr_0;
  var _expr_3;
  _ViewAppManagementComponent1(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppManagementComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppManagementComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('li');
    addShimE(_el_0);
    import3.Text _text_1 = import3.Text('\r\n');
    _el_0.append(_text_1);
    _el_2 = createAndAppend(doc, 'section', _el_0);
    addShimE(_el_2);
    import3.Text _text_3 = import3.Text('\r\n    ');
    _el_2.append(_text_3);
    _el_4 = createAndAppend(doc, 'material-expansionpanel-set', _el_2);
    addShimE(_el_4);
    _MaterialExpansionPanelSet_4_5 = import13.MaterialExpansionPanelSet();
    import3.Text _text_5 = import3.Text('\r\n        ');
    _el_4.append(_text_5);
    _compView_6 = import14.ViewMaterialExpansionPanel0(this, 6);
    _el_6 = _compView_6.rootEl;
    _el_4.append(_el_6);
    createAttr(_el_6, 'autoDismissable', '');
    createAttr(_el_6, 'expandIcon', 'edit');
    createAttr(_el_6, 'name', 'BeeStripe App');
    addShimC(_el_6);
    _MaterialExpansionPanel_6_5 = import15.MaterialExpansionPanel(parentView.parentView.injectorGet(import18.NgZone, parentView.viewData.parentIndex), _compView_6.ref, parentView.parentView.injectorGet(import19.DomService, parentView.viewData.parentIndex), null);
    _MaterialExpansionPanelAutoDismiss_6_6 = import16.MaterialExpansionPanelAutoDismiss(_MaterialExpansionPanel_6_5, parentView.parentView.injectorGet(const import20.OpaqueToken('overlayContainer'), parentView.viewData.parentIndex, null), _el_6);
    import3.Text _text_7 = import3.Text('\r\n            ');
    _el_8 = doc.createElement('span');
    createAttr(_el_8, 'value', '');
    addShimE(_el_8);
    _text_9 = import3.Text('');
    _el_8.append(_text_9);
    import3.Text _text_10 = import3.Text('\r\n\r\n            ');
    _el_11 = doc.createElement('div');
    addShimC(_el_11);
    import3.Text _text_12 = import3.Text('\r\n                ');
    _el_11.append(_text_12);
    _el_13 = createSpanAndAppend(doc, _el_11);
    addShimE(_el_13);
    import3.Text _text_14 = import3.Text('Mobile Info:');
    _el_13.append(_text_14);
    import3.Text _text_15 = import3.Text('\r\n                ');
    _el_11.append(_text_15);
    final _anchor_16 = createViewContainerAnchor();
    _el_11.append(_anchor_16);
    _appEl_16 = ViewContainer(16, 11, this, _anchor_16);
    TemplateRef _TemplateRef_16_8 = TemplateRef(_appEl_16, viewFactory_AppManagementComponent2);
    _NgIf_16_9 = NgIf(_appEl_16, _TemplateRef_16_8);
    import3.Text _text_17 = import3.Text('\r\n            ');
    _el_11.append(_text_17);
    import3.Text _text_18 = import3.Text('\r\n        ');
    _compView_6.create(_MaterialExpansionPanel_6_5, [
      const [],
      [_el_8],
      const [],
      [_text_7, _text_10, _el_11, _text_18],
      const []
    ]);
    import3.Text _text_19 = import3.Text('\r\n    ');
    _el_4.append(_text_19);
    _MaterialExpansionPanelSet_4_5.panels = [_MaterialExpansionPanel_6_5];
    import3.Text _text_20 = import3.Text('\r\n');
    _el_2.append(_text_20);
    import3.Text _text_21 = import3.Text('\r\n    ');
    _el_0.append(_text_21);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    final subscription_0 = _MaterialExpansionPanel_6_5.isExpandedChange.listen(eventHandler1(_MaterialExpansionPanelAutoDismiss_6_6.onExpandedChanged));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import15.MaterialExpansionPanel) || identical(token, import21.DeferredContentAware)) || identical(token, import22.HasDisabled)) && ((6 <= nodeIndex) && (nodeIndex <= 18)))) {
      return _MaterialExpansionPanel_6_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.AppManagementComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final import23.Manage local_manage = locals['\$implicit'];
    changed = false;
    if (firstCheck) {
      _MaterialExpansionPanel_6_5.name = 'BeeStripe App';
      changed = true;
      _MaterialExpansionPanel_6_5.expandIcon = 'edit';
      changed = true;
    }
    if (changed) {
      _compView_6.markAsCheckOnce();
    }
    if ((!import9.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialExpansionPanel_6_5.ngOnInit();
    }
    _NgIf_16_9.ngIf = (_ctx.selected != null);
    _appEl_16.detectChangesInNestedViews();
    final currVal_0 = identical(local_manage, _ctx.selected);
    if (import9.checkBinding(_expr_0, currVal_0)) {
      updateClass(_el_0, 'selected', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_3 = import9.interpolate0(local_manage.ma_name);
    if (import9.checkBinding(_expr_3, currVal_3)) {
      _text_9.text = currVal_3;
      _expr_3 = currVal_3;
    }
    _compView_6.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_16?.destroyNestedViews();
    _compView_6?.destroy();
    _MaterialExpansionPanel_6_5.ngOnDestroy();
    _MaterialExpansionPanelAutoDismiss_6_6.ngOnDestroy();
    _MaterialExpansionPanelSet_4_5.ngOnDestroy();
  }

  void _handle_click_0_0($event) {
    final import23.Manage local_manage = locals['\$implicit'];
    ctx.onSelect(local_manage);
  }
}

AppView<import2.AppManagementComponent> viewFactory_AppManagementComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppManagementComponent1(parentView, parentIndex);
}

class _ViewAppManagementComponent2 extends AppView<import2.AppManagementComponent> {
  import3.DivElement _el_0;
  import3.DivElement _el_2;
  import3.Element _el_3;
  import3.Text _text_5;
  import3.DivElement _el_7;
  import3.Element _el_9;
  import3.InputElement _el_12;
  import24.DefaultValueAccessor _DefaultValueAccessor_12_5;
  List<import25.ControlValueAccessor<dynamic>> _NgValueAccessor_12_6;
  import26.NgModel _NgModel_12_7;
  var _expr_0;
  _ViewAppManagementComponent2(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppManagementComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppManagementComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    import3.Text _text_1 = import3.Text('\r\n                    ');
    _el_0.append(_text_1);
    _el_2 = createDivAndAppend(doc, _el_0);
    addShimC(_el_2);
    _el_3 = createAndAppend(doc, 'label', _el_2);
    addShimE(_el_3);
    import3.Text _text_4 = import3.Text('id: ');
    _el_3.append(_text_4);
    _text_5 = import3.Text('');
    _el_2.append(_text_5);
    import3.Text _text_6 = import3.Text('\r\n                    ');
    _el_0.append(_text_6);
    _el_7 = createDivAndAppend(doc, _el_0);
    addShimC(_el_7);
    import3.Text _text_8 = import3.Text('\r\n                        ');
    _el_7.append(_text_8);
    _el_9 = createAndAppend(doc, 'label', _el_7);
    addShimE(_el_9);
    import3.Text _text_10 = import3.Text('name: ');
    _el_9.append(_text_10);
    import3.Text _text_11 = import3.Text('\r\n                        ');
    _el_7.append(_text_11);
    _el_12 = createAndAppend(doc, 'input', _el_7);
    createAttr(_el_12, 'placeholder', 'ma_name');
    addShimC(_el_12);
    _DefaultValueAccessor_12_5 = import24.DefaultValueAccessor(_el_12);
    _NgValueAccessor_12_6 = [_DefaultValueAccessor_12_5];
    _NgModel_12_7 = import26.NgModel(null, _NgValueAccessor_12_6);
    import3.Text _text_13 = import3.Text('\r\n                    ');
    _el_7.append(_text_13);
    import3.Text _text_14 = import3.Text('\r\n                ');
    _el_0.append(_text_14);
    _el_12.addEventListener('blur', eventHandler0(_DefaultValueAccessor_12_5.touchHandler));
    _el_12.addEventListener('input', eventHandler1(_handle_input_12_2));
    final subscription_0 = _NgModel_12_7.update.listen(eventHandler1(_handle_ngModelChange_12_0));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, const import20.MultiToken<import27.ControlValueAccessor>('NgValueAccessor')) && (12 == nodeIndex))) {
      return _NgValueAccessor_12_6;
    }
    if (((identical(token, import26.NgModel) || identical(token, import28.NgControl)) && (12 == nodeIndex))) {
      return _NgModel_12_7;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.AppManagementComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    _NgModel_12_7.model = _ctx.selected.ma_name;
    _NgModel_12_7.ngAfterChanges();
    if ((!import9.AppViewUtils.throwOnChanges && firstCheck)) {
      _NgModel_12_7.ngOnInit();
    }
    final currVal_0 = import9.interpolate0(_ctx.selected.ma_id);
    if (import9.checkBinding(_expr_0, currVal_0)) {
      _text_5.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }

  void _handle_ngModelChange_12_0($event) {
    ctx.selected.ma_name = $event;
  }

  void _handle_input_12_2($event) {
    _DefaultValueAccessor_12_5.handleChange($event.target.value);
  }
}

AppView<import2.AppManagementComponent> viewFactory_AppManagementComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppManagementComponent2(parentView, parentIndex);
}

final List<dynamic> styles$AppManagementComponentHost = const [];

class _ViewAppManagementComponentHost0 extends AppView<import2.AppManagementComponent> {
  ViewAppManagementComponent0 _compView_0;
  import29.ManageService _ManageService_0_5;
  import2.AppManagementComponent _AppManagementComponent_0_6;
  dynamic __Document_0_7;
  dynamic __Window_0_8;
  dynamic __DomService_0_9;
  import30.AcxImperativeViewUtils __AcxImperativeViewUtils_0_10;
  import31.DomRuler __DomRuler_0_11;
  import32.Angular2ManagedZone __ManagedZone_0_12;
  dynamic __overlayContainerName_0_13;
  dynamic __overlayContainerParent_0_14;
  dynamic __overlayContainer_0_15;
  bool __overlaySyncDom_0_16;
  bool __overlayRepositionLoop_0_17;
  import33.OverlayStyleConfig __OverlayStyleConfig_0_18;
  import34.ZIndexer __ZIndexer_0_19;
  import35.OverlayDomRenderService __OverlayDomRenderService_0_20;
  import36.OverlayService __OverlayService_0_21;
  _ViewAppManagementComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  dynamic get _Document_0_7 {
    if ((this.__Document_0_7 == null)) {
      (__Document_0_7 = import37.getDocument());
    }
    return this.__Document_0_7;
  }

  dynamic get _Window_0_8 {
    if ((this.__Window_0_8 == null)) {
      (__Window_0_8 = import37.getWindow());
    }
    return this.__Window_0_8;
  }

  dynamic get _DomService_0_9 {
    if ((this.__DomService_0_9 == null)) {
      (__DomService_0_9 = import38.createDomService(this.injectorGet(import19.DomService, this.viewData.parentIndex, null), this.injectorGet(import39.Disposer, this.viewData.parentIndex, null), this.injectorGet(import18.NgZone, this.viewData.parentIndex), this._Window_0_8));
    }
    return this.__DomService_0_9;
  }

  import30.AcxImperativeViewUtils get _AcxImperativeViewUtils_0_10 {
    if ((this.__AcxImperativeViewUtils_0_10 == null)) {
      (__AcxImperativeViewUtils_0_10 = import30.AcxImperativeViewUtils(this.injectorGet(import40.ComponentLoader, this.viewData.parentIndex), this._DomService_0_9));
    }
    return this.__AcxImperativeViewUtils_0_10;
  }

  import31.DomRuler get _DomRuler_0_11 {
    if ((this.__DomRuler_0_11 == null)) {
      (__DomRuler_0_11 = import31.DomRuler(this._Document_0_7, this._DomService_0_9));
    }
    return this.__DomRuler_0_11;
  }

  import32.Angular2ManagedZone get _ManagedZone_0_12 {
    if ((this.__ManagedZone_0_12 == null)) {
      (__ManagedZone_0_12 = import32.Angular2ManagedZone(this.injectorGet(import18.NgZone, this.viewData.parentIndex)));
    }
    return this.__ManagedZone_0_12;
  }

  dynamic get _overlayContainerName_0_13 {
    if ((this.__overlayContainerName_0_13 == null)) {
      (__overlayContainerName_0_13 = import41.getDefaultContainerName(this.injectorGet(const import20.OpaqueToken('overlayContainerName'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerName_0_13;
  }

  dynamic get _overlayContainerParent_0_14 {
    if ((this.__overlayContainerParent_0_14 == null)) {
      (__overlayContainerParent_0_14 = import41.getOverlayContainerParent(this._Document_0_7, this.injectorGet(const import20.OpaqueToken('overlayContainerParent'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerParent_0_14;
  }

  dynamic get _overlayContainer_0_15 {
    if ((this.__overlayContainer_0_15 == null)) {
      (__overlayContainer_0_15 = import41.getDefaultContainer(this._overlayContainerName_0_13, this._overlayContainerParent_0_14, this.injectorGet(const import20.OpaqueToken('overlayContainer'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainer_0_15;
  }

  bool get _overlaySyncDom_0_16 {
    if ((this.__overlaySyncDom_0_16 == null)) {
      (__overlaySyncDom_0_16 = true);
    }
    return this.__overlaySyncDom_0_16;
  }

  bool get _overlayRepositionLoop_0_17 {
    if ((this.__overlayRepositionLoop_0_17 == null)) {
      (__overlayRepositionLoop_0_17 = true);
    }
    return this.__overlayRepositionLoop_0_17;
  }

  import33.OverlayStyleConfig get _OverlayStyleConfig_0_18 {
    if ((this.__OverlayStyleConfig_0_18 == null)) {
      (__OverlayStyleConfig_0_18 = import33.OverlayStyleConfig(this._Document_0_7));
    }
    return this.__OverlayStyleConfig_0_18;
  }

  import34.ZIndexer get _ZIndexer_0_19 {
    if ((this.__ZIndexer_0_19 == null)) {
      (__ZIndexer_0_19 = import34.ZIndexer());
    }
    return this.__ZIndexer_0_19;
  }

  import35.OverlayDomRenderService get _OverlayDomRenderService_0_20 {
    if ((this.__OverlayDomRenderService_0_20 == null)) {
      (__OverlayDomRenderService_0_20 = import35.OverlayDomRenderService(this._OverlayStyleConfig_0_18, this._overlayContainer_0_15, this._overlayContainerName_0_13, this._DomRuler_0_11, this._DomService_0_9, this._AcxImperativeViewUtils_0_10, this._overlaySyncDom_0_16, this._overlayRepositionLoop_0_17, this._ZIndexer_0_19));
    }
    return this.__OverlayDomRenderService_0_20;
  }

  import36.OverlayService get _OverlayService_0_21 {
    if ((this.__OverlayService_0_21 == null)) {
      (__OverlayService_0_21 = import36.OverlayService(this.injectorGet(import18.NgZone, this.viewData.parentIndex), this._overlaySyncDom_0_16, this._OverlayDomRenderService_0_20, this.injectorGet(import36.OverlayService, this.viewData.parentIndex, null)));
    }
    return this.__OverlayService_0_21;
  }

  @override
  ComponentRef<import2.AppManagementComponent> build() {
    _compView_0 = ViewAppManagementComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ManageService_0_5 = import29.ManageService(this.injectorGet(import42.Client, viewData.parentIndex));
    _AppManagementComponent_0_6 = import2.AppManagementComponent(_ManageService_0_5);
    _compView_0.create(_AppManagementComponent_0_6, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _AppManagementComponent_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import29.ManageService) && (0 == nodeIndex))) {
      return _ManageService_0_5;
    }
    if ((identical(token, import3.Document) && (0 == nodeIndex))) {
      return _Document_0_7;
    }
    if ((identical(token, import3.Window) && (0 == nodeIndex))) {
      return _Window_0_8;
    }
    if ((identical(token, import19.DomService) && (0 == nodeIndex))) {
      return _DomService_0_9;
    }
    if ((identical(token, import30.AcxImperativeViewUtils) && (0 == nodeIndex))) {
      return _AcxImperativeViewUtils_0_10;
    }
    if ((identical(token, import31.DomRuler) && (0 == nodeIndex))) {
      return _DomRuler_0_11;
    }
    if ((identical(token, import43.ManagedZone) && (0 == nodeIndex))) {
      return _ManagedZone_0_12;
    }
    if ((identical(token, const import20.OpaqueToken('overlayContainerName')) && (0 == nodeIndex))) {
      return _overlayContainerName_0_13;
    }
    if ((identical(token, const import20.OpaqueToken('overlayContainerParent')) && (0 == nodeIndex))) {
      return _overlayContainerParent_0_14;
    }
    if ((identical(token, const import20.OpaqueToken('overlayContainer')) && (0 == nodeIndex))) {
      return _overlayContainer_0_15;
    }
    if ((identical(token, const import20.OpaqueToken('overlaySyncDom')) && (0 == nodeIndex))) {
      return _overlaySyncDom_0_16;
    }
    if ((identical(token, const import20.OpaqueToken('overlayRepositionLoop')) && (0 == nodeIndex))) {
      return _overlayRepositionLoop_0_17;
    }
    if ((identical(token, import33.OverlayStyleConfig) && (0 == nodeIndex))) {
      return _OverlayStyleConfig_0_18;
    }
    if ((identical(token, import34.ZIndexer) && (0 == nodeIndex))) {
      return _ZIndexer_0_19;
    }
    if ((identical(token, import35.OverlayDomRenderService) && (0 == nodeIndex))) {
      return _OverlayDomRenderService_0_20;
    }
    if ((identical(token, import36.OverlayService) && (0 == nodeIndex))) {
      return _OverlayService_0_21;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if ((!import9.AppViewUtils.throwOnChanges && firstCheck)) {
      _AppManagementComponent_0_6.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.AppManagementComponent> viewFactory_AppManagementComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppManagementComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.AppManagementComponent> _AppManagementComponentNgFactory = const ComponentFactory('my-app-manage', viewFactory_AppManagementComponentHost0);
ComponentFactory<import2.AppManagementComponent> get AppManagementComponentNgFactory {
  return _AppManagementComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppManagementComponent, AppManagementComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
  _ref9.initReflector();
  _ref10.initReflector();
  _ref11.initReflector();
  _ref12.initReflector();
  _ref13.initReflector();
  _ref14.initReflector();
  _ref15.initReflector();
}
