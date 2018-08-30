import 'package:angular/angular.dart';
import 'package:mobile_hive/src/route/route_paths.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:angular_router/angular_router.dart';

@Component(
  selector: 'my-app-category',
  styleUrls: ['app_category_component.css'],
  templateUrl: 'app_category_component.html',
  directives: [coreDirectives, formDirectives],
)

class AppCategoryComponent implements OnInit{


  @override
  void ngOnInit() {
    // TODO: implement ngOnInit
  }

}