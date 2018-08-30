// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'app_list_component.dart';
export 'app_list_component.dart';
import 'dart:async';
import 'package:angular_components/material_list/material_list.dart';
import 'package:mobile_hive/src/app.dart';
import 'package:mobile_hive/src/route/route_paths.dart';
import 'package:angular/angular.dart';
import 'package:mobile_hive/src/mobile_component.dart';
import 'package:mobile_hive/src/mobile_service.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref1;
import 'package:angular_components/material_list/material_list.template.dart' as _ref2;
import 'package:angular_router/angular_router.template.dart' as _ref3;
import 'package:mobile_hive/src/app.template.dart' as _ref4;
import 'package:mobile_hive/src/mobile_component.template.dart' as _ref5;
import 'package:mobile_hive/src/mobile_service.template.dart' as _ref6;
import 'package:mobile_hive/src/route/route_paths.template.dart' as _ref7;
import 'package:mobile_hive/mh_apps_list_component/app_list_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_list_component.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular_components/material_list/material_list.template.dart' as import6;
import 'package:angular_components/material_list/material_list.dart' as import7;
import 'package:angular/src/common/directives/ng_for.dart' as import8;
import '../src/mobile_component.template.dart' as import9;
import '../src/mobile_component.dart' as import10;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import12;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import14;
import 'package:angular/src/runtime.dart' as import15;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import '../src/mobile_service.dart' as import18;
import 'package:angular_router/src/location/location.dart' as import19;
import 'package:angular_components/material_icon/material_icon.template.dart' as import20;
import 'package:angular_components/material_icon/material_icon.dart' as import21;
import '../src/app.dart' as import22;
import 'package:angular_router/src/router/router.dart' as import23;

final List<dynamic> styles$AppListComponent = [import0.styles];

