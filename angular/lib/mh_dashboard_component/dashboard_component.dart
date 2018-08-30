
import 'package:mobile_hive/src/route/route_paths.dart';
import 'package:angular/angular.dart';
import 'package:mobile_hive/src/app.dart';
import 'package:mobile_hive/src/mobile_service.dart';
import 'package:angular_router/angular_router.dart';


@Component(
  selector: 'my-dashboard',
  templateUrl: 'dashboard_component.html',
  styleUrls: ['dashboard_component.css'],
  directives: [coreDirectives,routerDirectives],
)
class DashboardComponent implements OnInit{
  List<App> appsList;

  final MobileService _mobileService;

  DashboardComponent(this._mobileService);

  String appUrl(int id) => RoutePaths.app.toUrl(parameters: {idParam: '$id'});

  @override
  void ngOnInit() async {
    appsList = (await _mobileService.getAll()).skip(1).take(4).toList();
  }
}
