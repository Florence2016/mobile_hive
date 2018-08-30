define(['dart_sdk', 'packages/mobile_hive/mh_app_category/app_category_component.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/mobile_hive/mh_app_category/app_category_component', 'packages/angular/angular.template', 'packages/angular_forms/angular_forms.template', 'packages/angular_router/angular_router.template', 'packages/mobile_hive/src/route/route_paths.template'], function(dart_sdk, app_category_component$46css, view_type, change_detection, modules, app_category_component, angular, angular_forms, angular_router, route_paths) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const mh_app_category__app_category_component$46css$46shim = app_category_component$46css.mh_app_category__app_category_component$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const mh_app_category__app_category_component = app_category_component.mh_app_category__app_category_component;
  const angular$46template = angular.angular$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const src__route__route_paths$46template = route_paths.src__route__route_paths$46template;
  const _root = Object.create(null);
  const mh_app_category__app_category_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let ComponentRefOfAppCategoryComponent = () => (ComponentRefOfAppCategoryComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(mh_app_category__app_category_component.AppCategoryComponent)))();
  let AppViewOfAppCategoryComponent = () => (AppViewOfAppCategoryComponent = dart.constFn(src__core__linker__app_view.AppView$(mh_app_category__app_category_component.AppCategoryComponent)))();
  let AppViewAndintToAppViewOfAppCategoryComponent = () => (AppViewAndintToAppViewOfAppCategoryComponent = dart.constFn(dart.fnType(AppViewOfAppCategoryComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfAppCategoryComponent = () => (ComponentFactoryOfAppCategoryComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(mh_app_category__app_category_component.AppCategoryComponent)))();
  dart.defineLazy(mh_app_category__app_category_component$46template, {
    /*mh_app_category__app_category_component$46template.styles$AppCategoryComponent*/get styles$AppCategoryComponent() {
      return [mh_app_category__app_category_component$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_3 = Symbol('_el_3');
  const _el_4 = Symbol('_el_4');
  const _el_6 = Symbol('_el_6');
  const _el_8 = Symbol('_el_8');
  const _el_9 = Symbol('_el_9');
  const _el_10 = Symbol('_el_10');
  const _el_11 = Symbol('_el_11');
  const _el_13 = Symbol('_el_13');
  const _el_14 = Symbol('_el_14');
  const _el_16 = Symbol('_el_16');
  const _el_18 = Symbol('_el_18');
  const _el_19 = Symbol('_el_19');
  const _el_20 = Symbol('_el_20');
  const _el_21 = Symbol('_el_21');
  const _el_22 = Symbol('_el_22');
  const _el_23 = Symbol('_el_23');
  const _el_25 = Symbol('_el_25');
  const _el_26 = Symbol('_el_26');
  const _el_27 = Symbol('_el_27');
  const _el_28 = Symbol('_el_28');
  const _el_29 = Symbol('_el_29');
  const _el_31 = Symbol('_el_31');
  const _el_33 = Symbol('_el_33');
  const _el_35 = Symbol('_el_35');
  const _el_37 = Symbol('_el_37');
  const _el_39 = Symbol('_el_39');
  const _el_40 = Symbol('_el_40');
  const _el_41 = Symbol('_el_41');
  const _el_43 = Symbol('_el_43');
  const _el_45 = Symbol('_el_45');
  const _el_47 = Symbol('_el_47');
  const _el_49 = Symbol('_el_49');
  const _el_51 = Symbol('_el_51');
  const _el_52 = Symbol('_el_52');
  const _el_54 = Symbol('_el_54');
  const _el_56 = Symbol('_el_56');
  const _el_58 = Symbol('_el_58');
  const _el_60 = Symbol('_el_60');
  const _el_62 = Symbol('_el_62');
  const _el_63 = Symbol('_el_63');
  const _el_65 = Symbol('_el_65');
  const _el_67 = Symbol('_el_67');
  const _el_69 = Symbol('_el_69');
  const _el_71 = Symbol('_el_71');
  const _el_73 = Symbol('_el_73');
  const _el_74 = Symbol('_el_74');
  const _el_76 = Symbol('_el_76');
  const _el_78 = Symbol('_el_78');
  const _el_80 = Symbol('_el_80');
  const _el_82 = Symbol('_el_82');
  const _el_84 = Symbol('_el_84');
  const _el_85 = Symbol('_el_85');
  const _el_86 = Symbol('_el_86');
  const _el_88 = Symbol('_el_88');
  const _el_90 = Symbol('_el_90');
  const _el_92 = Symbol('_el_92');
  const _el_94 = Symbol('_el_94');
  let const$;
  mh_app_category__app_category_component$46template.ViewAppCategoryComponent0 = class ViewAppCategoryComponent0 extends src__core__linker__app_view.AppView$(mh_app_category__app_category_component.AppCategoryComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, "h1", parentRenderNode);
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new("Category");
      this[_el_0][$append](_text_1);
      let _text_2 = html.Text.new(" ");
      parentRenderNode[$append](_text_2);
      this[_el_3] = src__core__linker__app_view.createAndAppend(doc, "section", parentRenderNode);
      this[_el_3].className = "content-header";
      this.addShimE(this[_el_3]);
      this[_el_4] = src__core__linker__app_view.createAndAppend(doc, "h1", this[_el_3]);
      this.addShimE(this[_el_4]);
      let _text_5 = html.Text.new("Data Tables ");
      this[_el_4][$append](_text_5);
      this[_el_6] = src__core__linker__app_view.createAndAppend(doc, "small", this[_el_4]);
      this.addShimE(this[_el_6]);
      let _text_7 = html.Text.new("advanced tables");
      this[_el_6][$append](_text_7);
      this[_el_8] = html.OListElement._check(src__core__linker__app_view.createAndAppend(doc, "ol", this[_el_3]));
      this[_el_8].className = "breadcrumb";
      this.addShimC(this[_el_8]);
      this[_el_9] = src__core__linker__app_view.createAndAppend(doc, "li", this[_el_8]);
      this.addShimE(this[_el_9]);
      this[_el_10] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, "a", this[_el_9]));
      this.createAttr(this[_el_10], "href", "#");
      this.addShimC(this[_el_10]);
      this[_el_11] = src__core__linker__app_view.createAndAppend(doc, "i", this[_el_10]);
      this[_el_11].className = "fa fa-dashboard";
      this.addShimE(this[_el_11]);
      let _text_12 = html.Text.new(" Home");
      this[_el_10][$append](_text_12);
      this[_el_13] = src__core__linker__app_view.createAndAppend(doc, "li", this[_el_8]);
      this.addShimE(this[_el_13]);
      this[_el_14] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, "a", this[_el_13]));
      this.createAttr(this[_el_14], "href", "#");
      this.addShimC(this[_el_14]);
      let _text_15 = html.Text.new("Tables");
      this[_el_14][$append](_text_15);
      this[_el_16] = src__core__linker__app_view.createAndAppend(doc, "li", this[_el_8]);
      this[_el_16].className = "active";
      this.addShimE(this[_el_16]);
      let _text_17 = html.Text.new("Data tables");
      this[_el_16][$append](_text_17);
      this[_el_18] = src__core__linker__app_view.createAndAppend(doc, "section", parentRenderNode);
      this[_el_18].className = "content";
      this.addShimE(this[_el_18]);
      this[_el_19] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_18]);
      this[_el_19].className = "row";
      this.addShimC(this[_el_19]);
      this[_el_20] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_19]);
      this[_el_20].className = "col-xs-12";
      this.addShimC(this[_el_20]);
      this[_el_21] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_20]);
      this[_el_21].className = "box";
      this.addShimC(this[_el_21]);
      this[_el_22] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_21]);
      this[_el_22].className = "box-header";
      this.addShimC(this[_el_22]);
      this[_el_23] = src__core__linker__app_view.createAndAppend(doc, "h3", this[_el_22]);
      this[_el_23].className = "box-title";
      this.addShimE(this[_el_23]);
      let _text_24 = html.Text.new("Hover Data Table");
      this[_el_23][$append](_text_24);
      this[_el_25] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_21]);
      this[_el_25].className = "box-body";
      this.addShimC(this[_el_25]);
      this[_el_26] = html.TableElement._check(src__core__linker__app_view.createAndAppend(doc, "table", this[_el_25]));
      this[_el_26].className = "table table-bordered table-hover";
      this.createAttr(this[_el_26], "id", "example2");
      this.addShimC(this[_el_26]);
      this[_el_27] = src__core__linker__app_view.createAndAppend(doc, "thead", this[_el_26]);
      this.addShimE(this[_el_27]);
      this[_el_28] = src__core__linker__app_view.createAndAppend(doc, "tr", this[_el_27]);
      this.addShimE(this[_el_28]);
      this[_el_29] = src__core__linker__app_view.createAndAppend(doc, "th", this[_el_28]);
      this.addShimE(this[_el_29]);
      let _text_30 = html.Text.new("Rendering engine");
      this[_el_29][$append](_text_30);
      this[_el_31] = src__core__linker__app_view.createAndAppend(doc, "th", this[_el_28]);
      this.addShimE(this[_el_31]);
      let _text_32 = html.Text.new("Browser");
      this[_el_31][$append](_text_32);
      this[_el_33] = src__core__linker__app_view.createAndAppend(doc, "th", this[_el_28]);
      this.addShimE(this[_el_33]);
      let _text_34 = html.Text.new("Platform(s)");
      this[_el_33][$append](_text_34);
      this[_el_35] = src__core__linker__app_view.createAndAppend(doc, "th", this[_el_28]);
      this.addShimE(this[_el_35]);
      let _text_36 = html.Text.new("Engine version");
      this[_el_35][$append](_text_36);
      this[_el_37] = src__core__linker__app_view.createAndAppend(doc, "th", this[_el_28]);
      this.addShimE(this[_el_37]);
      let _text_38 = html.Text.new("CSS grade");
      this[_el_37][$append](_text_38);
      this[_el_39] = src__core__linker__app_view.createAndAppend(doc, "tbody", this[_el_26]);
      this.addShimE(this[_el_39]);
      this[_el_40] = src__core__linker__app_view.createAndAppend(doc, "tr", this[_el_39]);
      this.addShimE(this[_el_40]);
      this[_el_41] = src__core__linker__app_view.createAndAppend(doc, "td", this[_el_40]);
      this.addShimE(this[_el_41]);
      let _text_42 = html.Text.new("Trident");
      this[_el_41][$append](_text_42);
      this[_el_43] = src__core__linker__app_view.createAndAppend(doc, "td", this[_el_40]);
      this.addShimE(this[_el_43]);
      let _text_44 = html.Text.new("Internet Explorer 4.0");
      this[_el_43][$append](_text_44);
      this[_el_45] = src__core__linker__app_view.createAndAppend(doc, "td", this[_el_40]);
      this.addShimE(this[_el_45]);
      let _text_46 = html.Text.new("Win 95+");
      this[_el_45][$append](_text_46);
      this[_el_47] = src__core__linker__app_view.createAndAppend(doc, "td", this[_el_40]);
      this.addShimE(this[_el_47]);
      let _text_48 = html.Text.new("4");
      this[_el_47][$append](_text_48);
      this[_el_49] = src__core__linker__app_view.createAndAppend(doc, "td", this[_el_40]);
      this.addShimE(this[_el_49]);
      let _text_50 = html.Text.new("X");
      this[_el_49][$append](_text_50);
      this[_el_51] = src__core__linker__app_view.createAndAppend(doc, "tr", this[_el_39]);
      this.addShimE(this[_el_51]);
      this[_el_52] = src__core__linker__app_view.createAndAppend(doc, "td", this[_el_51]);
      this.addShimE(this[_el_52]);
      let _text_53 = html.Text.new("Trident");
      this[_el_52][$append](_text_53);
      this[_el_54] = src__core__linker__app_view.createAndAppend(doc, "td", this[_el_51]);
      this.addShimE(this[_el_54]);
      let _text_55 = html.Text.new("Internet Explorer 5.0");
      this[_el_54][$append](_text_55);
      this[_el_56] = src__core__linker__app_view.createAndAppend(doc, "td", this[_el_51]);
      this.addShimE(this[_el_56]);
      let _text_57 = html.Text.new("Win 95+");
      this[_el_56][$append](_text_57);
      this[_el_58] = src__core__linker__app_view.createAndAppend(doc, "td", this[_el_51]);
      this.addShimE(this[_el_58]);
      let _text_59 = html.Text.new("5");
      this[_el_58][$append](_text_59);
      this[_el_60] = src__core__linker__app_view.createAndAppend(doc, "td", this[_el_51]);
      this.addShimE(this[_el_60]);
      let _text_61 = html.Text.new("C");
      this[_el_60][$append](_text_61);
      this[_el_62] = src__core__linker__app_view.createAndAppend(doc, "tr", this[_el_39]);
      this.addShimE(this[_el_62]);
      this[_el_63] = src__core__linker__app_view.createAndAppend(doc, "td", this[_el_62]);
      this.addShimE(this[_el_63]);
      let _text_64 = html.Text.new("Trident");
      this[_el_63][$append](_text_64);
      this[_el_65] = src__core__linker__app_view.createAndAppend(doc, "td", this[_el_62]);
      this.addShimE(this[_el_65]);
      let _text_66 = html.Text.new("Internet Explorer 5.5");
      this[_el_65][$append](_text_66);
      this[_el_67] = src__core__linker__app_view.createAndAppend(doc, "td", this[_el_62]);
      this.addShimE(this[_el_67]);
      let _text_68 = html.Text.new("Win 95+");
      this[_el_67][$append](_text_68);
      this[_el_69] = src__core__linker__app_view.createAndAppend(doc, "td", this[_el_62]);
      this.addShimE(this[_el_69]);
      let _text_70 = html.Text.new("5.5");
      this[_el_69][$append](_text_70);
      this[_el_71] = src__core__linker__app_view.createAndAppend(doc, "td", this[_el_62]);
      this.addShimE(this[_el_71]);
      let _text_72 = html.Text.new("A");
      this[_el_71][$append](_text_72);
      this[_el_73] = src__core__linker__app_view.createAndAppend(doc, "tr", this[_el_39]);
      this.addShimE(this[_el_73]);
      this[_el_74] = src__core__linker__app_view.createAndAppend(doc, "td", this[_el_73]);
      this.addShimE(this[_el_74]);
      let _text_75 = html.Text.new("Trident");
      this[_el_74][$append](_text_75);
      this[_el_76] = src__core__linker__app_view.createAndAppend(doc, "td", this[_el_73]);
      this.addShimE(this[_el_76]);
      let _text_77 = html.Text.new("Internet Explorer 6");
      this[_el_76][$append](_text_77);
      this[_el_78] = src__core__linker__app_view.createAndAppend(doc, "td", this[_el_73]);
      this.addShimE(this[_el_78]);
      let _text_79 = html.Text.new("Win 98+");
      this[_el_78][$append](_text_79);
      this[_el_80] = src__core__linker__app_view.createAndAppend(doc, "td", this[_el_73]);
      this.addShimE(this[_el_80]);
      let _text_81 = html.Text.new("6");
      this[_el_80][$append](_text_81);
      this[_el_82] = src__core__linker__app_view.createAndAppend(doc, "td", this[_el_73]);
      this.addShimE(this[_el_82]);
      let _text_83 = html.Text.new("A");
      this[_el_82][$append](_text_83);
      this[_el_84] = src__core__linker__app_view.createAndAppend(doc, "tfoot", this[_el_26]);
      this.addShimE(this[_el_84]);
      this[_el_85] = src__core__linker__app_view.createAndAppend(doc, "tr", this[_el_84]);
      this.addShimE(this[_el_85]);
      this[_el_86] = src__core__linker__app_view.createAndAppend(doc, "th", this[_el_85]);
      this.addShimE(this[_el_86]);
      let _text_87 = html.Text.new("Rendering engine");
      this[_el_86][$append](_text_87);
      this[_el_88] = src__core__linker__app_view.createAndAppend(doc, "th", this[_el_85]);
      this.addShimE(this[_el_88]);
      let _text_89 = html.Text.new("Browser");
      this[_el_88][$append](_text_89);
      this[_el_90] = src__core__linker__app_view.createAndAppend(doc, "th", this[_el_85]);
      this.addShimE(this[_el_90]);
      let _text_91 = html.Text.new("Platform(s)");
      this[_el_90][$append](_text_91);
      this[_el_92] = src__core__linker__app_view.createAndAppend(doc, "th", this[_el_85]);
      this.addShimE(this[_el_92]);
      let _text_93 = html.Text.new("Engine version");
      this[_el_92][$append](_text_93);
      this[_el_94] = src__core__linker__app_view.createAndAppend(doc, "th", this[_el_85]);
      this.addShimE(this[_el_94]);
      let _text_95 = html.Text.new("CSS grade");
      this[_el_94][$append](_text_95);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
  };
  (mh_app_category__app_category_component$46template.ViewAppCategoryComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_3] = null;
    this[_el_4] = null;
    this[_el_6] = null;
    this[_el_8] = null;
    this[_el_9] = null;
    this[_el_10] = null;
    this[_el_11] = null;
    this[_el_13] = null;
    this[_el_14] = null;
    this[_el_16] = null;
    this[_el_18] = null;
    this[_el_19] = null;
    this[_el_20] = null;
    this[_el_21] = null;
    this[_el_22] = null;
    this[_el_23] = null;
    this[_el_25] = null;
    this[_el_26] = null;
    this[_el_27] = null;
    this[_el_28] = null;
    this[_el_29] = null;
    this[_el_31] = null;
    this[_el_33] = null;
    this[_el_35] = null;
    this[_el_37] = null;
    this[_el_39] = null;
    this[_el_40] = null;
    this[_el_41] = null;
    this[_el_43] = null;
    this[_el_45] = null;
    this[_el_47] = null;
    this[_el_49] = null;
    this[_el_51] = null;
    this[_el_52] = null;
    this[_el_54] = null;
    this[_el_56] = null;
    this[_el_58] = null;
    this[_el_60] = null;
    this[_el_62] = null;
    this[_el_63] = null;
    this[_el_65] = null;
    this[_el_67] = null;
    this[_el_69] = null;
    this[_el_71] = null;
    this[_el_73] = null;
    this[_el_74] = null;
    this[_el_76] = null;
    this[_el_78] = null;
    this[_el_80] = null;
    this[_el_82] = null;
    this[_el_84] = null;
    this[_el_85] = null;
    this[_el_86] = null;
    this[_el_88] = null;
    this[_el_90] = null;
    this[_el_92] = null;
    this[_el_94] = null;
    mh_app_category__app_category_component$46template.ViewAppCategoryComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("my-app-category"));
    let t = mh_app_category__app_category_component$46template.ViewAppCategoryComponent0._renderType;
    t == null ? mh_app_category__app_category_component$46template.ViewAppCategoryComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:mobile_hive/lib/mh_app_category/app_category_component.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, mh_app_category__app_category_component$46template.styles$AppCategoryComponent) : t;
    this.setupComponentType(mh_app_category__app_category_component$46template.ViewAppCategoryComponent0._renderType);
  }).prototype = mh_app_category__app_category_component$46template.ViewAppCategoryComponent0.prototype;
  dart.addTypeTests(mh_app_category__app_category_component$46template.ViewAppCategoryComponent0);
  dart.setMethodSignature(mh_app_category__app_category_component$46template.ViewAppCategoryComponent0, () => ({
    __proto__: dart.getMethods(mh_app_category__app_category_component$46template.ViewAppCategoryComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(mh_app_category__app_category_component.AppCategoryComponent), [])
  }));
  dart.setFieldSignature(mh_app_category__app_category_component$46template.ViewAppCategoryComponent0, () => ({
    __proto__: dart.getFields(mh_app_category__app_category_component$46template.ViewAppCategoryComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_3]: dart.fieldType(html.Element),
    [_el_4]: dart.fieldType(html.Element),
    [_el_6]: dart.fieldType(html.Element),
    [_el_8]: dart.fieldType(html.OListElement),
    [_el_9]: dart.fieldType(html.Element),
    [_el_10]: dart.fieldType(html.AnchorElement),
    [_el_11]: dart.fieldType(html.Element),
    [_el_13]: dart.fieldType(html.Element),
    [_el_14]: dart.fieldType(html.AnchorElement),
    [_el_16]: dart.fieldType(html.Element),
    [_el_18]: dart.fieldType(html.Element),
    [_el_19]: dart.fieldType(html.DivElement),
    [_el_20]: dart.fieldType(html.DivElement),
    [_el_21]: dart.fieldType(html.DivElement),
    [_el_22]: dart.fieldType(html.DivElement),
    [_el_23]: dart.fieldType(html.Element),
    [_el_25]: dart.fieldType(html.DivElement),
    [_el_26]: dart.fieldType(html.TableElement),
    [_el_27]: dart.fieldType(html.Element),
    [_el_28]: dart.fieldType(html.Element),
    [_el_29]: dart.fieldType(html.Element),
    [_el_31]: dart.fieldType(html.Element),
    [_el_33]: dart.fieldType(html.Element),
    [_el_35]: dart.fieldType(html.Element),
    [_el_37]: dart.fieldType(html.Element),
    [_el_39]: dart.fieldType(html.Element),
    [_el_40]: dart.fieldType(html.Element),
    [_el_41]: dart.fieldType(html.Element),
    [_el_43]: dart.fieldType(html.Element),
    [_el_45]: dart.fieldType(html.Element),
    [_el_47]: dart.fieldType(html.Element),
    [_el_49]: dart.fieldType(html.Element),
    [_el_51]: dart.fieldType(html.Element),
    [_el_52]: dart.fieldType(html.Element),
    [_el_54]: dart.fieldType(html.Element),
    [_el_56]: dart.fieldType(html.Element),
    [_el_58]: dart.fieldType(html.Element),
    [_el_60]: dart.fieldType(html.Element),
    [_el_62]: dart.fieldType(html.Element),
    [_el_63]: dart.fieldType(html.Element),
    [_el_65]: dart.fieldType(html.Element),
    [_el_67]: dart.fieldType(html.Element),
    [_el_69]: dart.fieldType(html.Element),
    [_el_71]: dart.fieldType(html.Element),
    [_el_73]: dart.fieldType(html.Element),
    [_el_74]: dart.fieldType(html.Element),
    [_el_76]: dart.fieldType(html.Element),
    [_el_78]: dart.fieldType(html.Element),
    [_el_80]: dart.fieldType(html.Element),
    [_el_82]: dart.fieldType(html.Element),
    [_el_84]: dart.fieldType(html.Element),
    [_el_85]: dart.fieldType(html.Element),
    [_el_86]: dart.fieldType(html.Element),
    [_el_88]: dart.fieldType(html.Element),
    [_el_90]: dart.fieldType(html.Element),
    [_el_92]: dart.fieldType(html.Element),
    [_el_94]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(mh_app_category__app_category_component$46template.ViewAppCategoryComponent0, {
    /*mh_app_category__app_category_component$46template.ViewAppCategoryComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  mh_app_category__app_category_component$46template.viewFactory_AppCategoryComponent0 = function(parentView, parentIndex) {
    return new mh_app_category__app_category_component$46template.ViewAppCategoryComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(mh_app_category__app_category_component$46template, {
    /*mh_app_category__app_category_component$46template.styles$AppCategoryComponentHost*/get styles$AppCategoryComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _AppCategoryComponent_0_5 = Symbol('_AppCategoryComponent_0_5');
  mh_app_category__app_category_component$46template._ViewAppCategoryComponentHost0 = class _ViewAppCategoryComponentHost0 extends src__core__linker__app_view.AppView$(mh_app_category__app_category_component.AppCategoryComponent) {
    build() {
      this[_compView_0] = new mh_app_category__app_category_component$46template.ViewAppCategoryComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_AppCategoryComponent_0_5] = new mh_app_category__app_category_component.AppCategoryComponent.new();
      this[_compView_0].create(this[_AppCategoryComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfAppCategoryComponent()).new(0, this, this.rootEl, this[_AppCategoryComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_AppCategoryComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (mh_app_category__app_category_component$46template._ViewAppCategoryComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AppCategoryComponent_0_5] = null;
    mh_app_category__app_category_component$46template._ViewAppCategoryComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = mh_app_category__app_category_component$46template._ViewAppCategoryComponentHost0.prototype;
  dart.addTypeTests(mh_app_category__app_category_component$46template._ViewAppCategoryComponentHost0);
  dart.setMethodSignature(mh_app_category__app_category_component$46template._ViewAppCategoryComponentHost0, () => ({
    __proto__: dart.getMethods(mh_app_category__app_category_component$46template._ViewAppCategoryComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(mh_app_category__app_category_component.AppCategoryComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(mh_app_category__app_category_component$46template._ViewAppCategoryComponentHost0, () => ({
    __proto__: dart.getFields(mh_app_category__app_category_component$46template._ViewAppCategoryComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(mh_app_category__app_category_component$46template.ViewAppCategoryComponent0),
    [_AppCategoryComponent_0_5]: dart.fieldType(mh_app_category__app_category_component.AppCategoryComponent)
  }));
  mh_app_category__app_category_component$46template.viewFactory_AppCategoryComponentHost0 = function(parentView, parentIndex) {
    return new mh_app_category__app_category_component$46template._ViewAppCategoryComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(mh_app_category__app_category_component$46template, {
    /*mh_app_category__app_category_component$46template._AppCategoryComponentNgFactory*/get _AppCategoryComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfAppCategoryComponent()).new("my-app-category", dart.fn(mh_app_category__app_category_component$46template.viewFactory_AppCategoryComponentHost0, AppViewAndintToAppViewOfAppCategoryComponent())));
    }
  });
  dart.copyProperties(mh_app_category__app_category_component$46template, {
    get AppCategoryComponentNgFactory() {
      return mh_app_category__app_category_component$46template._AppCategoryComponentNgFactory;
    }
  });
  dart.defineLazy(mh_app_category__app_category_component$46template, {
    /*mh_app_category__app_category_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  mh_app_category__app_category_component$46template.initReflector = function() {
    if (dart.test(mh_app_category__app_category_component$46template._visited)) {
      return;
    }
    mh_app_category__app_category_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(mh_app_category__app_category_component.AppCategoryComponent), mh_app_category__app_category_component$46template.AppCategoryComponentNgFactory);
    angular$46template.initReflector();
    angular_forms$46template.initReflector();
    angular_router$46template.initReflector();
    src__route__route_paths$46template.initReflector();
  };
  dart.trackLibraries("packages/mobile_hive/mh_app_category/app_category_component.template.ddc", {
    "package:mobile_hive/mh_app_category/app_category_component.template.dart": mh_app_category__app_category_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["app_category_component.template.dart"],"names":[],"mappings":"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","file":"app_category_component.template.ddc.js"}');
  // Exports:
  return {
    mh_app_category__app_category_component$46template: mh_app_category__app_category_component$46template
  };
});

//# sourceMappingURL=app_category_component.template.ddc.js.map