class ViewAppListComponent0 extends AppView<import2.AppListComponent> {
  import3.Element _el_0;
  import3.Text _text_1;
  import3.DivElement _el_2;
  import3.Element _el_3;
  import3.InputElement _el_6;
  import3.ButtonElement _el_8;
  ViewContainer _appEl_10;
  NgIf _NgIf_10_9;
  import3.Element _el_11;
  import6.ViewMaterialListComponent0 _compView_11;
  import7.MaterialListComponent _MaterialListComponent_11_5;
  import3.TableElement _el_12;
  import3.Element _el_13;
  import3.Element _el_14;
  import3.Element _el_15;
  import3.Element _el_17;
  import3.Element _el_19;
  import3.Element _el_21;
  ViewContainer _appEl_22;
  import8.NgFor _NgFor_22_9;
  import3.Element _el_23;
  import9.ViewMobileAppComponent0 _compView_23;
  import10.MobileAppComponent _MobileAppComponent_23_5;
  var _expr_1;
  var _expr_2;
  static RenderComponentType _renderType;
  ViewAppListComponent0(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('my-app-list');
    _renderType ??= import14.appViewUtils.createRenderType((import15.isDevMode ? 'asset:mobile_hive/lib/mh_apps_list_component/app_list_component.dart' : null), ViewEncapsulation.Emulated, styles$AppListComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.AppListComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'h1', parentRenderNode);
    addShimE(_el_0);
    _text_1 = import3.Text((ctx.title ?? ''));
    _el_0.append(_text_1);
    _el_2 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_2);
    _el_3 = createAndAppend(doc, 'label', _el_2);
    addShimE(_el_3);
    import3.Text _text_4 = import3.Text('App name:');
    _el_3.append(_text_4);
    import3.Text _text_5 = import3.Text(' ');
    _el_2.append(_text_5);
    _el_6 = createAndAppend(doc, 'input', _el_2);
    addShimC(_el_6);
    import3.Text _text_7 = import3.Text(' ');
    _el_2.append(_text_7);
    _el_8 = createAndAppend(doc, 'button', _el_2);
    addShimC(_el_8);
    import3.Text _text_9 = import3.Text('Add');
    _el_8.append(_text_9);
    final _anchor_10 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_10);
    _appEl_10 = ViewContainer(10, null, this, _anchor_10);
    TemplateRef _TemplateRef_10_8 = TemplateRef(_appEl_10, viewFactory_AppListComponent1);
    _NgIf_10_9 = NgIf(_appEl_10, _TemplateRef_10_8);
    _compView_11 = import6.ViewMaterialListComponent0(this, 11);
    _el_11 = _compView_11.rootEl;
    parentRenderNode.append(_el_11);
    addShimC(_el_11);
    _MaterialListComponent_11_5 = import7.MaterialListComponent();
    _el_12 = doc.createElement('table');
    addShimC(_el_12);
    _el_13 = createAndAppend(doc, 'thead', _el_12);
    addShimE(_el_13);
    _el_14 = createAndAppend(doc, 'tr', _el_13);
    addShimE(_el_14);
    _el_15 = createAndAppend(doc, 'th', _el_14);
    addShimE(_el_15);
    import3.Text _text_16 = import3.Text('App ID');
    _el_15.append(_text_16);
    _el_17 = createAndAppend(doc, 'th', _el_14);
    addShimE(_el_17);
    import3.Text _text_18 = import3.Text('App Name');
    _el_17.append(_text_18);
    _el_19 = createAndAppend(doc, 'th', _el_14);
    addShimE(_el_19);
    import3.Text _text_20 = import3.Text('Action');
    _el_19.append(_text_20);
    _el_21 = createAndAppend(doc, 'tbody', _el_12);
    _el_21.className = 'appsList';
    addShimE(_el_21);
    final _anchor_22 = createViewContainerAnchor();
    _el_21.append(_anchor_22);
    _appEl_22 = ViewContainer(22, 21, this, _anchor_22);
    TemplateRef _TemplateRef_22_8 = TemplateRef(_appEl_22, viewFactory_AppListComponent2);
    _NgFor_22_9 = import8.NgFor(_appEl_22, _TemplateRef_22_8);
    _compView_11.create(_MaterialListComponent_11_5, [
      [_el_12]
    ]);
    _compView_23 = import9.ViewMobileAppComponent0(this, 23);
    _el_23 = _compView_23.rootEl;
    parentRenderNode.append(_el_23);
    addShimC(_el_23);
    _MobileAppComponent_23_5 = import10.MobileAppComponent(parentView.injectorGet(import18.MobileService, viewData.parentIndex), parentView.injectorGet(import19.Location, viewData.parentIndex));
    _compView_23.create(_MobileAppComponent_23_5, []);
    _el_8.addEventListener('click', eventHandler1(_handle_click_8_0));
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.AppListComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    _NgIf_10_9.ngIf = (_ctx.selected != null);
    changed = false;
    if (changed) {
      _compView_11.markAsCheckOnce();
    }
    final currVal_1 = _ctx.appsList;
    if (import14.checkBinding(_expr_1, currVal_1)) {
      _NgFor_22_9.ngForOf = currVal_1;
      _expr_1 = currVal_1;
    }
    if (!import14.AppViewUtils.throwOnChanges) {
      _NgFor_22_9.ngDoCheck();
    }
    _appEl_10.detectChangesInNestedViews();
    _appEl_22.detectChangesInNestedViews();
    _compView_11.detectHostChanges(firstCheck);
    final currVal_2 = _ctx.selected;
    if (import14.checkBinding(_expr_2, currVal_2)) {
      setProp(_el_23, 'app', currVal_2);
      _expr_2 = currVal_2;
    }
    _compView_11.detectChanges();
    _compView_23.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_10?.destroyNestedViews();
    _appEl_22?.destroyNestedViews();
    _compView_11?.destroy();
    _compView_23?.destroy();
  }

  void _handle_click_8_0($event) {
    final local_appName = _el_6;
    ctx.add(local_appName.value);
    local_appName.value = '';
  }
}

AppView<import2.AppListComponent> viewFactory_AppListComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewAppListComponent0(parentView, parentIndex);
}

