// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'dashboard_component.dart';
export 'dashboard_component.dart';
import 'package:mobile_hive/src/route/route_paths.dart';
import 'package:angular/angular.dart';
import 'package:mobile_hive/src/app.dart';
import 'package:mobile_hive/src/mobile_service.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_router/angular_router.template.dart' as _ref1;
import 'package:mobile_hive/src/app.template.dart' as _ref2;
import 'package:mobile_hive/src/mobile_service.template.dart' as _ref3;
import 'package:mobile_hive/src/route/route_paths.template.dart' as _ref4;
import 'package:mobile_hive/mh_dashboard_component/dashboard_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'dashboard_component.dart' as import2;
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
import 'package:angular_router/src/directives/router_link_directive.template.dart' as import13;
import 'package:angular_router/src/directives/router_link_directive.dart' as import14;
import 'package:angular_router/src/router/router.dart' as import15;
import 'package:angular_router/src/location/location.dart' as import16;
import '../src/app.dart' as import17;
import '../src/mobile_service.dart' as import18;

final List<dynamic> styles$DashboardComponent = [import0.styles];

class ViewDashboardComponent0 extends AppView<import2.DashboardComponent> {
  import3.Element _el_0;
  import3.DivElement _el_2;
  ViewContainer _appEl_3;
  import5.NgFor _NgFor_3_9;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewDashboardComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('my-dashboard');
    _renderType ??= import9.appViewUtils.createRenderType((import10.isDevMode ? 'asset:mobile_hive/lib/mh_dashboard_component/dashboard_component.dart' : null), ViewEncapsulation.Emulated, styles$DashboardComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.DashboardComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'h3', parentRenderNode);
    addShimE(_el_0);
    import3.Text _text_1 = import3.Text('Top Apps');
    _el_0.append(_text_1);
    _el_2 = createDivAndAppend(doc, parentRenderNode);
    _el_2.className = 'grid grid-pad';
    addShimC(_el_2);
    final _anchor_3 = createViewContainerAnchor();
    _el_2.append(_anchor_3);
    _appEl_3 = ViewContainer(3, 2, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, viewFactory_DashboardComponent1);
    _NgFor_3_9 = import5.NgFor(_appEl_3, _TemplateRef_3_8);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.DashboardComponent _ctx = ctx;
    final currVal_0 = _ctx.appsList;
    if (import9.checkBinding(_expr_0, currVal_0)) {
      _NgFor_3_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if (!import9.AppViewUtils.throwOnChanges) {
      _NgFor_3_9.ngDoCheck();
    }
    _appEl_3.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_3?.destroyNestedViews();
  }
}

AppView<import2.DashboardComponent> viewFactory_DashboardComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewDashboardComponent0(parentView, parentIndex);
}

class _ViewDashboardComponent1 extends AppView<import2.DashboardComponent> {
  import3.AnchorElement _el_0;
  import13.RouterLinkNgCd _RouterLink_0_5;
  import3.DivElement _el_1;
  import3.Element _el_2;
  import3.Text _text_3;
  String _expr_0;
  var _expr_1;
  _ViewDashboardComponent1(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewDashboardComponent0._renderType;
  }
  @override
  ComponentRef<import2.DashboardComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('a');
    _el_0.className = 'col-1-4';
    addShimC(_el_0);
    _RouterLink_0_5 = import13.RouterLinkNgCd(import14.RouterLink(parentView.parentView.injectorGet(import15.Router, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import16.Location, parentView.viewData.parentIndex), null, _el_0));
    _el_1 = createDivAndAppend(doc, _el_0);
    _el_1.className = 'module app';
    addShimC(_el_1);
    _el_2 = createAndAppend(doc, 'h4', _el_1);
    addShimE(_el_2);
    _text_3 = import3.Text('');
    _el_2.append(_text_3);
    _el_0.addEventListener('click', eventHandler1(_RouterLink_0_5.instance.onClick));
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.DashboardComponent _ctx = ctx;
    final import17.App local_app = locals['\$implicit'];
    final currVal_0 = _ctx.appUrl(local_app.id);
    if (import9.checkBinding(_expr_0, currVal_0)) {
      _RouterLink_0_5.instance.routerLink = currVal_0;
      _expr_0 = currVal_0;
    }
    _RouterLink_0_5.detectHostChanges(this, _el_0);
    final currVal_1 = import9.interpolate0(local_app.name);
    if (import9.checkBinding(_expr_1, currVal_1)) {
      _text_3.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }

  @override
  void destroyInternal() {
    _RouterLink_0_5.instance.ngOnDestroy();
  }
}

AppView<import2.DashboardComponent> viewFactory_DashboardComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDashboardComponent1(parentView, parentIndex);
}

final List<dynamic> styles$DashboardComponentHost = const [];

class _ViewDashboardComponentHost0 extends AppView<import2.DashboardComponent> {
  ViewDashboardComponent0 _compView_0;
  import2.DashboardComponent _DashboardComponent_0_5;
  _ViewDashboardComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.DashboardComponent> build() {
    _compView_0 = ViewDashboardComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _DashboardComponent_0_5 = import2.DashboardComponent(this.injectorGet(import18.MobileService, viewData.parentIndex));
    _compView_0.create(_DashboardComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _DashboardComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if ((!import9.AppViewUtils.throwOnChanges && firstCheck)) {
      _DashboardComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.DashboardComponent> viewFactory_DashboardComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDashboardComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.DashboardComponent> _DashboardComponentNgFactory = const ComponentFactory('my-dashboard', viewFactory_DashboardComponentHost0);
ComponentFactory<import2.DashboardComponent> get DashboardComponentNgFactory {
  return _DashboardComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(DashboardComponent, DashboardComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
