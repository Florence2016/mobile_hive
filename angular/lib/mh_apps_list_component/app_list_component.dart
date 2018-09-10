import 'dart:async';
import 'package:mobile_hive/src/app.dart';
import 'package:mobile_hive/src/route/route_paths.dart';
import 'package:angular/angular.dart';
import 'package:mobile_hive/src/mobile_component.dart';
import 'package:mobile_hive/src/mobile_service.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';
// AngularDart info: https://webdev.dartlang.org/angular
// Components info: https://webdev.dartlang.org/components

@Component(
  selector: 'my-app-list',
  styleUrls: ['app_list_component.css'],
  templateUrl: 'app_list_component.html',
  directives: [coreDirectives, MobileAppComponent, MaterialListComponent, MaterialIconComponent],
  pipes: [commonPipes],
)
class AppListComponent implements OnInit {
  final title = 'Mobile Apps';
  final MobileService _mobileService;
  final Router _router;
  List<App> appsList;
  App selected;
  String errorMessage;
  AppListComponent(this._mobileService, this._router);

  Future <void> _getAppList() async{
    try{
      appsList = await _mobileService.getAll();
    }
    catch(e)
    {
      errorMessage = e.toString();
    }

  }

  Future<void> add(String name) async {
    try{
      name = name.trim();
      if (name.isEmpty) return null;
      appsList.add(await _mobileService.create(name));
      selected = null;
    }
    catch(e)
    {
      errorMessage = e.toString();
    }
  }

  Future<void> delete(App app) async {
    await _mobileService.delete(app.id);
    appsList.remove(app);
    if (selected == app) selected = null;
  }
  String _appsUrl(int id) =>
      RoutePaths.app.toUrl(parameters: {idParam: '$id'});

  Future<NavigationResult> gotoDetail() =>
      _router.navigate(_appsUrl(selected.id));

  @override
  void ngOnInit() => _getAppList();
  void onSelect(App app) => selected = app;
}
