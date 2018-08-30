import 'dart:async';

import 'package:mobile_hive/src/app.dart';
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:mobile_hive/src/mobile_service.dart';
import 'package:mobile_hive/src/route/route_paths.dart';
import 'package:angular_router/angular_router.dart';

@Component(
  selector: 'my-mobile-app',
  templateUrl: 'mobile_component.html',
  directives: [coreDirectives, formDirectives],
)
class MobileAppComponent implements OnActivate{

  final MobileService _mobileService;
  final Location _location;
  App app;

  MobileAppComponent(this._mobileService, this._location);

  @override
  void onActivate(_, RouterState current) async {
    final id = getId(current.parameters);
    if (id != null) app = await (_mobileService.get(id));
  }

  Future<void> save() async {
    await _mobileService.save(app);
    goBack();
  }
  void goBack() => _location.back();
}