class _ViewAppListComponent1 extends AppView<import2.AppListComponent> {
  import3.DivElement _el_0;
  import3.Element _el_1;
  import3.Text _text_2;
  var _expr_0;
  _ViewAppListComponent1(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppListComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppListComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'h2', _el_0);
    addShimE(_el_1);
    _text_2 = import3.Text('');
    _el_1.append(_text_2);
    import3.Text _text_3 = import3.Text(' app');
    _el_1.append(_text_3);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.AppListComponent _ctx = ctx;
    final currVal_0 = import14.interpolate0(_ctx.selected.name);
    if (import14.checkBinding(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.AppListComponent> viewFactory_AppListComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppListComponent1(parentView, parentIndex);
}

class _ViewAppListComponent2 extends AppView<import2.AppListComponent> {
  import3.Element _el_0;
  import3.Element _el_1;
  import3.Text _text_2;
  import3.Element _el_3;
  import3.Text _text_4;
  import3.Element _el_5;
  import3.Element _el_6;
  import20.ViewMaterialIconComponent0 _compView_6;
  import21.MaterialIconComponent _MaterialIconComponent_6_5;
  import3.Element _el_7;
  import20.ViewMaterialIconComponent0 _compView_7;
  import21.MaterialIconComponent _MaterialIconComponent_7_5;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewAppListComponent2(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppListComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppListComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('tr');
    addShimE(_el_0);
    _el_1 = createAndAppend(doc, 'td', _el_0);
    addShimE(_el_1);
    _text_2 = import3.Text('');
    _el_1.append(_text_2);
    _el_3 = createAndAppend(doc, 'td', _el_0);
    addShimE(_el_3);
    _text_4 = import3.Text('');
    _el_3.append(_text_4);
    _el_5 = createAndAppend(doc, 'td', _el_0);
    addShimE(_el_5);
    _compView_6 = import20.ViewMaterialIconComponent0(this, 6);
    _el_6 = _compView_6.rootEl;
    _el_5.append(_el_6);
    _el_6.className = 'edit';
    createAttr(_el_6, 'icon', 'create');
    addShimC(_el_6);
    _MaterialIconComponent_6_5 = import21.MaterialIconComponent(_el_6);
    _compView_6.create(_MaterialIconComponent_6_5, []);
    _compView_7 = import20.ViewMaterialIconComponent0(this, 7);
    _el_7 = _compView_7.rootEl;
    _el_5.append(_el_7);
    _el_7.className = 'delete';
    createAttr(_el_7, 'icon', 'delete');
    addShimC(_el_7);
    _MaterialIconComponent_7_5 = import21.MaterialIconComponent(_el_7);
    _compView_7.create(_MaterialIconComponent_7_5, []);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    _el_6.addEventListener('click', eventHandler0(ctx.gotoDetail));
    _el_7.addEventListener('click', eventHandler1(_handle_click_7_0));
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.AppListComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final import22.App local_app = locals['\$implicit'];
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_6_5.icon = 'create';
      changed = true;
    }
    if (changed) {
      _compView_6.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_7_5.icon = 'delete';
      changed = true;
    }
    if (changed) {
      _compView_7.markAsCheckOnce();
    }
    final currVal_0 = identical(local_app, _ctx.selected);
    if (import14.checkBinding(_expr_0, currVal_0)) {
      updateClass(_el_0, 'selected', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = import14.interpolate0(local_app.id);
    if (import14.checkBinding(_expr_1, currVal_1)) {
      _text_2.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = import14.interpolate0(local_app.name);
    if (import14.checkBinding(_expr_2, currVal_2)) {
      _text_4.text = currVal_2;
      _expr_2 = currVal_2;
    }
    _compView_6.detectChanges();
    _compView_7.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_6?.destroy();
    _compView_7?.destroy();
  }

  void _handle_click_0_0($event) {
    final import22.App local_app = locals['\$implicit'];
    ctx.onSelect(local_app);
  }

  void _handle_click_7_0($event) {
    final import22.App local_app = locals['\$implicit'];
    ctx.delete(local_app);
    $event.stopPropagation();
  }
}

AppView<import2.AppListComponent> viewFactory_AppListComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppListComponent2(parentView, parentIndex);
}

final List<dynamic> styles$AppListComponentHost = const [];

class _ViewAppListComponentHost0 extends AppView<import2.AppListComponent> {
  ViewAppListComponent0 _compView_0;
  import2.AppListComponent _AppListComponent_0_5;
  _ViewAppListComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.AppListComponent> build() {
    _compView_0 = ViewAppListComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AppListComponent_0_5 = import2.AppListComponent(this.injectorGet(import18.MobileService, viewData.parentIndex), this.injectorGet(import23.Router, viewData.parentIndex));
    _compView_0.create(_AppListComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _AppListComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if ((!import14.AppViewUtils.throwOnChanges && firstCheck)) {
      _AppListComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.AppListComponent> viewFactory_AppListComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppListComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.AppListComponent> _AppListComponentNgFactory = const ComponentFactory('my-app-list', viewFactory_AppListComponentHost0);
ComponentFactory<import2.AppListComponent> get AppListComponentNgFactory {
  return _AppListComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppListComponent, AppListComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
