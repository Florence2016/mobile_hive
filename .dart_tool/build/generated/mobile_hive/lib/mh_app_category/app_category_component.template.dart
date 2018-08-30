// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'app_category_component.dart';
export 'app_category_component.dart';
import 'package:angular/angular.dart';
import 'package:mobile_hive/src/route/route_paths.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_forms/angular_forms.template.dart' as _ref1;
import 'package:angular_router/angular_router.template.dart' as _ref2;
import 'package:mobile_hive/src/route/route_paths.template.dart' as _ref3;
import 'package:mobile_hive/mh_app_category/app_category_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_category_component.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/angular.dart';

final List<dynamic> styles$AppCategoryComponent = [import0.styles];

class ViewAppCategoryComponent0 extends AppView<import2.AppCategoryComponent> {
  import3.Element _el_0;
  import3.Element _el_3;
  import3.Element _el_4;
  import3.Element _el_6;
  import3.OListElement _el_8;
  import3.Element _el_9;
  import3.AnchorElement _el_10;
  import3.Element _el_11;
  import3.Element _el_13;
  import3.AnchorElement _el_14;
  import3.Element _el_16;
  import3.Element _el_18;
  import3.DivElement _el_19;
  import3.DivElement _el_20;
  import3.DivElement _el_21;
  import3.DivElement _el_22;
  import3.Element _el_23;
  import3.DivElement _el_25;
  import3.TableElement _el_26;
  import3.Element _el_27;
  import3.Element _el_28;
  import3.Element _el_29;
  import3.Element _el_31;
  import3.Element _el_33;
  import3.Element _el_35;
  import3.Element _el_37;
  import3.Element _el_39;
  import3.Element _el_40;
  import3.Element _el_41;
  import3.Element _el_43;
  import3.Element _el_45;
  import3.Element _el_47;
  import3.Element _el_49;
  import3.Element _el_51;
  import3.Element _el_52;
  import3.Element _el_54;
  import3.Element _el_56;
  import3.Element _el_58;
  import3.Element _el_60;
  import3.Element _el_62;
  import3.Element _el_63;
  import3.Element _el_65;
  import3.Element _el_67;
  import3.Element _el_69;
  import3.Element _el_71;
  import3.Element _el_73;
  import3.Element _el_74;
  import3.Element _el_76;
  import3.Element _el_78;
  import3.Element _el_80;
  import3.Element _el_82;
  import3.Element _el_84;
  import3.Element _el_85;
  import3.Element _el_86;
  import3.Element _el_88;
  import3.Element _el_90;
  import3.Element _el_92;
  import3.Element _el_94;
  static RenderComponentType _renderType;
  ViewAppCategoryComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('my-app-category');
    _renderType ??= import7.appViewUtils.createRenderType((import8.isDevMode ? 'asset:mobile_hive/lib/mh_app_category/app_category_component.dart' : null), ViewEncapsulation.Emulated, styles$AppCategoryComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.AppCategoryComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'h1', parentRenderNode);
    addShimE(_el_0);
    import3.Text _text_1 = import3.Text('Category');
    _el_0.append(_text_1);
    import3.Text _text_2 = import3.Text(' ');
    parentRenderNode.append(_text_2);
    _el_3 = createAndAppend(doc, 'section', parentRenderNode);
    _el_3.className = 'content-header';
    addShimE(_el_3);
    _el_4 = createAndAppend(doc, 'h1', _el_3);
    addShimE(_el_4);
    import3.Text _text_5 = import3.Text('Data Tables ');
    _el_4.append(_text_5);
    _el_6 = createAndAppend(doc, 'small', _el_4);
    addShimE(_el_6);
    import3.Text _text_7 = import3.Text('advanced tables');
    _el_6.append(_text_7);
    _el_8 = createAndAppend(doc, 'ol', _el_3);
    _el_8.className = 'breadcrumb';
    addShimC(_el_8);
    _el_9 = createAndAppend(doc, 'li', _el_8);
    addShimE(_el_9);
    _el_10 = createAndAppend(doc, 'a', _el_9);
    createAttr(_el_10, 'href', '#');
    addShimC(_el_10);
    _el_11 = createAndAppend(doc, 'i', _el_10);
    _el_11.className = 'fa fa-dashboard';
    addShimE(_el_11);
    import3.Text _text_12 = import3.Text(' Home');
    _el_10.append(_text_12);
    _el_13 = createAndAppend(doc, 'li', _el_8);
    addShimE(_el_13);
    _el_14 = createAndAppend(doc, 'a', _el_13);
    createAttr(_el_14, 'href', '#');
    addShimC(_el_14);
    import3.Text _text_15 = import3.Text('Tables');
    _el_14.append(_text_15);
    _el_16 = createAndAppend(doc, 'li', _el_8);
    _el_16.className = 'active';
    addShimE(_el_16);
    import3.Text _text_17 = import3.Text('Data tables');
    _el_16.append(_text_17);
    _el_18 = createAndAppend(doc, 'section', parentRenderNode);
    _el_18.className = 'content';
    addShimE(_el_18);
    _el_19 = createDivAndAppend(doc, _el_18);
    _el_19.className = 'row';
    addShimC(_el_19);
    _el_20 = createDivAndAppend(doc, _el_19);
    _el_20.className = 'col-xs-12';
    addShimC(_el_20);
    _el_21 = createDivAndAppend(doc, _el_20);
    _el_21.className = 'box';
    addShimC(_el_21);
    _el_22 = createDivAndAppend(doc, _el_21);
    _el_22.className = 'box-header';
    addShimC(_el_22);
    _el_23 = createAndAppend(doc, 'h3', _el_22);
    _el_23.className = 'box-title';
    addShimE(_el_23);
    import3.Text _text_24 = import3.Text('Hover Data Table');
    _el_23.append(_text_24);
    _el_25 = createDivAndAppend(doc, _el_21);
    _el_25.className = 'box-body';
    addShimC(_el_25);
    _el_26 = createAndAppend(doc, 'table', _el_25);
    _el_26.className = 'table table-bordered table-hover';
    createAttr(_el_26, 'id', 'example2');
    addShimC(_el_26);
    _el_27 = createAndAppend(doc, 'thead', _el_26);
    addShimE(_el_27);
    _el_28 = createAndAppend(doc, 'tr', _el_27);
    addShimE(_el_28);
    _el_29 = createAndAppend(doc, 'th', _el_28);
    addShimE(_el_29);
    import3.Text _text_30 = import3.Text('Rendering engine');
    _el_29.append(_text_30);
    _el_31 = createAndAppend(doc, 'th', _el_28);
    addShimE(_el_31);
    import3.Text _text_32 = import3.Text('Browser');
    _el_31.append(_text_32);
    _el_33 = createAndAppend(doc, 'th', _el_28);
    addShimE(_el_33);
    import3.Text _text_34 = import3.Text('Platform(s)');
    _el_33.append(_text_34);
    _el_35 = createAndAppend(doc, 'th', _el_28);
    addShimE(_el_35);
    import3.Text _text_36 = import3.Text('Engine version');
    _el_35.append(_text_36);
    _el_37 = createAndAppend(doc, 'th', _el_28);
    addShimE(_el_37);
    import3.Text _text_38 = import3.Text('CSS grade');
    _el_37.append(_text_38);
    _el_39 = createAndAppend(doc, 'tbody', _el_26);
    addShimE(_el_39);
    _el_40 = createAndAppend(doc, 'tr', _el_39);
    addShimE(_el_40);
    _el_41 = createAndAppend(doc, 'td', _el_40);
    addShimE(_el_41);
    import3.Text _text_42 = import3.Text('Trident');
    _el_41.append(_text_42);
    _el_43 = createAndAppend(doc, 'td', _el_40);
    addShimE(_el_43);
    import3.Text _text_44 = import3.Text('Internet Explorer 4.0');
    _el_43.append(_text_44);
    _el_45 = createAndAppend(doc, 'td', _el_40);
    addShimE(_el_45);
    import3.Text _text_46 = import3.Text('Win 95+');
    _el_45.append(_text_46);
    _el_47 = createAndAppend(doc, 'td', _el_40);
    addShimE(_el_47);
    import3.Text _text_48 = import3.Text('4');
    _el_47.append(_text_48);
    _el_49 = createAndAppend(doc, 'td', _el_40);
    addShimE(_el_49);
    import3.Text _text_50 = import3.Text('X');
    _el_49.append(_text_50);
    _el_51 = createAndAppend(doc, 'tr', _el_39);
    addShimE(_el_51);
    _el_52 = createAndAppend(doc, 'td', _el_51);
    addShimE(_el_52);
    import3.Text _text_53 = import3.Text('Trident');
    _el_52.append(_text_53);
    _el_54 = createAndAppend(doc, 'td', _el_51);
    addShimE(_el_54);
    import3.Text _text_55 = import3.Text('Internet Explorer 5.0');
    _el_54.append(_text_55);
    _el_56 = createAndAppend(doc, 'td', _el_51);
    addShimE(_el_56);
    import3.Text _text_57 = import3.Text('Win 95+');
    _el_56.append(_text_57);
    _el_58 = createAndAppend(doc, 'td', _el_51);
    addShimE(_el_58);
    import3.Text _text_59 = import3.Text('5');
    _el_58.append(_text_59);
    _el_60 = createAndAppend(doc, 'td', _el_51);
    addShimE(_el_60);
    import3.Text _text_61 = import3.Text('C');
    _el_60.append(_text_61);
    _el_62 = createAndAppend(doc, 'tr', _el_39);
    addShimE(_el_62);
    _el_63 = createAndAppend(doc, 'td', _el_62);
    addShimE(_el_63);
    import3.Text _text_64 = import3.Text('Trident');
    _el_63.append(_text_64);
    _el_65 = createAndAppend(doc, 'td', _el_62);
    addShimE(_el_65);
    import3.Text _text_66 = import3.Text('Internet Explorer 5.5');
    _el_65.append(_text_66);
    _el_67 = createAndAppend(doc, 'td', _el_62);
    addShimE(_el_67);
    import3.Text _text_68 = import3.Text('Win 95+');
    _el_67.append(_text_68);
    _el_69 = createAndAppend(doc, 'td', _el_62);
    addShimE(_el_69);
    import3.Text _text_70 = import3.Text('5.5');
    _el_69.append(_text_70);
    _el_71 = createAndAppend(doc, 'td', _el_62);
    addShimE(_el_71);
    import3.Text _text_72 = import3.Text('A');
    _el_71.append(_text_72);
    _el_73 = createAndAppend(doc, 'tr', _el_39);
    addShimE(_el_73);
    _el_74 = createAndAppend(doc, 'td', _el_73);
    addShimE(_el_74);
    import3.Text _text_75 = import3.Text('Trident');
    _el_74.append(_text_75);
    _el_76 = createAndAppend(doc, 'td', _el_73);
    addShimE(_el_76);
    import3.Text _text_77 = import3.Text('Internet Explorer 6');
    _el_76.append(_text_77);
    _el_78 = createAndAppend(doc, 'td', _el_73);
    addShimE(_el_78);
    import3.Text _text_79 = import3.Text('Win 98+');
    _el_78.append(_text_79);
    _el_80 = createAndAppend(doc, 'td', _el_73);
    addShimE(_el_80);
    import3.Text _text_81 = import3.Text('6');
    _el_80.append(_text_81);
    _el_82 = createAndAppend(doc, 'td', _el_73);
    addShimE(_el_82);
    import3.Text _text_83 = import3.Text('A');
    _el_82.append(_text_83);
    _el_84 = createAndAppend(doc, 'tfoot', _el_26);
    addShimE(_el_84);
    _el_85 = createAndAppend(doc, 'tr', _el_84);
    addShimE(_el_85);
    _el_86 = createAndAppend(doc, 'th', _el_85);
    addShimE(_el_86);
    import3.Text _text_87 = import3.Text('Rendering engine');
    _el_86.append(_text_87);
    _el_88 = createAndAppend(doc, 'th', _el_85);
    addShimE(_el_88);
    import3.Text _text_89 = import3.Text('Browser');
    _el_88.append(_text_89);
    _el_90 = createAndAppend(doc, 'th', _el_85);
    addShimE(_el_90);
    import3.Text _text_91 = import3.Text('Platform(s)');
    _el_90.append(_text_91);
    _el_92 = createAndAppend(doc, 'th', _el_85);
    addShimE(_el_92);
    import3.Text _text_93 = import3.Text('Engine version');
    _el_92.append(_text_93);
    _el_94 = createAndAppend(doc, 'th', _el_85);
    addShimE(_el_94);
    import3.Text _text_95 = import3.Text('CSS grade');
    _el_94.append(_text_95);
    init(const [], null);
    return null;
  }
}

AppView<import2.AppCategoryComponent> viewFactory_AppCategoryComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewAppCategoryComponent0(parentView, parentIndex);
}

final List<dynamic> styles$AppCategoryComponentHost = const [];

class _ViewAppCategoryComponentHost0 extends AppView<import2.AppCategoryComponent> {
  ViewAppCategoryComponent0 _compView_0;
  import2.AppCategoryComponent _AppCategoryComponent_0_5;
  _ViewAppCategoryComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.AppCategoryComponent> build() {
    _compView_0 = ViewAppCategoryComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AppCategoryComponent_0_5 = import2.AppCategoryComponent();
    _compView_0.create(_AppCategoryComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _AppCategoryComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if ((!import7.AppViewUtils.throwOnChanges && firstCheck)) {
      _AppCategoryComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.AppCategoryComponent> viewFactory_AppCategoryComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppCategoryComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.AppCategoryComponent> _AppCategoryComponentNgFactory = const ComponentFactory('my-app-category', viewFactory_AppCategoryComponentHost0);
ComponentFactory<import2.AppCategoryComponent> get AppCategoryComponentNgFactory {
  return _AppCategoryComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppCategoryComponent, AppCategoryComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
