// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'app_component.dart';
export 'app_component.dart';
import 'package:mobile_hive/src/app_manage_service.dart';
import 'package:mobile_hive/src/mh_header/header_component.dart';
import 'package:mobile_hive/src/route/route_paths.dart';
import 'package:mobile_hive/src/route/routes.dart';
import 'package:mobile_hive/src/mobile_service.dart';
import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/angular_components.template.dart' as _ref1;
import 'package:angular_router/angular_router.template.dart' as _ref2;
import 'package:mobile_hive/src/app_manage_service.template.dart' as _ref3;
import 'package:mobile_hive/src/mh_header/header_component.template.dart' as _ref4;
import 'package:mobile_hive/src/mobile_service.template.dart' as _ref5;
import 'package:mobile_hive/src/route/route_paths.template.dart' as _ref6;
import 'package:mobile_hive/src/route/routes.template.dart' as _ref7;
import 'package:mobile_hive/app_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_component.dart' as import2;
import 'dart:html' as import3;
import 'src/mh_header/header_component.template.dart' as import4;
import 'src/mh_header/header_component.dart' as import5;
import 'package:angular_router/src/directives/router_link_directive.template.dart' as import6;
import 'package:angular_router/src/directives/router_link_active_directive.dart' as import7;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular_router/src/directives/router_outlet_directive.dart' as import9;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import11;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import13;
import 'package:angular/src/runtime.dart' as import14;
import 'package:angular/angular.dart';
import 'package:angular_router/src/directives/router_link_directive.dart' as import16;
import 'package:angular_router/src/router/router.dart' as import17;
import 'package:angular_router/src/location/location.dart' as import18;
import 'package:angular_router/src/router/router_outlet_token.dart' as import19;
import 'package:angular_router/src/router_hook.dart' as import20;
import 'src/route/route_paths.dart' as import21;
import 'src/route/routes.dart' as import22;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import23;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import24;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import25;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import26;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import27;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import28;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import29;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import31;
import 'package:angular_components/src/laminate/popup/dom_popup_source.dart' as import32;
import 'package:quiver/time.dart' as import33;
import 'src/mobile_service.dart' as import34;
import 'src/app_manage_service.dart' as import35;
import 'package:angular_components/utils/browser/window/module.dart' as import36;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import37;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import38;
import 'package:angular_components/utils/disposer/disposer.dart' as import39;
import 'package:angular/src/core/zone/ng_zone.dart' as import40;
import 'package:angular/src/core/linker/component_loader.dart' as import41;
import 'package:angular_components/laminate/overlay/module.dart' as import42;
import 'package:angular/src/core/di/opaque_token.dart' as import43;
import 'package:http/src/client.dart' as import44;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import45;
import 'package:angular_components/laminate/enums/alignment.dart' as import46;

final List<dynamic> styles$AppComponent = [import0.styles];

