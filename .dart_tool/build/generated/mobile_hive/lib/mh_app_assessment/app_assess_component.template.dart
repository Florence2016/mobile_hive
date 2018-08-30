// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'app_assess_component.dart';
export 'app_assess_component.dart';
import 'package:angular/angular.dart';
import 'package:angular_components/material_list/material_list_item.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_list/material_list_item.template.dart' as _ref1;
import 'package:angular_forms/angular_forms.template.dart' as _ref2;
import 'package:mobile_hive/mh_app_assessment/app_assess_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_assess_component.dart' as import2;
import 'dart:html' as import3;
import 'package:angular_components/material_list/material_list_item.template.dart' as import4;
import 'package:angular_components/material_list/material_list_item.dart' as import5;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular_components/mixins/material_dropdown_base.dart' as import12;
import 'package:angular_components/interfaces/has_disabled.dart' as import13;

final List<dynamic> styles$AppAssessmentComponent = [import0.styles];

class ViewAppAssessmentComponent0 extends AppView<import2.AppAssessmentComponent> {
  import3.Element _el_0;
  import3.Element _el_2;
  import4.ViewMaterialListItemComponent0 _compView_2;
  import5.MaterialListItemComponent _MaterialListItemComponent_2_5;
  import3.TableElement _el_3;
  import3.Element _el_4;
  import3.Element _el_5;
  import3.Element _el_6;
  import3.Element _el_8;
  import3.Element _el_10;
  import3.Element _el_12;
  import3.Element _el_14;
  import3.Element _el_16;
  import3.Element _el_17;
  import3.Element _el_18;
  import3.Element _el_20;
  import3.Element _el_22;
  import3.Element _el_24;
  import3.Element _el_26;
  import3.Element _el_28;
  import3.Element _el_29;
  import3.Element _el_31;
  import3.Element _el_33;
  import3.Element _el_35;
  import3.Element _el_37;
  import3.Element _el_39;
  import3.Element _el_40;
  import3.Element _el_42;
  import3.Element _el_44;
  import3.Element _el_46;
  import3.Element _el_48;
  import3.Element _el_50;
  import3.Element _el_51;
  import3.Element _el_53;
  import3.Element _el_55;
  import3.Element _el_57;
  import3.Element _el_59;
  static RenderComponentType _renderType;
  ViewAppAssessmentComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('my-app-assess');
    _renderType ??= import9.appViewUtils.createRenderType((import10.isDevMode ? 'asset:mobile_hive/lib/mh_app_assessment/app_assess_component.dart' : null), ViewEncapsulation.Emulated, styles$AppAssessmentComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.AppAssessmentComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'h1', parentRenderNode);
    addShimE(_el_0);
    import3.Text _text_1 = import3.Text('Assessment');
    _el_0.append(_text_1);
    _compView_2 = import4.ViewMaterialListItemComponent0(this, 2);
    _el_2 = _compView_2.rootEl;
    parentRenderNode.append(_el_2);
    addShimC(_el_2);
    _MaterialListItemComponent_2_5 = import5.MaterialListItemComponent(_el_2, parentView.injectorGet(import12.DropdownHandle, viewData.parentIndex, null), null, null);
    _el_3 = doc.createElement('table');
    _el_3.className = 'table table-bordered table-hover';
    createAttr(_el_3, 'id', 'example2');
    addShimC(_el_3);
    _el_4 = createAndAppend(doc, 'thead', _el_3);
    addShimE(_el_4);
    _el_5 = createAndAppend(doc, 'tr', _el_4);
    addShimE(_el_5);
    _el_6 = createAndAppend(doc, 'th', _el_5);
    addShimE(_el_6);
    import3.Text _text_7 = import3.Text('Rendering engine');
    _el_6.append(_text_7);
    _el_8 = createAndAppend(doc, 'th', _el_5);
    addShimE(_el_8);
    import3.Text _text_9 = import3.Text('Browser');
    _el_8.append(_text_9);
    _el_10 = createAndAppend(doc, 'th', _el_5);
    addShimE(_el_10);
    import3.Text _text_11 = import3.Text('Platform(s)');
    _el_10.append(_text_11);
    _el_12 = createAndAppend(doc, 'th', _el_5);
    addShimE(_el_12);
    import3.Text _text_13 = import3.Text('Engine version');
    _el_12.append(_text_13);
    _el_14 = createAndAppend(doc, 'th', _el_5);
    addShimE(_el_14);
    import3.Text _text_15 = import3.Text('CSS grade');
    _el_14.append(_text_15);
    _el_16 = createAndAppend(doc, 'tbody', _el_3);
    addShimE(_el_16);
    _el_17 = createAndAppend(doc, 'tr', _el_16);
    addShimE(_el_17);
    _el_18 = createAndAppend(doc, 'td', _el_17);
    addShimE(_el_18);
    import3.Text _text_19 = import3.Text('Trident');
    _el_18.append(_text_19);
    _el_20 = createAndAppend(doc, 'td', _el_17);
    addShimE(_el_20);
    import3.Text _text_21 = import3.Text('Internet Explorer 4.0');
    _el_20.append(_text_21);
    _el_22 = createAndAppend(doc, 'td', _el_17);
    addShimE(_el_22);
    import3.Text _text_23 = import3.Text('Win 95+');
    _el_22.append(_text_23);
    _el_24 = createAndAppend(doc, 'td', _el_17);
    addShimE(_el_24);
    import3.Text _text_25 = import3.Text('4');
    _el_24.append(_text_25);
    _el_26 = createAndAppend(doc, 'td', _el_17);
    addShimE(_el_26);
    import3.Text _text_27 = import3.Text('X');
    _el_26.append(_text_27);
    _el_28 = createAndAppend(doc, 'tr', _el_16);
    addShimE(_el_28);
    _el_29 = createAndAppend(doc, 'td', _el_28);
    addShimE(_el_29);
    import3.Text _text_30 = import3.Text('Trident');
    _el_29.append(_text_30);
    _el_31 = createAndAppend(doc, 'td', _el_28);
    addShimE(_el_31);
    import3.Text _text_32 = import3.Text('Internet Explorer 5.0');
    _el_31.append(_text_32);
    _el_33 = createAndAppend(doc, 'td', _el_28);
    addShimE(_el_33);
    import3.Text _text_34 = import3.Text('Win 95+');
    _el_33.append(_text_34);
    _el_35 = createAndAppend(doc, 'td', _el_28);
    addShimE(_el_35);
    import3.Text _text_36 = import3.Text('5');
    _el_35.append(_text_36);
    _el_37 = createAndAppend(doc, 'td', _el_28);
    addShimE(_el_37);
    import3.Text _text_38 = import3.Text('C');
    _el_37.append(_text_38);
    _el_39 = createAndAppend(doc, 'tr', _el_16);
    addShimE(_el_39);
    _el_40 = createAndAppend(doc, 'td', _el_39);
    addShimE(_el_40);
    import3.Text _text_41 = import3.Text('Trident');
    _el_40.append(_text_41);
    _el_42 = createAndAppend(doc, 'td', _el_39);
    addShimE(_el_42);
    import3.Text _text_43 = import3.Text('Internet Explorer 5.5');
    _el_42.append(_text_43);
    _el_44 = createAndAppend(doc, 'td', _el_39);
    addShimE(_el_44);
    import3.Text _text_45 = import3.Text('Win 95+');
    _el_44.append(_text_45);
    _el_46 = createAndAppend(doc, 'td', _el_39);
    addShimE(_el_46);
    import3.Text _text_47 = import3.Text('5.5');
    _el_46.append(_text_47);
    _el_48 = createAndAppend(doc, 'td', _el_39);
    addShimE(_el_48);
    import3.Text _text_49 = import3.Text('A');
    _el_48.append(_text_49);
    _el_50 = createAndAppend(doc, 'tr', _el_16);
    addShimE(_el_50);
    _el_51 = createAndAppend(doc, 'td', _el_50);
    addShimE(_el_51);
    import3.Text _text_52 = import3.Text('Trident');
    _el_51.append(_text_52);
    _el_53 = createAndAppend(doc, 'td', _el_50);
    addShimE(_el_53);
    import3.Text _text_54 = import3.Text('Internet Explorer 6');
    _el_53.append(_text_54);
    _el_55 = createAndAppend(doc, 'td', _el_50);
    addShimE(_el_55);
    import3.Text _text_56 = import3.Text('Win 98+');
    _el_55.append(_text_56);
    _el_57 = createAndAppend(doc, 'td', _el_50);
    addShimE(_el_57);
    import3.Text _text_58 = import3.Text('6');
    _el_57.append(_text_58);
    _el_59 = createAndAppend(doc, 'td', _el_50);
    addShimE(_el_59);
    import3.Text _text_60 = import3.Text('A');
    _el_59.append(_text_60);
    _compView_2.create(_MaterialListItemComponent_2_5, [
      [_el_3]
    ]);
    init(const [], null);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import13.HasDisabled) && ((2 <= nodeIndex) && (nodeIndex <= 60)))) {
      return _MaterialListItemComponent_2_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    if ((!import9.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialListItemComponent_2_5.ngOnInit();
    }
    _compView_2.detectHostChanges(firstCheck);
    _compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_2?.destroy();
    _MaterialListItemComponent_2_5.ngOnDestroy();
  }
}

AppView<import2.AppAssessmentComponent> viewFactory_AppAssessmentComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewAppAssessmentComponent0(parentView, parentIndex);
}

final List<dynamic> styles$AppAssessmentComponentHost = const [];

class _ViewAppAssessmentComponentHost0 extends AppView<import2.AppAssessmentComponent> {
  ViewAppAssessmentComponent0 _compView_0;
  import2.AppAssessmentComponent _AppAssessmentComponent_0_5;
  _ViewAppAssessmentComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.AppAssessmentComponent> build() {
    _compView_0 = ViewAppAssessmentComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AppAssessmentComponent_0_5 = import2.AppAssessmentComponent();
    _compView_0.create(_AppAssessmentComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _AppAssessmentComponent_0_5);
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

AppView<import2.AppAssessmentComponent> viewFactory_AppAssessmentComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppAssessmentComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.AppAssessmentComponent> _AppAssessmentComponentNgFactory = const ComponentFactory('my-app-assess', viewFactory_AppAssessmentComponentHost0);
ComponentFactory<import2.AppAssessmentComponent> get AppAssessmentComponentNgFactory {
  return _AppAssessmentComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppAssessmentComponent, AppAssessmentComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
