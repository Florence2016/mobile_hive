// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'header_component.dart';
export 'header_component.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/src/core/linker/app_view.dart';
import 'header_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/angular.dart';

final List<dynamic> styles$HeaderComponent = const [];

class ViewHeaderComponent0 extends AppView<import1.HeaderComponent> {
  import2.Element _el_0;
  import2.AnchorElement _el_3;
  import2.Element _el_6;
  import2.Element _el_7;
  import2.Element _el_10;
  import2.AnchorElement _el_11;
  import2.Element _el_12;
  static RenderComponentType _renderType;
  ViewHeaderComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('my-header');
    _renderType ??= import6.appViewUtils.createRenderType((import7.isDevMode ? 'asset:mobile_hive/lib/src/mh_header/header_component.dart' : null), ViewEncapsulation.None, styles$HeaderComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.HeaderComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'header', parentRenderNode);
    _el_0.className = 'main-header';
    import2.Text _text_1 = import2.Text(' ');
    _el_0.append(_text_1);
    import2.Text _text_2 = import2.Text(' ');
    _el_0.append(_text_2);
    _el_3 = createAndAppend(doc, 'a', _el_0);
    _el_3.className = 'logo';
    createAttr(_el_3, 'href', 'index2.html');
    import2.Text _text_4 = import2.Text(' ');
    _el_3.append(_text_4);
    import2.Text _text_5 = import2.Text(' ');
    _el_3.append(_text_5);
    _el_6 = createSpanAndAppend(doc, _el_3);
    _el_6.className = 'logo-lg';
    _el_7 = createAndAppend(doc, 'b', _el_6);
    import2.Text _text_8 = import2.Text('Mobile');
    _el_7.append(_text_8);
    import2.Text _text_9 = import2.Text('HIVE');
    _el_6.append(_text_9);
    _el_10 = createAndAppend(doc, 'nav', _el_0);
    _el_10.className = 'navbar navbar-static-top';
    _el_11 = createAndAppend(doc, 'a', _el_10);
    _el_11.className = 'sidebar-toggle';
    createAttr(_el_11, 'data-toggle', 'push-menu');
    createAttr(_el_11, 'href', '#');
    createAttr(_el_11, 'role', 'button');
    _el_12 = createSpanAndAppend(doc, _el_11);
    _el_12.className = 'sr-only';
    import2.Text _text_13 = import2.Text('Toggle navigation');
    _el_12.append(_text_13);
    init(const [], null);
    return null;
  }
}

AppView<import1.HeaderComponent> viewFactory_HeaderComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewHeaderComponent0(parentView, parentIndex);
}

final List<dynamic> styles$HeaderComponentHost = const [];

class _ViewHeaderComponentHost0 extends AppView<import1.HeaderComponent> {
  ViewHeaderComponent0 _compView_0;
  import1.HeaderComponent _HeaderComponent_0_5;
  _ViewHeaderComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import1.HeaderComponent> build() {
    _compView_0 = ViewHeaderComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HeaderComponent_0_5 = import1.HeaderComponent();
    _compView_0.create(_HeaderComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _HeaderComponent_0_5);
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

AppView<import1.HeaderComponent> viewFactory_HeaderComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewHeaderComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.HeaderComponent> _HeaderComponentNgFactory = const ComponentFactory('my-header', viewFactory_HeaderComponentHost0);
ComponentFactory<import1.HeaderComponent> get HeaderComponentNgFactory {
  return _HeaderComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HeaderComponent, HeaderComponentNgFactory);
  _ref0.initReflector();
}