class ViewAppComponent0 extends AppView<import2.AppComponent> {
  import3.Element _el_0;
  import4.ViewHeaderComponent0 _compView_0;
  import5.HeaderComponent _HeaderComponent_0_5;
  import3.Element _el_1;
  import3.Element _el_2;
  import3.DivElement _el_3;
  import3.DivElement _el_4;
  import3.Element _el_5;
  import3.DivElement _el_6;
  import3.Element _el_7;
  import3.AnchorElement _el_9;
  import3.Element _el_10;
  import3.UListElement _el_12;
  import3.Element _el_13;
  import3.Element _el_15;
  import3.AnchorElement _el_16;
  import6.RouterLinkNgCd _RouterLink_16_5;
  import7.RouterLinkActive _RouterLinkActive_16_6;
  import3.Element _el_17;
  import3.Element _el_19;
  import3.Element _el_21;
  import3.AnchorElement _el_22;
  import6.RouterLinkNgCd _RouterLink_22_5;
  import7.RouterLinkActive _RouterLinkActive_22_6;
  import3.Element _el_23;
  import3.Element _el_25;
  import3.Element _el_27;
  import3.AnchorElement _el_28;
  import6.RouterLinkNgCd _RouterLink_28_5;
  import7.RouterLinkActive _RouterLinkActive_28_6;
  import3.Element _el_29;
  import3.Element _el_31;
  import3.Element _el_33;
  import3.AnchorElement _el_34;
  import6.RouterLinkNgCd _RouterLink_34_5;
  import7.RouterLinkActive _RouterLinkActive_34_6;
  import3.Element _el_35;
  import3.Element _el_37;
  import3.Element _el_39;
  import3.AnchorElement _el_40;
  import6.RouterLinkNgCd _RouterLink_40_5;
  import7.RouterLinkActive _RouterLinkActive_40_6;
  import3.Element _el_41;
  import3.Element _el_43;
  import3.DivElement _el_45;
  import3.Element _el_46;
  import3.Text _text_47;
  import3.Element _el_48;
  ViewContainer _appEl_48;
  import9.RouterOutlet _RouterOutlet_48_8;
  String _expr_0;
  String _expr_2;
  String _expr_4;
  String _expr_6;
  String _expr_8;
  static RenderComponentType _renderType;
  ViewAppComponent0(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('my-app');
    _renderType ??= import13.appViewUtils.createRenderType((import14.isDevMode ? 'asset:mobile_hive/lib/app_component.dart' : null), ViewEncapsulation.Emulated, styles$AppComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import4.ViewHeaderComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    addShimC(_el_0);
    _HeaderComponent_0_5 = import5.HeaderComponent();
    _compView_0.create(_HeaderComponent_0_5, []);
    var doc = import3.document;
    _el_1 = createAndAppend(doc, 'aside', parentRenderNode);
    _el_1.className = 'main-sidebar';
    addShimE(_el_1);
    _el_2 = createAndAppend(doc, 'section', _el_1);
    _el_2.className = 'sidebar';
    addShimE(_el_2);
    _el_3 = createDivAndAppend(doc, _el_2);
    _el_3.className = 'user-panel';
    addShimC(_el_3);
    _el_4 = createDivAndAppend(doc, _el_3);
    _el_4.className = 'pull-left image';
    addShimC(_el_4);
    _el_5 = createAndAppend(doc, 'img', _el_4);
    createAttr(_el_5, 'alt', 'User Image');
    _el_5.className = 'img-circle';
    createAttr(_el_5, 'src', 'dist/img/user2-160x160.jpg');
    addShimE(_el_5);
    _el_6 = createDivAndAppend(doc, _el_3);
    _el_6.className = 'pull-left info';
    addShimC(_el_6);
    _el_7 = createAndAppend(doc, 'p', _el_6);
    addShimE(_el_7);
    import3.Text _text_8 = import3.Text('Alexander Pierce');
    _el_7.append(_text_8);
    _el_9 = createAndAppend(doc, 'a', _el_6);
    createAttr(_el_9, 'href', '#');
    addShimC(_el_9);
    _el_10 = createAndAppend(doc, 'i', _el_9);
    _el_10.className = 'fa fa-circle text-success';
    addShimE(_el_10);
    import3.Text _text_11 = import3.Text(' Online');
    _el_9.append(_text_11);
    _el_12 = createAndAppend(doc, 'ul', _el_2);
    _el_12.className = 'sidebar-menu';
    createAttr(_el_12, 'data-widget', 'tree');
    addShimC(_el_12);
    _el_13 = createAndAppend(doc, 'li', _el_12);
    _el_13.className = 'header';
    addShimE(_el_13);
    import3.Text _text_14 = import3.Text('MAIN NAVIGATION');
    _el_13.append(_text_14);
    _el_15 = createAndAppend(doc, 'li', _el_12);
    _el_15.className = 'treeview';
    addShimE(_el_15);
    _el_16 = createAndAppend(doc, 'a', _el_15);
    addShimC(_el_16);
    _RouterLink_16_5 = import6.RouterLinkNgCd(import16.RouterLink(parentView.injectorGet(import17.Router, viewData.parentIndex), parentView.injectorGet(import18.Location, viewData.parentIndex), null, _el_16));
    _RouterLinkActive_16_6 = import7.RouterLinkActive(_el_16, parentView.injectorGet(import17.Router, viewData.parentIndex));
    _el_17 = createAndAppend(doc, 'i', _el_16);
    _el_17.className = 'fa fa-dashboard';
    addShimE(_el_17);
    import3.Text _text_18 = import3.Text(' ');
    _el_16.append(_text_18);
    _el_19 = createSpanAndAppend(doc, _el_16);
    _el_19.className = 'sidenavtext';
    addShimE(_el_19);
    import3.Text _text_20 = import3.Text('Dashboard');
    _el_19.append(_text_20);
    _RouterLinkActive_16_6.links = [_RouterLink_16_5.instance];
    _el_21 = createAndAppend(doc, 'li', _el_12);
    _el_21.className = 'treeview';
    addShimE(_el_21);
    _el_22 = createAndAppend(doc, 'a', _el_21);
    addShimC(_el_22);
    _RouterLink_22_5 = import6.RouterLinkNgCd(import16.RouterLink(parentView.injectorGet(import17.Router, viewData.parentIndex), parentView.injectorGet(import18.Location, viewData.parentIndex), null, _el_22));
    _RouterLinkActive_22_6 = import7.RouterLinkActive(_el_22, parentView.injectorGet(import17.Router, viewData.parentIndex));
    _el_23 = createAndAppend(doc, 'i', _el_22);
    _el_23.className = 'fa fa-th';
    addShimE(_el_23);
    import3.Text _text_24 = import3.Text(' ');
    _el_22.append(_text_24);
    _el_25 = createSpanAndAppend(doc, _el_22);
    _el_25.className = 'sidenavtext';
    addShimE(_el_25);
    import3.Text _text_26 = import3.Text('Mobile Applications');
    _el_25.append(_text_26);
    _RouterLinkActive_22_6.links = [_RouterLink_22_5.instance];
    _el_27 = createAndAppend(doc, 'li', _el_12);
    _el_27.className = 'treeview';
    addShimE(_el_27);
    _el_28 = createAndAppend(doc, 'a', _el_27);
    addShimC(_el_28);
    _RouterLink_28_5 = import6.RouterLinkNgCd(import16.RouterLink(parentView.injectorGet(import17.Router, viewData.parentIndex), parentView.injectorGet(import18.Location, viewData.parentIndex), null, _el_28));
    _RouterLinkActive_28_6 = import7.RouterLinkActive(_el_28, parentView.injectorGet(import17.Router, viewData.parentIndex));
    _el_29 = createAndAppend(doc, 'i', _el_28);
    _el_29.className = 'fa fa-th';
    addShimE(_el_29);
    import3.Text _text_30 = import3.Text(' ');
    _el_28.append(_text_30);
    _el_31 = createSpanAndAppend(doc, _el_28);
    _el_31.className = 'sidenavtext';
    addShimE(_el_31);
    import3.Text _text_32 = import3.Text('App Management');
    _el_31.append(_text_32);
    _RouterLinkActive_28_6.links = [_RouterLink_28_5.instance];
    _el_33 = createAndAppend(doc, 'li', _el_12);
    _el_33.className = 'treeview';
    addShimE(_el_33);
    _el_34 = createAndAppend(doc, 'a', _el_33);
    addShimC(_el_34);
    _RouterLink_34_5 = import6.RouterLinkNgCd(import16.RouterLink(parentView.injectorGet(import17.Router, viewData.parentIndex), parentView.injectorGet(import18.Location, viewData.parentIndex), null, _el_34));
    _RouterLinkActive_34_6 = import7.RouterLinkActive(_el_34, parentView.injectorGet(import17.Router, viewData.parentIndex));
    _el_35 = createAndAppend(doc, 'i', _el_34);
    _el_35.className = 'fa fa-th';
    addShimE(_el_35);
    import3.Text _text_36 = import3.Text(' ');
    _el_34.append(_text_36);
    _el_37 = createSpanAndAppend(doc, _el_34);
    _el_37.className = 'sidenavtext';
    addShimE(_el_37);
    import3.Text _text_38 = import3.Text('App Assessment');
    _el_37.append(_text_38);
    _RouterLinkActive_34_6.links = [_RouterLink_34_5.instance];
    _el_39 = createAndAppend(doc, 'li', _el_12);
    _el_39.className = 'treeview';
    addShimE(_el_39);
    _el_40 = createAndAppend(doc, 'a', _el_39);
    addShimC(_el_40);
    _RouterLink_40_5 = import6.RouterLinkNgCd(import16.RouterLink(parentView.injectorGet(import17.Router, viewData.parentIndex), parentView.injectorGet(import18.Location, viewData.parentIndex), null, _el_40));
    _RouterLinkActive_40_6 = import7.RouterLinkActive(_el_40, parentView.injectorGet(import17.Router, viewData.parentIndex));
    _el_41 = createAndAppend(doc, 'i', _el_40);
    _el_41.className = 'fa fa-th';
    addShimE(_el_41);
    import3.Text _text_42 = import3.Text(' ');
    _el_40.append(_text_42);
    _el_43 = createSpanAndAppend(doc, _el_40);
    _el_43.className = 'sidenavtext';
    addShimE(_el_43);
    import3.Text _text_44 = import3.Text('App Category');
    _el_43.append(_text_44);
    _RouterLinkActive_40_6.links = [_RouterLink_40_5.instance];
    _el_45 = createDivAndAppend(doc, parentRenderNode);
    _el_45.className = 'main';
    addShimC(_el_45);
    _el_46 = createAndAppend(doc, 'h1', _el_45);
    addShimE(_el_46);
    _text_47 = import3.Text((ctx.title ?? ''));
    _el_46.append(_text_47);
    _el_48 = createAndAppend(doc, 'router-outlet', _el_45);
    addShimE(_el_48);
    _appEl_48 = ViewContainer(48, 45, this, _el_48);
    _RouterOutlet_48_8 = import9.RouterOutlet(parentView.injectorGet(import19.RouterOutletToken, viewData.parentIndex, null), _appEl_48, parentView.injectorGet(import17.Router, viewData.parentIndex), parentView.injectorGet(import20.RouterHook, viewData.parentIndex, null));
    _el_16.addEventListener('click', eventHandler1(_RouterLink_16_5.instance.onClick));
    _el_22.addEventListener('click', eventHandler1(_RouterLink_22_5.instance.onClick));
    _el_28.addEventListener('click', eventHandler1(_RouterLink_28_5.instance.onClick));
    _el_34.addEventListener('click', eventHandler1(_RouterLink_34_5.instance.onClick));
    _el_40.addEventListener('click', eventHandler1(_RouterLink_40_5.instance.onClick));
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    final currVal_0 = import21.RoutePaths.dashboard.toUrl();
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _RouterLink_16_5.instance.routerLink = currVal_0;
      _expr_0 = currVal_0;
    }
    if (firstCheck) {
      (_RouterLinkActive_16_6.routerLinkActive = 'active');
    }
    final currVal_2 = import21.RoutePaths.applications.toUrl();
    if (import13.checkBinding(_expr_2, currVal_2)) {
      _RouterLink_22_5.instance.routerLink = currVal_2;
      _expr_2 = currVal_2;
    }
    if (firstCheck) {
      (_RouterLinkActive_22_6.routerLinkActive = 'active');
    }
    final currVal_4 = import21.RoutePaths.management.toUrl();
    if (import13.checkBinding(_expr_4, currVal_4)) {
      _RouterLink_28_5.instance.routerLink = currVal_4;
      _expr_4 = currVal_4;
    }
    if (firstCheck) {
      (_RouterLinkActive_28_6.routerLinkActive = 'active');
    }
    final currVal_6 = import21.RoutePaths.assessment.toUrl();
    if (import13.checkBinding(_expr_6, currVal_6)) {
      _RouterLink_34_5.instance.routerLink = currVal_6;
      _expr_6 = currVal_6;
    }
    if (firstCheck) {
      (_RouterLinkActive_34_6.routerLinkActive = 'active');
    }
    final currVal_8 = import21.RoutePaths.category.toUrl();
    if (import13.checkBinding(_expr_8, currVal_8)) {
      _RouterLink_40_5.instance.routerLink = currVal_8;
      _expr_8 = currVal_8;
    }
    if (firstCheck) {
      _RouterLinkActive_40_6.routerLinkActive = 'active';
      if (!identical(import22.Routes.all, null)) {
        (_RouterOutlet_48_8.routes = import22.Routes.all);
      }
    }
    if ((!import13.AppViewUtils.throwOnChanges && firstCheck)) {
      _RouterOutlet_48_8.ngOnInit();
    }
    _appEl_48.detectChangesInNestedViews();
    _RouterLink_16_5.detectHostChanges(this, _el_16);
    _RouterLink_22_5.detectHostChanges(this, _el_22);
    _RouterLink_28_5.detectHostChanges(this, _el_28);
    _RouterLink_34_5.detectHostChanges(this, _el_34);
    _RouterLink_40_5.detectHostChanges(this, _el_40);
    _compView_0.detectChanges();
    if (!import13.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _RouterLinkActive_16_6.ngAfterViewInit();
        _RouterLinkActive_22_6.ngAfterViewInit();
        _RouterLinkActive_28_6.ngAfterViewInit();
        _RouterLinkActive_34_6.ngAfterViewInit();
        _RouterLinkActive_40_6.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_48?.destroyNestedViews();
    _compView_0?.destroy();
    _RouterLink_16_5.instance.ngOnDestroy();
    _RouterLinkActive_16_6.ngOnDestroy();
    _RouterLink_22_5.instance.ngOnDestroy();
    _RouterLinkActive_22_6.ngOnDestroy();
    _RouterLink_28_5.instance.ngOnDestroy();
    _RouterLinkActive_28_6.ngOnDestroy();
    _RouterLink_34_5.instance.ngOnDestroy();
    _RouterLinkActive_34_6.ngOnDestroy();
    _RouterLink_40_5.instance.ngOnDestroy();
    _RouterLinkActive_40_6.ngOnDestroy();
    _RouterOutlet_48_8.ngOnDestroy();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewAppComponent0(parentView, parentIndex);
}

final List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<import2.AppComponent> {
  ViewAppComponent0 _compView_0;
  import2.AppComponent _AppComponent_0_5;
  dynamic __Document_0_6;
  dynamic __Window_0_7;
  dynamic __DomService_0_8;
  import23.AcxImperativeViewUtils __AcxImperativeViewUtils_0_9;
  import24.DomRuler __DomRuler_0_10;
  import25.Angular2ManagedZone __ManagedZone_0_11;
  dynamic __overlayContainerName_0_12;
  dynamic __overlayContainerParent_0_13;
  dynamic __overlayContainer_0_14;
  bool __overlaySyncDom_0_15;
  bool __overlayRepositionLoop_0_16;
  import26.OverlayStyleConfig __OverlayStyleConfig_0_17;
  import27.ZIndexer __ZIndexer_0_18;
  import28.OverlayDomRenderService __OverlayDomRenderService_0_19;
  import29.OverlayService __OverlayService_0_20;
  List<import31.RelativePosition> __defaultPopupPositions_0_21;
  import32.DomPopupSourceFactory __DomPopupSourceFactory_0_22;
  import33.Clock __Clock_0_23;
  import34.MobileService __MobileService_0_25;
  import35.ManageService __ManageService_0_26;
  _ViewAppComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  dynamic get _Document_0_6 {
    if ((this.__Document_0_6 == null)) {
      (__Document_0_6 = import36.getDocument());
    }
    return this.__Document_0_6;
  }

  dynamic get _Window_0_7 {
    if ((this.__Window_0_7 == null)) {
      (__Window_0_7 = import36.getWindow());
    }
    return this.__Window_0_7;
  }

  dynamic get _DomService_0_8 {
    if ((this.__DomService_0_8 == null)) {
      (__DomService_0_8 = import37.createDomService(this.injectorGet(import38.DomService, this.viewData.parentIndex, null), this.injectorGet(import39.Disposer, this.viewData.parentIndex, null), this.injectorGet(import40.NgZone, this.viewData.parentIndex), this._Window_0_7));
    }
    return this.__DomService_0_8;
  }

  import23.AcxImperativeViewUtils get _AcxImperativeViewUtils_0_9 {
    if ((this.__AcxImperativeViewUtils_0_9 == null)) {
      (__AcxImperativeViewUtils_0_9 = import23.AcxImperativeViewUtils(this.injectorGet(import41.ComponentLoader, this.viewData.parentIndex), this._DomService_0_8));
    }
    return this.__AcxImperativeViewUtils_0_9;
  }

  import24.DomRuler get _DomRuler_0_10 {
    if ((this.__DomRuler_0_10 == null)) {
      (__DomRuler_0_10 = import24.DomRuler(this._Document_0_6, this._DomService_0_8));
    }
    return this.__DomRuler_0_10;
  }

  import25.Angular2ManagedZone get _ManagedZone_0_11 {
    if ((this.__ManagedZone_0_11 == null)) {
      (__ManagedZone_0_11 = import25.Angular2ManagedZone(this.injectorGet(import40.NgZone, this.viewData.parentIndex)));
    }
    return this.__ManagedZone_0_11;
  }

  dynamic get _overlayContainerName_0_12 {
    if ((this.__overlayContainerName_0_12 == null)) {
      (__overlayContainerName_0_12 = import42.getDefaultContainerName(this.injectorGet(const import43.OpaqueToken('overlayContainerName'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerName_0_12;
  }

  dynamic get _overlayContainerParent_0_13 {
    if ((this.__overlayContainerParent_0_13 == null)) {
      (__overlayContainerParent_0_13 = import42.getOverlayContainerParent(this._Document_0_6, this.injectorGet(const import43.OpaqueToken('overlayContainerParent'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerParent_0_13;
  }

  dynamic get _overlayContainer_0_14 {
    if ((this.__overlayContainer_0_14 == null)) {
      (__overlayContainer_0_14 = import42.getDefaultContainer(this._overlayContainerName_0_12, this._overlayContainerParent_0_13, this.injectorGet(const import43.OpaqueToken('overlayContainer'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainer_0_14;
  }

  bool get _overlaySyncDom_0_15 {
    if ((this.__overlaySyncDom_0_15 == null)) {
      (__overlaySyncDom_0_15 = true);
    }
    return this.__overlaySyncDom_0_15;
  }

  bool get _overlayRepositionLoop_0_16 {
    if ((this.__overlayRepositionLoop_0_16 == null)) {
      (__overlayRepositionLoop_0_16 = true);
    }
    return this.__overlayRepositionLoop_0_16;
  }

  import26.OverlayStyleConfig get _OverlayStyleConfig_0_17 {
    if ((this.__OverlayStyleConfig_0_17 == null)) {
      (__OverlayStyleConfig_0_17 = import26.OverlayStyleConfig(this._Document_0_6));
    }
    return this.__OverlayStyleConfig_0_17;
  }

  import27.ZIndexer get _ZIndexer_0_18 {
    if ((this.__ZIndexer_0_18 == null)) {
      (__ZIndexer_0_18 = import27.ZIndexer());
    }
    return this.__ZIndexer_0_18;
  }

  import28.OverlayDomRenderService get _OverlayDomRenderService_0_19 {
    if ((this.__OverlayDomRenderService_0_19 == null)) {
      (__OverlayDomRenderService_0_19 = import28.OverlayDomRenderService(this._OverlayStyleConfig_0_17, this._overlayContainer_0_14, this._overlayContainerName_0_12, this._DomRuler_0_10, this._DomService_0_8, this._AcxImperativeViewUtils_0_9, this._overlaySyncDom_0_15, this._overlayRepositionLoop_0_16, this._ZIndexer_0_18));
    }
    return this.__OverlayDomRenderService_0_19;
  }

  import29.OverlayService get _OverlayService_0_20 {
    if ((this.__OverlayService_0_20 == null)) {
      (__OverlayService_0_20 = import29.OverlayService(this.injectorGet(import40.NgZone, this.viewData.parentIndex), this._overlaySyncDom_0_15, this._OverlayDomRenderService_0_19, this.injectorGet(import29.OverlayService, this.viewData.parentIndex, null)));
    }
    return this.__OverlayService_0_20;
  }

  List<import31.RelativePosition> get _defaultPopupPositions_0_21 {
    if ((this.__defaultPopupPositions_0_21 == null)) {
      (__defaultPopupPositions_0_21 = const [import31.RelativePosition(animationOrigin: 'top center'), import31.RelativePosition(animationOrigin: 'top right', originX: import31.Alignment('End', 'flex-end')), import31.RelativePosition(animationOrigin: 'top left', originX: import31.Alignment('Start', 'flex-start')), import31.RelativePosition(animationOrigin: 'bottom center', originY: import31.Alignment('End', 'flex-end')), import31.RelativePosition(animationOrigin: 'bottom right', originX: import31.Alignment('End', 'flex-end'), originY: import31.Alignment('End', 'flex-end')), import31.RelativePosition(animationOrigin: 'bottom left', originX: import31.Alignment('Start', 'flex-start'), originY: import31.Alignment('End', 'flex-end'))]);
    }
    return this.__defaultPopupPositions_0_21;
  }

  import32.DomPopupSourceFactory get _DomPopupSourceFactory_0_22 {
    if ((this.__DomPopupSourceFactory_0_22 == null)) {
      (__DomPopupSourceFactory_0_22 = import32.DomPopupSourceFactory(this._DomRuler_0_10));
    }
    return this.__DomPopupSourceFactory_0_22;
  }

  import33.Clock get _Clock_0_23 {
    if ((this.__Clock_0_23 == null)) {
      (__Clock_0_23 = const import33.Clock());
    }
    return this.__Clock_0_23;
  }

  import34.MobileService get _MobileService_0_25 {
    if ((this.__MobileService_0_25 == null)) {
      (__MobileService_0_25 = import34.MobileService(this.injectorGet(import44.Client, this.viewData.parentIndex)));
    }
    return this.__MobileService_0_25;
  }

  import35.ManageService get _ManageService_0_26 {
    if ((this.__ManageService_0_26 == null)) {
      (__ManageService_0_26 = import35.ManageService(this.injectorGet(import44.Client, this.viewData.parentIndex)));
    }
    return this.__ManageService_0_26;
  }

  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AppComponent_0_5 = import2.AppComponent();
    _compView_0.create(_AppComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _AppComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import3.Document) && (0 == nodeIndex))) {
      return _Document_0_6;
    }
    if ((identical(token, import3.Window) && (0 == nodeIndex))) {
      return _Window_0_7;
    }
    if ((identical(token, import38.DomService) && (0 == nodeIndex))) {
      return _DomService_0_8;
    }
    if ((identical(token, import23.AcxImperativeViewUtils) && (0 == nodeIndex))) {
      return _AcxImperativeViewUtils_0_9;
    }
    if ((identical(token, import24.DomRuler) && (0 == nodeIndex))) {
      return _DomRuler_0_10;
    }
    if ((identical(token, import45.ManagedZone) && (0 == nodeIndex))) {
      return _ManagedZone_0_11;
    }
    if ((identical(token, const import43.OpaqueToken('overlayContainerName')) && (0 == nodeIndex))) {
      return _overlayContainerName_0_12;
    }
    if ((identical(token, const import43.OpaqueToken('overlayContainerParent')) && (0 == nodeIndex))) {
      return _overlayContainerParent_0_13;
    }
    if ((identical(token, const import43.OpaqueToken('overlayContainer')) && (0 == nodeIndex))) {
      return _overlayContainer_0_14;
    }
    if ((identical(token, const import43.OpaqueToken('overlaySyncDom')) && (0 == nodeIndex))) {
      return _overlaySyncDom_0_15;
    }
    if ((identical(token, const import43.OpaqueToken('overlayRepositionLoop')) && (0 == nodeIndex))) {
      return _overlayRepositionLoop_0_16;
    }
    if ((identical(token, import26.OverlayStyleConfig) && (0 == nodeIndex))) {
      return _OverlayStyleConfig_0_17;
    }
    if ((identical(token, import27.ZIndexer) && (0 == nodeIndex))) {
      return _ZIndexer_0_18;
    }
    if ((identical(token, import28.OverlayDomRenderService) && (0 == nodeIndex))) {
      return _OverlayDomRenderService_0_19;
    }
    if ((identical(token, import29.OverlayService) && (0 == nodeIndex))) {
      return _OverlayService_0_20;
    }
    if ((identical(token, const import43.OpaqueToken<List<import46.RelativePosition>>('defaultPopupPositions')) && (0 == nodeIndex))) {
      return _defaultPopupPositions_0_21;
    }
    if ((identical(token, import32.DomPopupSourceFactory) && (0 == nodeIndex))) {
      return _DomPopupSourceFactory_0_22;
    }
    if (((identical(token, import33.Clock) || identical(token, const import43.OpaqueToken('third_party.dart_src.acx.material_datepicker.datepickerClock'))) && (0 == nodeIndex))) {
      return _Clock_0_23;
    }
    if ((identical(token, import34.MobileService) && (0 == nodeIndex))) {
      return _MobileService_0_25;
    }
    if ((identical(token, import35.ManageService) && (0 == nodeIndex))) {
      return _ManageService_0_26;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.AppComponent> _AppComponentNgFactory = const ComponentFactory('my-app', viewFactory_AppComponentHost0);
ComponentFactory<import2.AppComponent> get AppComponentNgFactory {
  return _AppComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppComponent, AppComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
