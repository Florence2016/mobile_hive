// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'mobile_component.dart';
export 'mobile_component.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:angular_router/angular_router.dart';
import 'package:mobile_hive/src/app.dart';
import 'package:mobile_hive/src/mobile_service.dart';
import 'package:mobile_hive/src/route/route_paths.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_forms/angular_forms.template.dart' as _ref1;
import 'package:angular_router/angular_router.template.dart' as _ref2;
import 'package:mobile_hive/src/app.template.dart' as _ref3;
import 'package:mobile_hive/src/mobile_service.template.dart' as _ref4;
import 'package:mobile_hive/src/route/route_paths.template.dart' as _ref5;
import 'package:angular/src/core/linker/app_view.dart';
import 'mobile_component.dart' as import1;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import7;
import 'package:angular/src/core/linker/app_view_utils.dart' as import8;
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import12;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import13;
import 'package:angular_forms/src/directives/ng_model.dart' as import14;
import 'package:angular/src/core/di/opaque_token.dart' as import15;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import16;
import 'package:angular_forms/src/directives/ng_control.dart' as import17;
import 'mobile_service.dart' as import18;
import 'package:angular_router/src/location/location.dart' as import19;

final List<dynamic> styles$MobileAppComponent = const [];

class ViewMobileAppComponent0 extends AppView<import1.MobileAppComponent> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  static RenderComponentType _renderType;
  ViewMobileAppComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import7.document.createElement('my-mobile-app');
    _renderType ??= import8.appViewUtils.createRenderType((import9.isDevMode ? 'asset:mobile_hive/lib/src/mobile_component.dart' : null), ViewEncapsulation.None, styles$MobileAppComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.MobileAppComponent> build() {
    final _rootEl = rootEl;
    final import7.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_0);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_MobileAppComponent1);
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.MobileAppComponent _ctx = ctx;
    _NgIf_0_9.ngIf = (_ctx.app != null);
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
  }
}

AppView<import1.MobileAppComponent> viewFactory_MobileAppComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewMobileAppComponent0(parentView, parentIndex);
}

class _ViewMobileAppComponent1 extends AppView<import1.MobileAppComponent> {
  import7.DivElement _el_0;
  import7.Element _el_1;
  import7.Text _text_2;
  import7.DivElement _el_3;
  import7.Element _el_4;
  import7.Text _text_6;
  import7.DivElement _el_7;
  import7.Element _el_8;
  import7.InputElement _el_11;
  import12.DefaultValueAccessor _DefaultValueAccessor_11_5;
  List<import13.ControlValueAccessor<dynamic>> _NgValueAccessor_11_6;
  import14.NgModel _NgModel_11_7;
  import7.ButtonElement _el_12;
  import7.ButtonElement _el_15;
  var _expr_0;
  var _expr_1;
  _ViewMobileAppComponent1(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewMobileAppComponent0._renderType;
  }
  @override
  ComponentRef<import1.MobileAppComponent> build() {
    var doc = import7.document;
    _el_0 = doc.createElement('div');
    _el_1 = createAndAppend(doc, 'h2', _el_0);
    _text_2 = import7.Text('');
    _el_1.append(_text_2);
    _el_3 = createDivAndAppend(doc, _el_0);
    _el_4 = createAndAppend(doc, 'label', _el_3);
    import7.Text _text_5 = import7.Text('id:');
    _el_4.append(_text_5);
    _text_6 = import7.Text('');
    _el_3.append(_text_6);
    _el_7 = createDivAndAppend(doc, _el_0);
    _el_8 = createAndAppend(doc, 'label', _el_7);
    import7.Text _text_9 = import7.Text('name:');
    _el_8.append(_text_9);
    import7.Text _text_10 = import7.Text(' ');
    _el_7.append(_text_10);
    _el_11 = createAndAppend(doc, 'input', _el_7);
    createAttr(_el_11, 'placeholder', 'name');
    _DefaultValueAccessor_11_5 = import12.DefaultValueAccessor(_el_11);
    _NgValueAccessor_11_6 = [_DefaultValueAccessor_11_5];
    _NgModel_11_7 = import14.NgModel(null, _NgValueAccessor_11_6);
    _el_12 = createAndAppend(doc, 'button', _el_0);
    import7.Text _text_13 = import7.Text('Save');
    _el_12.append(_text_13);
    import7.Text _text_14 = import7.Text(' ');
    _el_0.append(_text_14);
    _el_15 = createAndAppend(doc, 'button', _el_0);
    import7.Text _text_16 = import7.Text('Back');
    _el_15.append(_text_16);
    _el_11.addEventListener('blur', eventHandler0(_DefaultValueAccessor_11_5.touchHandler));
    _el_11.addEventListener('input', eventHandler1(_handle_input_11_2));
    final subscription_0 = _NgModel_11_7.update.listen(eventHandler1(_handle_ngModelChange_11_0));
    _el_12.addEventListener('click', eventHandler0(ctx.save));
    _el_15.addEventListener('click', eventHandler0(ctx.goBack));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, const import15.MultiToken<import16.ControlValueAccessor>('NgValueAccessor')) && (11 == nodeIndex))) {
      return _NgValueAccessor_11_6;
    }
    if (((identical(token, import14.NgModel) || identical(token, import17.NgControl)) && (11 == nodeIndex))) {
      return _NgModel_11_7;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import1.MobileAppComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    _NgModel_11_7.model = _ctx.app.name;
    _NgModel_11_7.ngAfterChanges();
    if ((!import8.AppViewUtils.throwOnChanges && firstCheck)) {
      _NgModel_11_7.ngOnInit();
    }
    final currVal_0 = import8.interpolate0(_ctx.app.name);
    if (import8.checkBinding(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = import8.interpolate0(_ctx.app.id);
    if (import8.checkBinding(_expr_1, currVal_1)) {
      _text_6.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }

  void _handle_ngModelChange_11_0($event) {
    ctx.app.name = $event;
  }

  void _handle_input_11_2($event) {
    _DefaultValueAccessor_11_5.handleChange($event.target.value);
  }
}

AppView<import1.MobileAppComponent> viewFactory_MobileAppComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMobileAppComponent1(parentView, parentIndex);
}

final List<dynamic> styles$MobileAppComponentHost = const [];

class _ViewMobileAppComponentHost0 extends AppView<import1.MobileAppComponent> {
  ViewMobileAppComponent0 _compView_0;
  import1.MobileAppComponent _MobileAppComponent_0_5;
  _ViewMobileAppComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import1.MobileAppComponent> build() {
    _compView_0 = ViewMobileAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MobileAppComponent_0_5 = import1.MobileAppComponent(this.injectorGet(import18.MobileService, viewData.parentIndex), this.injectorGet(import19.Location, viewData.parentIndex));
    _compView_0.create(_MobileAppComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _MobileAppComponent_0_5);
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

AppView<import1.MobileAppComponent> viewFactory_MobileAppComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMobileAppComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.MobileAppComponent> _MobileAppComponentNgFactory = const ComponentFactory('my-mobile-app', viewFactory_MobileAppComponentHost0);
ComponentFactory<import1.MobileAppComponent> get MobileAppComponentNgFactory {
  return _MobileAppComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MobileAppComponent, MobileAppComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
